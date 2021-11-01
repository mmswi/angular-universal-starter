import * as express from 'express';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { join } from 'path';
import { existsSync } from 'fs';
import bodyParser from 'body-parser';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { APP_BASE_HREF } from '@angular/common';

import { AppServerModule } from '@app/app.server.module';
import { APP_BASE_URL } from '@src/tokens';


// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
    const app = express();
    const distFolder = join(process.cwd(), 'dist/angular-universal-starter/browser');
    const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    app.engine('html', ngExpressEngine({
        bootstrap: AppServerModule,
    }));

    app.set('view engine', 'html');
    app.set('views', distFolder);

    app.use('/api', createProxyMiddleware({ target: process.env.API_URL, changeOrigin: true, secure: false }));
    app.use(bodyParser.json());

    // Serve static files from /browser
    app.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));

    // All regular routes use the Universal engine
    app.get('*', (req, res) => {
        res.render(indexHtml, { 
            req, 
            providers: [
                { provide: APP_BASE_HREF, useValue: req.baseUrl },
                { provide: APP_BASE_URL, useValue: process.env.BASE_URL },
            ] 
        });
    });

    return app;
}