import { alterarFesta } from "../../repository/cadastrarFestasRepository.js";
import { validarCamposObrigatorios } from "../../validation/cadastrarFestas/cadastrarFestasValidation.js";

export default async function alterarFestaService(festa, id){

    validarCamposObrigatorios(festa)

    let linhasAfetadas = await alterarFesta(festa, id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma festa aletrada.')

    }
    
}