import { translation } from '@utils/translation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useIntl } from 'react-intl';

const Home: NextPage = () => {
  const intl = useIntl();
  const i18n = translation.home(intl);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{i18n.title}</h1>
    </div>
  );
};

export default Home;
