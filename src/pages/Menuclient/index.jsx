import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Conteiner, Content, Cont } from "./styles";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { BsReceiptCutoff } from "react-icons/bs";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";
import { apiImg } from "../../services/apiImg";

import imgMenu from "../../assets/imgMenu.png";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Cards } from "../../components/Cards";
import { ButtonEdit } from '../../components/ButtonEdit';
import { Input } from '../../components/Input';

export function MenuClient() {
    const { signOut } = useAuth();

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
            const response = await api.get(`/Client/?category=${filterRefeiçoes}`);
            setMeals(response.data);
        }

        getMeals();

        async function getDesserts() {
            const response = await api.get(`/Client/?category=${filterSobremesas}`);
            setDesserts(response.data);
        }
        
        getDesserts();
        
        async function getDrinks() {
            const response = await api.get(`/Client/?category=${filterBebidas}`);
            setDrinks(response.data);
        }
        
        getDrinks();
    }, [])

   /*  useEffect(() => {
        if (dishSelect) {
            navigate(`/dishesPreviewAdm/${dishSelect}`);
        }
    }, [dishSelect]) */

    function handleLogout() {
        navigate("/");
        signOut();
    }

    function newDish() {
        navigate(`/newDishes`);
    }

    return (
        <Conteiner>
            <Header
                eventss={handleLogout}
                events={newDish}
                btnLogo={< BsReceiptCutoff />}
                btnTitle={"Pedidos (0)"}
            >
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
                    <Section className="categorias" title={"Refeições"}>
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
                                    />
                                ))
                            }
                        </div>
                        <div className="buttons">
                            <div className="backgroundLeft"></div>
                            <div className="backgroundRight"></div>
                            <ButtonEdit
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickMeals}
                            />

                            <ButtonEdit
                                icon={MdKeyboardArrowRight}
                                id="btnR"
                                onClick={handleRightClickMeals}
                            />
                        </div>
                    </Section>
                    
                    <Section className="categorias" title={"Sobremesas"}>
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
                                    />
                                ))
                            }
                        </div>
                        <div className="buttons">
                            <div className="backgroundLeft"></div>
                            <div className="backgroundRight"></div>
                            <ButtonEdit
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickDesserts}
                            />

                            <ButtonEdit
                                icon={MdKeyboardArrowRight}
                                id="btnR"
                                onClick={handleRightClickDesserts}
                            />
                        </div>
                    </Section>
                    
                    <Section className="categorias" title={"Bebidas"}>
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
                                    />
                                ))
                            }
                        </div>
                        <div className="buttons">
                            <div className="backgroundLeft"></div>
                            <div className="backgroundRight"></div>
                            <ButtonEdit
                                icon={MdKeyboardArrowLeft}
                                id="btnL"
                                onClick={handleLeftClickDrinks}
                            />

                            <ButtonEdit
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