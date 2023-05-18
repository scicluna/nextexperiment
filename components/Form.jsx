import Link from "next/link"

const Form = ({ type, post, setPost, submitting, handleSubmit, }) => {
    return (
        <section className="w-full max-w-full flex justify-start flex-col">
            <h1 className=" mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">{type}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Post
                </span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 sm:text-xl text-left max-w-md">
                {type} and share amazing prompts!
                Let your imagination run wild with any AI-powered platform!
            </p>

            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5"
            >
                <label className="font-satoshi font-semibold text-gray-700 text-base">
                    <span>Your AI Prompt</span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder="Write your prompt here..."
                        required
                        className="w-full flex rounded-lg h-[200px] mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>

                <label className="font-satoshi font-semibold text-gray-700 text-base">
                    <span>
                        Tag {` `}
                        <span className="font-normal">(#product, #webdevelopment, #idea)</span>
                    </span>

                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        placeholder="#tag"
                        required
                        className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
                    />
                </label>

                <div className="flex justify-end items-center mx-3 mb-5 gap-4">
                    <Link href="/" className="text-sm text-gray-500">
                        Cancel
                    </Link>

                    <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
                        {submitting ? `${type}...` : type}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Form