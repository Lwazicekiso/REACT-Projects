import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home"; 
import PostPage from "./pages/PostPage"; 
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import PrivateRoute from "./PrivateRoute"; // Import the PrivateRoute
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./AuthContext"; 
import "./pages/style.css";

export function App() {
  const [titleinp, setTitle] = useState("");
  const [postInput, setPostInput] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [posts, setPosts] = useState([
    { title: "My post", content: "Hello everyone", id: 1 },
  ]);

  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    const originalPosts = [...posts]; 
  
    const searchResults = searchVal
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(searchVal.toLowerCase())
        )
      : originalPosts;
    setFilteredPosts(searchResults);
  }, [searchVal, posts]); 

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 }, // Ensure unique ID
    ]);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Nav searchVal={searchVal} setSearchVal={setSearchVal} />}
        >
          <Route
            index
            element={
              <Home posts={filteredPosts} setPosts={setPosts} deletePost={deletePost} />
            } // Pass filteredPosts
          />
          <Route
            path="/post"
            element={
            <PrivateRoute>
              <PostPage postInput={postInput} 
                setPostInput={setPostInput} 
                setTitle={setTitle} 
                titleinp={titleinp} 
                setPosts={setPosts} 
                addPost={addPost} 
              />
            </PrivateRoute>}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider> 
      <App />
    </AuthProvider>
  </React.StrictMode>
);