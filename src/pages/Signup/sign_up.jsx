

import { Icon } from '../../components'

const Input = ({name, type, placeholder, label, ...props}) => (

    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:border-1" type={type} placeholder={placeholder}/>
    </div>
                    
)

export const Signup = () => {

    return(
        <div>
          
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
                
             
                <form className="p-4 space-y-6">
                
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder= "Digite seu nome"
                    />
               
                    <Input
                       type="text"
                       name="username"
                       label="Seu nome de usuário"
                       placeholder= "Digite um nome de usuário"
                
                    />

                    <Input
                        type="text"
                        name="email"
                        label="Seu e-mail"
                        placeholder= "Digite seu e-mail"
                    />
               
                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder= "Digite sua senha"
                    />

                    <a href='/dashboard' className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl"> 
                        Criar minha conta
                    </a>
                   
                </form>

            </main>
        </div>
    )
       
}