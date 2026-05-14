import authors from "../data/authors.js";

// GET todos
export const getAuthors = (req, res) => {
    res.json(authors);
};

// GET por ID
export const getAuthorById = (req, res) => {
    const { id } = req.params;

    const author = authors.find(
        a => a.id === parseInt(id)
    );

    if (!author) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }

    res.json(author);
};

// POST crear
export const createAuthor = (req, res) => {
    const { name, email, bio } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
    }

    const newAuthor = {
        id: authors.length + 1,
        name,
        email,
        bio: bio || ""
    };

    authors.push(newAuthor);

    res.status(201).json(newAuthor);
};

// PUT actualizar
export const updateAuthor = (req, res) => {
    const { id } = req.params;

    const { name, email, bio } = req.body;

    const author = authors.find(
        a => a.id === parseInt(id)
    );

    if (!author) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }

    if (!name || !email) {
        return res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
    }

    author.name = name;
    author.email = email;
    author.bio = bio || "";

    res.json({
        message: "Autor actualizado correctamente",
        author
    });
};

// DELETE
export const deleteAuthor = (req, res) => {
    const { id } = req.params;

    const authorIndex = authors.findIndex(
        a => a.id === parseInt(id)
    );

    if (authorIndex === -1) {
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }

    authors.splice(authorIndex, 1);

    res.json({
        message: "Autor eliminado correctamente"
    });
};