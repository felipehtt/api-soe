import { alterarFesta } from "../../repository/cadastrarFestasRepository.js";

export default async function alterarFestaService(festa, id){

    let linhasAfetadas = await alterarFesta(festa, id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma festa aletrada.')

    }
    
}