'use client'
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

export const Feed = () => {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])

    const handleSearchChange = (e) => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt')
            const data = await response.json()

            setPosts(data)
        }
        fetchPosts()
    }, [])

    return (
        <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
            <form className="relative w-full flex justify-center items-center">
                <input
                    type="text"
                    placeholder="Search for a tag or username"
                    value={searchText}
                    onChange={handleSearchChange}
                    required
                    className="block w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0 peer"
                />
            </form>
            <PromptCardList
                data={posts}
                handleTagClick={() => { }}
            />
        </section>
    )
}

const PromptCardList = ({ data, handleTagClick }) => {
    return (
        <div className="mt-16 space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
            {data.map((post) => (
                <PromptCard
                    key={post._id}
                    post={post}
                    handleTagClick={handleTagClick}
                />
            ))}
        </div>
    )
}