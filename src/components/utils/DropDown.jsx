import styles from "./../../dropdown.module.css";
import caretdown from "./../../assets/caret-down.png";

export default function DropDown({categories, className}) {
    return (
        <div className={`${styles.dropdown} py-2 px-4 mr-4`}>
            <button className={`flex w-16 items-center justify-between ${className}`}><p className="text-xl">Filter</p><img height={"20px"} width={"20px"} src={caretdown} alt="category" /> </button>
            <div className={styles.dropdownContent}>
                {
                    categories.map((category, index) => {
                        return <p key={index}>{category}</p>
                    })
                }
            </div>
        </div>

    )
}
