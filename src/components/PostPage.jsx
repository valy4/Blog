
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css";


const apiUrl = "http://localhost:3004/posts"

function PostPage() {
  const { postId } = useParams()
  const [postData, setPostData] = useState(null)
  const [commentsList, setCommentsList] = useState([])
  const [commentText, setCommentText] = useState("")

  async function fetchSinglePost() {
    const response = await fetch(`${apiUrl}/${postId}`)
    const data = await response.json()
    const responseComments = await fetch(`${apiUrl}/${postId}/comments`)
    const dataComments = await responseComments.json()
    setPostData(data)
    setCommentsList(dataComments)
    console.log(dataComments)
  }
  useEffect(() => {
    fetchSinglePost()
  }, [])

  async function createComment(commentTextInput) {
    const response = await fetch('http://localhost:3004/comments', {
      method: "POST",
      body: JSON.stringify({
        "body": commentTextInput,
        "postId": postId,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    fetchSinglePost()
  }
  return (<div className="App">
    <h2>{postData && postData.title}</h2>
    <p>{postData && postData.description}</p>
    <h1>Comments:</h1>
    <div>
      {commentsList.map(comm => {
        return <p>{comm.body}</p>
      }

      )}
    </div>
    <div className="textarea-input">
      <h3>Leave a comment:</h3>
      <textarea value={commentText} onChange={(event) => { setCommentText(event.target.value) }}></textarea>
      <button className="btn" style={{ width: "100px", alignSelf: "flex-end" }} onClick={() => { createComment(commentText); setCommentText("") }}>Add Com</button>
    </div>
    <Link to="/"><button className="btn">Back Home</button></Link>
  </div>)


}

export default PostPage;