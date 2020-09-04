import React from 'react'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => 
{
    return (
        <>
            <Head>
                <meta name="viewport" content="viewport-fit=cover" />
                <meta name="viewport" content="width=device-width" />
            </Head>
        </>
    )
}

export default MyApp;