
import { Link } from "react-router-dom"
import { Conteiner, Form } from "./styles";

import BackgroundImg from '../../assets/LogFoodExplorer.png';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button'; 
import { Section } from '../../components/Section'; 

export function SignUp() {

    return (
        <Conteiner>
            <img src={BackgroundImg} alt="Logo" />

            <Form>
                <h1 className="hh1 hide">Crie sua conta</h1>
                
                <Section title={"Seu nome"}>
                    <Input 
                        placeholder="Exemplo: Maria da Silva"
                        type="text"
                    />
                </Section>

                <Section title={"Email"}>
                    <Input 
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                    />
                </Section>
                
                <Section title={"Senha"}>
                    <Input 
                        placeholder="No mínimo 6 caracteres"
                        type="text"
                    />
                </Section>

                <Button title="Criar conta"/>

                <Link to="/">Já tenho uma conta</Link>
            </Form>
        </Conteiner>
    );
}