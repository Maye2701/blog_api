import express from "express";
import authors from "../data/authors.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(authors);
});

router.get("/:id", (req, res)=>{
    const {id} = req.params;

    const author = authors.find(a =>a.id === parseInt(id));

    if(!author){
        return res.status(404).json({
            message: "Autor no encontrado"
        });
    }
    res.json(author);
});



//endepoint POST
router.post("/", (req,res)=>{
    const {name, email, bio} = req.body;

    if(!name || !email){
        return res.status(400).json({
            message: "Nombre y email son obligatorios"
        });
    }

    //crear nuevo autor
    const newAuthor = {
        id: authors.length +1,
        name,
        email,
        bio: bio || ""
    };

    authors.push(newAuthor);

    res.status(201).json(newAuthor);
});

//endepoint PUT actualizar autores
router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {name, email, bio} = req.body;

    const author = authors.find(a => a.id === parseInt(id));

    //si existe
    if(!author){
        return res.status(401).json({
            message: "Usuario no encontado"
        });
    }

    //campos olbigatorios
    if(!name || !email){
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
});



export default router;