
export function Home (){
  return (

    <div className="md:h-screen p-4 bg-red-700 text-white flex flex-col items-center space-y-6">

      <header className="container p-4 max-w-5xl flex justify-center">
        <img src="/src/assets/images/logo/logo-fundo-vinho.svg" className="w-40"alt="logo" />
      </header>
    
      <div className="container max-w-5xl p-4 flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 
      space-x-6 md:space-y-8 md:space-y-6 ">
        
        <div className="md:flex-1 flex justify-center">
          <img src="/src/assets/images/main_image/img.png" className="w-full max-w-md" alt="imagem-principal" />
        </div>
        
        <div className="md:flex-1 flex flex-col space-y-6">
          <h1 className="text-3xl text-center md:text-left font-bold">
            Dê o seu palpite na Copa do Mundo do Catar 2022!
          </h1>
          
          <a href="/signup" className="text-center text-red-700 bg-white text-xl px-8 py-4 rounded-xl"> 
            Criar minha conta
          </a>

          <a href="/login" className="text-center text-red-700 border border-white text-xl bg-white text-xl px-8 py-4 rounded-xl"> 
           Entrar
          </a>
        </div>
     
      </div>
    </div>
   
  )
}

