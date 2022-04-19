
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class TickDataService {

    submitForm(data) {
        return http.post(`/api/ticks`, data)
    }
    getTick(id) {
        // console.log('getting progress')
        return http.get(`/api/ticks/${id}`)
    }
    
}

export default new TickDataService();
