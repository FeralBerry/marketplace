import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./pages/HomeComponent.tsx";
import HeaderComponent from "./layout/HeaderComponent.tsx";
import FooterComponent from "./layout/FooterComponent.tsx";
import AuthComponent from "../auth/AuthComponent.tsx";
import './layout/CSSImport.tsx'
import './layout/JSImport.tsx'


function BaseFrontComponent() {
    return(
        <BrowserRouter>
            <div className="wrapper home-one">
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={ <HomeComponent/> }>home</Route>
                    <Route path='/auth/login' element={ <AuthComponent/> }>login</Route>
                    <Route path='/auth/register' element={ <AuthComponent/> }>register</Route>
                </Routes>
                <FooterComponent/>
            </div>
        </BrowserRouter>
    )

}
export default BaseFrontComponent