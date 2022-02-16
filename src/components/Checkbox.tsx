interface CheckboxProps {
    text?: string
    className?: string
    changeValue?: (value: any) => void
}

export default function Checkbox(props: CheckboxProps) {
    return (
        <div className="ml-2">
            <input type='checkbox' />
            <label className="mb-4 ml-2 text-white">{props.text}</label>
        </div>
    )
}