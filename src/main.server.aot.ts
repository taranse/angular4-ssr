/**
 * This file should be temporary
 * See https://github.com/angular/angular-cli/pull/5194
 */
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { ServerAppModuleNgFactory } from './ngfactory/src/app/server-app.module.ngfactory';
import { ngExpressEngine, templateCache } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { App } from './api/app';
import { enableProdMode } from '@angular/core';
import * as compression from 'compression';
enableProdMode();
const app = express();
const api = new App();
const port = 8000;
const baseUrl = `http://localhost:${port}`;

app.engine('html', ngExpressEngine({
  aot: true,
  bootstrap: ServerAppModuleNgFactory
}));
app.set('view engine', 'html');
app.set('views', 'src');

app.use(compression());
app.use('/', express.static('dist', { index: false, maxAge: 60*60*24*10*1000 }));
const CACHE = new Object(null);
ROUTES.forEach(route => {
  app.get(route, (req, res) => {
    console.time(`GET: ${req.originalUrl}`);
    res.setHeader('Cache-Control', 'public, max-age=' + (60*60*24*10));
    res.render('../dist/index', {
      req: req,
      res: res
    });
    console.timeEnd(`GET: ${req.originalUrl}`);
  });
});

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.json(templateCache);
  console.timeEnd(`GET: ${req.originalUrl}`);
});

app.listen(8000, () => {
  console.log(`Listening at ${baseUrl}`);
});
