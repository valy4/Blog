import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const apiUrl = "http://localhost:3004/posts"
function HomePage() {
  const [postList, setPostList] = useState([])
  const [newPostTitle, setNewPostTitle] = useState("")


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
      {postList.map((post) => (<div>
        <Link to={`/posts/${post.id}`}><p>{post.title}</p></Link>
      </div>))}
      {/* <input value={newPostTitle} onChange={(event) => { setNewPostTitle(event.target.value) }}></input>
      <button onClick={() => {
        createArticle({
          "title": newPostTitle,
          "author": "user"
        })
        setNewPostTitle("")
      }}>Add Post</button> */}
      <Link to={"/create-post"}>Add Comment</Link>
    </div>
  );
}

export default HomePage;