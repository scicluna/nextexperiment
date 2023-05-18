import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";
import { parse } from "postcss";

export const POST = async (req) => {
    const parsedReq = await req.json()

    const { userId: creator, prompt, tag } = parsedReq

    try {
        await connectToDB()
        const newPrompt = new Prompt({
            creator,
            prompt,
            tag
        })

        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        })

    } catch (err) {
        return new Response("Failed to create a new prompt", { status: 500 })
    }
}