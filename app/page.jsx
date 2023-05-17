import { Feed } from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="font-extrabold text-5xl">Discover and Share</h1>
            <span className="text-3xl font-extrabold text-red-600"> AI-Powered Prompts</span>
            <div>
                <p className="text-center text-lg">
                    Promptopia is a sick af AI prompting tool for the modern world.
                </p>
            </div>

            <Feed />
        </section>
    )
}

export default Home