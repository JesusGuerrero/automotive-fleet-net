import { Server } from "./app/server";
import { Hvac } from "./app/controllers/hvac";
import * as env from './environments/environment';
env.environment['baseUrl'] = __dirname;
env.environment['NODE_ENV'] = process.env['NODE_ENV'] || 'development';
env.environment['NODE_PUBLIC_PATH'] = '../public';

Server.initServer( env ).then( server => {
  server['configProxies']();
  server['configStaticApps']();

  const hvac = new Hvac( server );
});
