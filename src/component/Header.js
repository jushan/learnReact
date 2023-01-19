import React from "react";
import Title from "./Title";
import Navigation from "./Navigation";
const Header = ()=>{
    return(
        <>
        <div className="header-wrapper">
            <Title />
            <Navigation />
        </div>
        </>
    )
}
export default Header;