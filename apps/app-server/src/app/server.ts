import * as mahrio from 'mahrio';
import * as socketIO from 'socket.io'
import * as fs from 'fs';
import * as request from 'request';

export class Server {
  private app;
  private env;
  private io;

  static initServer( config ) {
    return new Promise(function(resolve, reject) {
      mahrio['runServer']( config['environment'], __dirname).then( server => {
        const s = new Server( config );
        const io = socketIO.listen( server.listener );
        s.handleServer = server;
        s.handleIO = io;
        resolve(s);
      }, err => {
        reject(err);
      });
    });
  }

  constructor( config ) {
    this.env = config['environment'];
  }
  set handleServer( server ) { this.app = server; }
  set handleIO( io ) { this.io = io; }

  configProxies() {
    if( this.env['proxies'] ) {
      this.env['proxies'].map( proxy => {
        const suffix = proxy['suffix'] || '';
        this.app.route({
          path: proxy.prefix + suffix,
          method: ['GET','POST','PUT','DELETE'],
          handler: (req, rep) => {
            let headers = {};
            const requestConfig = {
              url: proxy.host + proxy.root + (suffix && suffix === '/:any(*)' ? req.params.any : ''),
              method: req.method
            };
            if ( proxy.pHeaders ) {
              headers = proxy.pHeaders;
            }
            if ( proxy.eHeaders ) {
              proxy.eHeaders.map( (h) => {
                headers[h] = req.headers[h];
              })
            }
            requestConfig['headers'] = headers;

            request( requestConfig, function(err, response, body) {
              console.log('\nProxy Request =>');
              console.log('  ' + req.method.toUpperCase() + ' ' + requestConfig['url'] );
              console.log('  Route: ', proxy.prefix + suffix);
              console.log('  Headers: ', headers);
              console.log('\n');

              rep( body )
            });
          }
        })
      });
    }
  }
  configStaticApps() {
    if( this.env['apps'] ) {
      this.env['apps'].map( app => {
        this.app.route({
          path: app.route + '/{any}',
          method: 'GET',
          handler: (req, rep) => {
            if( fs.existsSync(this.env['baseUrl'] + '/../public/' + app.name + '/' + this.env['NODE_ENV'] + '/'+req.params.any ) ) {
              rep.file(app.name  + '/' + this.env['NODE_ENV'] + '/'+req.params.any);
            } else {
              rep.file(app.name  + '/' + this.env['NODE_ENV'] + '/index.' + this.env['NODE_ENV'] + '.html');
            }
          }
        });
        this.app.route({
          path: app.route + '/{any*}',
          method: 'GET',
          handler: (req, rep) => {
            if (this.env.proxies.map( p => p.root).indexOf('/'+req.params.any) === -1  ) {
              if (req.params.any) {
                if (fs.existsSync(this.env['baseUrl'] + '/../public/' + app.name + '/' + this.env['NODE_ENV'] + '/' + req.params.any)) {
                  rep.file(app.name + '/' + this.env['NODE_ENV'] + '/' + req.params.any);
                } else {
                  rep.file(app.name + '/' + this.env['NODE_ENV'] + '/index.' + this.env['NODE_ENV'] + '.html');
                }
              } else {
                rep.file(app.name + '/' + this.env['NODE_ENV'] + '/index.' + this.env['NODE_ENV'] + '.html');
              }
            }
          }
        });
      });
    }
  }
}
