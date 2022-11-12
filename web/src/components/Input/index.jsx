//Colou aqui para ficar padronizado e ser exportado nas outras páginas

export const Input = ({name, type, placeholder, label, error, ...props}) => (

    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
         {/* Vai tratar o erro transformando em um template string com a interpolação ${}*/}
        <input {...props} name={name} id={name} className={`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:border-1 ${error && 'border-red-300'}`} type={type} placeholder={placeholder}/>
        <span className ="p-2 text-sm text-red-300">{ error }</span>
    </div>
)