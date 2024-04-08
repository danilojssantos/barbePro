import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad{
    sub: string;
}

export function isAuthentucated (
    request: Request,
    response: Response,
    next: NextFunction
){
    //recebe o valor do token pelo authorization
    const authToken = request.headers.authorization;

    if (!authToken) {
        return response.status(401).end();
    }
   // console.log(authToken);
    //ignpra baure e so pega o toke 
   const [, token] = authToken.split(" ")
    //console.log(token);
    try {
        const {sub} = verify(
            token,
            process.env.JWT_SECRET
        ) as PayLoad;

        request.user_id = sub;

        return next()
        console.log(sub);
    } catch (err) {

        return response.status(401).end();
        
    }

}