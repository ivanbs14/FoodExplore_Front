import { useEffect, useState } from "react";
import { Conteiner, Content, Dish } from "./styles";

import { FiUpload } from 'react-icons/fi';

import { useAuth } from "../../hooks/auth";

import { useNavigate, useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NotItens } from "../../components/NotItens"

export function EditDishes() {
    const { signOut } = useAuth();

    const [search, setSearch] = useState("");
    const [dish, setDish] = useState();

    const [file, setFile] = useState(null);

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    /* armazena ingredients do banco de dados */
    const [dataIngredientsExisting, setDataIngredientsExisting] = useState([]);
    const [allIngredientExisting, setAllIngredientExisting] = useState([]);

    /* recebe os novos ingredients digitados */
    const [newIngredient, setNewIngredient] = useState("");
    const [allIngredients, setAllIngredients] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    function handleChangeImg(event) {
        const fileImg = event.target.files[0];
        const fileUploadForm = new FormData();
        fileUploadForm.append("img_dish", fileImg)
        setFile(fileUploadForm);
    };

    function handlePreviewDishes() {
        navigate(`/dishesPreviewAdm/${params.id}`);
    };

    function handleAddProduct() {
        setAllIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }

    function handleRemoveIngred(deleted) {
        setAllIngredients(prevState => prevState.filter(ingre => ingre !== deleted));
    }

    async function handlePutDish() {
        if(newIngredient) {
            return alert("Você não digitou um ingrediente, mas não clicou em adicionar.");
        }

        const responseData = await api.put(`/dish/${params.id}`, {
            title,
            category,
            price,
            description,
            allIngredients,
        });

        await api.patch(`/dish/${params.id}`, file );
        alert("Prato Atualizado com sucesso com sucesso!");
    };

    async function deleteDish() {
        const delet = await api.delete(`/dish/${params.id}`)
    };

    function handleLogout() {
        navigate(-1);
        signOut();
    }

    useEffect(() => {
        async function fetchDish() {
            const response = await api.get(`/dish/${params.id}`);
            setDish(response.data);
        }

        fetchDish();
    }, [])

    /* useEffect(() => {
        async function atualizationIngred() {
            setIngredient(allIngredients);
        }

        atualizationIngred();
    }, [newIngredient]) */

    useEffect(() => {
        async function dataDish() {
            dish.map((item) => {
                setTitle(item.title);
                setCategory(item.category);
                setPrice(item.price);
                setDescription(item.description);
                setDataIngredientsExisting(item.ingredients)
            })
        }
        dataDish();

        async function dataIngredients() {
            dataIngredientsExisting.map(ingred => (
                setAllIngredientExisting(prevState => [...prevState, ingred.name])
            ))
        }
        dataIngredients();

    }, [dish])

    return (
        <Conteiner>
                <Header
                    eventss={handleLogout}
                    btnTitle={"Novo prato"}
                >
                    <Input 
                        placeholder="Busque por pratos ou ingredientes"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </Header>
            <Content>
                <ButtonText 
                    title={"voltar"}
                    onClick={() => handlePreviewDishes()}
                />

                <h1>Adicionar prato</h1>
                <div className="lineOne">
                    <Section title={"Imagem do prato"}>
                        <Dish>
                            <label htmlFor="dish">
                                <FiUpload />
                                <span>Selecione imagem</span>
                            
                                <input 
                                    id='dish'
                                    type="file"
                                    onChange={handleChangeImg}
                                />
                            </label>
                        </Dish>
                    </Section>
                    
                    <Section title={"Nome"}>
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            /* defaultValue={dish.title} */
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Section>
                    
                    <Section title={"Categoria"}>
                        <div>
                            <select name="category" defaultValue={''} onChange={texto => setCategory(texto.target.value)}>
                                <option value="Refeições">Refeições</option>
                                <option value="Sobremesas">Sobremesas</option>
                                <option value="Bebidas">Bebidas</option>
                            </select>
                        </div>
                    </Section>
                </div>

                <div className={"lineTwo"}>
                    <Section title={"Ingredientes"}>
                        <div className="tags">
                            {
                                allIngredients.map((ingre, index) => (
                                    <NotItens 
                                        key={String(index)}
                                        value={ingre}
                                        onClick={() => handleRemoveIngred(ingre)}
                                    />
                                ))
                            }

                            <NotItens 
                                isNew 
                                placeholder="ingrediente"
                                value={newIngredient}
                                onChange={e => setNewIngredient(e.target.value)}
                                onClick={handleAddProduct}
                            />
                        </div> 
                    </Section>

                    <Section title={"Preço"}>
                        <Input 
                            className={"preco"} 
                            placeholder={"00,00"}
                            /* defaultValue={''} */
                            onChange={e => setPrice(e.target.value)}
                        />
                    </Section>
                </div>
                    
                <Section title={"Descrição"}>
                    <Textarea 
                        placeholder={"Fale brevemente sobre o prato, seus ingredientes e composição"}
                        onChange={e => setDescription(e.target.value)}
                    />
                </Section>

                <div className="btns">
                    <Button title={"Excluir prato"}
                        onClick={deleteDish}
                    />
                    <Button 
                        title={"Salvar alterações"} 
                        onClick={handlePutDish}
                    />
                </div>

            </Content>
            <Footer />
        </Conteiner>
    )
}