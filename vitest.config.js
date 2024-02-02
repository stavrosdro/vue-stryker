import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    test: {
        coverage: {
            provider: 'v8',
        },
        globals: true,
        environment: 'jsdom',
    },
    plugins: [vue()],
});
