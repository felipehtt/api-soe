import { inserirTema } from "../../repository/temaRepository.js";

export default async function inserirTemaService(id){

    let id = await inserirTema(id);

    return id;
    
}