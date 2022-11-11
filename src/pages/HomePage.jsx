import AssetCard from "./../components/AssetCard";
import CollectionContainer from "./../components/CollectionContainer";
import CompanySection from "./../components/CompanySection";
import HeroSection from "./../components/HeroSection";
import styles from "./../styles.module.css";

import house1 from "./../assets/cards/house1.png";
import house2 from "./../assets/cards/house2.png";
import house3 from "./../assets/cards/house3.png";
import house4 from "./../assets/cards/house4.png";
import house5 from "./../assets/cards/house5.png";
import house6 from "./../assets/cards/house6.png";
import house7 from "./../assets/cards/house7.png";
import house8 from "./../assets/cards/house8.png";
  
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

        </div>
    );
}
  
export default HomePage;
  