INSERT INTO authors (name, email, bio)
VALUES
(
    'Ana García',
    'ana@example.com',
    'Backend developer'
),
(
    'Carlos Ruiz',
    'carlos@example.com',
    'Software engineer'
),
(
    'María López',
    'maria@example.com',
    'REST API specialist'
);

INSERT INTO posts
(title, content, author_id, published)
VALUES
(
    'Introducción a Node.js',
    'Node.js es un runtime de JavaScript',
    1,
    true
),
(
    'PostgreSQL vs MySQL',
    'Ambas bases de datos tienen ventajas',
    2,
    true
),
(
    'APIs RESTful',
    'REST es un estilo arquitectónico',
    1,
    false
);