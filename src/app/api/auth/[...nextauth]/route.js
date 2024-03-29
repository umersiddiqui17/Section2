import { connect } from "@/utils/config/dbConfig"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import Seller from "@/utils/modals/Seller"
import Buyer from "@/utils/modals/Buyer"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
       name:"credentials",
       credentials:{},
       async authorize(credentials){
        const {email,password} = credentials
        try{
          await connect()
          const user = await Seller.findOne({email})
          
          if(!user){
            
            throw new Error("Invalid email or password");
            

          }
          const passwordMatch = bcryptjs.compare(password,user.password)
          if (!passwordMatch) {
            throw new Error("Invalid email or password");
          }
          return user
        }catch(error){
          console.log("Error",error)
        }
        
       }

       

    }),
    // ...add more providers here
  ],
  session:{
    strategy:"jwt"
  },

  callbacks:{
    async jwt({token,user}) {
      if (user) {
        token.email = user.email
        token.role = user.role
      }
      return token;
    },

    async session({session,token}){
      if (session.user) {
        session.user.email = token.email;
        session.user.role = token.role;
      }
      console.log(session)
      return session;
    }
  },
  secret:process.env.NEXTAUTH_SECRET,
  pages:{
    signIn:"/login"
  },
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}