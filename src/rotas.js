import intencaoController from "./controller/intencaoController.js";
import admController from "./controller/admController.js";
import cadastrarFestasController from "./controller/cadastrarFestasController.js"

export default function adicionarRotas(servidor){

    servidor.use(intencaoController);
    servidor.use(admController);
    servidor.use(cadastrarFestasController);

}