/**
 * @author Sri Vishnu Prasaadh
 * @email srivishnu.prasaadh@skeintech.com
 * @create date 2021-01-30 17:53:11
 * @modify date 2021-01-30 12:36:51
 * @desc [description]
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/index.routes');

var app = express();

var logger = require('morgan')
app.use(logger('dev'));




app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pawn', indexRouter);
// app.use('/images', express.static(__dirname + '/images'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

/** PASSPORT SETUP */

/** Passport initialize */
// this.app.use(passport.initialize());

// /** Passport session */
// this.app.use(passport.session()); `  `


// /** Passport serialize */
// passport.serializeUser(function (user, cb) {
//   cb(null, user);
// });

// /** Passport deserialize */
// passport.deserializeUser(function (obj, cb) {
//   cb(null, obj);
// });

// /** Passport custom strategy */
// const SkeinStrategy = Strategy;


// /** User authentication */
// /**
//  * @param req // req from url
//  * @function callback // user data
//  */
// passport.use('skein', new SkeinStrategy(async (req, callback) => {

//   /** token and type of token */
//   let token = null,
//     type = 'jwt',
//     user = null;



//   /** Checking token type */
//   /** Checking token type */
//   if ((req.headers.jwt != undefined || req.cookies.jwt != undefined || req.query.jwt != undefined || req.body.jwt != undefined)) {
//     type = 'jwt'
//     if (req.headers.jwt)
//       token = req.headers.jwt
//     else if (req.headers.jwt)
//       token = req.query.jwt
//     else if (req.cookies.jwt)
//       token = req.cookies.jwt
//     else if (req.body.jwt)
//       token = req.body.jwt


//     let options = this.jwtOptions;

//     let secret = this.secret;

//     if (!options) {
//       console.log("JWT options not set")
//       process.exit(1)
//     }

//     if (!secret) {
//       console.log("JWT secret not set")
//       process.exit(1)
//     }

//     try {
//       user = verify(token, secret, options);
//       user = decode(token)
//     } catch (err) {
//       callback(err, null)
//       return
//     }
//   }





//   if (user) {

//     user['provider'] = type
//     user['token'] = token

//     /** If user exists */

//     callback(null, user)


//   } else {
//     callback("User not found !", false)
//   }

// }))


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});


module.exports = app;
