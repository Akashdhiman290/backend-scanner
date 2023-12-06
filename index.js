const express = require('express');
const bodyParser = require('body-parser');
// const bands = require('./routes/bands');
// const models = require('./models');
// Sync database with Sequelize models
var cors = require('cors')

const Sequelize = require("sequelize");
const VigieScans = require('./src/model/vigie_scans');
const Entities = require('./src/model/entities');
const router = require('./src/routes');
const sequelize = require('./src/utils/db');
const app = express();
app.use(cors())
app.use('/api', router);

// Middleware for not allowed URL
app.use((req, res) => {
	res.status(403).json({
		errors: {
			global: 'Forbidden access! URL not allowed.'
		}
	})
});

  
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

// Startup server
app.listen(3000, () => console.log('Server listening to 3000.'));

module.exports = app;