const { resolve } = require('path');

const nextConfig = {
  env: {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
    PANEL_BACKEND_ADDRESS: process.env.PANEL_BACKEND_ADDRESS,
    PANEL_FRONTEND_ADDRESS: process.env.PANEL_FRONTEND_ADDRESS,
  },
};

console.log('--------------------');
console.log('LOADING NEXT.CONFIG.JS');
console.log(nextConfig);
console.log('--------------------');


module.exports = nextConfig;
