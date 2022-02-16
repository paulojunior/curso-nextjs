import QRCode from 'qrcode.react';

interface QrCodeProps {
    company?: string
    name?: string
    phone?: number
    email?: string
    instagram?: string
}

export default function QrCode(props: QrCodeProps) {
    return (
        <QRCode value="http://facebook.github.io/react/" size="150"/>
    )
}