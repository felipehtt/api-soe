import { consultarFestaPorId } from "../../repository/cadastrarFestasRepository.js";

export default async function consultarFestaPorIdService(id){

    let registros = await consultarFestaPorId(id)

    let festa = registros[0];

    return festa;
    
}