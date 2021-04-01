import Head from 'next/head';

import Layout from '../components/layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name='description' content='NextJS Events' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
   {/*makes side responsive */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;




// import Layout from '../components/layout/layout';
// import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   );
// }

// export default MyApp;
