import pool from "../db/db.js";

//GET TODOS LOS POST

export const getAllPosts = async () =>{

    const result = await pool.query(

        `
        SELECT
            posts.id,
            posts.title,
            posts.content,
            posts.published,
            authors.name AS author
        FROM posts
        JOIN authors
        ON posts.author_id = authors.id
        ORDER BY posts.id ASC
        `
    );

    return result.rows;
}


//obtener id
export const getPostByIdService = async (id) =>{

    const result = await pool.query(

    `
        SELECT
            posts.id,
            posts.title,
            posts.content,
            posts.published,
            authors.name AS author
        FROM posts
        JOIN authors
        ON posts.author_id = authors.id
        WHERE posts.id = $1
        `,
        [id]
    );

    return result.rows[0];
};


//crear autor post
export const createPostService = async(
    
    title,
    content,
    author_id,
    published
)=>{

    const result = await pool.query(
        `
        INSERT INTO posts (title, content, author_id, published)
        VALUES ($1, $2, $3, $4)
        RETURNING *
        `,
        [ title, content, author_id, published]
    );

    return result.rows[0];
};



//ACTUALIZAR AUTOR 
export const updatePostService =  async (
    
    id,
    title,
    content,
    author_id,
    published

)=>{

    const result = await pool.query(
        `
        UPDATE posts
        SET
            title = $1,
            content = $2,
            author_id = $3,
            published = $4
        
        WHERE id =$5
        RETURNING *
        `,
        [
        title,
        content,
        author_id,
        published,
        id]
    );
    return result.rows[0];
};


//eliminar autor
export const deletePostService = async (id)=>{
    const result = await pool.query(
        `
        DELETE FROM posts
        WHERE id =$1
        RETURNING *
        `,
        [id]
    );

    return result.rows[0];
}; 