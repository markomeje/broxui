import { createContext, useMemo, useState, useContext } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
// import { themePalette } from '../theme';

interface ThemeInterface {
    toggleTheme: () => void;
    mode: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeInterface>({
    toggleTheme: () => {},
    mode: 'light'
});

type ModeProps = {
    children?: React.ReactNode
};

export const ModeProvider = ({ children }: ModeProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const resetMode = setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

    const colorMode = useMemo(() => ({
        toggleTheme: () => {resetMode},
        mode,
    }), [mode]);

    const themePalette = createTheme({
        palette: {
            mode,
            primary: { main: '#fff', },
            secondary: { main: '#000' },
            background: { default: '', },
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h3: { fontFamily: '' }
        }
    });

    const theme = useMemo(() => themePalette, [mode]);
    return (
        <ThemeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{ children }</ThemeProvider>
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);
