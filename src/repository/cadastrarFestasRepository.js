import con from './connection.js';

export async function inserirFesta(festa){

    const comando = ` 
    
    insert into tb_festa (id_intencao, nome_cliente, telefone, data_festa, endereco, tipo_festa, tema_festa) 
    values (?, ?, ?, ?, ?, ?, ?)
    
    `;

    let response = await con.query(comando, [festa.idIntencao, festa.nomeCliente, festa.telefone, festa.dataFesta, 
    festa.endereco, festa.tipoFesta, festa.temaFesta]);

    let info = response[0];

    let id = info.insertId;

    return id;

}


export async function consultarFesta(idAdm){

    const comando = ` 
    
    select
    id_festa 		idFesta,
    id_intencao 	idIntencao,
    nome_cliente	nomeCliente,
    telefone,
    data_festa		dataFesta,
    endereco,
    tipo_festa		tipoFesta,
    tema_festa		temaFesta
    from tb_festa
    where id_adm = ?

    `;

    let response = await con.query(comando, [idAdm]);

    let registros = response[0];

    return registros;

}


export async function alterarFesta(festa, id){

    const comando = ` 
    
    update tb_festa
    set nome_cliente = ?,
       telefone = ?,
       data_festa = ?,
       endereco = ?,
       tipo_festa = ?,
       tema_festa = ?
    where id_festa = ?
    
    `;

    let response = await con.query(comando, [festa.idIntencao, festa.nomeCliente, festa.telefone, festa.dataFesta, 
    festa.endereco, festa.tipoFesta, festa.temaFesta, id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarFesta(id){

    const comando = ` 
    
    delete from tb_festa
    where id_festa = ?;

    `;

    let response = await con.query(comando, [id]);

    let info = response[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;
    
}