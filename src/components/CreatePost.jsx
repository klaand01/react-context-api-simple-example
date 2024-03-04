import { useContext, useState } from "react";
import { PostContext } from "../App";

const INITIAL_POST = {
    title: localStorage.getItem("title"),
    content: localStorage.getItem("content"),
}

export default function CreatePost() {
    const [post, setPost] = useState(INITIAL_POST)
    const {posts, setPosts} = useContext(PostContext)

    const handleChange = (e) => {
        const { name, value } = e.target
        setPost({
          ...post,
          [name]: value,
        })
      localStorage.setItem(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.clear()
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
