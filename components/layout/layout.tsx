import React from "react";
import Footer from "./footer/footer";
import HeaderDesktop from "./header/headerDesktop";
import HeaderMobile from "./header/headerMobile";

const Layout = (props: any) => {
    return (
        <React.Fragment>
            <HeaderDesktop></HeaderDesktop>
            <HeaderMobile></HeaderMobile>
            {props.children}
        <Footer></Footer>
        </React.Fragment>


    );
}

export default Layout;