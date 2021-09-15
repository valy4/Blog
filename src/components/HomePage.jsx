import react, { useState, useEffect } from 'react'
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

  async function createArticle(articleData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    fetchPostList()
  }

  useEffect(() => {
    fetchPostList()
  }, [])
  return (
    <div className="App">
      {postList.map((post) => (<div>
        <Link to={`/posts/${post.id}`}><p>{post.title}</p></Link>
      </div>))}
      <input value={newPostTitle} onChange={(event) => { setNewPostTitle(event.target.value) }}></input>
      <button onClick={() => {
        createArticle({
          "title": newPostTitle,
          "author": "user"
        })
        setNewPostTitle("")
      }}>Add Post</button>
    </div>
  );
}

export default HomePage;