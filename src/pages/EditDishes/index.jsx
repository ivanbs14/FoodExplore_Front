import { Conteiner, Content, Dish } from "./styles";

import { FiUpload } from 'react-icons/fi';

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NotItens } from "../../components/NotItens"

export function EditDishes() {
    return (
        <Conteiner>
                <Header />
            <Content>
                <ButtonText title={"voltar"}/>

                <h1>Editar prato</h1>

                <div className="lineOne">
                    <Section title={"Imagem do prato"}>
                        <Dish>
                            <label htmlFor="dish">
                                <FiUpload />
                                <span>Selecione imagem</span>

                                <input 
                                    id='avatar'
                                    type="file"
                                />
                            </label>
                        </Dish>
                    </Section>
                    
                    <Section title={"Nome"}>
                        <Input placeholder={"Ex.: Salada Ceasar"}/>
                    </Section>
                    
                    <Section title={"Categoria"}>
                        <Input placeholder={"Refeição"}/>
                    </Section>
                </div>

                <div className={"tag"}>
                    <Section title={"Ingredientes"}>
                        <div className="tags">
                            <NotItens value={"Pão Naan"}/>
                            <NotItens isNew placeholder="Adicionar"/>
                        </div>
                    </Section>

                    <Section title={"Preço"}>
                        <Input className={"preco"} placeholder={"R$ 00,00"}/>
                    </Section>
                </div>
                    
                <Section title={"Descrição"}>
                    <Textarea placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}/>
                </Section>

                <div className="btns">
                    <Button title={"Excluir prato"}/>
                    <Button title={"Salvar alterações"}/>
                </div>
            </Content>
            <Footer />
        </Conteiner>
    )
}