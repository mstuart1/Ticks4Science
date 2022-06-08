
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class TickDataService {

    submitForm(data) {
        return http.post(`/tick`, data)
    }
    updateForm(data, id){
        return http.put(`/tick/${id}`, data)
    }
    getTick(id) {
        return http.get(`/tick/${id}`)
    }
    getAllTicks() {
        // console.log(`getting all ticks`)
        return http.get(`/tick`)
    }
    
}

export default new TickDataService();
