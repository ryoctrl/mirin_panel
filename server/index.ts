import express from 'express';
import next from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import * as NextConfig from '../next.config';
//

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
    }
}

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev /*, conf: nextConfig */});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    '/api',
    createProxyMiddleware({
      target: process.env.PANEL_BACKEND_ADDRESS,
      changeOrigin: true,
      pathRewrite: (path, request) => {
        console.log(path);
        return path.replace('/api', '');
      },
      // '^/api': '',
      // },
      // pathRewrite: {
      //   '^/api/old-path': '/api/new-path', // rewrite path
      //   '^/api/remove/path': '/path', // remove base path
      // },
    })
  );

  console.log(process.env.PANEL_BACKEND_ADDRESS, 'path /api proxyed');

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(
      `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`
    );
  });
});
