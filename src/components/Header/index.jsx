import { Link, useNavigate } from "react-router-dom";

import { Conteiner, Content, Search, Logout } from "./styles";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";

import ImgLogo from "../../assets/LogFoodExplorer.png"

import { Input } from "../Input";
import { Button } from "../Button"

export function Header() {
    return (
        <Conteiner>
            <Content>
                <img src={ImgLogo} alt="Logo" />

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
                <Logout>
                    <FaSignOutAlt />
                </Logout>
            </Content>
        </Conteiner>
    )
};