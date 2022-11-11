import styles from "./../../styles.module.css";
import FooterLinks from "./FooterLinks";

import footerLogo from "./../../assets/footer-logo.png";
import facebook from "./../../assets/socials/facebook.png";
import twitter from "./../../assets/socials/twitter.png";
import instagram from "./../../assets/socials/instagram.png";


const community = [
    { name: "NFT", link: "/"},
    { name: "Tokens", link: "/"},
    { name: "Landlords", link: "/"},
    { name: "Discord", link: "/"},
]

const places = [
    { name: "Castle", link: "/"},
    { name: "Farms", link: "/"},
    { name: "Beach", link: "/"},
    { name: "Learn more", link: "/"},
]

const aboutus = [
    { name: "Road map", link: "/"},
    { name: "Creators", link: "/"},
    { name: "Career", link: "/"},
    { name: "Contact us", link: "/"},
]

const Footer = () => {
    return (
        <footer className={`${styles.footer} pt-10 px-20`}>

            <div className="flex">

                <div className="basis-2/5">
                    
                    <img src={footerLogo} alt={"home"}/>

                    <div className="mt-28 flex w-28 justify-between">
                        <a href="/"> <img src={facebook} alt="facebook" /> </a> 
                        <a href="/"> <img src={twitter} alt="twitter" /> </a>
                        <a href="/"> <img src={instagram} alt="Instagram" /> </a>
                    </div>

                    <div className="mt-16">
                        <text>&copy; 2022 Metabnb</text>
                    </div>
                
                </div>


                <div className="flex basis-2/5 justify-between">
 
                    <FooterLinks title={"Community"} links={community} />

                    <FooterLinks title={"Places"} links={places} />
        
                    <FooterLinks title={"About Us"} links={aboutus} />        

                </div>

            </div>

        </footer>
    );
}
  
export default Footer;
  