#  Blog API REST

Esta es una API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y sus publicaciones.

---

##  Características

Permite:

- Crear autores y posts
- Obtener autores y posts
- Actualizar autores y posts
- Eliminar autores y posts

---

##  Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- dotenv

---

##  Estructura del proyecto

```bash
BLOG-API/
│
├── src/
│   ├── controllers/
│   ├── data/
│   ├── db/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   └── app.js
│
├── .env
├── .env.example
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

##  Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/blog-api.git
```

### 2. Entrar al proyecto

```bash
cd blog-api
```

### 3. Instalar dependencias

```bash
npm install
```

---

##  Base de datos

### 1. Crear base de datos

```sql
CREATE DATABASE blog_api;
```

### 2. Ejecutar scripts

```bash
psql -U postgres -d blog_api -f src/db/schema.sql

psql -U postgres -d blog_api -f src/db/seed.sql
```

---

##  Ejecutar proyecto

```bash
npm run dev
```

---

##  Endpoints

###  Authors

```http
GET /authors
GET /authors/:id
POST /authors
PUT /authors/:id
DELETE /authors/:id
```

###  Posts

```http
GET /posts
GET /posts/:id
POST /posts
PUT /posts/:id
DELETE /posts/:id
```

---

##  Variables de entorno

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=blog_123
DB_NAME=blog_api
```

---

##  Deploy

Puedes desplegar este proyecto en:

- Render
- Railway
- Vercel
- Heroku

---

## Autor

Chary Mayerly Morales Perez

GitHub:
https://github.com/tuusuario

---

##  Licencia

Este proyecto está bajo la licencia MIT.