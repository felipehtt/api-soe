import jwt from 'jsonwebtoken';

const key = '--=!Intencao=--';

export function gerarToken(userInfo){

    return jwt.sign(userInfo, key);

}

export function autenticacao(req, resp, next){

    try {
        
        let token = req.headers['x-access-token'];

        if(token === undefined)
        token = req.query['x-access-token'];

        let signed = jwt.verify(token, key);

        req.user = signed;

        next();

    } 
    catch(e){
        resp.status(401).end();
    }

}

export function autenticar(req, resp, next){

    return autenticacao(req, resp, next);
    
}
