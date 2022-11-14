import { Link } from "react-router-dom";
import styles from "./../../styles.module.css";
import closeImg from "./../../assets/modal/close.png"

const SideNav = ({links, show, setShow, open, active}) => {

    const close = () => {
        setShow(false)
    }

    return(
        <div className={`fixed w-full h-full top-0 left-0 ${show ? "" : "hidden"}`}>
            <div className={`w-full h-full ${styles.overlay} ${show ? "transition ease-in-out delay-150 scale-100 duration-300" : "hidden"}`} onClick={close}>  </div>

            <div className={`fixed top-0 left-0 bg-white h-full w-64 p-4 transition duration-300 delay-150  ease-in ${show ? "scale-x-100" : "scale-x-0"}`}>

                <div className="flex justify-end">
                    <button onClick={close}> <img src={closeImg} alt="close" /> </button> 
                </div>

                {
                    links.map((link, index) => {
                        return ( 
                            <Link 
                                style={{color: active(link.link)}} 
                                className={`${styles.navLinks} ${active(link.link)} block text-center h-10 rounded-lg my-2`} 
                                key={index} 
                                to={link.link}
                                onClick={close}> 
                                {link.name} 
                                
                            </Link>
                        )
                    })
                }

                <button onClick={() => { open(); close() }} className={`${styles.connectBtn} w-full h-12 rounded-lg px-8`}> Connect Wallet </button>

            </div>

        </div>
    )
}


export default SideNav