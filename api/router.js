import Router from '@koa/router'
import * as users from './app/users/index.js'
import * as games from './app/games/index.js'
import * as hunches from './app/games/index.js'

export const router = new Router()

router.post('/hunches', hunches.create)
router.post('/users', users.create)
//router.get('/users', users.list) não precisa, pois evita que ele seja retornado
router.get('/games', games.list)
router.get('/login', users.login)
