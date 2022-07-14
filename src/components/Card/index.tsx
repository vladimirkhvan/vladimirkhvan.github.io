import React from 'react';

import { Info } from './Info';
import { Footer } from './Footer';

import photo from '../../assets/images/photo.jpeg';

import styles from './Card.module.scss';

import { ThemeContext } from '../../context/ThemeContext';

export const Card: React.FC = () => {
    const { theme } = React.useContext(ThemeContext) || { theme: 'green' };

    const cardStyle = `${styles.card} ` + styles[theme];

    return (
        <div className={cardStyle}>
            <img width={400} height={400} src={photo} alt="me" className={styles.photo} />
            <Info />
            <Footer />
        </div>
    );
};

export default Card;
