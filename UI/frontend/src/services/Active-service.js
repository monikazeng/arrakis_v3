import http from '../services/axios_common';
export default function getAllActiveBonds(){
    return http.get("/security/active");
}