import Head from 'next/head';
import React from 'react';
import HomePage from '../components/home/homePage';
import Layout from '../components/layout/layout';

export default function Home() {
  return (
    <>
        <Head>
          <title>NetCom Learning | IT Training Courses and Certifications</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous" />
        </Head>

        <Layout>
          <HomePage></HomePage>
        </Layout>
    </>
    
); 
}
