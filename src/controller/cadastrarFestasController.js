import { Router } from "express";
const endpoints = Router();

import { autenticar } from "../utils/jwt";

import inserirFestaService from "../service/cadastrarFestas/inserirFestaService.js";
import consultarFestaService from  "../service/cadastrarFestas/consultarFestaService.js"
import alterarFestaService from "../service/cadastrarFestas/alterarFestaService.js";
import deletarFestaService from "../service/cadastrarFestas/deletarFestaSevice.js";

endpoints.post('/festa/cadastrar', autenticar, async (req, resp) => {

    try {
    
        let festa = req.body;

        let id = await inserirFestaService(festa);

        resp.send({

            idFesta: id

        })

    }
    catch(err){

        resp.status(400).send({
            erro: err.message
        })        

    }

})


endpoints.get('/festa', autenticar, async (req, resp) => {

    try {
    
        let idAdm = req.user.idAdm;

        let registros = await consultarFestaService(idAdm)

        resp.send(registros);

    }
    catch(err){
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/festa', autenticar)

export default endpoints;