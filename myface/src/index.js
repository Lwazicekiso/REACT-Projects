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
  const [posts, setPosts] = React.useState([
    {
      title: 'My post',
      content: 'Hello everyone',
      id: 'myid'
    },
  ]);

  const deletePost = React.useCallback((id) => {
    const index = posts.findIndex((obj) => obj.id === id);
    if (index !== -1) {
      const newPosts = [...posts];
      newPosts.splice(index, 1);
      setPosts(newPosts);
    }
  }, [posts]);

  const [titleinp, setTitle] = useState('');
  const [postInput, setPostInput] = useState('');

  const addPost = React.useCallback((newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route
            index
            element={<Home posts={posts} deletePost={deletePost} />}
          />
          <Route
            path="/post"
            element={<PostPage
              postInput={postInput}
              setPostInput={setPostInput}
              titleinp={titleinp}
              setTitle={setTitle}
              addPost={addPost}
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
