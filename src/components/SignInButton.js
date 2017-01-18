import React from 'react'
import { auth } from '../utils/AuthService'

const SignInButton = () => {
  return <div>
    {auth.isSignedIn
      ? <button onClick={() => auth.signOut()}>Sign Out as {auth.profile.name}</button>
      : <button onClick={() => auth.signIn()}>Sign In</button>}
  </div>
}

export default SignInButton
