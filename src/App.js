import AssetCard from "./components/AssetCard";
import CollectionContainer from "./components/CollectionContainer";
import CompanySection from "./components/CompanySection";
import HeroSection from "./components/HeroSection";
import TopNav from "./components/TopNav";
import styles from "./styles.module.css";

const assets = [
  1,
  2,
  3,
  4,
  5, 
  6, 
  7,
  8
]

function App() {
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



    </div>
  );
}

export default App;
