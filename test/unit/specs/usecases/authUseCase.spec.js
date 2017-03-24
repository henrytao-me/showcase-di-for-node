describe('authUseCase.js', () => {

  let authUseCase, mock

  beforeEach(() => {
    mock = new Mock(['authService', 'errorService'], key => {
      let value = null
      switch (key) {
        case 'authService':
          value = {
            createToken: (username) => { return Promise.resolve('any-token') },
            verifyPassword: (username, password) => { return Promise.resolve(true) }
          }
          break
        case 'errorService':
          value = {
            unauthorized: () => { }
          }
          break
      }
      return value
    })
    authUseCase = new (require('app/usecases/authUseCase'))(...mock.params)
  })

  afterEach(() => {
    mock.verify()
    mock.restore()
  })

  it('auth - should have valid username and password', async () => {
    const username = 'henrytao'
    const password = '123456'
    const token = 'some-token'

    mock.authService.expects('verifyPassword')
      .once()
      .withArgs(username, password)
      .returns(Promise.resolve(true))
    mock.authService.expects('createToken')
      .once()
      .withArgs(username)
      .returns(Promise.resolve(token))

    expect(await authUseCase.auth(username, password)).to.be.equal(token)
  })
})
