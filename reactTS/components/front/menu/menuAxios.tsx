import axios from "axios";
import {AppContext} from "../../../context/AppContext.tsx";
import {useContext} from "react";

// @ts-ignore
export const getMenu = async () => {
    try{
        // @ts-ignore
        const {backendUrl} = useContext(AppContext);
        return await axios.post(backendUrl + "/front/menu");
    } catch (err){
        console.log(err)
    }

}
export const getSocialLink = async () => {
    try{
        const {backendUrl} = useContext(AppContext);
        return await axios.post(backendUrl + "/front/social");
    } catch (err){
        console.log(err)
    }

}