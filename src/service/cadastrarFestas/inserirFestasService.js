import { inserirFesta } from "../../repository/cadastrarFestasRepository.js";
import { validarCamposObrigatorios } from "../../validation/cadastrarFestas/cadastrarFestasValidation.js";

export default async function inserirFestaService(festa) {

    validarCamposObrigatorios(festa)

    let id = await inserirFesta(festa);

    return id;

}