import Form from "../components/Form";
import Image from 'next/image'
import matchWork from '../../public/match_work.png'
import imgForm from '../../public/imagem_form.png'

export default function Home() {
  return (
    <div>
        <div className={`p-7 flex justify-center `}>
          <Image src={matchWork} alt="match icon" width={348} height={153}  />
        </div>
        <div className={`w-screen flex justify-end`}>
          <Form />
          <div className="pl-14"></div>
          <Image src={imgForm } width={500} height={500} alt="match icon"/>
        </div>
    </div>
  )
}
