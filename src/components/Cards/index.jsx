import { Conteiner } from "./styles";

import { TfiPencil } from "react-icons/tfi"

export function Cards({ nimg, title, subscript, value }) {
    return (
        <Conteiner>
            <TfiPencil id="stwo"/>
            <img src={nimg} alt="macarrão com camarão" />
            <strong>
                {title}
            </strong>
            <p>{subscript}</p>
            <h1>
                R$ {value}
            </h1>
        </Conteiner>
    )
}