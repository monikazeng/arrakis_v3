import http from '../services/axios_common';
export default function getALLMature(){
    return http.get("/security/date");
}