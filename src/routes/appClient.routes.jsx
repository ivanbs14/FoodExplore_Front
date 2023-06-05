import { Routes, Route } from "react-router-dom";

import { DishesClient } from '../pages/DishesClient';
import { MenuClient } from '../pages/Menuclient';


export function AppClientRoutes() {
    return(
        <Routes>
            <Route path="/dishesClient" element={<DishesClient />}/>
            <Route path="/" element={<MenuClient />}/>
        </Routes>
    )
}