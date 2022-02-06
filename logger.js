const { createLogger, transports, format } = require('winston');
require('winston-daily-rotate-file');
//const ip = `127.0.0.1`;

var os = require("os");
var networkInterfaces = os.networkInterfaces();
var wifiIp = networkInterfaces['Wi-Fi'][3].address
var ip = networkInterfaces['Loopback Pseudo-Interface 1'][1].address

// https://www.npmjs.com/package/winston-daily-rotate-file
var transportDRT = new transports.DailyRotateFile({
  dirname: './logs-file',
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '3m',
  maxFiles: '14d'
});

transportDRT.on('rotate', function(oldFilename, newFilename) {
  // do something fun
});

const customFormat = format.combine(format.timestamp({
    format: 'MMM-DD-YYYY HH:mm:ss'
}),
    format.align(),
    format.printf((info) => {
        return `[${ip}] || [${wifiIp}] - ${info.timestamp} ****** [${info.level.toUpperCase().padEnd(7)}] - ${info.message}`
    }))

const logger = createLogger({
    level: 'info',
    format: customFormat,
    transports: [
        new transports.File({ filename: 'logs/app.log' }),
        new transports.Console(),
        transportDRT
    ]
});

module.exports = logger