import Header from '@/components/header'
import FeaturedPost from '../FeaturedPost'
import PostCard from '../PostCard'
import SideBar from '../SideBar'
import { useState, useEffect } from 'react'
import API from '@/services/api'


export default function Homepage() {
    const [posts, setPosts ] = useState([])
    const [loading, setLoading ] = useState(false)

   const LoadPosts = async () =>{
     try {
        setLoading(true)
        const res = await API.get('/posts')
        setPosts(res.data)
     } catch (error) {
        console.error("error fetching post", error.message)
     }
     finally {
        setLoading(false)
     }

   }
    
            
    useEffect(()=>
        {LoadPosts()}, [])

    return (
        <main className='m-h-screen text-white'>
            <FeaturedPost />
            <div className='flex flex-col md:flex-row'>
                <SideBar className='md:w-1/3 w-full' />

                <main className='md:w-2/3 w-full  '>
                {!posts.length ? (<p>No Post is Available</p>) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {posts.map((post, i) => 
                            <PostCard
                            key={i} 
                            post={post}
                            />
                        )}
                    </div>
                )}
                    
                </main>
            </div>
            
            
            
            
        </main>
    )
}