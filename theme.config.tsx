import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
    logo: <span>How Terse</span>,
    project: {
        link: 'https://github.com/coravacav/howterse',
    },
    docsRepositoryBase: 'https://github.com/coravacav/howterse',
    footer: {
        text: <span>MIT {new Date().getFullYear()} © Stefan Todorov.</span>,
    },
    navigation: false,
};

export default config;
