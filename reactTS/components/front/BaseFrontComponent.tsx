import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "../../pages/front/FrontIndex.tsx";
import HeaderComponent from "./HeaderComponent.tsx";
import FooterComponent from "./FooterComponent.tsx";
import AuthComponent from "../../pages/auth/AuthComponent.tsx";
import './CSSImport.tsx'
import './JSImport.tsx'
import EmailVerify from "../../pages/auth/EmailVerify.tsx";
import ResetPassword from "../../pages/auth/ResetPassword.tsx";
import {AppContextProvider} from "../../context/AppContext.tsx";


function BaseFrontComponent() {
    return(
        <BrowserRouter>
            <AppContextProvider>
                <div className="wrapper home-one">
                    <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={ <HomeComponent/> }/>
                        <Route path='/login' element={ <AuthComponent/> }/>
                        <Route path='/register' element={ <AuthComponent/> }/>
                        <Route path='/email-verify' element={ <EmailVerify/> }/>
                        <Route path='/reset-password' element={ <ResetPassword/> }/>
                    </Routes>
                    <FooterComponent/>
                </div>
            </AppContextProvider>
        </BrowserRouter>
    )

}
export default BaseFrontComponent