'use strict';

import Head from 'next/head';
import Nav from '../components/Nav';
import { Desktop } from '../components/Responsive';

export default ({ children, title = 'Memories Managed Travel Co'}) => (
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
                background: #F6BE8F;
                font-family: 'SlimJoe';
                margin: 0;
            }
        `}</style>
        <header>
            <Nav />
        </header>
        <Desktop>{
            (matches) => {
                const marginTop = matches ? 100 : 125;

                return <main style={{ marginTop }}>{ children }</main>;
            }
        }</Desktop>
    </div>
);