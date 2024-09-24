import temaController from './controller/temaController.js';

export default function adicionarRotas(servidor){

    servidor.use(temaController);

}