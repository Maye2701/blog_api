
import {
    getAllAuthors,
    getAuthorByIdService,
    createAuthorService,
    updateAuthorService,
    deleteAuthorService
}from "../services/authors.services.js";



// GET todos
export const getAuthors = async (req, res) => {

    try {

        const authors = await getAllAuthors();

        res.json(authors);

    } catch (error) {

        res.status(500).json({
            message: "Error al obtener autores"
        });
    }
};



// GET por ID
export const getAuthorById = async(req, res) => {

    try{

        const { id } = req.params;

        const author = await getAuthorByIdService(id);

        if (!author) {
            return res.status(404).json({
                message: "Autor no encontrado"
            });
        }

        res.json(author);
    } catch(error){

        res.status(500).json({
            message: "Error al obtener autor"
        });
    }
};



// POST crear
export const createAuthor = async (req, res) => {

    try {

        const { name, email, bio } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Nombre y email son obligatorios"
        });
    }

    const newAuthor = await createAuthorService(
        name,
        email,
        bio
    );

    res.status(201).json(newAuthor);

    } catch(error){
        console.log(error);

        res.status(500).json({
            message: "Error al crear autor",
            error: error.message
        });
    }
    
};



// PUT actualizar
export const updateAuthor = async (req, res) => {

    try {

        const { id } = req.params;

        const { name, email, bio } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Nombre y email son obligatorios"
        });
    }

    const updatedAuthor = await updateAuthorService(
        id,
        name,
        email,
        bio
    );

    if (!updatedAuthor) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }

    res.json({
        message: "Autor actualizado correctamente",
        updatedAuthor
    });

    } catch (error){
        res.status(500).json({
            message: "Error al actualizar autor"
        });
    }
};



// DELETE
export const deleteAuthor = async (req, res) => {

    try {

        const { id } = req.params;
        const deletedAuthor = 
            await deleteAuthorService(id);

        if (!deletedAuthor) {
            return res.status(404).json({
                message: "Autor no encontrado"
        });
    }

    res.json({
        message: "Autor eliminado correctamente"
    });

} catch (error){
        res.status(500).json({
            message: "Error al eliminar autor"
        });
    }
};