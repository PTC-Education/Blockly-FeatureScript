const redis = require('redis');

const { redisUrl, redisHost, redisPort } = require('./config');

// The Redis client to be used throughout the app.
let redisClient;
if (redisUrl) {
    const url = require('url').parse(redisUrl);
    redisClient = redis.createClient(url.port, url.hostname);
    redisClient.auth(url.auth.split(':')[1]);
} else if (redisHost && redisPort) {
    redisClient = redis.createClient(redisPort, redisHost);
} else {
    redisClient = redis.createClient();
}

module.exports = redisClient;
