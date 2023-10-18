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
    </div>
  )
}
