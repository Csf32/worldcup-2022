
import { Icon, Card } from '@/components'
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
                
                <div className="p-4 flex space-x-4 items center justify-center">
                    <Icon name ="arrowLeft" className="w-6"/>
                    <span className="font-bold">24 de novembro</span>
                    <Icon name ="arrowRight" className="w-6 text-red-500"/>
                </div>
                <div className="space-y-4">
              
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