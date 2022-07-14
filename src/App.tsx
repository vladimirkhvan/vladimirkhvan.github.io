import React from 'react';

import { ThemeContext } from './context/ThemeContext';

import Home from './pages/Home';

export type Color = 'green' | 'brown' | 'dark';

const App:React.FC = () => {
    const [theme, setTheme] = React.useState<Color>('green');

    function setThemeColor(color:Color){
        setTheme(color);
    }

    return (
        <ThemeContext.Provider value={{theme, setThemeColor}}>
            <Home/>
        </ThemeContext.Provider>
    );
}

export default App;
