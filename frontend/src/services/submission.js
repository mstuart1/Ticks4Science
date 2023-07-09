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
        return http.get(`/submission/${id}`)
    }

    getAllSubm(token) {
        return http.get(`/submission`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }
    getPageSubm(token, page, limit, filter) {
        return http.get(`/submission/paged?numLimit=${limit}&page=${page}&filter=${filter}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }
    updateSub(data, id) {
        return http.put(`/submission/${id}`, data)
    }
    deleteSub(id) {
        return http.delete(`/submission/${id}`)
    }
    getDownloadData(token) {
        return http.get(`/submission/downloadData`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }
    getDeleted(token) {
        return http.get(`/submission/deleted`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }
    getDuplicates(token) {
        return http.get(`/submission/dupes`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
    }
    updatePathos(subId, pathogenId) {
        /** this is going to send one id, if that id is already in the list, 
         * it will remove it, if it is not in the list, it will add it
         */
        return http.put(`/submission/${subId}/pathos`, pathogenId)
    }

}

export default new SubmissionDataService();
