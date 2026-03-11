import {createContext, useState, type JSXElementConstructor, type ReactElement, type ReactNode, type ReactPortal} from "react";
import {AppConstants} from "../utils/AppConstants.tsx";

export const AppContext = createContext();
export const AppContextProvider = (props: { children: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => {
    const backendUrl = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);
    const contextValue = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userData,setUserData
    }
    return (
        <AppContext.Provider value={contextValue}>
            {props.children}
        </AppContext.Provider>
    )
}