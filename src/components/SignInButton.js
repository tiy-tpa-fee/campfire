import React from 'react'
import { auth } from '../utils/AuthService'

const SignInButton = () => {
  const handleClick = () => auth.signIn()
  console.log(auth.profile)
  return <div>
    {auth.isSignedIn
      ? <span>Username</span>
      : <button onClick={handleClick}>Sign In</button>}
  </div>
}

export default SignInButton
