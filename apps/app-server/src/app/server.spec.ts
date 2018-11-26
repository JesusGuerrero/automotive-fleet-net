import { Server } from "./server";

describe('App Server', () => {
  let server;
  let conf = {};

  beforeEach((() => {
    server = new Server( conf );
  }));
  it('should pass', () => {
    expect( server ).toBeInstanceOf( Server );
  });
});
