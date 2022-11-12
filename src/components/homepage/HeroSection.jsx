
import Container from "../utils/Container";
import image3 from "./../../assets/image 3.png";
import image4 from "./../../assets/image 4.png";
import image5 from "./../../assets/image 5.png";
import image6 from "./../../assets/image 6.png";
import styles from "./../../styles.module.css";



const HeroSection = () => {
    return (
        <Container> 

            <div className="flex justify-center">

                <div className="max-w-screen-2xl">

                    <div className="grid sm:grid-cols-2 gap-10">

                        <div>

                            <h2 className={`${styles.heroHeading} sm:mt-0 mt-20`}>
                                Rent a <strong> Place </strong>  away from 
                                <strong> Home </strong> in the <strong>  Metaverse   </strong>
                            </h2>

                            <p className="font-normal lg:text-xl xl:text-2xl sm:mt-5 md:mt-10 mt-10">
                                we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                            </p>

                            <div className={`${styles.input} flex mb-10`}>
                                <input className="basis-3/5" type={"text"} placeholder={"Search for location"} /> 
                                <button className="basis-2/5"> Search </button>
                            </div>

                        </div>

                        <div className="flex justify-end">

                            <div className="my-20 mx-1 items-end">

                                <img className="my-2" src={image4}  alt="4" />

                                <img className="my-2" src={image6}  alt="6" />
                                
                            </div>

                            <div className="items-baseline mx-1">

                                <img className="my-2" src={image3}  alt="3" />

                                <img className="my-2" src={image5}  alt="5" />

                            </div>

                        </div>
                    
                    </div>

                </div>

            </div>

        </Container>
    );
}
  
export default HeroSection;
  