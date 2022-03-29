import { GetStaticPropsResult } from 'next';
import { getResourceCollectionFromContext } from 'next-drupal';

import Head from 'next/head';

interface IndexPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  node?: any;
}

export default function ImagePage({ node }: IndexPageProps) {
  return (
    <>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <div></div>
      <pre>
        <div>{JSON.stringify(node, null, 4)}</div>
      </pre>
    </>
  );
}

export async function getStaticProps(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  context: any
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const articles = await getResourceCollectionFromContext(
    'taxonomy_term--audio_types',
    context
  );

  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/taxonomy_term/audio_types`,
  // );
  // const data = await res.json();
  // console.log('LOG::  ~ data', data);

  return {
    props: { node: articles[0] },
    revalidate: 10,
  };
}
