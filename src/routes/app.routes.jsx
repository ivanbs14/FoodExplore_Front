import { Routes, Route } from "react-router-dom";

import { NewDishes } from '../pages/NewDishes';
import { EditDishes } from '../pages/EditDishes';
import { DishesPreviewAdm } from '../pages/DishesPreviewAdm';
import { MenuAdm } from '../pages/MenuAdm';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/DishesPreviewAdm" element={<DishesPreviewAdm />}/>
            <Route path="/EditDishes" element={<EditDishes />}/>
            <Route path="/NewDishes" element={<NewDishes />}/>
            <Route path="/" element={<MenuAdm />}/>

        </Routes>
    )
}