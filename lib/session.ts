// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { withIronSession, Handler } from 'next-iron-session';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function withSession(handler: Handler) {
  return withIronSession(handler, {
    password: process.env.SECRET_COOKIE_PASSWORD || '',
    cookieName: 'my-portfolio',
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === 'production' ? true : false,
    },
  });
}
