import React from 'react'
import styles from '../styles/components/SideBar.module.css';
import sidebar from '../asssents/Top-Pokédex.png'
import logo from '../asssents/pokeball-png.png'

export function Sidebar() {
    return (
      <div className={styles.sidebar}>
        <figure className={styles.logo}>
            <img src={sidebar} alt="cabeçalho"></img>
            <div>
                <img src={logo} alt="logo pokédex"></img>
            </div>
        </figure>
      </div>
    );
}