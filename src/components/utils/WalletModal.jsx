import styles from "./../../styles.module.css";
import closeIcon from "./../../assets/modal/close.png";
import arrowRight from "./../../assets/modal/arrow-right.png";
import metamask from "./../../assets/modal/metamask.png";
import walletConnect from "./../../assets/modal/wallet-connect.png";

const WalletModal = ({show, close}) => {


    return(
        <div className={`fixed w-full h-full top-0 left-0 ${show ? "" : "hidden"} z-10`}>

            <div className={`w-full h-full ${styles.overlay}`} onClick={close}>  </div>

            <div className={`flex fixed justify-center items-center w-full h-full top-0 left-0`}>

                <div className={styles.modal}>

                    <div className={`${styles.modalTitle} flex py-6 px-8 justify-between`}>
                        <h3 className="text-2xl font-bold">Connect Wallet</h3>
                        <button onClick={close}><img src={closeIcon} alt="close" /></button>
                    </div>

                    <div className={`flex py-4 px-8 flex-col items-evenly`}>

                        <h4 className="mt-4">Choose your preferred wallet:</h4>

                        <div className="flex justify-between py-2 px-4 my-2">
                            <button> <img src={metamask} alt="metamask" /> </button>
                            <button> <img src={arrowRight} alt="arrow right" /> </button>
                        </div>

                        <div className="flex justify-between py-2 px-4 my-2">
                            <button><img src={walletConnect} alt="wallet connect" /> </button>
                            <button> <img src={arrowRight} alt="arrow right" /> </button>
                        </div>

                    </div>



                </div>

              
            </div>

        </div>
    )
}


export default WalletModal