import mbToken from "./../../assets/mb-token.png";
import metamask from "./../../assets/metamask.png";
import opensea from "./../../assets/opensea.png";

import styles from "./../../styles.module.css";



const CompanySection = () => {
    return (
        <div data-aos="fade-in" className={`${styles.company}`}>
                <div className="h-full flex flex-col md:flex-row justify-between py-6 items-center md:justify-between md:px-24 md:py-3">
                    <div><img src={mbToken} alt={"mb-token"}/></div>
                    <div><img src={metamask} alt={"metamask"}/></div>
                    <div><img src={opensea} alt={"opensea"}/></div>
                </div>
        </div>
    );
}
  
export default CompanySection;
  