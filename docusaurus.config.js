const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Software Testing',
  tagline: 'Software Testing',
  url: 'https://software-testing.sdds.ca',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Seneca-ICTOER',
  projectName: 'software-testing',
  themeConfig: {
    navbar: {
      title: 'Software Testing',
      logo: {
        alt: 'Seneca College',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },
    },
    tableOfContents: {
      maxHeadingLevel: 4,
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Software Testing',
          items: [
            {
              label: 'Contents',
              to: '/',
            },
            {
              html: `<a href='#' id='pwa-button' class='footer__link-item' hidden>Install as an App</a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Seneca College.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Seneca-ICTOER/software-testing/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  clientModules: [require.resolve('./pwaCustomButton.js')],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: ['standalone', 'queryString'],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/pwa/icon-512x512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#DA291C',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#DA291C',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/pwa/icon-192x192.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/pwa/icon-512x512.png',
            color: '#DA291C',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/pwa/icon-512x512.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#DA291C',
          },
        ],
      },
    ],
  ],
};
