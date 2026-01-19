import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        tailwindcss({
            optimize: {
                minify: true,
            }
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
    ],
})
