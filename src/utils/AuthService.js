import Auth0Lock from 'auth0-lock'

export default class AuthService {
  constructor () {
    const clientId = AUTH0.CLIENT_ID
    const domain = AUTH0.DOMAIN

    this.lock = new Auth0Lock(clientId, domain, {})
    this.lock.on('authenticated', (authResult) => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // TODO: Handle it...
        }
        this.profile = profile
        this.token = authResult.idToken
      })
    })
  }

  signIn () {
    this.lock.show()
  }

  signOut () {
    window.localStorage.removeItem('id_token')
    window.localStorage.removeItem('profile')
  }

  required (nextState, replace) {
    if (!this.isSignedIn) {
      replace({ pathname: '/' })
    }
  }

  get isSignedIn () {
    return !!this.token
  }

  get profile () {
    return JSON.parse(window.localStorage.getItem('profile'))
  }

  set profile (newProfile) {
    window.localStorage.setItem('profile', JSON.stringify(newProfile))
  }

  get token () {
    return window.localStorage.getItem('id_token')
  }

  set token (newToken) {
    window.localStorage.setItem('id_token', newToken)
  }
}

export const auth = new AuthService()
