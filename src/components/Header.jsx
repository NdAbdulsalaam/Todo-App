import React from "react";

import styles from '@/styles/Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <h1>Todos</h1>
            <p>Items will be stored on the browser's local storage</p>
            <p>By: <a href="https://github.com/NdAbdulsalaam" target="blanck">Nurudeen Abdulsalaam</a></p>
        </header>
    );
    };

export default Header
