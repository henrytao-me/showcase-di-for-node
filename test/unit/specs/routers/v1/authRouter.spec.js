import TestComponent from 'test/unit/testComponent'

describe('authRouter.js', () => {

  let authRouter, mock

  beforeEach(() => {
    let component = new Dagger.Builder(TestComponent).build()
    mock = new Mock()
    mock.add('errorService', component.getErrorService())
    mock.add('logger', component.getLogger())
    mock.add('authUseCase', component.getAuthUseCase())
    mock.add('router', component.getRouter())
    mock.add('urlencodedParser', component.getUrlencodedParser())
    authRouter = new (require('app/routers/v1/authRouter'))(component, { testMode: true })
  })

  afterEach(() => {
    mock.verify()
    mock.restore()
  })

  it('initialize', () => {
    mock.router.expects('post')
      .once()
      .withArgs('/auth', [authRouter.urlencodedParser])

    authRouter.initialize()
  })

  it('auth', async () => {
    const username = 'henrytao'
    const password = '123456'
    const token = 'some-token'

    sinon.stub(authRouter, 'onSuccess')

    mock.authUseCase.expects('auth')
      .once()
      .withArgs(username, password)
      .returns(Promise.resolve(token))

    await authRouter.auth({
      body: {
        username: username,
        password: password
      }
    })
  })
})
