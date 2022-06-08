import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function BlogPost() {
    const [post, setPost] = useState(null)
    const { postSlug } = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postSlug}`)
            .then((res) => res.json())
            .then((data) => setPost(data))
    }, [postSlug])

    if (!post) return null

    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </>
    )
}
