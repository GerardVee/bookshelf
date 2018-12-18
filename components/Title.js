import Head from 'next/head';
import React from 'react';

export default ({ children }) => (
    <Head>
        <title>{ children }</title>
        <meta property='og:title' content={ children } />
    </Head>
);