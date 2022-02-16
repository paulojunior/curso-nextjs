import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";

interface FormProps {

}

export default function Form(props: FormProps) {
    return (
        <div>
            <Input text="Nome" type="text" />
            <Input text="E-mail" type="email" />
            <Input text="Telefone" type="number" />
            <Input text="Empresa" type="text" />
            <Input text="Instagram" type="text" />
            <Checkbox text="Estou ciente e permito a coleta dos meus dados pessoais" />
            <div className={`flex justify-end mr-2`} >
                <Button children={"Salvar"}/>
            </div>
        </div>
    )
}