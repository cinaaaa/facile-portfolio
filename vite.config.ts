import { sveltekit } from '@sveltejs/kit/vite';
import viteCompression from "vite-plugin-compression";
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		viteCompression({
			ext: ".br",
			algorithm: "brotliCompress"
		})
	],
	build: {
		target: "es2021",
		cssTarget: "chrome80",
	},
};

export default config;