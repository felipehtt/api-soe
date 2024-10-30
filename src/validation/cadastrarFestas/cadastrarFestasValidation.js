export function validarCamposObrigatorios(festa) {

    if (!festa.nomeCliente) {
        throw new Error('Preencha o nome do cliente.');
    }

    if (!festa.telefone) {
        throw new Error('Preencha o telefone do cliente.');
    }

    if (!festa.dataFesta) {
        throw new Error('Preencha a data da festa.');
    }

    if (!festa.endereco) {
        throw new Error('Preencha o endereço da festa.');
    }

    if (!festa.distanciaLocal) {
        throw new Error('Preencha a distancia do local.');
    }

    if (!festa.tipoFesta) {
        throw new Error('Preencha o tipo da festa.');
    }

    if (!festa.temaFesta) {
        throw new Error('Preencha o tema da festa.');
    }

    if (!festa.quantidadePessoas) {
        throw new Error('Preencha o campo de quantidade de pessoas.');
    }

    if (!festa.precoTotal) {
        throw new Error('Preencha o valor Total.');
    }

}