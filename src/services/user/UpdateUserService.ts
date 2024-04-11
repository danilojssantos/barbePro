import prismaClient from "../../prisma";
interface UserRequest{
    user_id: string;
    name: string;
    endereco: string
}

class UpdateUserService {
    async excute({user_id, name, endereco}: UserRequest){

        try {
            const userAlreadyExists = await prismaClient.user.findFirst({
                where:{
                    id: user_id,
                }
            });

            if (!userAlreadyExists) {
                throw new Error("Usuario não encontrado!")
                
            }

            const userUpdated = await prismaClient.user.update({
                where:{
                    id: user_id
                },
                data:{
                    name,
                    endereco
                },
                select:{
                    name: true,
                    email: true,
                    endereco: true,
                }
            })
            return userUpdated;
            
        } catch (err) {
            console.log(err);
            throw new Error("Erro ao atulizar o usuario")
            
        }

    }
}

export{ UpdateUserService}