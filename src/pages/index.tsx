import Button from "../components/Button";
import Card from "../components/Card";
import Form from "../components/Form";
import Client from "../core/Client";

export default function Home() {

  const client = new Client('Paulo', 'jr@live.at', 5551991749754, 'Apple', '@apple', true)

  return (
    /*<Card client={client}></Card>*/
    <div className={`bg-gray-600 w-full h-full`}>  
      <Form />
    </div>
  )
}
