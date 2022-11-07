//hunches será responsável por mudar a quantidade de opções por jogo 
//Vai precisar refatorar pois sempre cria uma conexão com o banco
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

//Criando a opção para o envio ao banco de dados
export const create = async (ctx) => {

    if(!ctx.request.body.homeTeamScore && !ctx.request.body.awayTeamScore) {
        ctx.status = 400
        return
    }
   

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