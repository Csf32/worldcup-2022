//hunches será responsável por mudar a quantidade de opções por jogo 
//Vai precisar refatorar pois sempre cria uma conexão com o banco
import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'
const prisma = new PrismaClient()


export const create = async (ctx) => {
    
    if (!ctx.headers.authorization) {
        ctx.status = 401
        return
    }

//Decodificando o token:
    const [type, token] = ctx.headers.authorization.split(" ")
    console.log({ type, token})
   
    try {
            const data = jwt.verify(token, process.env.JWT_SECRET)
        
    //Criando a opção para o envio ao banco de dados
        if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
            ctx.status = 400
            return
        }
    
        const userId = data.sub
    //Destruir
    //Se o usuário não digitar nada no outro time, e envia para o banco
        const { gameId } = ctx.request.body

        const homeTeamScore = parseInt(ctx.request.body.homeTeamScore)
        const awayTeamScore = parseInt(ctx.request.body.awayTeamScore)

        try {

            //[hunch] vai pegar só esse ítem
            const [hunch] = await prisma.hunch.findMany ({

            //Se existir um gameId
    
                where: { gameId, userId },
                //Pra fazer o upsert dá serto, os dados precisam ser @unique
            })

            // Se o ctx.body =hunch receber (?) o await prisma...
            ctx.body = hunch
            ? await prisma.hunch.update({
                    where: {
                        id: hunch.id // Esse id foi pego no findMany
                    },
                    data: {
                        homeTeamScore, awayTeamScore
                    }
                })

            //Senão (:)
            
                : prisma.hunch.create({
                    data: {userId, gameId, homeTeamScore, awayTeamScore}
                })
                
        
            //Koa já trata como Ok sem precisar redigir:
            //   ctx.status = 200

            }

            catch (error) {
                console.log(error)
                ctx.body = error
                ctx.status = 500
        }
            }

        
        catch (error) {
            ctx.status = 401
            return
        }

//Fazer requisição http no JS com a biblioteca do axios e instala na pasta web

}