import house1 from "./../assets/cards/house1.png";
import metamask from "./../assets/metamask.png";
import opensea from "./../assets/opensea.png";
import rating from "./../assets/rating.png";

import styles from "./../styles.module.css";



const AssetCard = ({asset}) => {
    return (
        <div className={`${styles.assetCard} p-4`}>
           
            <div className={styles.assetCard}>
                <img src={house1} alt={"mb-token"}/>
            </div>

            <div className="flex justify-between my-2">
                <text>Desert king</text>
                <text className="font-bold"> <strong> 1MBT per night </strong> </text>
            </div>

            <div className="flex justify-between my-2">
                <text>2345km away</text>
                <text>Desert king</text>
            </div>

            <div className="flex justify-between">
                <img src={rating} alt="rating" />
            </div>

        </div>
    );
}
  
export default AssetCard;
  