import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		proxy: {
			'/': {
				target: 'https://immune-squid-usefully.ngrok-free.app/',
				changeOrigin: true,
				secure: true,
				ws: false
			},
			'/socket.io': {
				target: 'https://immune-squid-usefully.ngrok-free.app/socket.io',
				changeOrigin: true,
				secure: true,
				ws: true
			}
		}
	}
});
