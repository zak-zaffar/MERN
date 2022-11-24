import postMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => {
    try {
        const postMessage = await postMessage.Find();

        res.status(200).json(postMessage);
    }
    catch (error) {
        res.status(404).json({ message : error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message : error.message });
        
    }
}