import ctaImage from "./../../assets/cta-image.png";
import styles from "./../../styles.module.css";



const CallToAction = () => {
    return (
        <div className={styles.cta}>

            <div className="flex  items-center m-28">

                <div className="basis-2/5 items-center contents-center">

                    <h2 className={``}>Metabnb NFTs</h2>

                    <p className="font-normal text-2xl mt-14">
                        Discover our NFT gift cards collection. 
                        Loyal customers gets amazing gift cards
                        which are traded as NFTs. These NFTs 
                        gives our cutomer access to loads of 
                        our exclusive services.
                    </p>

                    <button className="px-10 py-3 mt-14 text-base"> Learn more </button>

                </div>

                <div className="basis-3/5">

                    <img src={ctaImage} alt="cta" />

                </div>
               
            </div>

        </div>
    );
}
  
export default CallToAction;
  