import prismaClient from "../../prisma";
interface HaircutRequest{
    user_id: string;
    haircut_id: string;
    name: string;
    price: number;
    status: string | boolean;
}

class UpdateHaircutService{
    async execute({user_id, haircut_id, name, price, status = true}:HaircutRequest){

        //Buscar a subscripton do user logado 

        const user = await prismaClient.user.findFirst({
            where:{
                id: user_id
            },
            include:{
                subscriptions: true,
            }
        })
        //se o usurio nao for premiun executa essa condiçao e trava o usuario
        if(user?.subscriptions?.status !== 'active'){// o simbolo ? permite vim nulo
            throw new Error("Ops! você nao autorizado")
        }

        //se o usuario fot premiun atuliza o item 

        const haircut = await prismaClient.haircut.update({
            where:{
                id: haircut_id,
            },
            data:{
                name: name,
                price: price,
                status: status === true ? true : false
            }
            
        })




    }
}


export {UpdateHaircutService}