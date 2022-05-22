import QRCode from 'qrcode.react';

interface QrCodeProps {
    company?: string | string[]
    name?: string | string[]
    phone?: string | string[]
    email?: string | string[]
    instagram?: string | string[]
}

export default function QrCode(props: QrCodeProps) {
    var URLparams = "https://matchwork.vercel.app/card?name="+props.name+"&company="+props.company+"&phone="+props.phone+"&email="+props.email+"&instagram="+props.instagram
    return (
        <QRCode value={URLparams} size={280} renderAs={"svg"}/>
    )
}