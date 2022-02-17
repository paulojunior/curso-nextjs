import Form from "../components/Form";
import Image from 'next/image'
import matchWork from '../../public/match_work.png'
import imgForm from '../../public/imagem_form.png'

export default function Home() {
  return (
    <div className={`
      flex flex-col justify-start items-center h-screen
      bg-[url('../../public/background.png')]
      bg-cover
      `}>
        <div className={`p-14`}>
          <Image src={matchWork} />
        </div>
        <Form />
        {/*}
        <div className={`w-screen flex justify-end`}>
          <Image src={imgForm} height={300} width={300}/>
        </div> 
        {*/}
    </div>
  )
}
