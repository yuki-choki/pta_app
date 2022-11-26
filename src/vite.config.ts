import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel([
            'resources/react/src/main.tsx',
        ]),
        react(),
    ],
    server: {
        host: true,
        hmr: {
            host: 'localhost',
        },
    },
});
