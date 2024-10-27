import { consultarAdm } from "../../repository/admRepository.js";

export default async function consultarAdmService() {

    let registros = await consultarAdm();

    if (registros == 0) {

        throw new Error('Nenhuma informação encontrada.')
    }

    return registros;

}