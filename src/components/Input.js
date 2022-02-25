import React from 'react';
import search from '../assets/magnifying-glass.png';
import styles from '../styles/components/Input.module.css';

export function Input(){
    return(
        <div className={styles.container}>
            <div>
                <input type="search"></input>
                <button type='submit'>
                    <img src={search}></img>
                </button>
            </div>
        </div>
    );
}