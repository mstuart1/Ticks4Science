// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class MessageDataService {

    createMessage(data) {
        return http.post(`/message`, data)
    }
    updateMessage(data){
        return http.put(`/message/${data.id}`, data)
    }
    

}

export default new MessageDataService();
