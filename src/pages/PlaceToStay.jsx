import AssetCard from "../components/utils/AssetCard";
import CollectionContainer from "../components/utils/CollectionContainer";
import TopNav from "../components/utils/TopNav";
import Footer from "../components/utils/Footer";
import Container from "../components/utils/Container";
import styles from "../styles.module.css";

import settings from "./../assets/setting.png";
import house1 from "./../assets/cards/house1.png";
import house2 from "./../assets/cards/house2.png";
import house3 from "./../assets/cards/house3.png";
import house4 from "./../assets/cards/house4.png";
import house5 from "./../assets/cards/house5.png";
import house6 from "./../assets/cards/house6.png";
import house7 from "./../assets/cards/house7.png";
import house8 from "./../assets/cards/house8.png";
import house9 from "./../assets/cards/house9.png";
import house10 from "./../assets/cards/house10.png";
import house11 from "./../assets/cards/house11.png";
import house12 from "./../assets/cards/house12.png";
import house13 from "./../assets/cards/house13.png";
import house14 from "./../assets/cards/house14.png";
import house15 from "./../assets/cards/house15.png";
import house16 from "./../assets/cards/house16.png";

  
const assets = [
    {   image: house6   },
    {   image: house5   },
    {   image: house4   },
    {   image: house3   },
    {   image: house2   },
    {   image: house1   },
    {   image: house8   },
    {   image: house7   },
    {   image: house9   },
    {   image: house10   },
    {   image: house16   },
    {   image: house11   },
    {   image: house12   },
    {   image: house13   },
    {   image: house14   },
    {   image: house15   },
]

const categories = [
    "Restuarant",
    "Cottage",
    "Castle",
    "fantast city",
    "beach",
    "Carbins",
    "Off-grid",
    "Farm"
]

function PlaceToStay() {
    return (
        <div>
            <TopNav />

            <Container>

                <div className="flex items-center">

                    <div className="w-8/12 flex justify-between">
                        {
                            categories.map((item, index) => <span className="text-xl" key={index}>{item}</span>)
                        }
                    </div>

                    <div className="w-1/12 h-12"></div>

                    <div className={`${styles.location} flex items-center justify-center`}>
                        <div className={'w-full flex justify-between px-4'}>
                            <div className="text-base">Location</div>
                            <div> <img src={settings} alt="settings" /></div>
                        </div>
                    </div>
                
                </div>

            </Container>

            <CollectionContainer>
                {
                    assets.map((asset, index) => {
                        return <AssetCard key={index} asset={asset} />
                    })
                }
            </CollectionContainer>

            <div className="mb-20"></div>

            <Footer />

        </div>
    );
}
  
export default PlaceToStay;
  