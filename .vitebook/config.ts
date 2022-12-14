import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteMarkdownPlugin } from '@vitebook/markdown-svelte/node';
import { shikiMarkdownPlugin } from '@vitebook/markdown-shiki/node';
import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { defaultThemePlugin, DefaultThemeConfig } from '@vitebook/theme-default/node';
import preprocess from 'svelte-preprocess';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.md', 'src/**/*.story.svelte'],
  alias: {
    $app: '/node_modules/@sveltejs/kit/assets/app',
    $lib: '/src/lib',
  },
  plugins: [
    svelteMarkdownPlugin(),
    shikiMarkdownPlugin(),
    clientPlugin({ appFile: 'App.svelte' }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: {
        hydratable: true
      },
      extensions: ['.md', '.svelte'],
      // Consult https://github.com/sveltejs/svelte-preprocess for more information
      // about preprocessors.
      preprocess: preprocess(),
    }),
  ],
  site: {
    title: 'svelte-cartographer',
    description: 'A friendly Svelte addon for working with Google Maps.',
    theme: {},
  },
});
