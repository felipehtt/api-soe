import { consultarIntencao } from "../../repository/intencaoRepository.js";

export default async function consultarIntencaoService() {

    let registros = await consultarIntencao();

    if (registros == 0) {

        throw new Error('Nenhuma intenção encontrada.')

    }

    return registros;

}
