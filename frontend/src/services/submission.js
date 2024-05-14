// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/submission`, data)
    }
    submitBulkForm(data) {
        return http.post(`/submission/bulkSubs`, data)
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
    getQuestions(token, page, limit) {
        return http.get(`/submission/questions?numLimit=${limit}&page=${page}`, {
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
    updatePathos(subId, pathogens) {
        // this is going to send multiple pathogens at once
        return http.put(`/submission/${subId}/pathos`, pathogens)
    }
    updateResult(subId, result) {
        return http.put(`/submission/${subId}/result`, result)
    }

}

export default new SubmissionDataService();
