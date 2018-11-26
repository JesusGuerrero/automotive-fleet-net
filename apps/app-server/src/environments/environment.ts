// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  PORT: 8000,
  NODE_URL: '0.0.0.0',
  apps: [{
    name: 'dashboard-app',
    route: ''
  }],
  proxies: [{
    desc: 'Go Sample Server with Info',
    host: 'http://127.0.0.1:8001',
    root: "/api_2/go",
    prefix: '/api_2/go',
    suffix: '',
    pHeaders: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    eHeaders: ['connection']
  }]
};
