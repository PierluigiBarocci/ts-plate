import { GetStaticPropsResult } from 'next';
import { getResourceCollection } from 'next-drupal';
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

export async function getStaticProps(): Promise<
  GetStaticPropsResult<IndexPageProps>
> {
  const articles = await getResourceCollection('node--article', {
    params: {
      sort: '-created',
      include: 'field_image.field_media_image',
    },
  });
  console.log('LOG::  ~ articles', articles);

  return {
    props: { node: articles[0] },
    revalidate: 10,
  };
}
