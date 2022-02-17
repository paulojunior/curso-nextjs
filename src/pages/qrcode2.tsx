import QrCode from "../components/QrCode"
import Image from 'next/image'
import { useRouter } from 'next/router'
import imagemQrCode from '../../public/imagem_qrcode.png'

export default function QrCodePage() {
  const router = useRouter()
  return (
    <div className={`
      h-screen bg-black flex justify-center items-center
    `}>
      <div className={`
        bg-[url('../../public/tag.jpeg')] h-screen w-1/2
        bg-cover flex justify-center items-center
    `}><QrCode name={router.query.name} email={router.query.email} company={router.query.company} phone={router.query.phone} instagram={router.query.instagram} /></div>
    </div>
  )
}
