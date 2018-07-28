'use strict';

import Head from 'next/head';
import Nav from '../components/Nav';
import { Desktop } from '../components/Responsive';

export default ({ children, title = 'Felicity Travel Co'}) => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link href="https://fonts.googleapis.com/css?family=Oswald:extra-light|Merriweather" rel="stylesheet" />
            <title>{ title }</title>
        </Head>
        <style jsx global>{`
            @font-face {
                font-family: 'SlimJoe';
                src: url('./static/SlimJoe.otf');
            }

            @font-face {
                font-family: 'Madina';
                src: url('./static/Madina Script.otf');
            }

            @font-face {
                font-family: 'MadinaOrnaments';
                src: url('./static/Madina Clean Ornaments.otf');
            }

            body {
                background-color: #B1D1E8;
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