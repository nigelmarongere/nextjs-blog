import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Nigel. I'm a software engineer and musician. You can contact me on{' '} 
          <a href='https://twitter.com/'>Twitter</a>.
        </p>
        <p>
          You can discover music, software and content I've made{' '}
          <a href='https://gwinyayi.com/'>here</a>.
        </p>
      </section>
    </Layout>
  );
}