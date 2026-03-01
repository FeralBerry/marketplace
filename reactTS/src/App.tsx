import BaseFrontComponent from "./components/front/BaseFrontComponent.tsx";
import axios from 'axios';
import BaseAdminComponent from "./components/back/BaseAdminComponent.tsx";
import {useState} from "react";

function App() {
    let [userRole,setUserRole] = useState(0)
    axios.post('http://127.0.0.1:8080/api/users/role')
        .then((res) => {
            setUserRole(res.data)
    });
    if(userRole == 0){
        return (
            <>
                <BaseFrontComponent/>
            </>
        )
    }
    if (userRole == 1){
        return (
            <>
                <BaseAdminComponent/>
            </>
        )
    }
}

export default App
