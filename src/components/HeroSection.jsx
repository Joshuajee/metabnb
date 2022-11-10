import image3 from "./../assets/image 3.png";
import image4 from "./../assets/image 4.png";
import image5 from "./../assets/image 5.png";
import image6 from "./../assets/image 6.png";
import styles from "./../styles.module.css";



const HeroSection = () => {
    return (
        <div className="w-100 px-24 py-10">
            <div className="grid grid-cols-2 gap-10">

                <div>

                    <h2 className={`${styles.heroHeading}`}>
                        Rent a <strong> Place </strong>  away from 
                        <strong> Home </strong> in the <strong>  Metaverse   </strong>
                    </h2>

                    <p className="font-normal text-2xl mt-20">
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
    );
}
  
export default HeroSection;
  