// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/api/submission`, data)
    }
    submitImage(id, formData, config) {
        return http.put(`/api/submission/photos/${id}`, formData, config)
    }
    getProgress(id) {
        // console.log('getting progress')
        return http.get(`/api/submission/${id}`)
    }

    getAllSubm() {
        return http.get(`/api/submission`)
    }
    updateSub(data, id) {
        console.log(data)
        return http.put(`/api/submission/${id}`, data)
    }
}

export default new SubmissionDataService();
