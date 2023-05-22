import { Conteiner } from "./styles";

import { TfiPencil } from "react-icons/tfi"
import { ButtonEdit } from '../ButtonEdit';
export function Cards({ nimg, title, subscript, value, subs, event }) {
    return (
        <Conteiner>
            <ButtonEdit
                icon={TfiPencil}
                id="dish"
                onClick={event}
            />
    
            <img src={nimg} alt={subs} />

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