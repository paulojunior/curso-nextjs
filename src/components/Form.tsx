import Button from "./Button";
import Checkbox from "./Checkbox";
import Input from "./Input";
import { useRouter } from 'next/router'
import { Formik } from "formik";
import { useState } from "react";

export default function Form() {
    const router = useRouter()

    //user details
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [instagram, setInstagram] = useState('')
    const [data, setData] = useState('')
    

    const handleClick = () => {
        router.push('/qrcode')
    }

    const validadeInputs = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Preenchimento obrigatório';
        }
        else if (!email) {
            errors.email = 'Preenchimento obrigatório'
        }
        else if (!phone) {
            errors.phone = 'Preenchimento obrigatório'
        }
        else if (!company) {
            errors.company = 'Preenchimento obrigatório'
        }
        else if (!instagram) {
            errors.instagram = 'Preenchimento obrigatório'
        }
        else if (!data) {
            errors.data = 'Preenchimento obrigatório'
        }
        return errors;
    }


    return (
        <div>
            <Formik
                initialValues={{name: '', email: '', phone: '', company: '', instagram: '', data: Boolean}}
                validate={() => {
                    const errors = validadeInputs()
                    return errors
                }}
                onSubmit={(values, {setSubmitting}) => {
                    window.open('/qrcode')
                }
                }>
                <Form>
                    <Input text="Nome" type="text" />
                    <Input text="E-mail" type="email" />
                    <Input text="Telefone" type="number" />
                    <Input text="Empresa" type="text" />
                    <Input text="Instagram da empresa: informe seu @" type="text" />
                    <Checkbox text="Estou ciente e permito a coleta dos meus dados pessoais" />
                    <div className={`flex justify-end mr-2`} >
                        <Button children={"Limpar"} onClick={router.reload} />
                        <Button children={"Salvar"}  />
                    </div>
                </Form>
            </Formik>
        </div>
    )
}