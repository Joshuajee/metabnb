import mbToken from "./../assets/mb-token.png";
import metamask from "./../assets/metamask.png";
import opensea from "./../assets/opensea.png";

import styles from "./../styles.module.css";



const CompanySection = () => {
    return (
        <div className={`${styles.company} w-100 px-24 py-4`}>
            <div className="flex justify-between">
                <div><img src={mbToken} alt={"mb-token"}/></div>
                <div><img src={metamask} alt={"metamask"}/></div>
                <div><img src={opensea} alt={"opensea"}/></div>
            </div>
        </div>
    );
}
  
export default CompanySection;
  