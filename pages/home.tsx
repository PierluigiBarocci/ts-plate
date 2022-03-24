import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Head from 'next/head';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { translation } from '@utils/translation';
import { User } from 'utils/types';

interface IndexPageProps {
  user?: User;
}

export default function HomePage({ user }: IndexPageProps) {
  const intl = useIntl();
  const i18n = translation.home(intl);
  return (
    <>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>

      <div
        style={{
          width: '80%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 30,
        }}
      >
        <Typography variant="h1" style={{ fontSize: 40, marginBottom: 30 }}>
          {i18n.title}
        </Typography>
        {user ? (
          <Typography variant="h1" style={{ fontSize: 40 }}>
            <span style={{ color: 'purple' }}> {user.email}</span> is currently
            logged in 🎉
          </Typography>
        ) : (
          <Link href="/api/auth/login" passHref>
            <Button variant="contained" color="secondary">
              Login with Drupal
            </Button>
          </Link>
        )}
      </div>
    </>
  );
}
