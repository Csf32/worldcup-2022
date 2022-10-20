import Router from '@koa/router';

export const router = new Router()

const users = []

router.get('/users', async ctx =>{
        ctx.body =[]
    })
    
    router.get('/users', async ctx =>{
        const user = {
            username: ctx.request.body.username
        }
        users.push(user)
        ctx.body = user
    })