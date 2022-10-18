
export const Card = ({timeA, timeB, match}) =>( 
    <div className="rounded-xl border border-gray-300 p-4 text-center space-y-4">
        
    <span className="text-sm md:text-base text-gray-700 font-bold">{match.time}</span>
    
    <div className="flex space-x justify-center items-center">
      
        <span className="uppercase">{timeA.slug}</span>
        
        <img src={`src/assets/images/flags/${timeA.slug}.png`} alt="flag-Switzerland" />
       
        <input max={10} type="number" className="bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center" name="" id="" />
        
        <span className="mx-4 text-red-500 font-bold"> X </span> 
        
        <input max={10} type="number" className ="bg-red-300/[0.2] w-[55px] h-[55px] font-red-700 text-xl text-center"name="" id="" />
        
        <img src={`src/assets/images/flags/${timeB.slug}.png`} alt="flag-camaron"/>
        
        <span className="uppercase">{timeB.slug}</span>
        
    </div>
</div>
)