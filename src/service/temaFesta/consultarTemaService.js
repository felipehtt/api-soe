import { consultarTema } from "../../repository/temaRepository.js";

export default async function consultarTemaService(){

    let registros = await consultarTema();

    return registros;
    
}