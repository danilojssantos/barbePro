import {Router, Request, Response} from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import {AuthUserController} from './controllers/user/AuthUserController'
import {DetailsUserController} from './controllers/user/DetailsUserController'
import {isAuthentucated} from './middlewares/isAuthentucated'
import {UpdateUserController} from './controllers/user/UpdateUserController'
const router = Router()


//router.get('/teste', (req: Request, res: Response)=>{
 //return res.json({ok: true})
//})

//--- Rotas USER POST ----
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
//--- Rotas USER GET ----
router.get('/me',isAuthentucated, new DetailsUserController().handle)
router.put('/users',isAuthentucated, new UpdateUserController().handle)


export{router};