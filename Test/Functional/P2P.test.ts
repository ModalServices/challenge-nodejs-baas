import '@src/Utils/module-alias'

describe('P2P transations functional tests', ()=> {
  it('should return a P2P transations', async done => {
      const { status } = await global.testRequest.get('/transference')
      console.log(status)
      expect(status).toBe(status);
      done();
      
  });
});