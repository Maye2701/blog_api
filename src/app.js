import  express from "express";
import dotenv from "dotenv";
import authorsRoutes from "./routes/authors.routes.js";
import pool from "./db/db.js";
import postsRoutes from "./routes/posts.routes.js";
import { errorHandler } from "./middlewares/error.middlewares.js";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

const swaggerDocument = YAML.load("./src/docs/openapi.yaml");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res)=>{
    res.send("API funcionando correctamente");
});

app.use("/authors", authorsRoutes);

app.use("/posts", postsRoutes);

app.use(errorHandler);


pool.connect()
    .then(()=>{
        console.log("conectado a postegresSQL");
    })
    .catch((error)=>{
        console.log("error de conexion", error);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en puerto ${PORT}`);
});

