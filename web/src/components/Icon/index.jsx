//Método de importar com o novo plugin
import { ReactComponent as arrowLeft } from './svg/arrow-left.svg'
import { ReactComponent as arrowRight } from './svg/arrow-right.svg'
import { ReactComponent as back } from './svg/back.svg'
import { ReactComponent as profile } from './svg/profile.svg'

//Criou um objeto
const icons = {
    //propriedade do objeto
    arrowLeft,
    arrowRight,
    back,
    profile
}
//Aqui será criado todos os ícones com o método de abstração
//Icon vai extrair o name

export const Icon = ({ name, ...props }) => {
    const Element = icons[name]
    //Instalar o plugin pra chamar o svg no vite: npm install -D vite-plugin-svgr 
    return <Element {...props} />
}