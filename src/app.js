import  express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("API funcionando correctamente");
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
});