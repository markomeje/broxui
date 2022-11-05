import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

// Create a theme instance.
export const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export const themePalette = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === 'dark' && {
                main: amber[300],
            }),
        },
        ...(mode === 'dark' && {
            background: {
                default: deepOrange[900],
                paper: deepOrange[900],
            },
        }),
        text: {
            ...(mode === 'light' ? {primary: grey[900], secondary: grey[800],} : {primary: '#fff', secondary: grey[500]}),
        },
    },
});

