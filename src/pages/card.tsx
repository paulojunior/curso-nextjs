import Card from "../components/Card";
import { useRouter } from 'next/router'
import Image from 'next/image'
import matchWork from '../../public/matchwork_card.png'
import imageCard from '../../public/imagem_card.png'

export default function CardPage() {
  const router = useRouter()
  console.log(router.query)
  const {name, company, phone, email, instagram} = router.query

  return (
    <div className={`
      flex justify-between h-screen w-full overflow-hidden
      bg-[url('../../public/background.png')]
      bg-cover text-blue-700
    `}>  
        
        <div className={`flex flex-col justify-end`}>
          <div className={`
            flex justify-left
            bg-white rounded-lg ml-4 h-1/2
          `}>
            {<Card name={name} company={company} phone={phone} email={email} instagram={instagram} />}
          </div>
          <div className={`flex justify-start align-bottom mt-10 pb-10 pl-10 w-1/2`} >
            <Image src={matchWork} alt="match icon" />
          </div>
        </div>
  
      <div className={`h-full flex flex-col justify-end`}>
        <Image src={imageCard} alt="match icon" />
      </div>
    </div>
  )
}
