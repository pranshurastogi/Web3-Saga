// docusaurus.config.js

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Web3 Saga',
  tagline: 'Explore. Innovate. Decentralize.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pranshurastogi', // Usually your GitHub org/user name.
  projectName: 'Web3-Saga', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Reddit+Sans&display=swap',
      type: 'text/css',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/pranshurastogi/Web3-Saga/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',              // Always start in dark mode.
        disableSwitch: true,              // Disable the color mode toggle.
        respectPrefersColorScheme: false, // Ignore system preferences.
      },
      image: 'img/card.png',
      navbar: {
        title: 'Web3 Saga',
        logo: {
          alt: 'Web3 Saga',
          src: 'img/logo.png',
        },
        items: [
          {
            href: 'https://github.com/pranshurastogi/Web3-Saga',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Portal',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/pushprotocol',
              },
              {
                label: 'X',
                href: 'https://x.com/PushChain',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pranshurastogi/Web3-Saga',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web3 Saga.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
