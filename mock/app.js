const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { dev, mock } = require('../config/config');
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', `http://${dev.host}:${dev.port}`);
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', ' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

const { common } = require('./common');

const api = require('./api');
app.use('/api', api);

app.get('/', function (req, res) {
  res.redirect('/index');
});

app.get('/index', function (req, res) {
  res.type('html');
  res.render('index');
});

app.get('/checkUser', function (req, res) {
  res.type('html');
  res.sendFile('views/checkUser.html', { root: __dirname });
});

app.get('/common/getLogin', function (req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, common, {
    data: 'test_user',
  });

  res.send(ret);
});

app.get('/common/getUserInfo', function (req, res) {
  res.type('json');
  let ret = {};
  Object.assign(ret, common, {
    data: {
      pin: '1testPin--',
      name: '2testName--',
    },
  });

  res.send(ret);
});

app.get('/common/logout', function (req, res) {
  res.redirect(`http://${dev.host}:${dev.port}/dist/web/home.html`);
});

let server = app.listen(mock.express.port, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
