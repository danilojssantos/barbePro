import { Request, Response } from "express";
import {UpdateUserService} from '../../services/user/UpdateUserService'

class UpdateUserController{
    async handle(request: Request, response: Response){
        //pega nome e endereço que vem da requisição
        const { name, endereco} = request.body;
        //pega o id do token
        const user_id = request.user_id;
        //inicia o serviço ou seja liga service com a controller
        const updateUser = new UpdateUserService();
        
        const user = await updateUser.excute({
            user_id,
            name,
            endereco
        })
        //esse retorno que vai para frontEnd
        return response.json(user);
    }
}

export {UpdateUserController}