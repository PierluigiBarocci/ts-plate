// import cookie from 'cookie';
// import { GetServerSideProps } from 'next';
// import { useEffect } from 'react';
// import HomePage from './home';
// import { getSessionCookie } from '@utils/cookies';
// import { User, UserSession } from '@utils/types';
// import useStore from '@utils/user';

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   try {
//     const cookies = cookie.parse(req.headers.cookie || '');
//     const session: UserSession = await getSessionCookie(cookies);
//     return {
//       props: {
//         user: session.user,
//         session: session,
//       },
//     };
//   } catch {
//     return {
//       props: {},
//     };
//   }
// };

// export default function IndexPage(props: {
//   user: User | undefined;
//   session: UserSession;
// }) {
//   const { user, session } = props;
//   const { addUser } = useStore(state => state);
//   useEffect(() => {
//     user && addUser(user);
//   }, [user, addUser]);
//   return <HomePage user={user} session={session} />;
// }

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import Head from 'next/head';
import Link from 'next/link';

import { useIntl } from 'react-intl';

import { useUser } from '@store';
import { translation } from '@utils/translation';

// interface IndexPageProps {
//   user?: User;
//   session?: UserSession;
// }

export default function HomePage() {
  const intl = useIntl();
  const i18n = translation.home(intl);
  const user = useUser();

  // const refreshToken = async () => {
  //   if (token) {
  //     const { access_token, refresh_token } = token;
  //     const res = await fetch('api/auth/refresh-token', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         token: access_token,
  //         refresh: refresh_token,
  //         user: user,
  //       }),
  //     });
  //     const data = await res.json();
  //     console.log('LOG::  ~ data', data);
  //   }
  // };

  const changeUser = async () => {
    const res = await fetch('api/modify');
    const data = await res.json();
    console.log('LOG::  ~ data', data);
  };

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
          <>
            <Typography variant="h1" style={{ fontSize: 40 }}>
              <span style={{ color: 'purple' }}> {user.email}</span> is
              currently logged in 🎉
            </Typography>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 260,
                margin: '30px auto',
              }}
            >
              <Link href="/api/auth/logout" locale="en" passHref>
                <Button variant="contained" color="error">
                  Logout
                </Button>
              </Link>
              <Button
                variant="contained"
                color="secondary"
                onClick={changeUser}
              >
                Credential
              </Button>

              {/* <Button
                variant="contained"
                color="secondary"
                onClick={refreshToken}
              >
                Refresh
              </Button> */}
            </div>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Link href="/api/auth/login" locale="en" passHref>
              <Button variant="contained" color="success">
                Login
              </Button>
            </Link>
            <Typography variant="h1" style={{ fontSize: 28, margin: '0 30px' }}>
              or
            </Typography>
            <Link href="/api/auth/register" locale="en" passHref>
              <Button variant="contained" color="info">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
