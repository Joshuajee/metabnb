import AssetCard from "../components/utils/AssetCard";
import CollectionContainer from "../components/utils/CollectionContainer";
import CompanySection from "../components/homepage/CompanySection";
import HeroSection from "../components/homepage/HeroSection";
import styles from "./../styles.module.css";

import house1 from "./../assets/cards/house1.png";
import house2 from "./../assets/cards/house2.png";
import house3 from "./../assets/cards/house3.png";
import house4 from "./../assets/cards/house4.png";
import house5 from "./../assets/cards/house5.png";
import house6 from "./../assets/cards/house6.png";
import house7 from "./../assets/cards/house7.png";
import house8 from "./../assets/cards/house8.png";
import CallToAction from "../components/homepage/CallToAction";
import TopNav from "../components/utils/TopNav";
import Footer from "../components/utils/Footer";
  
const assets = [
    {   image: house2   },
    {   image: house1   },
    {   image: house8   },
    {   image: house7   },
    {   image: house6   },
    {   image: house5   },
    {   image: house4   },
    {   image: house3   },
]
  
  
function HomePage() {
    return (
        <div>

            <TopNav />

            <HeroSection />
    
            <CompanySection />
            
            <h2 className={`${styles.headingTwo} my-4`}>Inspiration for your next adventure</h2>
    
            <CollectionContainer>
                {
                    assets.map((asset, index) => {
                        return <AssetCard key={index} asset={asset} />
                    })
                }
            </CollectionContainer>

            <CallToAction />

            <Footer />

        </div>
    );
}
  
export default HomePage;
  