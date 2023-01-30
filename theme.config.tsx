import React from 'react';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
    logo: <span>HowTerse</span>,
    project: {
        link: 'https://github.com/coravacav/howterse',
    },
    docsRepositoryBase: 'https://github.com/coravacav/howterse',
    footer: {
        text: <span>MIT {new Date().getFullYear()} © Stefan Todorov.</span>,
    },
    head: () => {
        return null;
    },

    useNextSeoProps() {
        const { asPath } = useRouter();

        if (asPath !== '/') {
            return {
                titleTemplate: '%s – HowTerse',
                canonical: `https://howterse.com${asPath}`,
                openGraph: {
                    url: `https://howterse.com${asPath}`,
                    type: 'website',
                },
            };
        }
    },
    navigation: false,
};

export default config;
