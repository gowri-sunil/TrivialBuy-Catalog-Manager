import Document, { Html, Head, Main, NextScript } from 'next/document'

import React from 'react'

const _document = () => {
    const getInitialProps=async(ctx)=>{
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
      }
  return (
    <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>  )
}

export default _document

  