import { useContext, useState } from "react";
import { PostContext } from "../App";

const INITIAL_POST = {
    title: '',
    content: '',
}

const initialPost = () =>
{
  if (localStorage.getItem("Post"))
    return JSON.parse(localStorage.getItem("Post"))
  
  return {...INITIAL_POST}
}

export default function CreatePost() {
    const [post, setPost] = useState(initialPost)
    const {posts, setPosts} = useContext(PostContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedPost = {
          ...post,
          [name]: value,
        }
        setPost(updatedPost)
      localStorage.setItem("Post", JSON.stringify(updatedPost))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        localStorage.removeItem("Post")
        setPosts([...posts, post])
        setPost(INITIAL_POST)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input type="text" name="title" onChange={handleChange} value={post.title}></input>
            </label>
            <br/>
            <label>
              Content:
              <textarea name="content" onChange={handleChange} value={post.content} cols={50} rows={5}></textarea>
            </label>
            <br/>
            <input type="submit" value="Post!"></input>
        </form>
    )
}
