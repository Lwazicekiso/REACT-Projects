// Home.js
import React from "react";
import { useState } from "react";
import Footer from "./Footer";

export function Home({ deletePost,posts,setPosts }) {
  const [editingPostId, setEditingPostId] = useState(null); // Track the post being edited
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const handleEditClick = (post) => {
    setEditingPostId(post.id);
    setEditedTitle(post.title);
    setEditedContent(post.content);
  };

  const handleSaveClick = (post) => {
    const updatedPosts = posts.map((p) =>
      p.id === post.id ? { ...p, title: editedTitle, content: editedContent } : p
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
  };

  const handleCancelClick = () => {
    setEditingPostId(null);
  };

  return (
    <React.Fragment>
      <section id="MainSpace">
        {posts.map((post) => (
          <div id={post.title} key={post.id}>
            {editingPostId === post.id ? ( // Render edit mode
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <button onClick={() => handleSaveClick(post)}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) 
            : 
            (
              // Render normal mode
              <>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <button onClick={() => handleEditClick(post)}>Edit</button>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
}