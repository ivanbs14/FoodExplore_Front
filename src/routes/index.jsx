import { BrowserRouter } from "react-router-dom";
/* import { useAuth } from "../hooks/auth"; */

import { AppRoutes } from './appAdm.routes';
import { AuthRoutes } from './auth.routes';

export function Routes() {
    /* const { user } = useAuth(); */

    return(
        <BrowserRouter>
            <AuthRoutes />
            {/* {user ? <AppRoutes /> : <AuthRoutes />} */}
        </BrowserRouter>
    )
}