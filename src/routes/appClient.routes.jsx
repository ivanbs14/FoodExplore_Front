import { Routes, Route } from "react-router-dom";

import { DishesClient } from '../pages/DishesClient';


export function AppClientRoutes() {
    return(
        <Routes>
            <Route path="/" element={<DishesClient />}/>
        </Routes>
    )
}