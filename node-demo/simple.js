var SecucardConnect = require('secucard-connect').SecucardConnect;
var Services = require('secucard-connect').Services;

// set credentials
var credentials = {
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
};

// create Secucard client
var client = SecucardConnect.create();
client.setCredentials(credentials);

// get Loyalty/Cards service
var cards = client.getService(Services.Loyalty.Cards);

// establish connection
client.open().then(function(){

    // use secucard client to get available loyalty/cards list
    cards.retrieveList().then(function(res){
        console.log(res);
    }).catch(function(err){
        console.log(err);
    });

}).catch(function(err){
	console.log(err);
});

var Hapi = require('hapi');
// create the server
var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 9000
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: function (request, reply) {
		reply('hello world');
	}
});

server.start(function () {
	console.log('Running on 9000');
});