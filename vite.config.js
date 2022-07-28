import { sveltekit } from '@sveltejs/kit/vite';

const isViteBook = process.argv.join().includes("vitebook")

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [!isViteBook && sveltekit()],
};

export default config;
