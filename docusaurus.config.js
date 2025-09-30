// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NTK Docs',
  url: 'https://6ftdotexe.github.io',
  baseUrl: '/ntk-docs/',
  favicon: 'img/logo.png',

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
    navbar: {
      title: 'NTK',
      logo: { alt: 'NTK', src: 'img/logo.png' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', label: 'Docs', position: 'left' },
        { to: '/docs/CHANGELOG', label: 'Changelog', position: 'left' },
        {
          href: 'https://github.com/6ftdotexe/ntk-docs/releases/latest/download/ntk-docs-package.zip',
          label: 'Download',
          position: 'right'
        },
        { href: 'https://github.com/6ftdotexe/ntk-docs', label: 'GitHub', position: 'right' }
      ],
    },
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      { indexDocs: true, indexPages: true },
    ],
  ],
};

module.exports = config;
