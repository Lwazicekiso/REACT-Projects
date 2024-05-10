import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import { Home } from './pages/Home';
import { PostPage } from './pages/PostPage';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import About from './pages/About';
import './pages/style.css';

export function App() {
  const [titleinp, setTitle] = useState('');
  const [postInput, setPostInput] = useState('');
  const [searchVal,setSearchVal] = useState(''); 
  const [posts, setPosts] = useState([
    { title: 'My post', content: 'Hello everyone', id: 'myid' },
    // ... add more initial posts if needed
  ]);

  const originalPosts = [...posts]; //store a copy of the original possts
  const searchFil = () => {
    if (searchVal !== '') {
      const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(searchVal.toLowerCase())
      );
      setPosts(filteredPosts);
    } 
    else {
      setPosts(originalPosts); // Reset to all posts 
    }
  }

  const resetSearch = () => {
    setSearchVal('');
    setPosts(originalPosts);
  }

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav 
            setSearchVal={setSearchVal}
            searchVal={searchVal}
            searchFil={searchFil}  
            resetSearch={resetSearch}  
          />} > 
          <Route
            index
            element={<Home posts={posts} setPosts={setPosts} searchVal={searchVal} />} // Pass filteredPosts
          />
            <Route
              path="/post"
              element={<PostPage  
              postInput={postInput}
              setPostInput={setPostInput}
              setTitle={setTitle}
              titleinp={titleinp}
              setPosts={setPosts}
              addPost={addPost}/>}/>
              
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
         </Routes>
 </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
