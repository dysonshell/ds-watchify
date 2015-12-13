'use strict';
if (!process.env.APP_ROOT || !process.env.PORT) {
    console.log('env variables APP_ROOT, PORT required.');
    process.exit(1);
}
GLOBAL.APP_ROOT = process.env.APP_ROOT;
require('@ds/nrequire').watchRequiredFilesToRestart = true;
require('./index')({
    appRoot: process.env.APP_ROOT,
    port: process.env.PORT
}).listen();
