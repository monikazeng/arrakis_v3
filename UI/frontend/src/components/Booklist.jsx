
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import getAllBooks from '../services/Book-service';

const Booklist = () => {
  const [books, setBooks] = useState([]);

    useEffect(()=>{
      getBooksFromAPI();},
      []);
const getBooksFromAPI = ()=>{}
getAllBooks()
  .then(res => {
 //   console.log(res.data);
      setBooks(res.data);
      console.log(books);
  })
  .catch(err => {
      setBooks([]);
      console.log(err);
  })
   
  return (
    <div>
      <h1>Bond User Book List</h1>
        {books.map((book) => (
          <div key = {book.book_id}>
            <p>{book.book_name}</p>
            </div>
        ))}
      </div>
    
  );
}



export default Booklist;