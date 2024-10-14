import { useState } from 'react'
import './App.css'
import BookMarks from './Components/BookMarks/BookMarks'
import Books from './Components/Books/Books'
import Header from './Components/Header/Header'


function App() {
  const [bookMarks, setBookMarks] = useState([]);

  const handelAddToBookMark = book =>{
    const newBookMarks = [...bookMarks, book];
    setBookMarks(newBookMarks);
  }

  const [readingTime, setReadingTime] = useState(0);

  const handelMarkAsRead = (time) =>{
    const newReadingTime = readingTime + JSON.parse(time) ;
    setReadingTime(newReadingTime);
   
  }
  return (
    <>
    <Header/>
    <div className='md:flex justify-between gap-4 max-w-6xl mx-auto p-4'>
    <Books handelAddToBookMark={handelAddToBookMark} handelMarkAsRead={handelMarkAsRead}></Books>
    <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
    </div>
     
    </>
  )
}

export default App
