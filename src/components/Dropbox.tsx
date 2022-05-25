import Select from 'react-select'

interface InputProps {
    options?: object[]
    value?: any
    changeValue?: (value: any) => void
}

export default function Dropbox(props: InputProps) {
    return (
        <div className={`flex flex-col mb-4 `}>
            <Select options={props.options} 
                    id="long-value-select" instanceId="long-value-select"
                    value={props.value} 
                    onChange={props.changeValue} 
                    placeholder="Selecione um item..."
                    className={`
                    ml-2 mr-2
                    border
                    border-gray-400
                    rounded-sm
                    bg-gray-50
                   `}/>
        </div>
    )
}