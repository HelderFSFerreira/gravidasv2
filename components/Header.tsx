import Head from 'next/head';

const Header =  () => {
    return (
        <div>
            <Head>
                <title>Planeamento de gravidez</title>
                <meta property="og:title" content="Planeamento de gravidez" key="title" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
                <script async defer data-domain="gravidasv2.vercel.app" src="https://plausible.io/js/plausible.js"/>
            </Head>
        </div>
    );
};

export default Header;