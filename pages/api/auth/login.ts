/* eslint-disable import/no-anonymous-default-export */
// pages/api/auth/login.ts
import { NextApiRequest, NextApiResponse } from 'next';

// These are the application scopes you will be request from each user logging in
const scopes = ['email'];

// Pull the values defined in your .env file
const {
  OAUTH_CLIENT_ID,
  REDIRECT_URI,
  NEXTAUTH_URL,
  NEXT_PUBLIC_DRUPAL_BASE_URL,
} = process.env;

const buildURL = (scopes: string[], callback: string) => {
  return (
    `${NEXT_PUBLIC_DRUPAL_BASE_URL}/oauth/authorize?response_type=code` +
    `&client_id=${OAUTH_CLIENT_ID}` +
    `&scope=${encodeURIComponent(scopes.join(' '))}` +
    `&redirect_uri=${encodeURIComponent(callback)}`
  );
};

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  return (
    REDIRECT_URI &&
    NEXTAUTH_URL &&
    res.redirect(buildURL(scopes, `${NEXTAUTH_URL}/${REDIRECT_URI}`))
  );
};
