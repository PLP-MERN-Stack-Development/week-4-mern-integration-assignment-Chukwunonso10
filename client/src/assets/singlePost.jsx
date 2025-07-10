import React, { useState } from 'react'

export default function SinglePost() {
    const [post, setPost ] = useState(" ")
    const [title, setTitle ] = useState(" ")
    const [category, setCategory ] = useState(" ")

    const fetchPost = async () => {
        try {
            const res = API.get(`/posts/${id}`)
            setPost(res.data)
        } catch (error) {
            
        }
    }

   

    return (
        <div className=' text-2xl bg-gray-100 '>
            <h1 className='flex items-center justify-center'> { title } </h1>
            <h3> Category: { category }</h3>
            <p> { content } </p>
            <p> Posted on: { new Date.now() }</p>
        </div>
    )
}