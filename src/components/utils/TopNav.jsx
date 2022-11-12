import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import menu from "./../../assets/menu.svg";
import styles from "./../../styles.module.css";
import SideNav from "./SideNav";

const links = [
    {name: "Home", link: "#"},
    {name: "Place to stay", link: "#"},
    {name: "NFTs", link: "#"},
    {name: "Community", link: "#"}
]


const TopNav = () => {
    const [show, setShow] = React.useState(false);
    return (
        <header className="w-100 px-4 py-4 lg:px-20 xl:px-24 xl:py-10">
            <div className="flex justify-between">
                <div><img src={logo} alt={"home"}/></div>
                <div className="hidden lg:flex">
                    {
                       links.map((link, index) => <Link className={`${styles.navLinks} mx-4`} key={index} to={link.link}> {link.name} </Link>)
                    }
                </div>
                <button className={`${styles.connectBtn} hidden lg:block rounded-lg px-8`}> Connect Wallet </button>
                <menu onClick={() => setShow(true)} className="lg:hidden p-2">
                    <img src={menu} alt="Menu" />
                </menu>
            </div>
            <SideNav links={links} show={show} setShow={setShow} />
        </header>
    );
}
  
export default TopNav;
  