import Form from "../components/Form";

export default function Home() {
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gray-600
      bg-[url('../../public/background.jpeg')]
      bg-cover
      `}>  
      <Form />
    </div>
  )
}
