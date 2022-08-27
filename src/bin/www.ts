import app from '../index';
import ormConfig from '../config/ormConfig';
import { createConnection } from 'typeorm';

const connectionDB = createConnection(ormConfig);

connectionDB
  .then(async () => {
    console.log('DB Connected');
  })
  .catch(err => {
    console.log(err);
  });

const swaggerUI = require('swagger-ui-express');
const swaggerFile = require('../swagger.json');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log(`Server is listening on PORT ${app.get('port')}`);
});
