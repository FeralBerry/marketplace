import BreadcrumbComponent from "../front/layout/BreadcrumbComponent.tsx";
import LoginComponent from "./LoginComponent.tsx";
import RegisterComponent from "./RegisterComponent.tsx";

function AuthComponent() {
    console.log(window.location.pathname)
    let auth = null
    let title;
    let links;
    if(window.location.pathname == "/auth/login"){
        auth = <LoginComponent/>
        title = "Login"
        links ="<li class='home'>" +
            "<a title='Go to Home Page' href='/'>Home</a></li>" +
            "                    <li class='active'>Login</li>";

    }
    if(window.location.pathname == "/auth/register"){
        auth = <RegisterComponent/>
        title = "Register"
        links = links ="<li class='home'>" +
            "<a title='Go to Home Page' href='/'>Home</a></li>" +
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


