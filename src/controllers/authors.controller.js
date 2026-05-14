
import {
    getAllAuthors,
    getAuthorByIdService,
    createAuthorService,
    updateAuthorService,
    deleteAuthorService
}from "../services/authors.services.js";

// GET todos
export const getAuthors = (req, res) => {
    const authors = getAllAuthors();
    res.json(authors);
};

// GET por ID
export const getAuthorById = (req, res) => {
    const { id } = req.params;

    const author = getAuthorByIdService(id);

    if (!author) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }

    res.json(author);
};

// POST crear
export const createAuthor = (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
    }

    const newAuthor = createAuthorService(req.body);

    res.status(201).json(newAuthor);
};

// PUT actualizar
export const updateAuthor = (req, res) => {
    const { id } = req.params;

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
    }

    const updatedAuthor = updateAuthorService(
        id,
        req.body
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
};

// DELETE
export const deleteAuthor = (req, res) => {
    const { id } = req.params;

    const deleted = deleteAuthorService(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }



    res.json({
        message: "Autor eliminado correctamente"
    });
};