import Form from "../components/Form";
import Image from 'next/image'
import matchWork from '../../public/match_work.png'
import imgForm from '../../public/imagem_form.png'

export default function Home() {
  return (
    <div className={`
      bg-[url('../../public/background.png')]
      bg-cover h-screen
      `}>
        <div className={`p-7 flex justify-center `}>
          <Image src={matchWork} alt="match icon"   />
        </div>
        <div className={`w-screen flex justify-end`}>
          <Form />
          <div className="pl-14"></div>
          <Image src={imgForm } width={350} height={350} alt="match icon"/>
        </div>
    </div>
  )
}
