import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css'
      ],
      title: 'My Docs',
      social: {
        github: 'https://github.com/withastro/starlight'
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              slug: 'guides/example'
            }
          ]
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference'
          }
        }
      ]
    }),
    svelte(),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false
    })
  ]
});
