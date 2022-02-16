import Client from "../core/Client";

interface CardProps {
    client: Client
}

export default function Card(props: CardProps) {
    return (
        <div>
            <div>{props.client.company}</div>
            <div>{props.client.name}</div>
            <div>{props.client.phone}</div>
            <div>{props.client.email}</div>
            <div>{props.client.instagram}</div>
        </div>
    )
}