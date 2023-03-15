import { Link, useNavigate } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";

import { RxCaretLeft } from "react-icons/rx"

import imgTeste from "../../assets/Mask group.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

export function DishesPreviewAdm() {
    return (
        <Conteiner>
                <Header />
            <Content>
                <Link to="/EditDishes">
                    <RxCaretLeft />
                    voltar
                </Link>
            
                <Cont>
                    <img src={imgTeste} alt="imagem do prato" />

                    <div className="itens">
                        <h1>Salada Ravanello</h1>

                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. 
                            O pão naan dá um toque especial.</p>
                    
                        <div className="products">
                            <ButtonText title={"alface"}/>
                            <ButtonText title={"cebola"}/>
                            <ButtonText title={"pão naan"}/>
                            <ButtonText title={"pepino"}/>
                            <ButtonText title={"rabanete"}/>
                            <ButtonText title={"tomate"}/>
                        </div>

                        <Button className="btn" to="/EditDishes" title={"Editar prato"} />
                    </div>

                </Cont>

            </Content>
            <Footer />
        </Conteiner>
    )
}