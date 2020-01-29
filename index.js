const express = require('express');

const server = express();

server.use(express.json());

// Array com os projetos
const projects = [];

// Verificar se o Projeto existe
function checkProjectExists(req, res, next) {
    const { id } = req.params;
    const project = projects.find(x => x.id == id);

    if (!project){
        return res.status(400).json({ error: 'Projeto não encontrado'});
    }

    return next();
}

// Contagem de requisições
function logRequests(req, res, next) {
    console.count("Requisições Realizadas");

    return next();
}

// Função utilizada de modo global
server.use(logRequests);

// Adicionar novo Projeto
// body: id, title
server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    // Criar objeto
    const project = {
        id,
        title,
        tasks: []
    }

    // Adicionar no array
    projects.push(project);

    // Retornar OK (200) e a projeto adicionado
    return res.json(project);
});

// Buscar todos os projetos
server.get('/projects', (req, res) => {
    return res.json(projects);
});

// Atualizar projeto
// params: id
// body: title
server.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    // Buscar o projeto pelo id
    const project = projects.find(x => x.id == id);

    project.title = title;

    return res.json(project);
});

// Remover projeto
// params: id
server.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;

    // Buscar projeto pelo id
    const projectIndex = projects.findIndex(x => x.id == id);

    // Remove do Array
    projects.splice(projectIndex, 1)

    return res.json({ sucess: 'Removido com Sucesso'});    
});

// Adicionar Tarefa do Projeto
// Params: id
// Body: title
server.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;    
    const { title } = req.body;

    const project = projects.find(x => x.id == id);

    project.tasks.push(title);

    return res.json(project);
});

// localhost:3000/project
server.listen(3000);