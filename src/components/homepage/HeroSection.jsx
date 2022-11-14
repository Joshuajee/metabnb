import Container from "../utils/Container";
import hero from "./../../assets/hero-img.png";
import styles from "./../../styles.module.css";



const HeroSection = () => {
    return (
        <Container> 

            <div className="flex justify-center">

                <div className="max-w-screen-2xl">

                    <div className="grid md:grid-cols-2 gap-10">

                        <div className="flex items-center">

                            <div>

                                <h2 className={`${styles.heroHeading} md:mt-0  mt-16`}>
                                    Rent a <strong> Place </strong>  away from 
                                    <strong> Home </strong> in the <strong>  Metaverse   </strong>
                                </h2>

                                <p className="font-normal sm:text-xl lg:text-xl xl:text-2xl sm:mt-10 md:mt-10 mt-8">
                                    we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                                </p>

                                <div className={`${styles.input} flex md:w-11/12 max-w-xl mr-4`}>
                                    <input className="basis-3/5" type={"text"} placeholder={"Search for location"} /> 
                                    <button className="basis-2/5"> Search </button>
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-center">

                            <img src={hero} alt="hero-img" />

                        </div>
                    
                    </div>

                </div>

            </div>

        </Container>
    );
}
  
export default HeroSection;
  