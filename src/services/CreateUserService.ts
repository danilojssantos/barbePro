interface UserRequest{
    name: string,
    email: string,
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: UserRequest){
        console.log(name)
        console.log(email)
        return {ok: true}
    }
}

export {CreateUserService}