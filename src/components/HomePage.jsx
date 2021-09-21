import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../App.css";


const apiUrl = "http://localhost:3004/posts"
function HomePage() {
  const [postList, setPostList] = useState([])
  // const [newPostTitle, setNewPostTitle] = useState("")


  async function fetchPostList() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    setPostList(data)
  }



  useEffect(() => {
    fetchPostList()
  }, [])
  return (
    <div className="App">
      <h1>My fancy blog</h1>
      {postList.map((post) => (<div>
        <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
        <p>{post.description}</p>

      </div>))}
      {/* <input value={newPostTitle} onChange={(event) => { setNewPostTitle(event.target.value) }}></input>
      <button onClick={() => {
        createArticle({
          "title": newPostTitle,
          "author": "user"
        })
        setNewPostTitle("")
      }}>Add Post</button> */}
      <Link to={"/create-post"}><button className="btn">Add Post</button></Link>
    </div>
  );
}

export default HomePage;