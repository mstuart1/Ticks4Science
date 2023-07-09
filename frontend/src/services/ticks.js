
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class TickDataService {

    submitForm(data) {
        return http.post(`/tick`, data)
    }
    updateForm(data, id) {
        return http.put(`/tick/${id}`, data)
    }
    getTick(id) {
        return http.get(`/tick/${id}`)
    }
    getAllTicks() {
        // console.log(`getting all ticks`)
        return http.get(`/tick`)
    }
    updatePathos(tickId, pathogenId) {
        /** this is going to send one id, if that id is already in the list, 
         * it will remove it, if it is not in the list, it will add it
         */
        return http.put(`/tick/${tickId}/pathos`, pathogenId)
    }

}

export default new TickDataService();
