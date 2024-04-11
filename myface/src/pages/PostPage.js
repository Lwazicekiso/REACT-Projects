import React from 'react';

export function PostPage({ postInput, setPostInput, titleinp, setTitle, addPost }) {
  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { title: titleinp, content: postInput, id: titleinp };
    addPost(newPost);
    setTitle('');
    setPostInput('');
  };

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
        <button onClick={handleAddPost}>Add
</button>
      </form>
    </section>
  );
}