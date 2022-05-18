
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class UserDataService {

    inviteUser(data) {
        return http.post(`/api/user`, data)
    }
    loginUser(data){
        return http.post(`/api/user/login`, data)
    }
    getUser(id) {
        return http.get(`/api/user/${id}`)
    }
    getByToken(token) {
        return http.get(`/api/user/byToken/${token}`)
    }
   updateUser(data){
       return http.put(`/api/user`, data)
   }
   forgotPassword(data){
       console.log('contacting api')
       return http.put(`/api/user/forgot`, data)
   }
    
}

export default new UserDataService();
