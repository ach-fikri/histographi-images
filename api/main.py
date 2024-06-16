import os
import uuid
import datetime
from PIL import Image
import numpy as np
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = './uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['FLASK_DEBUG ']= True
def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['GET'])
def hello():
    return "hello word"


@app.route('/rgb', methods=['POST'])
def rgb():
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
        histogram = img.histogram()
        pixel = [i for i in range(256)] #define values of pixel
        return jsonify({
            'message' : 'berhasil',
            'data': {
                'image': new_filename,
                 'histogram' : {
                    'labels' : pixel,
                    'values' : histogram
                 }
            }
        })

# @app.route('/biner')
# @app.route('/grayscale')



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)