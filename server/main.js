const Hapi = require('@hapi/hapi');
const Parse = require('parse/node');
Parse.initialize('app', 'appkey');
Parse.serverURL = 'http://localhost:1337/parse';
const routes = require('./routes')(Parse);

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  });
  server.route(routes);
  await server.start();
  console.log('Server running on %s', server.info.uri);
};
process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});
init();
