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
      flex flex-col justify-between items-center h-screen w-screen
      bg-[url('../../public/background.png')]
      bg-cover text-blue-700
    `}>  

        <div className={`
          flex justify-center items-center mt-20
          bg-white rounded-lg w-1/3 h-1/3
        `}>
          {<Card name={name} company={company} phone={phone} email={email} instagram={instagram} />}
        </div>
  
      <div className={`
        flex flex-row w-screen justify-between
      `}>
        <div className=""><Image src={matchWork} /></div>
        <div className=""><Image src={imageCard} /></div>
      </div>
    </div>
  )
}
