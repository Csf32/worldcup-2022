const initialDate = '2022-11-20T00:00:00Z'

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