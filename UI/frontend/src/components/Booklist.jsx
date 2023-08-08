
import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import getAllBooks from '../services/Book-service';

const Booklist = () => {
  const [books, setBooks] = useState([]);

    useEffect(()=>{
      getBooksFromAPI();},
      []);
const getBooksFromAPI = ()=>{getAllBooks()
  .then(res => {
 //   console.log(res.data);
      setBooks(res.data);
      console.log(res.data);
  })
  .catch(err => {
      setBooks([]);
      console.log(err);
  })}

//new code
  //const [dataObject, setDataObject] = useState({
   // name: 'John Doe',
   // age: 30,
   // email: 'johndoe@example.com',
  //});

  // Function to handle button click and pass props to the child component
  const handleButtonClick = () => {
    // Update the dataObject with new values (you can replace these with user inputs or dynamic data)
   const newData = {
      
    };
   //setDataObject(newData);
 };

   
  return (
    <div>
      <h1>Bond User Book List</h1>
        {books.map((book) => (
          <div key = {book.book_id}>
            <button onClick={handleButtonClick(book.book_id)}>{book.book_name}</button>
            </div>
        ))}
      </div>
    
  );
}



export default Booklist;