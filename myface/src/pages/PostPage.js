import React from 'react';

export function PostPage({ postInput, setPostInput, titleinp, setTitle, setPosts }) {
  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { title: titleinp, content: postInput, id:titleinp };
    setPosts((prevPosts) => [...prevPosts, newPost]);
    // Reset input fields after adding a post
    setTitle('');
    setPostInput('');}

  return (
    <section className="post" id=''>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="titleInput">Title</label> <br />
        <input
          value={titleinp}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
        />
        <br />
        <label htmlFor="post">Post</label>
        <br />
        <textarea
          style={{ padding: '30vw', height: '30vw', width: '80vw' }}
          placeholder="Tell me about it"
          value={postInput}
          onChange={(e) => setPostInput(e.target.value)}
        ></textarea>
        <br />
        <button onClick={handleAddPost}>Add Post</button>
      </form>
    </section>
  );
  }