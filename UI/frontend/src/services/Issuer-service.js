import http from '../services/axios_common';
export default function getAllIssuers(){
    return http.get("/user");
}