import { useState, useEffect } from "react"
import CategoryCard from "../CategoryCard"
import API from "@/services/api"

export default function CategoriesPage() {
    const [categoriesPost, setCategoriesPost] = useState([])
    const [loading, setLoading] = useState(false)

    const Fetch = async () =>{
        try {
            setLoading(true)
            const res = await API.get('/categories')
            setCategoriesPost(res.data)
            alert("category post fetched")
        } catch (error) {
            console.error(error.message)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        Fetch()
    },[])

    return (
        <main className="min-h-screen md:flex flex-col bg-gray-950 text-white">
            <section className="md:w-1/4 md:flex">
                <h1>Browse Categories</h1>
                <div className="md:grid-cols-2 grid gap-4 mt-2 rounded-md">
                    {!categoriesPost.length? (<p>No Categories Post Available !</p>) : (
                        categoriesPost.map(category => 
                            <CategoryCard
                            key={category._id}
                            category={category}/>
                        )
                    )}
                </div>
            </section>
        </main>
    )
}