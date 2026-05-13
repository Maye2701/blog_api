import  express from "express";
import dotenv from "dotenv";
import authorsRoutes from "./routes/authors.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("API funcionando correctamente");
});

app.use("/authors", authorsRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
});