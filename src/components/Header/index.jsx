import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Conteiner, Content, Search, NewNote } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

import ImgLogo from "../../assets/LogFoodExplorer.png";
import SignOut from "../../assets/SignOut.png";

export function Header({ children, eventss, events, btnTitle, btnLogo, titleAdm }) {
    const { user } = useAuth();

    return (
        <Conteiner>
            <Content>
                <div className="logs">
                    <img src={ImgLogo} alt="Logo" />
                    <a className="adm" href="#">{titleAdm}</a>
                </div>

                <Search>
                    <AiOutlineSearch />
                    <Search>
                        {children}
                    </Search>
                </Search>

                <NewNote to={events}>
                    {btnLogo}
                    {btnTitle}
                </NewNote>
                
                <Link onClick={eventss}>
                    <img src={SignOut} alt="Logo" />
                </Link>
            </Content>
        </Conteiner>
    )
};