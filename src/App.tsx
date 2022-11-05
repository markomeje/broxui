import { Container, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider } from './contexts/ThemeContext';
import { routes as appRoutes } from "./routes";

export default function App() {
    return (
        <ModeProvider>
            <CssBaseline />
            <Container maxWidth={false} disableGutters>
                <BrowserRouter>
                    <Routes>
                        {appRoutes.length && appRoutes.map((route) => (
                            <Route key={route.key} path={route.path} element={<route.component />} />
                        ))}
                    </Routes>
                </BrowserRouter>
            </Container>
        </ModeProvider>
    );
}

