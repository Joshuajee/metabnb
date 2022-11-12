import mbToken from "./../../assets/mb-token.png";
import metamask from "./../../assets/metamask.png";
import opensea from "./../../assets/opensea.png";

import styles from "./../../styles.module.css";



const CompanySection = () => {
    return (
        <div className={`${styles.company}`}>
            <div className="flex justify-between px-24 py-3">
                <div><img src={mbToken} alt={"mb-token"}/></div>
                <div><img src={metamask} alt={"metamask"}/></div>
                <div><img src={opensea} alt={"opensea"}/></div>
            </div>
        </div>
    );
}
  
export default CompanySection;
  