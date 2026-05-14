import authors from "../data/authors.js";

export const getAllAuthors = ()=>{
    return authors;
};

//OBTENER ID
export const getAuthorByIdService = (id)=>{
    return authors.find(
        a => a.id === parseInt(id)
    );
};


//CREAR AUTOR
export const createAuthorService = (authorData)=>{
    const newAuthor = {
    id: authors.length + 1,
    ...authorData,
    bio: authorData.bio || ""
    };

    authors.push(newAuthor);

    return newAuthor;
};

//ACTUALIZAR AUTOR 
export const updateAuthorService = (id, data)=>{
    
    const author = authors.find(
        a => a.id === parseInt(id)
    );

    if (!author) {
        return null;
    }

    author.name = data.name;
    author.email = data.email;
    author.bio = data.bio || "";

    return author;
};


//eliminar autor
export const deleteAuthorService = (id)=>{
    const authorIndex = authors.findIndex(
        a => a.id === parseInt(id)
    );

    if (authorIndex === -1) {
        return false;
    }

    authors.splice(authorIndex, 1);

    return true;
};