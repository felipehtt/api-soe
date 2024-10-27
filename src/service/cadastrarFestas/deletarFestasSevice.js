import { deletarFesta } from "../../repository/cadastrarFestasRepository.js";

export default async function deletarFestaService(id) {

    let linhasAfetadas = await deletarFesta(id);

    if (linhasAfetadas == 0) {

        throw new Error('Nenhuma festa deletada.')

    }

}