// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/api/submission`, data)
    }
    submitImage(id, formData, config) {
        return http.put(`/api/submission/${id}`, formData, config)
    }
    getProgress(id) {
        // console.log('getting progress')
        return http.get(`/api/submission/${id}`)
    }
}

export default new SubmissionDataService();
