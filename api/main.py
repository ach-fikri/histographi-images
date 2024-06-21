import os
import uuid
import datetime
from PIL import Image
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['FLASK_DEBUG ']= True
CORS(app, origin=['http://localhost:5173'])
def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def calculate_histogram_gray(image):
    image_array = np.array(image.convert("L"))  # Konversi gambar ke grayscale
    histogram, _ = np.histogram(image_array, bins=256, range=(0, 256))
    return histogram.tolist()
    return histogram

def calculate_histogram(image):
    image_array = np.array(image)
    histograms = {
        'red': np.histogram(image_array[:, :, 0], bins=256, range=(0, 256))[0].tolist(),
        'green': np.histogram(image_array[:, :, 1], bins=256, range=(0, 256))[0].tolist(),
        'blue': np.histogram(image_array[:, :, 2], bins=256, range=(0, 256))[0].tolist(),
    }
    return histograms


def calculate_binary_histogram(image):
    image = image.convert('L')
    # Binarize the image
    image = image.point(lambda x: 0 if x < 128 else 255, '1')
    image_array = np.array(image)
    histogram, _ = np.histogram(image_array, bins=2, range=(0, 256))
    return histogram.tolist()


@app.route('/', methods=['GET'])
def hello():
    return "hello word"


@app.route('/gray', methods=['POST'])
def gray():
    if 'file' not in request.files:
         return jsonify({
            "message": "file tidak ada"
         }, 404)
    file = request.files['file']
    if file.filename == '':
        return jsonify({
        "message": "No selected file"
        })
    if file and allowed_file(file.filename):
        Now = datetime.datetime.now()
        filename = secure_filename(file.filename)
        NOW = datetime.datetime.now()
        new_filename = file.filename.rsplit('.',1)[0] + '_' + NOW.strftime("%d_%m_%Y_%H_%M_%S") + '.' + file.filename.rsplit('.',1)[1]
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
        path_file = app.config['UPLOAD_FOLDER'] + '/' + new_filename
        img = Image.open(path_file)
        histogram = calculate_histogram_gray(img)
#         print(histogram)
        return jsonify({
            'message' : 'berhasil',
            'data': {
                'image': new_filename,
                 'histogram' : {
                  'values' : histogram
                 }
            }
        })

@app.route('/rgb',methods=['POST'])
def rgb() :
     if 'file' not in request.files:
             return jsonify({
                "message": "file tidak ada"
             }, 404)
     file = request.files['file']
     if file.filename == '':
            return jsonify({
            "message": "No selected file"
            })
     if file and allowed_file(file.filename):
            Now = datetime.datetime.now()
            filename = secure_filename(file.filename)
            NOW = datetime.datetime.now()
            new_filename = file.filename.rsplit('.',1)[0] + '_' + NOW.strftime("%d_%m_%Y_%H_%M_%S") + '.' + file.filename.rsplit('.',1)[1]
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
            path_file = app.config['UPLOAD_FOLDER'] + '/' + new_filename
            img = Image.open(path_file)
            histogram = calculate_histogram(img)
            return jsonify({
                 'message' : 'berhasil',
                 'data': {
                     'image': new_filename,
                      'histogram' : {
                         'values' : histogram
                      }
                 }
            })

@app.route('/biner', methods=['POST'])
def biner() :
     if 'file' not in request.files:
                 return jsonify({
                    "message": "file tidak ada"
                 }, 404)
     file = request.files['file']
     if file.filename == '':
                return jsonify({
                "message": "No selected file"
                })
     if file and allowed_file(file.filename):
                Now = datetime.datetime.now()
                filename = secure_filename(file.filename)
                NOW = datetime.datetime.now()
                new_filename = file.filename.rsplit('.',1)[0] + '_' + NOW.strftime("%d_%m_%Y_%H_%M_%S") + '.' + file.filename.rsplit('.',1)[1]
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
                path_file = app.config['UPLOAD_FOLDER'] + '/' + new_filename
                img = Image.open(path_file)
                histogram = calculate_binary_histogram(img)
                return jsonify({
                                 'message' : 'berhasil',
                                 'data': {
                                     'image': new_filename,
                                      'histogram' : {
                                         'values' : histogram
                                      }
                                 }
                            })


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)