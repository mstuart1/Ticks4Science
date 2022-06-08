
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class UserDataService {

    inviteUser(data) {
        return http.post(`/user`, data)
    }
    loginUser(data){
        return http.put(`/user/login`, data)
    }
    getUser(id) {
        return http.get(`/user/${id}`)
    }
    getByToken(token) {
        return http.get(`/user/byToken/${token}`)
    }
   updateUser(data){
       return http.put(`/user`, data)
   }
    
}

export default new UserDataService();
