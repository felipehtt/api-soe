import { inserirTema } from "../../repository/temaRepository.js";

export default async function inserirTemaService(id){

    let idTema = await inserirTema(id);

    return idTema;
    
}