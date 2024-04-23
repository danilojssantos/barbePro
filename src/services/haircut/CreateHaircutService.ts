import prismaClient from "../../prisma";
interface HairCutRequest{
    user_id: string;
    name: string;
    price: number;
}
class CreateHaircutService{
    async execute({user_id, name, price}:HairCutRequest){

        if (!name || !price) {
            throw new Error("Error")
        }

        const haircut = await prismaClient.haircut.create({
            data:{
                name: name,
                price:price,
                user_id: user_id
            }
        })

        return haircut;

    }

}
export {CreateHaircutService}