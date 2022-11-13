import Container from "../utils/Container";
import ctaImage from "./../../assets/cta-image.png";
import styles from "./../../styles.module.css";



const CallToAction = () => {
    return (
        <div className={`${styles.cta} flex justify-center`}>

            <div className="max-w-screen-2xl">

                <Container>

                    <div className="my-10 lg:my-20 flex flex-col sm:flex-row items-center justify-center content-center h-full">

                        <div className="basis-full sm:basis-2/5 items-center contents-center">

                            <h2>Metabnb NFTs</h2>

                            <p className="font-normal sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-4 lg:mt-14">
                                Discover our NFT gift cards collection. 
                                Loyal customers gets amazing gift cards
                                which are traded as NFTs. These NFTs 
                                gives our cutomer access to loads of 
                                our exclusive services.
                            </p>

                            <button className="px-10 py-3 mt-4 lg:mt-14 text-base"> Learn more </button>
                        </div>

                        <div className="basis-full sm:basis-3/5 mt-10 md:mt-0">
                            <img src={ctaImage} alt="cta" />
                        </div>
                    
                    </div>

                </Container>

            </div>

        </div>
    );
}
  
export default CallToAction;
  