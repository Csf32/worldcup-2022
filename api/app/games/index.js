//hunches será responsável por mudar a quantidade de opções por jogo 
//Vai precisar refatorar pois sempre cria uma conexão com o banco

import { PrismaClient } from "@prisma/client"

//instalou a biblioteca do date-fns para usar na data que será enviado ao banco
import { addDays, formatISO } from 'date-fns'

const prisma = new PrismaClient()

//Criando a opção para o envio ao banco de dados
export const list = async (ctx) => {

//Construindo a query do banco para enviar a data ao backend
    const currentDate = ctx.request.query.gameTime
    
    //Passando as datas sem as horas
    const where = currentDate ? {

        gameTime: {

            //gte se a data =>
            gte: currentDate,

           //new Date, senão não consegue calcular e precisa passar novamente para o formato ISO, senão não envia para o banco
           
            lt: formatISO(addDays(new Date(currentDate), 1))
        }
    } : {}

     
    try {
        const games = await prisma.game.findMany ({ where })
        ctx.body = games
        ctx.status = 200
    
    }
    catch (error) {
        console.log(error)
        ctx.body = error
        ctx.status = 500
    }

}
    

