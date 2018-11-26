import * as mahrio from 'mahrio';
import * as socketIO from 'socket.io'
import * as fs from 'fs';

export class Server {
  private app;
  private env;
  private io;

  static initServer( config ) {
    return new Promise(function(resolve, reject) {
      mahrio.runServer( config['environment'], __dirname).then( server => {
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
            if ( req.params.any ) {
              if( fs.existsSync(this.env['baseUrl'] + '/../public/' + app.name + '/' + this.env['NODE_ENV'] + '/'+req.params.any ) ) {
                rep.file(app.name  + '/' + this.env['NODE_ENV'] + '/'+req.params.any);
              } else {
                rep.file(app.name  + '/' + this.env['NODE_ENV'] + '/index.' + this.env['NODE_ENV'] + '.html');
              }
            } else {
              rep.file(app.name  + '/' + this.env['NODE_ENV'] + '/index.' + this.env['NODE_ENV'] + '.html');
            }
          }
        });
      });
    }
  }
}
