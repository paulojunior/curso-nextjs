import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { useRouter } from 'next/router'
import { useState } from "react";
import ReactToPrint from "react-to-print";
import QrCodePage from "../pages/qrcode2";

/* 
    - TODO 
    1 - Exibir imagem sebrae quando div estiver escondida - ok
    2 - Enviar parametros para o componente - ok
    3 - Revisar validação - ok
    4 - Ajustar para não imprimir quando der erro de validação - ok
    5 - Ajustar botão de limpar - ok
    6 - Limpar após fechar impressão - ok
    7 - Validar se está salvando os dados - ok
*/

export default function Formulario() {
    const router = useRouter()

    var componentRef;

    //user details
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [instagram, setInstagram] = useState('')
    const [data, setData] = useState<boolean>(false)

    function refreshPage(e){
        e.preventDefault();
        setName('');
        setEmail('');
        setPhone('');
        setCompany('');
        setInstagram('');
        setData(false);
    }

    const handleForm = async () => {        
    }

    async function afterPrint() {
            await fetch('/api/cliente', {
                method: 'POST',
                body: JSON.stringify({ name: name, email: email, phone: phone, company: company, instagram: instagram, data: data }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        window.location.reload();
    }

    const validadeInputs = () => {
        return (!name || !email || !phone || !company || !instagram);
    }

    return (
        <>
        <QrCodePage ref={(el) => (componentRef = el)} name={name} email={email} phone={phone} company={company} instagram={instagram}/>
        <div>
            <form onSubmit={handleForm} action="#">
                <Input text="Nome" type="text" value={name} changeValue={(e) => setName(e.target.value)} />
                <Input text="E-mail" type="email" value={email} changeValue={(e) => setEmail(e.target.value)} />
                <Input text="Telefone" type="number" value={phone} changeValue={(e) => setPhone(e.target.value)} />
                <Input text="Empresa" type="text" value={company} changeValue={(e) => setCompany(e.target.value)} />
                <Input text="Instagram da empresa: informe seu @" value={instagram} type="text" changeValue={(e) => setInstagram(e.target.value)} />
                <Checkbox text="Estou ciente e permito a coleta dos meus dados pessoais" changeValue={(e) => setData(e.target.value)} />
                <div className={`flex justify-end mr-2`} >
                    <Button  onClick={(e) => refreshPage(e)} >Limpar</Button>
                    <ReactToPrint trigger={() => <Button disabled={validadeInputs()} className={validadeInputs() ? "opacity-50 cursor-not-allowed" : ""} >Imprimir</Button>} content={() => componentRef} onAfterPrint={() => afterPrint()}/>
                </div>
            </form>
        </div>
        </>
    )
}