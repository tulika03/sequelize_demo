const express = require('express')
const app = express();
const logger = require('morgan')
const bodyParser =  require('body-parser')
const expressSwagger = require('express-swagger-generator')(app)
const cors = require('cors')
let rateLimit = require('express-rate-limit')

//const customerRouter = require('./api/router/customer.router')
const companyRouter = require('./api/router/company.router')
const categoryRouter = require('./api/router/Category.router')
// const db = require('./api/db.config')

// db.sequelize.sync({force: false}).then(() => {
//   console.log('Drop and resync with { force: true }');
// })

const models = require('./models')
models.sequelize.sync().then(() => {
  console.log("Connected to database");
}).catch((err) => {
  console.log("error", err)
  console.log("Something went wrong with the database update!")
});


app.use('/upload', express.static('uploads'));

logger.token('id', function getId(req) {
  return req.id
});

logger.token('req', function(req) {
  return JSON.stringify(req.body);
});

let loggerFormat = 'Logger --  :id [:date[web]] ":method :url" :status :response-time :req ';

app.enable("trust proxy"); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
 
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000
});

app.use(cors());

app.use(apiLimiter);


app.use(bodyParser.urlencoded({
  extended: false}))
app.use(bodyParser.json());

app.use(logger(loggerFormat, {
  skip: function (req, res) {
      return res.statusCode < 400
  },
  stream: process.stdout
}));

app.use(logger(loggerFormat, {
  skip: function (req, res) {
      return res.statusCode >= 400
  },
  stream: process.stderr
}));




//app.use('/api/customer', customerRouter)
app.use('/api/company', companyRouter)
app.use('/api/category', categoryRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(err)
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500).send("error");
});

module.exports = app;