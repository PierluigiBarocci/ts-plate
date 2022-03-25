import cookie from 'cookie';
import { GetServerSideProps } from 'next';
import HomePage from './home';
import { getSessionCookie } from '@utils/cookies';
import { User, UserSession } from '@utils/types';

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
