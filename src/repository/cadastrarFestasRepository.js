import con from './connection.js';

export async function inserirFesta(festa) {

    const comando = ` 
    
    insert into tb_festa (nome_cliente, telefone, data_festa, 
    endereco, distancia_local, tipo_festa, tema_festa, qtd_pessoas, preco) 
    values (?, ?, ?, ?, ?, ?, ?, ?, ?)
    
    `;

    let response = await con.query(comando, [festa.nomeCliente, festa.telefone, festa.dataFesta,
    festa.endereco, festa.distanciaLocal, festa.tipoFesta, festa.temaFesta, festa.quantidadePessoas, festa.precoTotal]);

    let info = response[0];

    let id = info.insertId;

    return id;

}


export async function consultarFesta(idAdm) {

    const comando = ` 
    
    select
    id_festa 			idFesta,
    nome_cliente		nomeCliente,
    telefone,
    data_festa			dataFesta,
    endereco,
    distancia_local		distanciaLocal,
    tipo_festa			tipoFesta,
    tema_festa			temaFesta,
    qtd_pessoas			quantidadePessoas,
    preco				precoTotal
    from tb_festa    

    `;

    let response = await con.query(comando, [idAdm]);

    let registros = response[0];

    return registros;

}


export async function alterarFesta(festa, id) {

    const comando = ` 
    
    update tb_festa
    set nome_cliente = ?,
    telefone = ?,
    data_festa = ?,
    endereco = ?,
    distancia_local = ?,
    tipo_festa = ?,
    tema_festa = ?,
    qtd_pessoas = ?,
    preco = ?
    where id_festa = ?;
    `;

    let response = await con.query(comando, [festa.nomeCliente, festa.telefone, festa.dataFesta,
    festa.endereco, festa.distanciaLocal, festa.tipoFesta, festa.temaFesta, festa.quantidadePessoas, festa.precoTotal, id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarFesta(id) {

    const comando = ` 
    
    delete from tb_festa
    where id_festa = ?;

    `;

    let response = await con.query(comando, [id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


//buscando por id
export async function consultarFestaPorId(id) {

    const comando = ` 
    
    select
    id_festa 			idFesta,
    nome_cliente		nomeCliente,
    telefone,
    data_festa			dataFesta,
    endereco,
    distancia_local		distanciaLocal,
    tipo_festa			tipoFesta,
    tema_festa			temaFesta,
    qtd_pessoas			quantidadePessoas,
    preco				precoTotal
    from tb_festa
    where id_festa = ?

    `;

    let response = await con.query(comando, [id]);

    let registros = response[0];

    return registros;

}