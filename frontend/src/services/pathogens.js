// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class PathogenDataService {

    getAll() {
        return http.get(`/pathogen`)
    }
}

export default new PathogenDataService();
