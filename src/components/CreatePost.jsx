import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css";


const apiUrl = "http://localhost:3004/posts"

function CreatePost() {
  const [isSuccess, setIsSuccess] = useState(false)


  async function createArticle(articleData) {
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setIsSuccess(true)
  }
  return (<div className="App">
    <h1>Create a new post:</h1>
    <div>
      {!isSuccess ? <form onSubmit={(event) => {
        event.preventDefault()
        const newPost = {
          title: event.target.title.value,
          description: event.target.description.value
        }
        createArticle(newPost)
      }}>

        <div className="title-input">
          <label>Title</label>
          <input name="title"></input>
        </div>
        <div className="descrip-input">
          <label>Description</label>
          <textarea name="description"></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form> : <div>Post was created</div>}
    </div>
    <Link to="/"><button className="btn">Back Home</button></Link>


  </div>)
}
export default CreatePost;