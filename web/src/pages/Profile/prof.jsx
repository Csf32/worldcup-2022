//importar o ícone
import { Icon, Card } from '@/components'
import { useState } from 'react'

//importar a biblioteca de data
import { addDays, format, subDays } from 'date-fns'

//Biblioteca do date-fns no ícone i18n para verificar outra língua
    //importa o locale
import { ptBR } from 'date-fns/locale'    


{/*Foi copiado tudo para a pasta DateSelect
const DateSelect = () => {

//userState do React guardar a data
    const [currentDate, setCurrentDate] = useState(new Date(initialDate))

    const prevDay = () => {
        const prevDate = subDays(currentDate, 1)
        setCurrentDate(prevDate)
    }
    
    const nextDay = () => {
        const nextDate = addDays(currentDate, 1)
        //Vai salvar essa data em um estado
        setCurrentDate(nextDate)
    }
    
    return (
        <div className="p-4 flex space-x-4 items center justify-center">
            <Icon name ="arrowLeft" className="w-6 text-red-500" onClick = {prevDay}/>
            <span className="font-bold">{format(currentDate, "d 'de 'MMMM", { locale: ptBR})}</span>
            <Icon name ="arrowRight" className="w-6 text-red-500" onClick = {nextDay}/>
        </div>
    )
}
*/}
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
                
                {/* Tudo aqui foi gerado na função da data
                
                <div className="p-4 flex space-x-4 items center justify-center">
                    <Icon name ="arrowLeft" className="w-6"/>
                    <span className="font-bold">24 de novembro</span>
                    <Icon name ="arrowRight" className="w-6 text-red-500"/>
                </div> */}
                
                <DateSelect />
                
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
    </div>
)