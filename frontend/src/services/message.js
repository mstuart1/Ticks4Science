// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class MessageDataService {

    createMessage(data) {
        return http.post(`/message`, data)
    }
    

}

export default new MessageDataService();
