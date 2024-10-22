import { Router } from "express";
const endpoints = Router();

import { autenticar } from "../utils/jwt";

endpoints.post('/festa/cadastrar', autenticar, async (req, resp) => {

    try {
    
        let festa = req.body;

        let 
    }
    catch(err){
        

    }

})

export default endpoints;