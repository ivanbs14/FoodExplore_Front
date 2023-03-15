import { Routes, Route } from "react-router-dom";

import { NewDishes } from '../pages/NewDishes';
import { EditDishes } from '../pages/EditDishes';
import { DishesPreviewAdm } from '../pages/DishesPreviewAdm';
import { MenuAdm } from '../pages/MenuAdm';

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/dishesPreviewAdm" element={<DishesPreviewAdm />}/>
            <Route path="/editDishes" element={<EditDishes />}/>
            <Route path="/" element={<NewDishes />}/>
            <Route path="/MenuAdm" element={<MenuAdm />}/>

        </Routes>
    )
}