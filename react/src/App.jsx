import ListUsersComponent from "./components/back/admin/ListUsersComponent.jsx";
import HeaderComponent from "./components/back/admin/HeaderComponent.jsx";
import FrontHeader from "./components/front/layout/header.jsx";
import FrontFooter from "./components/front/layout/footer.jsx";
import FooterComponent from "./components/back/admin/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddUserComponent from "./components/back/admin/AddUserComponent.jsx";
import HomeComponent from "./components/front/HomeComponent.jsx";
import {frontOrBack} from "./services/variables.jsx";
import {useEffect, useState} from "react";

function App() {

    let [frontBack , setFrontBack] = useState("front")

    useEffect(() => {
        change()
    },[])
    function change(){
        setFrontBack = frontOrBack()
    }
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

export default App
