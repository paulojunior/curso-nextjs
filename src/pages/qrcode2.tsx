import QrCode from "../components/QrCode"
import Image from 'next/image'
import { useRouter } from 'next/router'
import tag from '../../public/tag_v2.jpeg'

export default function QrCodePage() {
  const router = useRouter()
  return (
    <div className={``}>
      <Image src={ tag } alt="match icon" />
      <div className="absolute left-44 top-24"><QrCode name={router.query.name} email={router.query.email} company={router.query.company} phone={router.query.phone} instagram={router.query.instagram} /></div>
    </div>
  )
}
