import React from 'react';

import styles from './Palette.module.scss';

import { ThemeContext } from '../../context/ThemeContext';

export const Palette: React.FC = () => {
    const {setThemeColor} = React.useContext(ThemeContext) || {setThemeColor:()=>{}};
    

    return (
        <div className={styles.palette}>
            <span className={`${styles.color} ${styles.lightGreen}`} onClick={()=>setThemeColor('green')}></span>
            <span className={`${styles.color} ${styles.dark}` } onClick={()=>setThemeColor('dark')}></span>
            <span className={`${styles.color} ${styles.brown}`} onClick={()=>setThemeColor('brown')}></span>
        </div>
    );
};

export default Palette;
