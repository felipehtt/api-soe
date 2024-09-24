import { deletarTema } from "../../repository/temaRepository.js";

export default async function deletarTemaService(id){

    let linhasAfetadas = await deletarTema(id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhum tema alterado.');

    }
    
}