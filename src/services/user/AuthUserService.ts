import prismaClient from "../../prisma";
interface AuthUserRequest{

    email: string;
    password: string
}
class AuthUserService{
    async execute({email, password}: AuthUserRequest){

        console.log(email);
        console.log(password)

        return {ok: true}
    }

}
export { AuthUserService}