import axios from "axios";

const gray = async (image) =>{
       const data = await axios.post('http://127.0.0.1:3000/gray', image,{
           headers:{
             "Content-Type": 'multipart/form-data'
           }
       })
    return data
}

export {
    gray
}