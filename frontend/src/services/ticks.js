
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class TickDataService {

    submitForm(data) {
        return http.post(`/api/tick`, data)
    }
    updateForm(data, id){
        return http.put(`/api/tick/${id}`, data)
    }
    getTick(id) {
        return http.get(`/api/tick/${id}`)
    }
    getAllTicks() {
        // console.log(`getting all ticks`)
        return http.get(`/api/tick`)
    }
    
}

export default new TickDataService();
