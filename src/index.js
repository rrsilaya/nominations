import express from 'express';
import bodyParser from 'body-parser';

import router from './router';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);
app.use('/docs', express.static(__dirname + '/../docs'));
app.use('/public', express.static(__dirname + '/../public'));

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});