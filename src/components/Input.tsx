interface InputProps {
    text?: string
    type: 'text' | 'number' | 'email' | 'checkbox'
    value?: any
    className?: string
    changeValue?: (value: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col mb-4 ${props.className} `}>
            <input type={props.type ?? 'text'} 
                   placeholder={props.text}
                   value={props.value}  
                   className={`
                    ml-2 mr-2
                    border
                    border-gray-400
                    rounded-sm
                    bg-gray-50
                    px-4 py-2
                   `}/>
        </div>
    )
}