import TestComponent from 'test/unit/testComponent'

describe('authRouter.js', () => {

  let authRouter

  beforeEach(() => {
    authRouter = new (require('app/routers/v1/authRouter'))(new Dagger.Builder(TestComponent).build())
  })

  it('initialize', () => {
    
  })
})
