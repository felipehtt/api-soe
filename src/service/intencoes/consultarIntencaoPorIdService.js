import { consultarIntencaoPorId } from "../../repository/intencaoRepository.js";

export default async function consultarIntencaoPorIdService(id){

    let registros = await consultarIntencaoPorId(id);

    if(registros == 0){

        throw new Error('Nenhuma intenção encontrada.')
        
    }

    let intencao = registros[0];

    return intencao;
    
}