import { consultarFestaPorId } from "../../repository/cadastrarFestasRepository.js";

export default async function consultarFestaPorIdService(id){

    let registros = await consultarFestaPorId(id);

    if(registros == 0){

        throw new Error('Nenhuma festa encontrada.');
        
    }

    let festa = registros[0];

    return festa;
    
}