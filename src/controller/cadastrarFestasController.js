import { Router } from "express";
const endpoints = Router();

import { autenticar } from "../utils/jwt.js";

import inserirFestaService from "../service/cadastrarFestas/inserirFestasService.js";
import consultarFestaService from "../service/cadastrarFestas/consultarFestasService.js"
import alterarFestaService from "../service/cadastrarFestas/alterarFestasService.js";
import deletarFestaService from "../service/cadastrarFestas/deletarFestasSevice.js";
import consultarFestaPorIdService from "../service/cadastrarFestas/consultarFestasPorIdService.js";

endpoints.post('/festa/cadastro', autenticar, async (req, resp) => {

    try {

        let festa = req.body;

        let id = await inserirFestaService(festa);

        resp.send({

            idFesta: id

        })

    }
    catch (err) {

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
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/festa/:id', autenticar, async (req, resp) => {

    try {

        let id = req.params.id;

        let festa = req.body;

        await alterarFestaService(festa, id);

        resp.send();

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/festa/:id', autenticar, async (req, resp) => {

    try {

        let id = req.params.id;

        await deletarFestaService(id);

        resp.send();

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})


//buscando com id
endpoints.get('/festa/:id', autenticar, async (req, resp) => {

    try {

        let id = req.params.id;

        let festa = await consultarFestaPorIdService(id);

        resp.send(festa);

    }
    catch (err) {

        resp.status(400).send({
            erro: err.message
        })

    }

})

/*buscando endereço por cep:
 viacep.com.br/ws/:cep/json/
*/

export default endpoints;