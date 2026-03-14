import {BrowserRouter, Routes, Route} from "react-router-dom";
import IndexComponent from './AdminComponents/IndexComponent.tsx'



function BaseAdminComponent() {


    return(
        <BrowserRouter>
            <div className="wrapper home-one">
                <Routes>
                    {/*{Front}*/}
                    <Route path='/' element={ <IndexComponent/> }>home</Route>
                    {/*{Back}*/}
                </Routes>
            </div>
        </BrowserRouter>
    )

}
export default BaseAdminComponent