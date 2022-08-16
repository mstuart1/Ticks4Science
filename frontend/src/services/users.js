
// inspired by https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

import http from "../http-common";


class UserDataService {

    inviteUser(data) {
        return http.post(`/user`, data)
    }
    loginUser(data){
        // console.log('contacting api')
        return http.post(`/user/login`, data)
    }
    getUser(id) {
        return http.get(`/user/${id}`)
    }
    getByToken(token) {
        return http.get(`/user/byToken/${token}`)
    }
   updateUser(data, token){
       return http.put(`/user`, data)
   }
   forgotPassword(data){
       return http.put(`/user/forgot`, data)
   }
   resetPassword(data){
       return http.put(`/user/reset`, data)
   }
   
   getAllUsers(token) {
    // console.log(token)
    return http.get(`/user`, {  headers: {
        'Authorization': `Basic ${token}` 
      }})
   }
   
    
}

export default new UserDataService();
