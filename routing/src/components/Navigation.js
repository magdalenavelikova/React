import styles from "./Navigation.module.css";
export default function Navigation({children}){
    return(
        <nav className={styles.navigation}>
        <ul>
          {children}
        </ul>
      </nav>
    );
}