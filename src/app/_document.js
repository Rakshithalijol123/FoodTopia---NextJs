// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Section1 from './home/components/Section1';
import '../../styles/global.css';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Add the link tag for your external font here */}
          <link href="https://fonts.googleapis.com/css2?family=FontName&display=swap" rel="stylesheet" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Skranji&display=swap" rel="stylesheet" />
        </Head>
        
        <body>
            <Main/>
            <NextScript/>
          <div className="section1">
            <Section1/>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
