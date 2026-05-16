
import pool from "../db/db.js";

// obtener autores
export const getAllAuthors = async () => {

    const result = await pool.query(
        "SELECT * FROM authors"
    );

    return result.rows;
};


//OBTENER ID
export const getAuthorByIdService = async(id)=>{

    const result = await pool.query(
        "SELECT *FROM authors WHERE id =$1",
        [id]
    );

    return result.rows[0];
};

//CREAR AUTOR post
export const createAuthorService = async(
    
    name,
    email,
    bio
)=>{

    const result = await pool.query(
        `
        INSERT INTO authors(name, email, bio)
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        [name, email, bio]
    );

    return result.rows[0];
};

//ACTUALIZAR AUTOR 
export const updateAuthorService =  async (
    
    id,
    name,
    email,
    bio
)=>{

    const result = await pool.query(
        `
        UPDATE authors
        SET
        name = $1,
        email = $2,
        bio = $3
        WHERE id =$4
        RETURNING *
        `,
        [name, email,bio, id]
    );
    return result.rows[0];
};


//eliminar autor
export const deleteAuthorService = async (
    name,
    email,
    bio

)=>{
    const result = await pool.query(
        `
        DELETE FROM authors
        WHERE id =$1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
}; 
