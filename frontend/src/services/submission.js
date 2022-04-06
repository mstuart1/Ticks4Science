import http from "../http-common";


class SubmissionDataService {

    submitForm(data) {
        return http.post(`/api/submission`, data)
    }
}

export default new SubmissionDataService();
