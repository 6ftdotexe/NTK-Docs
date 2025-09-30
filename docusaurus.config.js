// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NTK Docs',
  url: 'https://6ftdotexe.github.io',
  baseUrl: '/ntk-docs/',
  favicon: 'img/favicon.png',

  // ✅ Warn instead of fail on broken links
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/ntk-banner.png',
    navbar: {
      title: 'NTK',
      logo: { alt: 'NTK', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Docs', position: 'left' },
        { to: '/docs/CHANGELOG', label: 'Changelog', position: 'left' },
        {
          href: 'https://github.com/6ftdotexe/ntk-docs/releases/latest/download/ntk-docs-package.zip',
          label: 'Download',
          position: 'right',
        },
        { href: 'https://github.com/6ftdotexe/ntk-docs', label: 'GitHub', position: 'right' },
      ],
    },

    algolia: {
      appId: 'KSQ4H3SRLN',
      apiKey: '92de46b442016dcb11c093a869054137',
      indexName: 'ntk-docs',
    },
  },
};

module.exports = config;
