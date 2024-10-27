import { alterarAdm } from "../../repository/admRepository.js";

export default async function alterarAdmService(adm, id) {

    let linhasAfetadas = await alterarAdm(adm, id);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma informação alterada.');

    }

}