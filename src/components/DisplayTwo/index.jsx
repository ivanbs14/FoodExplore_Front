import { Conteiner, NewNote } from "./styles";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { BtnTwo } from '../BtnTwo';
import { BsReceiptCutoff } from "react-icons/bs";

export function DisplayTwo({ food }) {

    const [quantity, setQuantity] = useState(1);
    const [unidads, setUnidads] = useState(`01`);
    const [dish, setDish] = useState();
    const [priceDish, setPriceDish] = useState();
    const [priceOrder, setPriceOrder] = useState();

    const params = useParams();

    function handleRemoveItem() {
        setQuantity(quantity - 1);

        if (quantity == 1) {
            setQuantity(1);
        }
    };

    function handleAddItem() {
        setQuantity(quantity + 1);
    };  

    let total;
    async function handleCreateOrder(food, price, quantities, total, image) {
        if (quantity > 10) {
            return alert('limite máximo de unidade é de 10');
        }

        /* let p = Number(price.replace(',', '.')).toFixed(2);

        total = (p * quantity).toFixed(2); */

        /* await api.post(`/order/${user.id}`, {
            name,
            price,
            quantity,
            total,
            image
        }); */

       /*  alert('pedido realizado'); */
        alert(`voce fez ${quantity} pedidos de ${food} anotado`);
        setQuantity(1);
        setUnidads(`01`);
    };

    useEffect(() => {
        async function priceFood() {
            const response = await api.get(`/dish/${food}`);
            setDish(response.data);
        };
    
        priceFood();

        async function dishOrder() {
            dish.map((preco) => (
                setPriceDish(preco.price)
            ))

            if(!priceOrder) {
                setPriceOrder(priceDish)
            }
        };

        dishOrder();
    }), [];

    useEffect(() => {

        if(priceDish) {
            let orderValue = Number(priceDish.replace(',', '.')).toFixed(2);
            setPriceOrder((orderValue * quantity).toFixed(2))
        };

        if(quantity <= 9) {
            setUnidads(`0${quantity}`)
        } else {
            setUnidads(`${quantity}`)
        }

        if(quantity == 11) {
            alert("Desculpa, mas o limite máximo é de 10 unidades por prato.")
            setQuantity(10)
            setUnidads(`0${quantity}`)
        }

    }, [quantity])

    return (
        <Conteiner>
            <div className="displays">
                <BtnTwo
                    text="-"
                    className="decrement"
                    onClick={handleRemoveItem}
                    />
                    <span>{unidads}</span>
                    <BtnTwo
                    text="+"
                    className="decrement"
                    onClick={handleAddItem}
                />
            </div>
            {/* < BtnIcludeDish 
                className="insert"
                text={`pedir ∙ R$ ${priceOrder}`}
                onClick={() => handleCreateOrder(food)}
            />  */}

            <NewNote 
                onClick={() => handleCreateOrder(food)}
                className="insert"
            >
                {< BsReceiptCutoff className="btnReceipt hide"/>}
                {`incluir ∙ R$ ${priceOrder}`}
            </NewNote>
        </Conteiner>
    );
};