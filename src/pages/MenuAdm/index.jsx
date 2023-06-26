import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import imgMenu from "../../assets/imgMenu.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Cards } from "../../components/Cards";
import { ButtonEdit } from '../../components/ButtonEdit';
import { Input } from '../../components/Input';

export function MenuAdm() {
    const navigate = useNavigate();

    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [dishSelect, setDishSelect] = useState(null);

    const filterRefeiçoes = "Refeições";
    const filterSobremesas = "Sobremesas";
    const filterBebidas = "Bebidas";

    const carousel = useRef(null);
    const carouselTwo = useRef(null);
    const carouselTree = useRef(null);

    /* Function carrosel */
    const handleLeftClickMeals = e => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };
    const handleRightClickMeals = e => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };
    
    const handleLeftClickDesserts = e => {
        e.preventDefault();
        carouselTwo.current.scrollLeft -= carouselTwo.current.offsetWidth;
    };
    const handleRightClickDesserts = e => {
        e.preventDefault();
        carouselTwo.current.scrollLeft += carouselTwo.current.offsetWidth;
    };
    
    const handleLeftClickDrinks = e => {
        e.preventDefault();
        carouselTree.current.scrollLeft -= carouselTree.current.offsetWidth;
    };
    const handleRightClickDrinks = e => {
        e.preventDefault();
        carouselTree.current.scrollLeft += carouselTree.current.offsetWidth;
    };

    /* Search by category */
    useEffect(() => {
        async function getMeals() {
            const response = await api.get(`/dish/?category=${filterRefeiçoes}`);
            setMeals(response.data);
        }

        getMeals();

        async function getDesserts() {
            const response = await api.get(`/dish/?category=${filterSobremesas}`);
            setDesserts(response.data);
        }
        
        getDesserts();
        
        async function getDrinks() {
            const response = await api.get(`/dish/?category=${filterBebidas}`);
            setDrinks(response.data);
        }
        
        getDrinks();
    }, [])

    /* Navigate to the dish edit page */
    useEffect(() => {
        if (dishSelect) {
            navigate(`/editDishes/${dishSelect}`);
        }
    }, [dishSelect])

    return (
        <Conteiner>
            <Header>
            <Input
                placeholder="Busque por pratos ou ingredientes"
                onChange={(e) => setSearch(e.target.value)}
            /> 
            </Header>
            <Content>
                <img className="imgMenu" src={imgMenu} alt="" />
                <div className="titulo">
                    <h1>Sabores inigualáveis</h1>
                    <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                </div>
            
                <Cont>
                    <Section  title={"Refeições"}>
                        <div className="categorias">
                            <ButtonEdit
                                className="btnEdit"
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickMeals}
                            />
                            <div className="menucard" ref={carousel}>
                                {
                                    meals.map((food, index) => (
                                        <Cards 
                                            className="item"
                                            key={String(index)}
                                            nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                            sub={`imagem do prato ${food.title}`}
                                            title={food.title}
                                            subscript={food.description}
                                            value={food.price}
                                            event={() => setDishSelect(food.id)}
                                            dads={food.id}
                                        />
                                    ))
                                }
                                <ButtonEdit
                                    className="btnEditR"
                                    icon={MdKeyboardArrowRight}
                                    id="btnR"
                                    onClick={handleRightClickMeals}
                                />
                            </div>
                        </div>
                    </Section>
                    
                    <Section title={"Sobremesas"}>
                        <div className="categorias">
                            <ButtonEdit
                                className="btnEdit"
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickDesserts}
                            />
                            <div className="menucard" ref={carouselTwo}>
                                {
                                    desserts.map((food, index) => (
                                        <Cards 
                                            className="item"
                                            key={String(index)}
                                            nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                            sub={`imagem do prato ${food.title}`}
                                            title={food.title}
                                            subscript={food.description}
                                            value={food.price}
                                            event={() => setDishSelect(food.id)}
                                            dads={food.id}
                                        />
                                    ))
                                }
                            </div>
                            <ButtonEdit
                                className="btnEditR"
                                icon={MdKeyboardArrowRight}
                                id="btnR"
                                onClick={handleRightClickDesserts}
                            />
                        </div>
                    </Section>
                    
                    <Section title={"Bebidas"}>
                        <div className="categorias">
                            <ButtonEdit
                                className="btnEdit"
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickDrinks}
                            />
                            <div className="menucard" ref={carouselTree}>
                                {
                                    drinks.map((food, index) => (
                                        <Cards 
                                            className="item"
                                            key={String(index)}
                                            nimg={`${apiImg.defaults.baseURL}/files/${food.img_dish}`}
                                            sub={`imagem do prato ${food.title}`}
                                            title={food.title}
                                            subscript={food.description}
                                            value={food.price}
                                            event={() => setDishSelect(food.id)}
                                            dads={food.id}
                                        />
                                    ))
                                }
                            </div>
                            <ButtonEdit
                                className="btnEditR"
                                icon={MdKeyboardArrowRight}
                                id="btnR"
                                onClick={handleRightClickDrinks}
                            />
                        </div>
                    </Section>
                </Cont>
            </Content>
            <Footer />
        </Conteiner>
    )
}