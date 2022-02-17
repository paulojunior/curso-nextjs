import QrCode from "../components/QrCode"
import Image from 'next/image'
import { useRouter } from 'next/router'
import matchWork from '../../public/matchwork_card.png'

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
        bg-white rounded-lg w-1/3 h-1/2
      `}><QrCode name={router.query.name} email={router.query.email} company={router.query.company} phone={router.query.phone} instagram={router.query.instagram} /></div>
      <div className={`pt-14`}>
        <Image src={matchWork} alt="match icon" />
      </div>
    </div>
  )
}
