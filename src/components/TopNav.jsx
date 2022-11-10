import logo from "./../assets/logo.png";
import styles from "./../styles.module.css";

const links = [
    {name: "Home", link: "#"},
    {name: "Place to stay", link: "#"},
    {name: "NFTs", link: "#"},
    {name: "Community", link: "#"}
]


const TopNav = () => {
    return (
        <header className="w-100 px-24 py-10">
            <div className="flex justify-between">
                <div><img src={logo} alt={"home"}/></div>
                <div>
                    {
                       links.map((link, index) => <a className={`${styles.navLinks} mx-4`} key={index} href={link.link}> {link.name} </a>)
                    }
                </div>
                <button className={`${styles.connectBtn} rounded-lg px-8`}> Connect Wallet </button>
            </div>
        </header>
    );
}
  
export default TopNav;
  