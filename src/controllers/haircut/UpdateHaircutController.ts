import { Request, Response } from "express";
import { UpdateHaircutService } from "../../services/haircut/UpdateHaircutService";

class UpdateHaircutController{
    async handle(request: Request, respose: Response){
        const user_id = request.user_id;
        const {name, price, status, haircut_id} = request.body;

        const updateHarcut = new UpdateHaircutService();

        const haircut = await updateHarcut.execute({
            user_id,
            name,
            price,
            status,
            haircut_id
        })

        return respose.json(haircut)


    }
}

export { UpdateHaircutController}