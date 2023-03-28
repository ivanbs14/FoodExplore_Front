import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppClientRoutes } from './appClient.routes';
import { AppRoutes } from './appAdm.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
    const { user } = useAuth();

    return(
        <BrowserRouter>
            { user ? <AppRoutes /> : <AuthRoutes />}
        </BrowserRouter>
    )
}