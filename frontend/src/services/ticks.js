
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
        console.log('getting tick')
        return http.get(`/api/tick/${id}`)
    }
    
}

export default new TickDataService();
