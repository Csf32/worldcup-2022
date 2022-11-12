import axios from 'axios'

//Instala o formik npm install formik yup para não deixar o usuário enviar os dados do login
//Sem preencher
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Icon } from '../../components'
import { Input } from '../../components'

//const Input = ({name, type, placeholder, label, ...props}) => (

  //  <div className="flex flex-col">
    //    <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
      //  <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:border-1" type={type} placeholder={placeholder}/>
    //</div>

//)

//Regras de validação do cadastro

const validationSchema = yup.object().shape({
    name: yup.string().required("Preencha seu nome"),
    username: yup.string().required("Preencha seu CPF"),

    //O email() é para verificar se é um email mesmo ou texto qualquer
    email: yup.string().email("Informe um e-mail válido").required("Preencha seu e-mail"),
    
    password: yup.string().required("Preencha sua senha")
  })


export const Signup = () => {
    
    const formik = useFormik ({
        //Quando for enviado executa essa função
        //O onSubmit só pe chamado se todos os campos estiverem chamados
        //porém essa validação tem que ser feita no backend
        onSubmit: async (values) => {
          
            //axios é uma promisse, logo precisa colocar um async await
         const res = await axios ({ 
            method: 'post',
            baseURL: 'http://localhost:3000',
            url: '/users',
            data: values
          }) 
          console.log(res.data)

          //Pegar o retorno da requisição que no caso é o usuário criado

          //res.data
        },
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        },

        validationSchema
    })

    return(
        <div>
           {/*Container: limita o tamanho da tela
            justify não funciona com o container como filho de uma classe*/}
           
            <header className=" p-4 flex border-b border-red-300 ">
                <div className="container max-w-xl flex justify-center">
                    <img src="/src/assets/images/logo/logo-fundo-branco.svg" className="w-32 m:w-40"alt="logo" />
                </div>
               
            </header>
                
            <main className="container max-w-xl p-4">

                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name ="arrowLeft" className="h-8"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie sua conta</h2>
                </div>
                
             
                <form className="p-4 space-y-6" onSubmit = {formik.handleSubmit}>
                
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder= "Digite seu nome"

                        //Para o usuário Visulizar os erros de preenchimento:
                        error = { formik.touched.name && formik.errors.name }
                        
                        //Acessar os valores do input
                        value = { formik.values.name }
                        
                        //Mandar para o formik
                        onChange = { formik.handleChange }

                        //Ao clicar fora, gera o evento:
                        onBlur = { formik.handleBlur }
                        
                        
                    />
               
                    <Input
                       type="text"
                       name="username"
                       label="Seu nome de usuário"
                       placeholder= "Digite um nome de usuário"

                     //Para o usuário Visulizar os erros de preenchimento:
                     //Quando clica no campo e preenche, evita dos outros serem validados automaticamente
                        error = { formik.touched.username && formik.errors.username}
                     //Acessar os valores do input
                        value = { formik.values.username }
                        
                        //Mandar para o formik
                        onChange = { formik.handleChange }

                        //Ao clicar fora, gera o evento:
                        onBlur= { formik.handleBlur }
                    />

                    <Input
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder= "Digite seu e-mail"

                        //Para o usuário Visulizar os erros de preenchimento:
                        error = { formik.touched.email && formik.errors.email }
                             //Acessar os valores do input
                        value = { formik.values.email }
                        
                        //Mandar para o formik
                        onChange = { formik.handleChange }

                        //Ao clicar fora, gera o evento:
                        onBlur= { formik.handleBlur }
                    />
               
                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder= "Digite sua senha"
                        
                        //Para o usuário Visulizar os erros de preenchimento:
                        error = { formik.touched.password && formik.errors.password } 
                        //Acessar os valores do input
                        value = { formik.values.password }
                        
                        //Mandar para o formik
                        onChange = { formik.handleChange }

                        //Ao clicar fora, gera o evento:
                        onBlur= { formik.handleBlur }
                    />

                {/* Pode-se fazer do jeito tradicional abaixo, ou criar a constante passando parâmetros únicos
                importando somente uma vez a div do form e chamando o Input

                    <div className="flex flex-col"> 
                        <label htmlFor="email">Seu e-mail</label>
                        <input name="email" id="email" type="text" placeholder="Digite seu e-mail" />
                    </div>
                    
                    <div className="flex flex-col">
                        <label htmlFor="password">Sua senha</label>
                        <input name="password" id="password" type="password" placeholder="Digite sua senha" />
                    </div>
              
                    w-full é tomar toda a tela*/}
                    <button type = "submit" className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"
                    //Se o botão não estiver preenchido com as validações do formik, então não será possível clicar:
                    disabled = { !formik.isValid }> 
                            Criar minha conta
                    </button>
                   
                </form>

            </main>
        </div>
    )
       
}