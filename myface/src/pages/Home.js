// Home.js
import React from "react";
import Footer from "./Footer";

export function Home({ posts,setPosts }) {
  const delb = (a)=>{
      let updatedposts = posts.filter(post => post.id !== a);
      setPosts(updatedposts)

                    }
  return (
    <React.Fragment>
      <section id='MainSpace'>
        {posts.map(newpost => (
          <div  id='newpost.title' key={newpost.title}>
            {newpost.id = newpost.title}
            <h1>{newpost.title}</h1>
            <p>{newpost.content}</p>
            <button onClick={ ()=> delb(newpost.id)}>Delete</button>
          </div>
        ))}
      </section>
      <Footer />
    </React.Fragment>
  );
}
