import QrCode from "../components/QrCode"
import Image from 'next/image'
import { useRouter } from 'next/router'
import tag from '../../public/tag_v1.jpeg'

export default function QrCodePage() {
  const router = useRouter()
  return (
    <div className={``}>
      <Image src={ tag } width={350} height={350} alt="match icon"/>
    </div>
  )
}
