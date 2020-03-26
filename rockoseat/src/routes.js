const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/* routes.get('/users', (request, response) => {    
    return response.send(lista)
});

routes.get('/users/:id', (request, response) => {
    const id = request.params.id
    lista.forEach(element => {
        if(element.id == id){
            return response.send(element);
        }
    });
    return response.send("Nao encontrado")
});

routes.post('/users', (request, response) => {
    if(request.body.nome != null){
        const id = lista.length + 1
        const newData = {
            'id': id,
            'nome': request.body.nome
        }
        lista.push(newData);
        return response.send("Salvo com sucesso")
    }
    return response.status(404).send("Error");
});*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;