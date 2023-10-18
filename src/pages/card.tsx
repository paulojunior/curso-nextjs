import Card from "../components/Card";
import { useRouter } from 'next/router'
import Image from 'next/image'
import matchWork from '../../public/mercopar365_logo.png'
import fraseMercopar from '../../public/frase_mercopar365.png'
import circleMercopar from '../../public/asset_mercopar365.png'

export default function CardPage() {
  const router = useRouter()
  console.log(router.query)
  const {name, company, phone, email, instagram} = router.query

  return (
    <div className={`
      flex justify-between h-screen w-full overflow-hidden
    `}>  
      <div className={`flex flex-col justify-center w-2/3`}>
        <div className={`h-full flex justify-center items-center`}>
          <Image src={fraseMercopar} alt="match icon" />
        </div>
        <div className={`
          flex 
          bg-white rounded-lg m-4 mb-16
        `}>
          {<Card name={name} company={company} phone={phone} email={email} instagram={instagram} />}
        </div>
      </div>
      <div className={`flex flex-col justify-center mr-10 items-center w-1/4`}>
        <div  >
          <Image src={matchWork} alt="match icon" className={`object-contain`} />
        </div>
        <div>
          <Image src={circleMercopar} alt="match icon" className={`object-contain`} />
        </div>
      </div>
    </div>
  )
}
