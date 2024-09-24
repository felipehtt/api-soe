import { alterarTema } from "../../repository/temaRepository.js"; 

export default async function alterarTemaService(tema, id){

    let linhasAfetadas = await alterarTema(tema, id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhum tema alterado.');

    }

}
