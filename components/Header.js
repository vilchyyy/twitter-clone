import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { NavBar, NavLink, Logo, NavCenter } from '../styles/styles'

export default function Header() {
    const { data: session, status } = useSession()
    const loading = status === "loading"
    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }    
    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
      }
    return (
        <>
          <NavBar>
            <Link href="/"><Logo>ESSA</Logo></Link>
            <NavCenter>
            {
            session &&
              <>
              
               <p> Welcome, {session.user.name ?? session.user.email}</p> <br />
               
              </>
            }
            {
            !session && !loading &&
               <p>Please <NavLink href="#" onClick={handleSignin}>Sign in</NavLink>  </p>
            }
           </NavCenter>
            <div>   
                {session && <NavLink href="#" onClick={handleSignout}>Sign out</NavLink>  } 
                {!session && <NavLink href="#" onClick={handleSignin}>Sign in</NavLink>  } 
            </div>
           </NavBar>
        </>
    )
}