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
        //verficar quantos modelos esse usuario ja tem cadastrado
        const myHaircuts = await prismaClient.haircut.count({
            where:{
                user_id: user_id
            }
        })

        //verificar se usuario e premiun
        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id,
            },
            include:{
                subscriptions:true,

            }
        })

        //validação limite de caso nao seja premiun
        if(myHaircuts >= 3 && user?.subscriptions?.status !== 'active'){
            throw new Error("Não Autorizado");
            
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