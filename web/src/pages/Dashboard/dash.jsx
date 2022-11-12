//importar o ícone
import { Icon, Card } from '@/components'

//Fragment é um componente que se usa para englobar todo mundo em um componente
// Fragment = <> é uma tag usada somente para não deixar os componentes fora de um grupo como div
export const Dashboard = () => ( 
    <>

        <header className="bg-red-500">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="/src/assets/images/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40"alt="logo" />
                <a href="/profile">
                    <Icon name="profile" className="w-10"/>
                </a>
              
            </div>
           
        </header>

        <main className="space-y-6">
            <section id = "header"className="bg-red-500 text-white p-4">
                <section className="space-y-2 container max-w-3xl p-4">
                    <span>Olá Caique</span>
                    <h3 className="text-2xl font-bold">Qual o seu palpite?</h3>
                </section>
            </section>

            <section id="content" className="container max-w-3xl p-4 space-y-4">

{/* Foi criado isso tudo no components para facilitar, pois será padrão

                <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
                    <span className="text-sm md:text-base text-gray-700 font-bold">7:00</span>
                    
                    <div className="flex space-x justify-center items-center">
                        Para garantir que virá com letra maiúscula no banco de dados tmb
                      
                        <span className="uppercase">SUI</span>
                        <img src="src/assets/images/flags/sui.png" alt="flag-Switzerland" />
                        [0.2] = opacidade no tailwind
                        <input max={10} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center" name="" id="" />
                        
                        <span className="mx-4 text-red-500 font-bold"> X </span>
                        
                        <input max={10} type="number" className ="bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center"name="" id="" />
                        <img src="src/assets/images/flags/cam.png" alt="flag-camaron" />
                        <span className="uppercase">CAM</span>
                        
                    </div>
                </div>
                */}
                
                <div className="p-4 flex space-x-4 items center justify-center">
                    <Icon name ="arrowLeft" className="w-6"/>
                    <span className="font-bold">24 de novembro</span>
                    <Icon name ="arrowRight" className="w-6 text-red-500"/>
                </div>
                <div className="space-y-4">
                {/*Chama como objeto*/}
                    <Card 
                        timeA={{slug: 'sui'}}
                        timeB={{slug: 'cam'}}
                        match={{slug: 'time'}}
                    
                    />

                    <Card 
                        timeA={{slug: 'uru'}}
                        timeB={{slug: 'cor'}}
                        match={{slug: '7:00'}}
                    
                    />

                    <Card 
                        timeA={{slug: 'por'}}
                        timeB={{slug: 'gan'}}
                        match={{slug: '7:00'}}
                    
                    />
                </div>

            </section>
        </main>
    </>
)