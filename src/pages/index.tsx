import Form from "../components/Form";
import Image from 'next/image'
import matchWork from '../../public/match_work.png'
import imgForm from '../../public/imagem_form.png'

export default function Home() {
  return (
    <div>
        <div className="flex flex-col w-screen items-center">
          <div className={`p-7`}>
            <Image src={matchWork} alt="match icon" width={348} height={153}  />
          </div>
        </div>
        <div className={`w-screen flex`}>
          <div className="w-2/3 flex pr-16"><Form /></div>
          <div className="w-1/3"><Image src={imgForm } width={500} height={500} alt="match icon"/></div>
        </div>
    </div>
  )
}
