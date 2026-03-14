import BreadcrumbComponent from "../../components/front/BreadcrumbComponent.tsx";
import LoginComponent from "./LoginComponent.tsx";
import RegisterComponent from "./RegisterComponent.tsx";

function AuthComponent() {
    let auth = null
    let title;
    let links;
    if(window.location.pathname == "/login"){
        auth = <LoginComponent/>
        title = "Login"
        links ="<li class='home'>" +
            "<a title='Go to Home Page' href='/reactTS/public'>Home</a></li>" +
            "                    <li class='active'>Login</li>";

    }
    if(window.location.pathname == "/register"){
        auth = <RegisterComponent/>
        title = "Register"
        links = links ="<li class='home'>" +
            "<a title='Go to Home Page' href='/reactTS/public'>Home</a></li>" +
            "                    <li class='active'>Register</li>";
    }
    return (
        <>
            <BreadcrumbComponent title={title} links={links}/>
            {auth}
        </>
    )
}

export default AuthComponent


