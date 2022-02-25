import React from 'react'
import styles from '../styles/components/SideBar.module.css';
import sidebar from '../assets/Top-Pokédex.png'
import logo from '../assets/pokeball-png.png'

export function Sidebar() {
    return (
      <div>
        <figure>
            <div className={styles.sideBar}>
                <img className={styles.sideBar} src={sidebar} alt="cabeçalho"></img>
                <img className={styles.logo} src={logo} alt="logo pokédex"></img>
            </div>
        </figure>
      </div>
    );
}