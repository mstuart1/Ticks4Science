// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/submission`, data)
    }
    submitImage(id, formData, config) {
        return http.put(`/submission/photos/${id}`, formData, config)
    }
    getProgress(id) {
        // console.log('getting progress')
        return http.get(`/submission/${id}`)
    }

    getAllSubm() {
        return http.get(`/submission`)
    }
    updateSub(data, id) {
        console.log(data)
        return http.put(`/submission/${id}`, data)
    }
}

export default new SubmissionDataService();
