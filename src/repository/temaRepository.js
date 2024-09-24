import con from './connection.js';

export async function inserirTema(tema){

    const comando = `  
    
    insert into tb_tema(nm_tema)
	values(?)
    
    `;

    let resposta = await con.query(comando, [tema.nomeTema]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarTema(){

    const comando = ` 
    
    select id_tema,
       nm_tema nomeTema,    
       img_tema imagemTema   
    from tb_tema

    `;

    let resposta = await con.query(comando);

    let registro = resposta[0];

    return registro;

}


export async function alterarTema(tema, id){

    const comando = ` 
    
    update tb_tema
    set nm_filme = ?
    where id_tema = ?

    `;

    let resposta = await con.query(comando, [tema.nomeTema, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarTema(id){

    const comando = ` 
    
    delete from tb_tema
    where id_tema = ?

    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}