import { consultarAdmPorId } from "../../repository/admRepository.js";

export default async function consultarAdmPorIdService(id){

    let registros = await consultarAdmPorId(id);

    if(registros == 0){

        throw new Error('Admin não encontrado.')
        
    }

    let adm = registros[0]

    return adm;
    
}