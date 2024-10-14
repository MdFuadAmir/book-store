import { useEffect, useState } from "react";
import Book from "../Book/Book";
import PropTypes from 'prop-types'; 

const Books = ({ handelAddToBookMark, handelMarkAsRead }) => {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksdata.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="w-full md:w-2/3 p-4 border-2 border-purple-600 my-6 rounded-md">
            <h1 className="text-xl font-bold text-green-500 mb-4">Total Books:{books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    books.map(book =><Book 
                        key={book.id} 
                        book={book}
                        handelAddToBookMark={handelAddToBookMark}
                        handelMarkAsRead={handelMarkAsRead}
                        ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

Book.propTypes ={
    handelAddToBookMark: PropTypes.func.isRequired,
    handelMarkAsRead: PropTypes.func.isRequired
}