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