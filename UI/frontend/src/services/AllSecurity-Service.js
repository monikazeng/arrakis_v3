import http from '../services/axios_common';
export default function getAllSecurity(){
    return http.get("/security");
}