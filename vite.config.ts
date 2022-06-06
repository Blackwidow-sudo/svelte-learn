import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

// https://vitejs.dev/config/
export default defineConfig({
    base: '', // To fix the paths in prod-build
    plugins: [svelte({ preprocess: sveltePreprocess() })],
});
