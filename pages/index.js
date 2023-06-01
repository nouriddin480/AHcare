import Link from 'next/link';
import Image from 'next/image';
import Date from '../components/date';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Image
              priority
              src="/images/logo.png"
              className={`${utilStyles.logo}`}
              width={100}
              height={100}
            />
      <h2 className={utilStyles.Intro}>Introducing</h2>      
      <h2 className={utilStyles.AH}>AH Care</h2>

      <section className={utilStyles.heading}>
        <p className={utilStyles.Transforming}>Transforming the lives of people with chronic conditions from consultation to prescription delivery.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
       
       <h2 className={utilStyles.headingHw}>Hello, world. 👋</h2>
        <p className={utilStyles.headingHw2}>Over 60+ years of combined experience with leading global brands. Our team is dedicated to simplifying the lives of people with chronic conditions.</p>
        <h2 className={utilStyles.OM}>Our Mission</h2>
        <p className={utilStyles.OM2}>To become the leading digital healthcare company for chronic condition management by harnessing technology to transform lives. ​</p>
 
      </section>
    </Layout>
  );
}