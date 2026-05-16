import  express from "express";
import dotenv from "dotenv";
import authorsRoutes from "./routes/authors.routes.js";
import pool from "../src/db/db.js"

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("API funcionando correctamente");
});

app.use("/authors", authorsRoutes);


pool.connect()
    .then(()=>{
        console.log("conectado a postegresSQL");
    })
    .catch((error)=>{
        console.log("eroro de conexion". error);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
});