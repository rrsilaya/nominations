import express from 'express';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

/**
 * Body parser acts as the interpreter of the requests send by your
 * client. We use two different methods here, `.json` and `.urlencoded`.
 * These parses the request body into JSON and also the URL parameters
 * and queries.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * This is the configuration of your endpoints. We specify `/api`
 * here so that you no longer have to indicate them into the single
 * endpoints that you're going to make. Plus, this is to avoid the server
 * to get confused when you're planning to serve something at `/`. Bottomline
 * is, this prepends `/api` to your API endpoints, as specified by your routers.
 */
app.use('/api', router);
app.use('/docs', express.static(__dirname + '/../docs'));

/**
 * This specifies that you will be going to serve static files (files
 * that are saved in the local directory). We use the endpoint `/public`
 * to serve your static files. Try opening `/public/<filename>`. Your
 * static files are located in this project's `public/` directory.
 */
app.use('/public', express.static(__dirname + '/../public'));

/**
 * By default, your server runs at port 3001. This is done so that you can change
 * this at some time (perhaps during production deployment) by setting the PORT
 * environment variable to your desired port.
 *
 * e.g. (run this)
 * $ PORT=8000 yarn start
 */
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});