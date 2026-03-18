import {createContext, useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal} from "react";
import {AppConstants} from "../utils/AppConstants.tsx";
import axios from "axios";
import {toast} from "react-toastify";

// @ts-ignore
export const AppContext = createContext();
export const AppContextProvider = (props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
    const backendUrl = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);
    const [menu,setMenu] = useState([]);
    const getMenu = async () => {
        try {
            axios.post(backendUrl + "/front/menu").then((res) => {
                console.log(res.data)
                setMenu(res.data)
            })
        } catch (error){
            // @ts-ignore
            toast.error(error.message)
        }
    }
    const getUserData = async () => {
        try{
            axios.get(backendUrl + "/profile")
                .then((res) => {
                    setUserData(res.data)
                })
                .catch(() => {
                    toast.error("Unable to user data")
                })
        } catch (error){
            // @ts-ignore
            toast.error(error.message)
        }
    }
    const contextValue = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData,setUserData,
        getUserData,
        menu,getMenu
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}