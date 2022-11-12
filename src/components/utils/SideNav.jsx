import { Link } from "react-router-dom";
import styles from "./../../styles.module.css";

const SideNav = ({links, show, setShow, open}) => {

    const close = () => {
        setShow(false)
    }

    return(
        <div className={`fixed w-full h-full top-0 left-0 ${show ? "" : "hidden"}`}>
            <div className={`w-full h-full ${styles.overlay} ${show ? "transition ease-in-out delay-150 scale-100 duration-300" : "hidden"}`} onClick={close}>  </div>

            <div className={`fixed top-0 left-0 bg-white h-full w-64 p-4 transition duration-300 delay-150  ease-in ${show ? "scale-x-100" : "scale-x-0"}`}>

                {
                    links.map((link, index) => {
                        return ( 
                            <Link 
                                className={`${styles.navLinks} block text-center h-10 rounded-lg my-2 hover:border-rose-700 hover:border-2`} 
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