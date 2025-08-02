import React, { useEffect, useState } from 'react'

const Post = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPost(json))
    }, []);
    const posts = post.map(p => {
        return (
            <div>
                {p.title}
            </div>
        )
    })
    return (
        <div>
            {posts}
        </div>
    )
}

export default Post
