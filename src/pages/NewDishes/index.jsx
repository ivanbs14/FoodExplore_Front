import { useState } from "react";
import { Conteiner, Content, Dish } from "./styles";

import { FiUpload } from 'react-icons/fi';

import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { Button } from "../../components/Button"
import { NotItens } from "../../components/NotItens"

export function NewDishes() {
    const { dish, updateProfile } = useAuth();

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const [imgDish, setImgDish] = useState(null);
    const [imgDishFile, setImgDishFile] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredients, setNewIngredients] = useState([]);

    const navigate = useNavigate();

    async function handleUpdate() {
        const dish = {
            title,
            category,
            ingredients,
            price,
            description,
        }

        await updateProfile({ dish, imgDishFile });
    }

    function handleChangeImg(event) {
        const file = event.target.files[0];
        setImgDishFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImgDish(imagePreview);
    }

    function handleAddProduct() {
        setIngredients(prevState => [...prevState, newIngredients]);
        setNewIngredients("");
    }

    function handleRemoveProduct(deleted) {
        setIngredients(prevState => prevState.filter(ingredients => ingredients !== deleted));
    }

    async function handleNewDish() {
        await api.post("/dish", {
            title,
            category,
            ingredients,
            price,
            description,
        });

        alert("Nota criada com sucesso!");
    };

    return (
        <Conteiner>
                <Header />
            <Content>
                <ButtonText title={"voltar"}/>

                <h1>Adicionar prato</h1>

                <div className="lineOne">
                    <Section title={"Imagem do prato"}>
                        <Dish>
                            <label htmlFor="dish">
                                <FiUpload />
                                <span>Selecione imagem</span>

                                <input 
                                    id='avatar'
                                    type="file"
                                    onChange={handleChangeImg}
                                />
                            </label>
                        </Dish>
                    </Section>
                    
                    <Section title={"Nome"}>
                        <Input 
                            placeholder="Ex.: Salada Ceasar"
                            onChange={e => setTitle(e.target.value)}
                        />
                    </Section>
                    
                    <Section title={"Categoria"}>
                        <div>
                            <select name="category" value={category} onChange={texto => setCategory(texto.target.value)}>
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
                                ingredients.map((ingredients, index) => (
                                    <NotItens 
                                        key={String(index)}
                                        value={ingredients}
                                        onClick={() => handleRemoveProduct(ingredients)}
                                    />
                                ))
                            }
                            <NotItens 
                                isNew 
                                placeholder="ingrediente"
                                value={newIngredients}
                                onChange={e => setNewIngredients(e.target.value)}
                                onClick={handleAddProduct}
                            />
                        </div>
                    </Section>

                    <Section title={"Preço"}>
                        <Input 
                            className={"preco"} 
                            placeholder={"R$ 00,00"}
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

                <Button 
                    className="btntext" 
                    title={"Salvar alterações"}
                    onClick={handleNewDish}
                />

            </Content>
            <Footer />
        </Conteiner>
    )
}