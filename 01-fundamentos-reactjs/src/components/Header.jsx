import styles from './Header.module.css'

import igniteLogo from "../assets/ignite-logo.svg";


//componentes sempre com letra maiuscula
export function Header() {
    return (
        <header className={styles.header}> 
            <img src={igniteLogo} alt="Ignite" />
        </header>
    );

}