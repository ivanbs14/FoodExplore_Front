import { Conteiner } from "./styles";

export function Categories() {
    return (
        <Conteiner>
            <select>
                <option value="0">Selecione</option>
                <option value="1">Refeições</option>
                <option value="2">Sobremesas</option>
                <option value="3">Bebidas</option>
            </select>
        </Conteiner>
    )
}