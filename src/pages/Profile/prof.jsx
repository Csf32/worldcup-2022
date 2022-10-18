import { Icon, Card, DateSelect } from '@/components'
   

export const Profile = () => ( 
    <div className="">

        <header className="bg-red-500">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="/src/assets/images/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40"alt="logo" />
                <a href="/">
                    <Icon name="profile" className="w-10"/>
                </a>
              
            </div>
           
        </header>

        <main className="space-y-6">

            <section id = "header"className="bg-red-500 text-white p-4">
                <section className="space-y-2 container max-w-3xl p-4">
                    <a href="/dashboard">
                        <Icon name="back" className="w-10"/>
                    </a>
                   
                    <h3 className="text-2xl font-bold">Caique Fonseca</h3>
                </section>
            </section>

            <section id="content" className="container max-w-3xl p-4 space-y-4">

                <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>
                
                <DateSelect />
                
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
    </div>
)