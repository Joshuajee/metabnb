import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import menu from "./../../assets/menu.svg";
import styles from "./../../styles.module.css";
import Container from "./Container";
import SideNav from "./SideNav";

const links = [
    {name: "Home", link: "/"},
    {name: "Place to stay", link: "/place-to-stay"},
    {name: "NFTs", link: "/"},
    {name: "Community", link: "/"}
]


const TopNav = () => {
    const [show, setShow] = React.useState(false);
    return (
        <Container>
            <header>
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
        </Container>
    );
}
  
export default TopNav;
  