// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/submission`, data)
    }
    submitImage(id, formData, config) {
        return http.post(`/submission/photos/${id}`, formData, config)
    }
    getProgress(id) {
        // console.log('getting progress')
        return http.get(`/submission/${id}`)
    }

    getAllSubm(token) {
        // console.log(token)
        return http.get(`/submission`, {  headers: {
            'Authorization': `Basic ${token}` 
          }})
    }
    getPageSubm(token, page, limit, filter) {
        return http.get(`/submission/paged?numLimit=${limit}&page=${page}&filter=${filter}`, {  headers: {
            'Authorization': `Basic ${token}` 
          }})
    }
    updateSub(data, id) {
        // console.log(data)
        return http.put(`/submission/${id}`, data)
    }
    deleteSub(id) {
        return http.delete(`/submission/${id}`)
    }
    getDownloadData(token) {
        return http.get(`/submission/downloadData`, { headers: {
            'Authorization': `Basic ${token}`
        } })
    }
    
}

export default new SubmissionDataService();
