import { Conteiner, Content, Cont } from "./styles";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import imgTeste from "../../assets/Mask group.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

export function DishesClient() {
    return (
        <Conteiner>
                <Header />
            <Content>
                <ButtonText title={"voltar"}/>
            
                <Cont>
                    <img src={imgTeste} alt="" />

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

                        <div className="prices">
                            <div className="pric">
                            {/* trocar por button */}
                            <AiOutlineMinus />

                            <input type="text" placeholder="01"/>
                            {/* trocar por button */}
                            <AiOutlinePlus />
                            </div>
                            
                            <Button className="btn" to={"/"} title={"incluir ∙ R$ 25,00"} />
                        </div>
                    </div>

                </Cont>

            </Content>
            <Footer />
        </Conteiner>
    )
}