import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <h2>Dev-Feed</h2>
            <img src={igniteLogo} alt='logotipo do Ignite' />
        </header>
    );
}