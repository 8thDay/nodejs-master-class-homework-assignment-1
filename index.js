/*
 * The Assignment:
 * Please create a simple "Hello World" API. Meaning:
 * 1. It should be a RESTful JSON API that listens on a port of your choice.
 * 2. When someone posts anything to the route /hello, you should return a
 *    welcome message, in JSON format. This message can be anything you want.
 */

const http = require('http');
const url = require('url');
const config = require('./config');

// Create HTTP server
const httpServer = http.createServer((req, res) => {

  // Get the URL from the request and parse it
  // (Don't forget to set 2nd param of parse method to true!)
  const parsedUrl = url.parse(req.url, true);

  // Get the path from the parsed URL and remove proceeding and trailing slashes
  const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g,'');

  // Get name from parsed URL (if any)
  const name = typeof(parsedUrl.query.name) === 'string' ? parsedUrl.query.name : '';

  // Create data object to pass to route handler
  const data = {
    trimmedPath,
    name
  };

  // Is the specified path a valid route? If so, use the appropriate handler, else use the notFound handler
  const chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ?
    router[trimmedPath] :
    handlers.notFound;

  // Send reuest to chosen handler
  chosenHandler(data, (statusCode, payload) => {
    // Use the status code called back by the handler, else default to 200
    statusCode = typeof(statusCode) == 'number' ? statusCode : 200;

    // Use the payload called back by the handler, else default to an empty object
    payload = typeof(payload) == 'object' ? payload : {};

    // Convert the payload to a string
    const payloadString = JSON.stringify(payload);

    // Return the response
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(statusCode);
    res.end(payloadString);
  });

});

// Define the route handlers
const handlers = {
  hello : (data, callback) => {
    const welcomeMessage = data.name === '' ? 'Welcome stranger!' : `Welcome ${data.name}!`;
    callback(200, { 'welcome' : welcomeMessage});
  },
  notFound : (data, callback) => {
    callback(404, { 'error' : '404 Not Found'});
  }
};

// Define a request router
const router = {
  'hello' : handlers.hello
};

// Start HTTP server
httpServer.listen(config.port, () => {
  console.log(`Server started on port ${config.port}`);
});
