import con from './connection.js'

export async function inserirAdm(adm) {

    const comando = ` 
    
    insert into tb_adm (nome, senha)
    values (?, ?);

    `;

    let resposta = await con.query(comando, [adm.nome, adm.senha]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}

export async function validarAdm(adm){

    const comando = `
    
    select 
    id_adm  idAdm,
    nome,
    senha
    from tb_adm
    where 
    nome = ? and senha = ?

    `;

    let registros = await con.query(comando, [adm.nome, adm.senha]);

    return registros[0][0];

}


export async function consultarAdm(){

    const comando = `
    
    select 
    id_adm idAdm,
    nome,
    senha
    from tb_adm
    
    `;

    let resposta = await con.query(comando)

    let registros = resposta[0];

    return registros;
    
}   


export async function alterarAdm(adm, id){

    const comando = ` 
    
    update tb_adm
    set nome = ?,
    senha = ?
    where id_adm = ?

    `;

    let response = await con.query(comando, [adm.nome, adm.senha, id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarAdm(id){

    const comando = `  
    
    delete from tb_adm
    where id_adm = ?
    
    `;

    let response = await con.query(comando, [id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


//buscando adm por id:
export async function consultarAdmPorId(id){
    
    const comando = ` 
    
    select 
    id_adm idAdm,
    nome,
    senha
    from tb_adm
    where id_adm = ?
    
    `;

    let response = await con.query(comando, [id]);

    let registros = response[0];

    return registros;
    
}