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

export const themePalette = (mode: string) => ({
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

export const colorPalette = (mode: any) => ({
    ...(mode === "dark" ? {
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509",
        },
    } : {
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#1F2A40",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
    }),
});

