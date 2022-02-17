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
            <table>
                <tr>
                    <td colSpan={2}><span className="underline text-2xl">{props.company}</span></td>
                </tr>
                <tr>
                    <td>{IconProfile}</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>{IconPhone}</td>
                    <td>{props.phone}</td>
                </tr>
                <tr>
                    <td>{IconEmail}</td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td>{IconInstagram}</td>
                    <td>{props.instagram}</td>
                </tr>
            </table>
        </div>
    )
}