import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";

import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import { RxCaretLeft } from "react-icons/rx"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { DisplayTwo } from '../../components/DisplayTwo';

export function DishesPreviewClient() {
    const { user, signOut } = useAuth();

    const [dish, setDish] = useState([]);

    const [search, setSearch] = useState("");
    const [idDish, setIdDish] = useState();
    const [allingredients, setAllIngredients] = useState([]);

    const [quantity, setQuantity] = useState(1);
    const [unidads, setUnidads] = useState(`01`);

    const params = useParams();
    const navigate = useNavigate();

    function handleEditDishes(id) {
        navigate(`/editDishes/${id}`);
    };

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setDish(response.data);
        }

        fetchDish();
    }, [])

    useEffect(() => {
        async function fetchIngredients() {
            dish.map(ingred => (
                setAllIngredients(ingred.ingredients)
            ))
        }

        fetchIngredients();
    }, [dish]);

    /* Includ qtd dish */
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

        if(quantity == 11) {
            alert("Desculpa, mas o limite máximo é de 10 unidades por prato.")
            setQuantity(10)
            setUnidads(`0${quantity}`)
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
        alert(`voce fez ${quantity} pedidos de ${food} anotado`)
        setQuantity(1)
        setUnidads(`01`)
    };

    return (
        <Conteiner>
                <Header>
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        /* onChange={(e) => setSearch(e.target.value)} */
                    />
                </Header>
            <Content>
                <Link to="/">
                    <RxCaretLeft />
                    voltar
                </Link>
            
                {
                    dish.map(rush => (
                    <Cont>
                        <img 
                            src={`${apiImg.defaults.baseURL}/files/${rush.img_dish}`} 
                            alt="imagem do prato" 
                        />

                        <div className="itens">
                            <h1>{rush.title}</h1>
                            <p>{rush.description}</p>
                            <div className="products">
                                {
                                    allingredients.map((ingredients, index) => (
                                        <ButtonText 
                                            key={String(index)}
                                            title={ingredients.name}
                                        />
                                    ))
                                }
                            </div>

                            <DisplayTwo 
                                className="displayPreview"
                                food={rush.id}
                            />
                            
                        </div>
                    </Cont>
                    ))
                }
            </Content>
            <Footer />
        </Conteiner>
    )
}