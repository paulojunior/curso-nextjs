import QrCode from "../components/QrCode"
import Image from 'next/image'
import { useRouter } from 'next/router'
import imagemQrCode from '../../public/imagem_qrcode.png'

export default function QrCodePage() {
  const router = useRouter()
  return (
    <div className={`
      flex flex-col justify-center items-center h-screen w-screen
      bg-black
      bg-contain bg-no-repeat
    `}>  
      <div className={`
        flex justify-center items-center
        bg-white rounded-lg h-5/6 w-1/2
      `}><QrCode name={router.query.name} email={router.query.email} company={router.query.company} phone={router.query.phone} instagram={router.query.instagram} /></div>
    </div>
  )
}
