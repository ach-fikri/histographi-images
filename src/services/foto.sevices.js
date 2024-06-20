import axios from "axios";

const gray = async (image) =>{
       const data = await axios.post('http://127.0.0.1:3000/gray', image,{
           headers:{
             "Content-Type": 'multipart/form-data'
           }
       })
    return data
}

const rgb = async (image)=>{
    const data = await axios.post('http://127.0.0.1:3000/rgb', image, {
        headers:{
            "Content-Type": 'multipart/form-data'
        }
    })
    return data;
}

const biner = async (image) =>{
    const data = await axios.post('http://127.0.0.1:3000/biner', image, {
        headers:{
            "Content-Type": 'multipart/form-data'
        }
    })
    return data;
}

export {
    gray,
    rgb,
    biner
}