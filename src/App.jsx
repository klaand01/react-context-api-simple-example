import { createContext, useState } from 'react'
import CreatePost from './components/CreatePost.jsx';
import Header from './components/Header.jsx'
import Posts from './components/Posts.jsx'
import './App.css'

export const PostContext = createContext()

function App() {
    const [posts, setPosts] = useState([
        { title: 'Hello, world!', content: 'React context is great :)' },
        { title: 'But...', content: 'It\'s a little confusing at first!' },
    ])


    return (
        <>
            <Header />
            <PostContext.Provider value={{
                posts,
                setPosts
            }}>
                <CreatePost />
                <Posts/>
            </PostContext.Provider>
        </>
    )
}

export { App }
