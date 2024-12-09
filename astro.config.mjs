import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
import starlightThemeRapide from 'starlight-theme-rapide'

const head = [];
if (import.meta.env.PROD) {
  const GA_ID = 'G-BGC34TSSX9';
  // Google tag (gtag.js)
  head.push({
    tag: 'script',
    attrs: {
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
      async: true,
    },
  },
    {
      tag: 'script',
      content: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
    }
  );
}

// https://astro.build/config
export default defineConfig({
  head,
  integrations: [
    starlight({
      head,
      title: 'Pro Examples',
      social: {
        github: 'https://github.com/fabiankaraben/proexamples-com',
      },
      customCss: ['./src/styles/rapide-theme-custom.css'],
      plugins: [
        starlightThemeRapide(),
        starlightSidebarTopicsDropdown([
          {
            label: 'HTML',
            link: '/html/',
            icon: 'open-book',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'html' },
              },
            ]
            // items: ['guides/getting-started', 'guides/manual-setup'],
            // autogenerate: { directory: 'html' },
          },
          {
            label: 'CSS',
            link: '/css/',
            icon: 'information',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'css' },
              },
            ]
          },
          {
            label: 'JavaScript',
            link: '/javascript/',
            icon: 'information',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'javascript' },
              },
            ]
          },
          {
            label: 'TypeScript',
            link: '/typescript/',
            icon: 'information',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'typescript' },
              },
            ]
          },
          {
            label: 'Python',
            link: '/python/',
            icon: 'information',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'python' },
              },
            ]
          },
          {
            label: 'Go',
            link: '/go/',
            icon: 'information',
            items: [
              {
                label: 'Basics',
                autogenerate: { directory: 'go' },
              },
            ]
          },
        ]),
      ],
      // sidebar: [
      //   {
      //     label: 'HTML',
      //     autogenerate: { directory: 'html' },
      //   },
      //   {
      //     label: 'CSS',
      //     autogenerate: { directory: 'css' },
      //   },
      //   {
      //     label: 'JavaScript',
      //     autogenerate: { directory: 'javascript' },
      //   },
      //   {
      //     label: 'TypeScript',
      //     autogenerate: { directory: 'typescript' },
      //   },
      //   {
      //     label: 'Python',
      //     autogenerate: { directory: 'python' },
      //   },
      //   {
      //     label: 'Go',
      //     autogenerate: { directory: 'go' },
      //   },
      // ],
    }),
  ],
});
