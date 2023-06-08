var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var reactRouter = require('./routes/react');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/react', reactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


// import React from 'react';

// const CustomInputField = ({ inputComponent: InputComponent, error, success, characterCount, errorText }) => {
//   const getInputStyles = () => {
//     let styles = 'custom-input-field';
//     if (error) {
//       styles += ' error';
//     } else if (success) {
//       styles += ' success';
//     }
//     return styles;
//   };

//   const DefaultInputComponent = () => <input type="text" />;

//   const RenderedInputComponent = InputComponent || DefaultInputComponent;

//   return (
//     <div className={getInputStyles()}>
//       <RenderedInputComponent />
//       {characterCount && <span>{characterCount}</span>}
//       {error && <span className="error-text">{errorText}</span>}
//     </div>
//   );
// };

// export default CustomInputField;
