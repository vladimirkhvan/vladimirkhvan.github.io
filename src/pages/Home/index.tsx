import React from 'react';

import Card from '../../components/Card';
import Info from '../../components/Info';

import styles from './Home.module.scss';

import { ThemeContext } from '../../context/ThemeContext';

export const Home:React.FC = () => {

    const {theme} = React.useContext(ThemeContext) || {theme:'green'};

    const mainStyle = `${styles.hero} ` + styles[theme];

    return (
        <main className={mainStyle}>
            <Card />
            <Info />
        </main>
    );
};

export default Home;
