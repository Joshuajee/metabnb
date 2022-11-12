import rating from "./../../assets/rating.png";
import styles from "./../../styles.module.css";



const AssetCard = ({asset}) => {
    return (
        <div className={`${styles.assetCard} p-4`}>
           
            <div>
                <img className="w-full" src={asset.image} alt={"house"}/>
            </div>

            <div className="flex justify-between my-2">
                <p>Desert king</p>
                <p className="font-bold"> <strong> 1MBT per night </strong> </p>
            </div>

            <div className="flex justify-between my-2">
                <p>2345km away</p>
                <p>Desert king</p>
            </div>

            <div className="flex justify-between">
                <img src={rating} alt="rating" />
            </div>

        </div>
    );
}
  
export default AssetCard;
  