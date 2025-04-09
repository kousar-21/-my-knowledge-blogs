
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/navbar/Navbar'

function App() {

  const [bookMarked,setBookMarked] = useState([])
  // for global use or for use in all component
  const handleBookMark=(blog)=>{
    setBookMarked([...bookMarked, blog])
  }


  const [readingCount, setReadingCount] = useState(0)
  // reading Count
  const handleMarkedAsread = (time, id) =>{
    // console.log(time)
    // console.log(id)

    // const newTime = readingCount + time;
    // setReadingCount(newTime);

    setReadingCount(readingCount + time);
    handleRemoveBookMark(id)
  }

  const handleRemoveBookMark = (id) =>{
    const remainingBookMark = bookMarked.filter(markedBook => markedBook.id !== id)
    setBookMarked(remainingBookMark)
  }

  return (
    <>
      <Navbar></Navbar>
      



      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">

        <Blogs handleBookMark={handleBookMark} handleMarkedAsread={handleMarkedAsread}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: {readingCount}</h1>
          <h1>Bookmark: {bookMarked.length}</h1>
          {
            bookMarked.map(marked => <p key={marked} className='bg-red-600 p-2 shadow m-2 text-white'>{marked.title}</p>)
          }
        </div>
      </div>


    </>
  )
}

export default App
