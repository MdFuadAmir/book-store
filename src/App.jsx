import { useState } from 'react'
import './App.css'
import BookMarks from './Components/BookMarks/BookMarks'
import Books from './Components/Books/Books'
import Header from './Components/Header/Header'
import Rechart from './Components/Rechart/Rechart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handelAddToBookMark = book =>{
    const isExist = bookMarks.find(books => books.id == book.id)
    if(!isExist){
      const newBookMarks = [...bookMarks, book];
      setBookMarks(newBookMarks);
    }
    else{
      toast("Already added this book")  
    }
  }

  const [readingTime, setReadingTime] = useState(0);
  const handelMarkAsRead = (book) =>{
    const newReadingTime = readingTime + book.reading_time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
    <Header/>
    <div className='md:flex justify-between gap-4 max-w-6xl mx-auto p-4'>
    <Books handelAddToBookMark={handelAddToBookMark} handelMarkAsRead={handelMarkAsRead}></Books>
    <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
    </div>
    <Rechart/>
    <ToastContainer/>
    </>
  )
}

export default App
