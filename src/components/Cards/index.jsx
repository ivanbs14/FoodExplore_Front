import { Conteiner } from "./styles";
import { useState, useEffect } from 'react';

import { useAuth } from "../../hooks/auth";

import { TfiPencil } from "react-icons/tfi"
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { BtnTwo } from '../BtnTwo/Index';
import { BtnIcludeDish } from '../BtnIcludeDish';
import { ButtonEdit } from '../ButtonEdit';

export function Cards({ nimg, title, subscript, value, subs, event, food }) {
    const { user } = useAuth();
    
    const [image, setImage] = useState('img1');
    const [quantity, setQuantity] = useState(1);
    const [unidads, setUnidads] = useState(`01`);

    let images = {
        img1: AiOutlineHeart,
        img2: AiFillHeart
    };

    function changeImage() {
        setImage(state => (state === 'img1' ? 'img2' : 'img1'));
    };

    function handleRemoveItem() {
        setQuantity(quantity - 1);

        if (quantity == 1) {
            setQuantity(1);
        }
    };

    function handleAddItem() {
        setQuantity(quantity + 1);
    };  
        
    useEffect(() => {
        if(quantity <= 9) {
            setUnidads(`0${quantity}`)
        } else {
            setUnidads(`${quantity}`)
        }

    }, [quantity])

    let total;
    async function handleCreateOrder(name, price, quantities, total, image) {
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
        window.location.reload(true);
        alert(`voce fez ${quantity} pedidos de ${food} anotado`)
    };

    return (
        <Conteiner>
            <div id="dish">
                {user.is_admin == 1 ? (
                    <ButtonEdit
                        icon={TfiPencil}
                        onClick={event}
                    />
                ) :  (
                    <ButtonEdit
                        icon={images[image]}
                        onClick={changeImage}
                    />
                )}
            </div>
    
            <img src={nimg} alt={subs} />

            <strong>
                {title}
            </strong>
            <p>{subscript}</p>
            <h1>
                R$ {value.replace('.', ',')}
            </h1>
            <div >
                {user.is_admin == 1 ? (
                    <div />
                ) :  (
                    <div className="display" >
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
                        < BtnIcludeDish 
                            text="incluir"
                            className="insert"
                            onClick={() => handleCreateOrder(food)}
                        />
                    </div>
                )}
            </div>
        </Conteiner>
    )
}