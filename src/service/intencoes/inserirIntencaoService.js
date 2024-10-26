import { inserirIntencao } from "../../repository/intencaoRepository.js";
import { validarCamposIntencao } from "../../validation/intencoes/intencaoValidation.js";

export default async function inserirIntencaoService(intencao){

    validarCamposIntencao(intencao);

    let id = await inserirIntencao(intencao);

    return id;

}