"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

export default function OtherProfile() {
    const params = useParams()
    const router = useRouter()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params.id}/posts`)
            const data = await response.json()

            setPosts(data)
        }
        fetchPosts()
    }, [])

    const handleEdit = (post) => {
        router.push(`./update-prompt?id=${post._id}`)
    }

    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE"
                })

                const filteredPosts = posts.filter((p) => p._id !== post._id)
                setPosts(filteredPosts)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (
        <>
            {posts.length > 0 && <Profile
                name={`${posts[0].creator.username}'s`}
                desc="Welcome to your personalized profile page"
                data={posts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />}
        </>
    )
}