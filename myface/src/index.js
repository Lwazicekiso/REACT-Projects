// index.js
import React from "react";
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './pages/Nav';
import { Home } from './pages/Home';
import { PostPage } from './pages/PostPage';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import About from './pages/About';
import './pages/style.css';

export function App() {
  const [posts, setPosts] = useState([
    {
      title: 'My post',
      content: 'Hello everyone',
      id:'myid'
    },
  ]);
  const deletePost = (id) => {
    const index = posts.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      posts.splice(index, 1);
      setPosts([...posts]); // Update state with modified array
      alert('Posts after deletion:', posts); // Log updated state
      setPosts((prevPosts) => prevPosts.filter((obj) => obj.id !== id));

  }
  }

  const [titleinp, setTitle] = useState('');
  const [postInput, setPostInput] = useState('');

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };
/*
  function handleAddPost(e) {
    e.preventDefault();
    const newPost = { title: titleinp, content: postInput };
    addPost(newPost);
  }
*/
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route
            index
            element={<Home posts={posts} />}
          />
          <Route
            path="/post"
            element={<PostPage
              postInput={postInput}
              setPostInput={setPostInput}
              setTitle={setTitle}
              titleinp={titleinp}
              setPosts={setPosts}
              addPost={addPost}
              deletePost={deletePost}
              // Pass setPosts function to update posts
            />}
          />
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
