import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeComponent from "./HomeComponent.tsx";


function BaseFrontComponent() {
    return(
        <BrowserRouter>
            <div className="wrapper home-one">
                <Routes>
                    <Route path='/' element={ <HomeComponent/> }>home</Route>
                </Routes>
            </div>
        </BrowserRouter>
    )

}
export default BaseFrontComponent