import { Request, Response } from "express";

import {UserDetailsService} from  '../../services/user/DetailsUserService'

class DetailsUserController{
    async handle(request: Request, response:Response){

        const user_id = request.user_id;
        console.log(user_id)
        const userDetailsService = new UserDetailsService();

        const detailUser = await userDetailsService.execute();

        return response.json(detailUser)

    }
}

export {DetailsUserController}
