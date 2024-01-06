import React from "react";

import styles from '@/styles/Header.module.css';

const Header = () => {
    return(
        <header className={styles.header}>
            <h1>Todos</h1>
            <p>Items will be stored on the browser's local storage</p>
        </header>
    );
    };

export default Header