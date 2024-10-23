import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'MyComponentLibrary',
            formats: ['es', 'umd'],
            fileName: (format) => `my-component-library.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    '@mui/material': 'MaterialUI',
                    '@emotion/react': 'EmotionReact',
                    '@emotion/styled': 'EmotionStyled',
                },
            },
        },
    },
});