import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function Formulario() {
    const router = useRouter()

    //user details
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [instagram, setInstagram] = useState('')
    const [data, setData] = useState<boolean>(false)
    

    const handleForm = async () => {
        if (validadeInputs()) {

            await fetch('/api/cliente', {
                method: 'POST',
                body: JSON.stringify({ name: name, email: email, phone: phone, company: company, instagram: instagram, data: data }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            router.push({
                pathname: 'https://matchwork.vercel.app/qrcode',
                query: { name: name, email: email, phone: phone, company: company, instagram: instagram, data: data },
             })
        }
    }

    const validadeInputs = () => {
        var error = false ;
        if (!name || !email || !phone || !company || !instagram) {
            var error = true;
            alert("Por favor preencha todos os campos.")
        }

        return !error
    }


    return (
        <div>
            <form onSubmit={handleForm} action="#">
                <Input text="Nome" type="text" value={name} changeValue={(e) => setName(e.target.value)} />
                <Input text="E-mail" type="email" value={email} changeValue={(e) => setEmail(e.target.value)} />
                <Input text="Telefone" type="number" value={phone} changeValue={(e) => setPhone(e.target.value)} />
                <Input text="Empresa" type="text" value={company} changeValue={(e) => setCompany(e.target.value)} />
                <Input text="Instagram da empresa: informe seu @" value={instagram} type="text" changeValue={(e) => setInstagram(e.target.value)} />
                <Checkbox text="Estou ciente e permito a coleta dos meus dados pessoais" changeValue={(e) => setData(e.target.value)} />
                <div className={`flex justify-end mr-2`} >
                    <Button onClick={router.reload} >Limpar</Button>
                    <Button>Salvar</Button>
                </div>
            </form>
        </div>
    )
}