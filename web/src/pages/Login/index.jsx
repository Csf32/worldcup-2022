
//Fazer um alias para não ficar voltando pastas com './../../..

    //Esse método de import mudou para o vite.config para função alias
    //import { Icon } from '../../components'
import { Icon, Input } from '@/components'

//Foi exportado:

    //Como os inputs do formulário são iguais:
    //props é para pegar tudo que tiver na div
    //const Input = ({name, type, placeholder, label, ...props}) => (
    //
    //    <div className="flex flex-col">
    //        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
    //        <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:border-1" type={type} placeholder={placeholder}/>
    //    </div>
                        
    //)

export const Login = () => {

    return(
        <div>
           {/*Container: limita o tamanho da tela
            justify não funciona com o container como filho de uma classe*/}
           
            <header className=" p-4 flex border-b border-red-300 ">
                <div className="container max-w-xl flex justify-center">
                    <img src="/src/assets/images/logo/logo-fundo-branco.svg" className="w-28 md:w-40"alt="logo" />
                    <Icon name="profile" className="h-3"/>
                </div>
               
            </header>
                
            <main className="container max-w-xl p-4">

                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name ="arrowLeft" className="h-8"/>
                    </a>
                    <h2 className="text-xl font-bold">Entre na sua conta</h2>
                </div>
                
             
                <form className="p-4 space-y-6">
                
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
                    <a href='/dashboard' className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl"> 
                        Entrar
                    </a>
                   
                </form>

            </main>
        </div>
    )
       
}