import cookie from 'cookie';
import Iron from 'iron';
import { GetServerSideProps } from 'next';
import HomePage from './home';

import { User, UserSession } from '@utils/types';

export const getSessionCookie = async (
  cookies: Record<string, string>
): Promise<UserSession> => {
  const fetchedCookies = cookies['auth.session'];

  if (!fetchedCookies) {
    throw new Error('Auth session not found');
  }

  // Decrypt the auth cookie
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const decoded: any =
    process.env.NEXTAUTH_SECRET &&
    (await Iron.unseal(
      fetchedCookies,
      process.env.NEXTAUTH_SECRET,
      Iron.defaults
    ));

  return decoded;
};

// const Home: NextPage = (props: { user: User | undefined }) => {
//   const intl = useIntl();
//   const i18n = translation.home(intl);

//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1>{i18n.title}</h1>
//       <Header />
//       <Footer />
//     </div>
//   );
// };

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');

    const session: UserSession = await getSessionCookie(cookies);

    return {
      props: {
        user: session.user,
        session: session,
      },
    };
  } catch {
    return {
      props: {},
    };
  }
};

export default function IndexPage(props: {
  user: User | undefined;
  session: UserSession;
}) {
  const { user, session } = props;
  return <HomePage user={user} session={session} />;
}
