import { Link, useNavigate } from "react-router-dom";

import { Conteiner, Content, Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";

import ImgLogo from "../../assets/LogFoodExplorer.png"
import SignOut from "../../assets/SignOut.png"

import { Input } from "../Input";
import { Button } from "../Button"

export function Header() {
    return (
        <Conteiner>
            <Content>
                <div className="logs">
                    <img src={ImgLogo} alt="Logo" />
                    <a className="adm hide" href="#">admin</a>
                </div>

                <Search>
                    <AiOutlineSearch />
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                        />
                </Search>

                {/* Trocar button por Link, mais a frente */}
                <Button to={"/"} title={"Novo prato"}>
                    <BsReceiptCutoff />
                    Novo prato
                </Button>
                
                <Link to="/EditDishes">
                    <img src={SignOut} alt="Logo" />
                </Link>
            </Content>
        </Conteiner>
    )
};