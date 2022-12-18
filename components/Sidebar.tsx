import { signOut } from "next-auth/react"

function Navbar() {
    const handleSignout = () => {
        signOut({
            redirect: true,
            callbackUrl: '/login'
        })
    }
    
  return (
    <div className='' >
        <div>
            <button className='button' onClick={handleSignout} >
                Sign out
            </button>
        </div>
    </div>
  )
}

export default Navbar