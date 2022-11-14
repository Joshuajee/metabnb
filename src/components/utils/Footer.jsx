import styles from "./../../styles.module.css";
import FooterLinks from "./FooterLinks";

import footerLogo from "./../../assets/footer-logo.png";
import facebook from "./../../assets/socials/facebook.png";
import twitter from "./../../assets/socials/twitter.png";
import instagram from "./../../assets/socials/instagram.png";
import Container from "./Container";


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
        <footer className={`${styles.footer} pt-10`}>

            <Container>

                <div className="flex flex-col md:flex-row md:basis-full w-full justify-start">

                    <div className="md:basis-full  xl:basis-2/6">
                        
                        <img src={footerLogo} alt={"home"}/>

                        <div className="mt-8 md:mt-24 flex w-28 justify-between">
                            <a href="/"> <img src={facebook} alt="facebook" /> </a> 
                            <a href="/"> <img src={twitter} alt="twitter" /> </a>
                            <a href="/"> <img src={instagram} alt="Instagram" /> </a>
                        </div>
                    
                    </div>

                    <div className="grid grid-cols-2  md:flex md:flex-row md:basis-full xl:basis-3/6 md:justify-between">
    
                        <FooterLinks title={"Community"} links={community} />

                        <FooterLinks title={"Places"} links={places} />
            
                        <FooterLinks title={"About Us"} links={aboutus} />        

                    </div>

                </div>

                <div className="text-center mt-10 md:text-left">
                    <p>&copy; 2022 Metabnb</p>
                </div>

            </Container>

        </footer>
    );
}
  
export default Footer;
  