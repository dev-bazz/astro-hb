// @ts-check
import { defineConfig } from 'astro/config';
import { paraglideVitePlugin } from '@inlang/paraglide-js';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
	adapter: node({
		mode: 'standalone',
	}),
	vite: {
		plugins: [
			paraglideVitePlugin({
				project: './project.inlang',
				outdir: './src/paraglide',
			}),
		],
	},
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de', 'fr'],
	},
	output: 'server',
});
