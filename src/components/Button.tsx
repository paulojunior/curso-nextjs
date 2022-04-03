
interface ButtonProps {
    className?: string
    children: any
    disabled?: boolean
    onClick?: (e) => void
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            bg-white hover:bg-purple-500 hover:text-white
            text-purple
            mt-2
            ml-2
            mb-2
            px-4
            py-2
            rounded-md
            ${props.className}
        `}
        disabled={props.disabled}
        onClick={props.onClick}
        >
            {props.children}
        </button>
    )

}