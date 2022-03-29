import cookie from 'cookie';

import { NextApiRequest } from 'next';
import { getResourceCollection } from 'next-drupal';
import { getSessionCookie } from '@lib';
import { UserSession } from '@utils/types';

export default function OrdersPage({ orders }) {
  return (
    <p>
      {orders.map(order => (
        <div key={order.id}>{order.id}</div>
      ))}
    </p>
  );
}

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const cookies = cookie.parse(req.headers.cookie || '');
  const session: UserSession = await getSessionCookie(cookies);
  let orders = {};
  if (session.token.expires_in) {
    /**You need to provide the accessToken */
    orders = await getResourceCollection('order--default', {
      accessToken: {
        access_token: session.token.access_token,
        token_type: session.token.token_type,
        expires_in: session.token.expires_in,
      },
    });
  }

  return {
    props: {
      orders,
    },
  };
}
