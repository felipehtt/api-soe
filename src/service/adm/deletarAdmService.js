import { deletarAdm } from "../../repository/admRepository.js";

export default async function deletarAdmService(id){

    let linhasAfetadas = deletarAdm(id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma informação deletada')
    }
}