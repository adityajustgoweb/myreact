import react from "react";
import Navigation from "./navigation";
import Search from "./search";

class Header extends react.Component
{
    render(){
return(
    <div>
        <Navigation quality="Best" place="home"/>
        <Search/>
    </div>
)
}
}

export default Header;