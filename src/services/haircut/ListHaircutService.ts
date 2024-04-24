import prismaClient from "../../prisma";
interface HairCutRequest{
    user_id: string;
    status: boolean | string;

}
class ListHaircutService{
    async execute({user_id, status}: HairCutRequest){
        const haircut = await prismaClient.haircut.findMany({
            where:{
                user_id: user_id,
                status: status === 'true' ? true: false //valida se status e true ou false
            }
        })

        return haircut;

    }
}

export { ListHaircutService }