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
    head: (
        <>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0"
            />
            <meta property="og:title" content="How Terse" />
            <meta
                property="og:description"
                content="Short and sweet how to's"
            />
        </>
    ),
    navigation: false,
};

export default config;
