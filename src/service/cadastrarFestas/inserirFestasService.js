import { inserirFesta } from "../../repository/cadastrarFestasRepository.js";

export default async function inserirFestaService(festa){

    let id = await inserirFesta(festa);

    return id;
    
}