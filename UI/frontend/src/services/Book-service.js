import http from '../services/axios_common';
export default function getAllBooks(){
    return http.get("/books");
}