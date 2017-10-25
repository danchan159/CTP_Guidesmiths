const bodyParser = require('body-parser');
const express = require('express');
const models = require('./models');

const PORT = process.env.PORT || 8001;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	const origin = req.get('origin');

	// res.header('Cache-Control', 'no-cache');
	// res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
	// res.header('Access-Control-Allow-Origin', origin);
 //  	res.header('Access-Control-Allow-Credentials', true);
 //  	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
 //  	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cache-Control, Pragma');
 //  	res.header('Content-Type', 'application/json');
});

const expressSession = require('express-session');
const passport = require('./middlewares/authentication');

app.use(expressSession(({ secret: 'keyboard cat' })));
app.use(passport.initialize());
app.use(passport.session());


// Uncomment the following if you want to serve up static assets.
// (You must create the public folder)

// app.use(express.static('./public'));

// const exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({
//   layoutsDir: './views/layouts',
//   defaultLayout: 'main',
// }));
// app.set('view engine', 'handlebars');
// app.set('views', `${__dirname}/views/`);



// Load up all of the controllers
const controllers = require('./controllers');
app.use(controllers)


// First, make sure the Database tables and models are in sync
// then, start up the server and start listening.
models.sequelize.sync({force: false})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is up and running on port: ${PORT}`)
    });
  });

