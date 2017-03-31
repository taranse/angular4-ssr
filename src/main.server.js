import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import 'rxjs/Rx';
import * as express from 'express';
import { ServerAppModule } from './app/server-app.module';
import { ngExpressEngine } from './modules/ng-express-engine/express-engine';
import { ROUTES } from './routes';
import { App } from './api/app';
import { enableProdMode } from '@angular/core';
enableProdMode();
var app = express();
var api = new App();
var port = 8000;
var baseUrl = "http://localhost:" + port;
app.engine('html', ngExpressEngine({
    bootstrap: ServerAppModule
}));
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', express.static('dist', { index: false }));
ROUTES.forEach(function (route) {
    app.get(route, function (req, res) {
        console.time("GET: " + req.originalUrl);
        res.render('../dist/index', {
            req: req,
            res: res
        });
        console.timeEnd("GET: " + req.originalUrl);
    });
});
app.get('/data', function (req, res) {
    console.time("GET: " + req.originalUrl);
    res.json(api.getData());
    console.timeEnd("GET: " + req.originalUrl);
});
app.listen(8000, function () {
    console.log("Listening at " + baseUrl);
});
