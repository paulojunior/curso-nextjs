import Card from "../components/Card";
import { useRouter } from 'next/router'

export default function CardPage() {
  const router = useRouter()
  console.log(router.query)
  const {name, company, phone, email, instagram} = router.query

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-[url('../../public/background.jpeg')]
      bg-cover
      text-blue-700
    `}>  
      <div className={`
        bg-white rounded-lg w-1/2 h-1/2
      `}>
        {<Card name={name} company={company} phone={phone} email={email} instagram={instagram} />
}
      </div>
    </div>
  )
}
