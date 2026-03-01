import FrontHeader from "../components/front/layout/header.jsx";
import FrontFooter from "../components/front/layout/footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomeComponent from "../components/front/HomeComponent.jsx";

function Front() {
    return (
        <>
            <BrowserRouter>
                <div className="wrapper home-one">
                    <FrontHeader/>
                    <Routes>
                        <Route path='/' element={ <HomeComponent/> }>home</Route>
                    </Routes>
                    <FrontFooter/>
                </div>
            </BrowserRouter>
        </>
    )
}

export default Front
