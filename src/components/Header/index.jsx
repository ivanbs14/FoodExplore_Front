import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Conteiner, Content, Search } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { BsReceiptCutoff } from "react-icons/bs";

import ImgLogo from "../../assets/LogFoodExplorer.png"
import SignOut from "../../assets/SignOut.png"

import { Button } from "../Button"

export function Header({ children }) {
    const { signOut } = useAuth();

    return (
        <Conteiner>
            <Content>
                <div className="logs">
                    <img src={ImgLogo} alt="Logo" />
                    <a className="adm hide" href="#">admin</a>
                </div>

                <Search>
                    <AiOutlineSearch />
                    <Search>
                        {children}
                    </Search>
                </Search>

                {/* Trocar button por Link, mais a frente */}
                <Button to={"/"} title={"Novo prato"}>
                    <BsReceiptCutoff />
                    Novo prato
                </Button>
                
                <Link onClick={signOut}>
                    <img src={SignOut} alt="Logo" />
                </Link>
            </Content>
        </Conteiner>
    )
};