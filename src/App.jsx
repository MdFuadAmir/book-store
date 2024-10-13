import { useState } from 'react'
import './App.css'
import BookMarks from './Components/BookMarks/BookMarks'
import Books from './Components/Books/Books'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  
  
  const handelAddToBookMark = book =>{
    console.log("book mark adding soon");
  }

  return (
    <>
    <Header/>
    <div className='md:flex justify-between gap-4 max-w-6xl mx-auto p-4'>
    <Books handelAddToBookMark={handelAddToBookMark}></Books>
    <BookMarks></BookMarks>
    </div>
     
    </>
  )
}

export default App
