import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ThemeProvider, createTheme } from '@mui/material';

const appName = import.meta.env.VITE_APP_NAME ;

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#44b396',
          light: '#243150',
        },
        secondary: {
          main: '#bb9889',
        },
        background: {
          default: '#070720',
          paper: '#131e3d',
        },
        info: {
          main: '#024c79',
        },
        divider: '#cfd8dc',
        text: {
          primary: '#e4e4e4',
          secondary: 'rgba(230,229,229,0.7)',
          disabled: 'rgba(82,82,82,0.5)',
        },
        error: {
          main: '#f72b1c',
        },
      },
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
               <App {...props} />
            </ThemeProvider>   
    );
    },
    progress: {
        color: '#4B5563',
    },
});
