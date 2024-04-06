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
    console.log(authToken);
}