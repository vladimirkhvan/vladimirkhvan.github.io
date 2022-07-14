import React from 'react';

import Palette from '../Palette';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './Info.module.scss';

import resume from '../../assets/documents/CV_Vladimir_Khvan.pdf';

export const Info: React.FC = () => {
    const { theme } = React.useContext(ThemeContext) || { theme: 'green' };
    const infoStyle = `${styles.info} ` + styles[theme];
    return (
        <div className={infoStyle}>
            <Palette />
            <h1 className={styles.title}>Hi, check out the resume.</h1>
            <a href={resume} className={styles.downloadButton} download>
                resume
            </a>
        </div>
    );
};

export default Info;
