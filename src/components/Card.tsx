import { IconEmail, IconInstagram, IconPhone, IconProfile } from "./Icons";

interface CardProps {
    company?: string | string[]
    name?: string | string[]
    phone?: string | string[]
    email?: string | string[]
    instagram?: string | string[]
}

export default function Card(props: CardProps) {
    return (
        <div className="flex justify-center content-center">
            <div>
                <div className="text-4xl text-decoration-line: underline flex p-2">{props.company}</div>
                <div className="text-xl flex p-2">{IconProfile}{props.name}</div>
                <div className="text-xl flex p-2">{IconPhone}{props.phone}</div>
                <div className="text-xl flex p-2">{IconEmail}{props.email}</div>
                <div className="text-xl flex p-2">{IconInstagram}{props.instagram}</div>
            </div>
        </div>
    )
}