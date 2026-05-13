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

export default router;