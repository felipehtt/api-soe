import { consultarFesta } from "../../repository/cadastrarFestasRepository.js";

export default async function consultarFestaService(idAdm){

    let registros = await consultarFesta(idAdm);

    return registros;
    
}