let hvac = {
  temperature: 78,
  fanSpeed: 3
};
export class Hvac {
  constructor( app) {
    app['server'].route({
      method: 'POST',
      path: '/api/hvac',
      handler: (req, rep) => {
        hvac.temperature = req.payload.temp || hvac.temperature;
        hvac.fanSpeed = req.payload.fanSpeed || hvac.fanSpeed;

        app['webSockets'].sockets.emit('event:hvac', hvac);

        rep(hvac);
      }
    });
    app['server'].route({
      method: 'GET',
      path: '/api/hvac',
      handler: (req, rep) => {
        rep(hvac);
      }
    })
  }
}
