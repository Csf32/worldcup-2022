//Criar o cadastro dos usuários

import { PrismaClient } from "@prisma/client"

//importando o bcrypt
import bcrypt from 'bcrypt'

import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const create = async (ctx) => {

    //Puxa da biblioteca do bcrypt o saltRounds com promise, pois queremos que a execução termine
    //saltRounds é a quantidade de caracteres criptografados que será gerado
    //Como é uma promise = await

    const password =  await bcrypt.hash(ctx.request.body.password, 10)
    
    const data = {
        name: ctx.request.body.name,
        username: ctx.request.body.username,
        email: ctx.request.body.email,
    //É preciso criptografar a senha e não deixar aparecer no banco
    //Para criptografar, utiliza a bilbioteca do bcrypt com npm install bcrypt
    
        password,
    }
    //user é o nome do modelo que importara os outros modelos
    //Create pois só cria um usuário

    try {

        //É preciso agora colocar o servidor para não exibir a senha criptografada:
        //Usa o método de destruição com Rest
        const { password, ...user} = await prisma.user.create ({ data })
        
    //Depois de criar o usuário precisa por o ctx.body passando o user
        ctx.body = user
        //Status do protocolo http
        //http: 100 - 199 são informativas
        //http: 200-299 são de sucesso
        //300-399 são de redirecionamento
        //400-499 erro do cliente pedido que não existe
        //500 erro do servidor
        //httpstatuses.com
        ctx.status = 201

    }
    catch(error) {

        console.log(error)
        ctx.body = error
        ctx.status = 500
    }
    
}

//Login da aplicação sem o jwt pegando os dados do front
//Vai utilizar o token jwt instalando com o node js
export const login = async ctx => {

//authorization do tipo basic base64 que o navegador cria para enviar os dados de login e senha para o banco

//base 64 é a forma

//Para pegar a chave
    const [type, token] = ctx.headers.authorization.split(" ")

    //Para pegar o token que é enviado e decodificar

    const [emai, plainTextPassword] = atob(token).split(":")

    console.log(decodedToken)

    //Buscar pelo e-mail
    const user = await prisma.user.findUnique ({
        where: { email }
    })

    //Verificar se as senhas são iguais
    if (!user) {
        ctx.status = 404
        return
    }

    const passwordMatch = await bcrypt.compare(plainTextPassword, user.password)

    if (!passwordMatch) {
        ctx.status = 404
        return
    }

    //Identificar no banco de dados
    const { password, ...result} = user
    ctx.body = result
}
