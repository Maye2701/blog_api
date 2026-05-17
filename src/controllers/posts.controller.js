import {
    getAllPosts,
    getPostByIdService,
    createPostService,
    updatePostService,
    deletePostService
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


//GET POST ID

export const getPostById = async(req, res) => {

    try{

        const { id } = req.params;

        const post = await getPostByIdService(id);

        if (!post) {
            return res.status(404).json({
                message: "Autor no encontrado"
            });
        }

        res.json(post);

    } catch(error){

        res.status(500).json({
            message: "Error al obtener autor"
        });
    }
};


//POST CREAR 
export const createPost = async (req, res) => {

    try {

        const { title,
                content,
                author_id, 
                published
            } = req.body;

        if (!title?.trim() || !content?.trim() || !author_id) {
            return res.status(400).json({
                message: "titulo, contenido y id autor son obligatorios"
        });
    }

    const newPost = await createPostService(
        title,
        content,
        author_id,
        published
    );

    res.status(201).json(newPost);

    } catch(error){
        console.log(error);

        res.status(500).json({
            message: "Error al crear autor",
            error: error.message
        });
    }
    
};


// PUT actualizar
export const updatePost = async (req, res) => {

    try {

        const { id } = req.params;

        const { title, content, author_id, published } = req.body;

        const updatedPost = await updatePostService(
        id,
        title,
        content,
        author_id,
        published
    );

    if (!updatedPost) {
        return res.status(404).json({
            message: "Post no encontrado"
        });
    }


    res.json({
        message: "Post actualizado correctamente",
        updatedPost
    });

    } catch (error){
        res.status(500).json({
            message: "Error al actualizar Post"
        });
    }
};



// DELETE
export const deletePost = async (req, res) => {

    try {

        const { id } = req.params;
        const deletedPost = 
            await deletePostService(id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post no encontrado"
        });
    }

    res.json({
        message: "Post eliminado correctamente"
    });

} catch (error){
        res.status(500).json({
            message: "Error al eliminar Post"
        });
    }
};