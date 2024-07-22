import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import crypto from 'crypto';

function generateUUID(email) {
  const emailBuffer = Buffer.from(email);
  const emailHash = crypto
    .createHash('sha256')
    .update(emailBuffer)
    .digest('hex');
  return emailHash;
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],
  callbacks: {
    async session({ session }) {
      // generae uniq uuid using email
      session.uuid = generateUUID(session.user.email);
      return session;
    },
  },
};

export default NextAuth(authOptions);
