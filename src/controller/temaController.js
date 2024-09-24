import { Router } from "express";
const endpoints = Router();

import inserirTemaService from "../service/temaFesta/inserirTemaService.js";
import consultarTemaService from '../service/temaFesta/consultarTemaService.js';
import alterarTemaService from '../service/temaFesta/alterarTemaService.js';
import deletarTemaService from "../service/temaFesta/deletarTemaService.js";

endpoints.post('/temas', async (req, resp) => {

    try {

        let tema = req.body;

        let id = await inserirTemaService(tema);

        resp.send({

            idTema: id

        })

    }
    catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }

})


endpoints.get('/temas', async (req, resp) => {

    try {
    
        let registros = await consultarTemaService();

        resp.send(registros);

    } 
    catch(err) {
        resp.status(400).send({
            error: err.message
        })
    }

})


endpoints.put('/temas/:id', async (req, resp) => {

    try {
    
        let tema = req.body;

        let id = req.params.id;

        await alterarTemaService(tema, id);

        resp.send();

    } 
    catch(err){
        resp.status(400).send({
            error: err.message
        })
    }

})


endpoints.put('/temas/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        await deletarTemaService(id);

        resp.send();

    } 
    catch(err){
        resp.status(400).send({
            error: err.message
        })
    }

})

export default endpoints;