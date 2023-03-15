import { Link, useNavigate } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";

import imgMenu from "../../assets/imgMenu.png"
import Maskgroup from "../../assets/MaskGroupTwo.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import { Cards } from "../../components/Cards"

export function MenuAdm() {
    return (
        <Conteiner>
            <Header />
            <Content>
                <img className="imgMenu" src={imgMenu} alt="" />
                <div className="titulo">
                    <h1>Sabores inigualáveis</h1>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            
                <Cont>
                    <Section className="categorias" title="Refeições">
                        <div className="menucard">
                            <Cards nimg={Maskgroup} title="Spaguetti Gambe  >" subscript="Massa fresca com camarões e pesto." value="79,97"/>
                            <Cards nimg={Maskgroup} title="Spaguetti Gambe  >" subscript="Massa fresca com camarões e pesto." value="79,97"/>
                            <Cards nimg={Maskgroup} title="Spaguetti Gambe  >" subscript="Massa fresca com camarões e pesto." value="79,97"/>
                        </div>
                    </Section>
                </Cont>
            </Content>
            <Footer />
        </Conteiner>
    )
}