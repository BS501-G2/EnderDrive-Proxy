import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/': {
				target: 'https://immune-squid-usefully.ngrok-free.app/',
				changeOrigin: false,
				secure: true,
				ws: true
			}
		}
	}
});
