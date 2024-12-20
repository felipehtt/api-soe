import { alterarIntencao } from "../../repository/intencaoRepository.js";
import { validarCamposIntencao } from "../../validation/intencoes/intencaoValidation.js";
import { validandoDatasIntencao } from "../../validation/intencoes/intencaoValidation.js";

export default async function alterarIntencaoService(intencao, id) {

    validarCamposIntencao(intencao);

    validandoDatasIntencao(intencao);

    let linhasAfetadas = await alterarIntencao(intencao, id);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma intenção alterada.')

    }

}