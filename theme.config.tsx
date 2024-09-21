import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: <span>StackBeat</span>,
  project: {
    link: "https://github.com/Zarbyte/stackbeat-website"
  },
  chat: {
    link: 'https://discord.gg/zFTM5YFrkF',
  },
  footer: {
    text: 'StackBeat by Zarbyte',
  },
  docsRepositoryBase: 'https://github.com/Zarbyte/stackbeat-website/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: '%s | StackBeat',
      description: 'The Beat of Your Stack. Service monitoring tool by Zarbyte.',
    };
  }
}

export default config;
