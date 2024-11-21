
interface InputProps {
    type: "text" | "password" | "email" | "number" | "date" | "tel" | "time" | "url" | "color" | "search" | "hidden"
    placeholder: string | undefined
    disabled: boolean
    label: string
}

const Input = ({ disabled, placeholder, type, label }: InputProps) => {
  return (
    <div>
        <h2 className="mx-2 text-gray-500">{label}</h2>
        <input type={type} placeholder={placeholder} disabled={disabled} className={`p-2 w-full placeholder:text-gray-700 mb-4 ${disabled ? "bg-transparent" : "border border-slate-500 rounded-lg "} `} />
    </div>
  )
};

export default Input;