const fs = require('fs');
const path = require('path');

function logger(req, res, next) {
const start = Date.now();
res.on('finish', () => {
const duration = Date.now() - start;
const log = `${new Date().toISOString()} | ${req.method} ${
  req.originalUrl
} | Status: ${res.statusCode} | ${duration}ms\n`;

const logPath = path.join(__dirname, 'logs.txt');
try {
fs.appendFileSync(logPath, log);
} catch (err) {
console.error('Failed to write log:', err);
}
});
next();
}

module.exports = logger;