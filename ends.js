import express from 'express';
import cors from 'cors';

const servidor = express()
servidor.use(express.json());
servidor.use(cors());

servidor.get('feira/qraiva', (req, resp) => {

})

servidor.post('feira/qraiva', (req, resp) => {
    
})

servidor.listen(7000, console.log('Subiu na 7000.'))