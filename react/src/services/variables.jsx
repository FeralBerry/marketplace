let frontOrBackV = "front";
export const changeFrontOrBack = () => {
    if(frontOrBackV === "front"){
        frontOrBackV = "back"
    } else if(frontOrBackV === "back"){
        frontOrBackV = "front"
    }
    console.log(frontOrBackV)
}

export const frontOrBack = () => {
    if(frontOrBackV === "front"){
        return "front"
    } else if(frontOrBackV === "back") {
        return "back"
    }
};