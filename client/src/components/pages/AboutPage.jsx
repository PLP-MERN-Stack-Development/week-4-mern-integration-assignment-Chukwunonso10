import { useState, useEffect } from "react"
import { LinkedinIcon } from "lucide-react"
import { Link } from "react-router-dom"


export default function AboutPage() {

    return (
        <section className="min-h-screen  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white p-6 max-w-3xl mx-auto">
            <h1 className="text-3xl text-center font-bold mb-4">About Me</h1>
            <p>
                I am a passionate software engineering student with a background in civil engineering, currently diving deep into web technologies and APIs. With a solid foundation in problem-solving and a drive for innovation, I’m building the skills to create scalable, impactful tech solutions that bridge the gap between real-world challenges and digital transformation. My journey is fueled by a commitment to continuous learning and a desire to make a difference through technology.
            </p>

            <p className="mt-4">Connect with me on { " "} 
                <a href="https://www.linkedin.com/feed/update/urn:li:activity:7347729053367316480/" target="_blank">
                 <LinkedinIcon />
                </a> or explore the latest  tools and jobs featured here!</p>
            
        </section>
    )
}