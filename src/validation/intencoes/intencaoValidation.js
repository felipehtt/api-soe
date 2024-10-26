export function validarCamposIntencao(intencao){

    if(!intencao.nomeCliente){
        throw new Error('Campo do nome é obrigatório.');
    }

    if(!intencao.telefone){
        throw new Error('Campo do telefone é obrigatório.')
    }

    if(!intencao.cep){
        throw new Error('Campo do cep é obrigatório.')
    }

    if(!intencao.dataFesta){
        throw new Error('Campo data da festa é obrigatório.')
    }

    if(!intencao.tipoFesta){
        throw new Error('Campo tipo de festa é obrigatório.')
    }

    if(!intencao.temaFesta){
        throw new Error('Campo tema da festa é obrigatório.')
    }

    if(!intencao.dataIntencao){
        throw new Error('Campo data da sua intenção é obrigatório.')
    }
    
}