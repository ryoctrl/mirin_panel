import express from 'express';
import next from 'next';
import { createProxyMiddleware } from 'http-proxy-middleware';
// import * as NextConfig from '../next.config';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev /*, conf: '../next.config' */ });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(
    '/api',
    createProxyMiddleware({
      target: process.env.PANEL_BACKEND_ADDRESS,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
      // pathRewrite: {
      //   '^/api/old-path': '/api/new-path', // rewrite path
      //   '^/api/remove/path': '/path', // remove base path
      // },
    })
  );

  server.all('*', (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`);
  });
});
