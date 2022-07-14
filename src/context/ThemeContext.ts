import React from 'react'

export type Color = 'green' | 'brown' | 'dark';

interface IContext {
    theme: Color;
    setThemeColor: (color:Color) => void;
}

export const ThemeContext = React.createContext<IContext | null>(null);