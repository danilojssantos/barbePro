import prismaClient from "../../prisma";

class UserDetailsService{
    async execute(){
        return{ ok: true}
    }
}

export {UserDetailsService}