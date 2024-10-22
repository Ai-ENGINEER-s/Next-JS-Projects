import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/database';
import User from '@/models/user';

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({
          email: session.user.email,
        });

        if (sessionUser) {
          session.user.id = sessionUser._id.toString();
        }

        return session;
      } catch (error) {
        console.error('Error fetching user during session callback:', error);
        return session; // Return the session without modifying if there's an error
      }
    },

    async signIn({ profile }) {
      try {
        await connectToDB();

        // Vérifie si l'utilisateur existe déjà
        const userExists = await User.findOne({
          email: profile.email,
        });

        // Si l'utilisateur n'existe pas, crée un nouveau document
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(/\s+/g, '').toLowerCase(),
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
