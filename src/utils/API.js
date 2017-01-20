import { auth } from './AuthService'

const BASE_URL = 'https://cmpfr.herokuapp.com'

const API = {
  get: (url) => {
    return window.fetch(BASE_URL + url).then(response => response.json())
  },
  post: (url, data) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth.token}`
      }
    }
    return window.fetch(BASE_URL + url, options).then(response => response.json())
  }
}

// Makes for easy testing in the console.
window.API = API

export default API
