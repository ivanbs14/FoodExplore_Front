import { Routes, Route } from "react-router-dom";

import { DishesClient } from '../pages/DishesClient';


export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<DishesClient />}/>
        </Routes>
    )
}