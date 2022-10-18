//Colou aqui para ficar padronizado e ser exportado nas outras páginas

export const Input = ({name, type, placeholder, label, ...props}) => (

    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input {...props} name={name} id={name} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:border-1" type={type} placeholder={placeholder}/>
    </div>
)