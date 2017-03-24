const TOKEN = 'this-is-my-secret-token'

export default class AuthService {

  createToken(username) {
    return Promise.resolve(TOKEN)
  }

  verifyPassword(username, password) {
    return new Promise((resolve, reject) => {
      if (username === 'henrytao' && password === '123456') {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }

  verifyToken(token) {
    return new Promise((resolve, reject) => {
      if (token === TOKEN) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  }
}
