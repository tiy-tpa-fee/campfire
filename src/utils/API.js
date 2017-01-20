import { auth } from './AuthService'

const BASE_URL = 'https://cmpfr.herokuapp.com'

const API = {
  get: (url) => {
    return window.fetch(BASE_URL + url).then(response => response.json())
  }
}

// Makes for easy testing in the console.
window.API = API

export default API
