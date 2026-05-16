import {
    getAllPosts
} from "../services/posts.service.js";

// GET todos
export const getPosts = async (req, res) => {

    try {

        const posts = await getAllPosts();

        res.json(posts);

    } catch (error) {
    console.log(error);

        res.status(500).json({
            message: "Error al crear autor",
            error: error.message
        });
    }
};