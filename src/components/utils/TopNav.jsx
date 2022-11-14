import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../../assets/logo.png";
import menu from "./../../assets/menu.svg";
import styles from "./../../styles.module.css";
import Container from "./Container";
import SideNav from "./SideNav";
import WalletModal from "./WalletModal";

const links = [
    {name: "Home", link: "/"},
    {name: "Place to stay", link: "/place-to-stay"},
    {name: "NFTs", link: "#"},
    {name: "Community", link: "#"}
]


const TopNav = () => {

    const [show, setShow] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false)

    const location = useLocation();

    const open = () => {
        setShowModal(true)
    }

    const close = () => {
        setShowModal(false)
    }

    const active = (link) => {
        return location.pathname === link ? styles.active : ""
    }

    return (
        <Container>
            <header>
                <div className="flex justify-between">
                    <Link to={"/"}><img src={logo} alt={"home"}/></Link>
                    <div className="hidden lg:flex">
                        {
                            links.map((link, index) => <Link className={`${styles.navLinks} ${active(link.link)} mx-4`} key={index} to={link.link}> {link.name} </Link>)
                        }
                    </div>
                    <button onClick={open} className={`${styles.connectBtn}  hidden lg:block rounded-lg px-8`}> Connect Wallet </button>
                    <menu onClick={() => setShow(true)} className="lg:hidden p-2">
                        <img src={menu} alt="Menu" />
                    </menu>
                </div>
                <SideNav active={active} links={links} show={show} setShow={setShow} open={open} />
                <WalletModal show={showModal} close={close}/>
            </header>
        </Container>
    );
}
  
export default TopNav;
  