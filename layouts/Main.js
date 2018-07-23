'use strict';

import Head from 'next/head';
import Nav from '../components/Nav';
import { Desktop } from '../components/Responsive';

export default ({ children, title = 'Felicity Travel Co'}) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <title>{ title }</title>
        </Head>
        <style jsx global>{`
            @font-face {
                font-family: 'SlimJoe';
                src: url('./static/SlimJoe.otf');
            }

            body {
                background-color: #003b81;
                font-family: 'SlimJoe';
                margin: 0;
            }
        `}</style>
        <header>
            <Nav />
        </header>
        <main>{ children }</main>
    </div>
);