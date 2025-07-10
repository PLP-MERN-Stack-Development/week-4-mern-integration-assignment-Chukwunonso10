import { Link } from "react-router-dom"
import { formatDateAgo } from '../utils/'



export default function PostCard({ post }) {


    return (
        <div className="px-6 bg-gray-200 font-bold dark:bg-gray-800 text-black">
            <img src={post.featuredImage} alt={post.title} />
            <div>
                <Link to={`/posts/${post.slug}`}>
                <h2 className="text-blue-700 hover:underline font-bold capitalize">
                    {post.title}
                </h2>
                    
                </Link>
                <p className="capitalize">
                    By {post.author?.name} in {post.category.name}.{" "}
                    {formatDateAgo(post.createdAt)}
                <p className="text-gray-700 text-sm capitalize">
                    {post.excerp || post.content?.slice(0,120) + "..."}
                </p>

                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">
                        Views: {post.viewCount}
                    </span>

                    <Link to={`posts/${post.slug}`} className="text-sm text-blue-500 hover:underline">
                        Read More ---
                    </Link>
                </div>

                </p>
            </div>

        </div>
    )
}