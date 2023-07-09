// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class PathogenDataService {

    getAll() {
        return http.get(`/pathogen`)
    }
    update(id, data) {
        return http.put(`/pathogen/${id}`, data)
    }
    create(data) {
        return http.post(`/pathogen`, data)
    }
}

export default new PathogenDataService();
