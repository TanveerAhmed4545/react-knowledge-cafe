import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleMarkAsRead = (time) =>{
       console.log('marking as read',time);
       const newReadingTime = readingTime + time;
       setReadingTime(newReadingTime);
       
       
  }
 



  const handleAddToBookmark = (blog) =>{
    //  console.log("Adding soon");
    //  console.log(blog.title)
     const newBookmarks = [...bookmarks,blog];
     setBookmarks(newBookmarks)
  }

  

  return (
    <>
      
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto'>
      <div className='md:w-2/3'>
      <Blogs handleAddToBookmark={handleAddToBookmark} 
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      </div>
      <div className='md:w-1/3'>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      </main>
      
    </>
  )
}

export default App
