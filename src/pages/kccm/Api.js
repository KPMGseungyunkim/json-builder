// import axios from 'axios';

// const rUrl = axios.defaults.baseURL = window.location.protocol + "//" + window.location.hostname + ":9009"

// export function convertUploadFile(files) {
//   const formData = new FormData();
//   files.map(file => formData.append(file.name, file) )
//   return axios({
//     url: rUrl + "/upload",
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     },
//     method: "POST",
//     data: formData
//   });
// }

// export function executePipeline(params){
//   return axios({
//     url: rUrl + "/tasks",
//     method: "POST",
//     data:params
//   });
// }



export const baseUrl = "http://20.94.222.170:9009";
export const getFileListApi = "/v1/files";
export const getFileApi = "/v1/file/";
export const getFilePdfApi = "http://20.94.222.170:";
