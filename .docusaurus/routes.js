import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ntk-docs/search',
    component: ComponentCreator('/ntk-docs/search', 'e34'),
    exact: true
  },
  {
    path: '/ntk-docs/docs',
    component: ComponentCreator('/ntk-docs/docs', 'bdf'),
    routes: [
      {
        path: '/ntk-docs/docs/ASSETS',
        component: ComponentCreator('/ntk-docs/docs/ASSETS', '60c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/CHANGELOG',
        component: ComponentCreator('/ntk-docs/docs/CHANGELOG', 'c1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/DIAGRAMS',
        component: ComponentCreator('/ntk-docs/docs/DIAGRAMS', '0e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/downloads',
        component: ComponentCreator('/ntk-docs/docs/downloads', 'a86'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/GAME_MODES',
        component: ComponentCreator('/ntk-docs/docs/GAME_MODES', '539'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/HOME',
        component: ComponentCreator('/ntk-docs/docs/HOME', '593'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ntk-docs/docs/WEAPONS',
        component: ComponentCreator('/ntk-docs/docs/WEAPONS', '648'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ntk-docs/',
    component: ComponentCreator('/ntk-docs/', '628'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
