
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class UserDataService {

    inviteUser(data) {
        return http.post(`/api/user`, data)
    }
    loginUser(data){
        return http.put(`/api/user/login`, data)
    }
    // getTick(id) {
    //     return http.get(`/api/tick/${id}`)
    // }
    // getAllTicks() {
    //     // console.log(`getting all ticks`)
    //     return http.get(`/api/tick`)
    // }
    
}

export default new UserDataService();
