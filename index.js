// jshint esversion:8

const http = require('http');
const fs = require('fs');
const url = require('url');
const slugify = require('slugify');
const parseTemplate = require('./owner_modules/replaceTemplates');
const checkAddress = require('./owner_modules/checkAddress');
const captureHTML = require('./owner_modules/captureHtml');

const tmpOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`, 'utf-8',
);
const tmpUser = fs.readFileSync(`${__dirname}/templates/user.html`, 'utf-8');
const tmpUserPresentation = fs.readFileSync(
  `${__dirname}/templates/userPresentation.html`,
  'utf-8',
);
const dataJSON = fs.readFileSync(`${__dirname}/json/data.json`, 'utf-8');
const data = JSON.parse(dataJSON);
// const slugs = data.map((el) => slugify(el.name, { lowercase: true }));

http
  .createServer((request, response) => {
    const { query, pathname } = url.parse(request.url, true);

    if (checkAddress(pathname) === 0) {
      // Montar la primera parte de la página
      response.writeHead(200, 'Content-Type', 'text/html', 'utf-8');
      const output = tmpOverview.replace('{%userPresentation%}', captureHTML(data, tmpUserPresentation));
      response.end(output);
    } else if (checkAddress(pathname) === 1) {
      // Llenar la página principal
      response.writeHead(200, 'Content-Type', 'text/html', 'utf-8');
      const output = parseTemplate(tmpUser, data[query.id]);
      response.end(output);
    } else if (checkAddress(pathname) === 2) {
      // Llegar a la api
      response.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
      response.end(dataJSON);
    } else {
      // Si es un error
      response.writeHead(404, 'Content-Type', 'text/html', 'utf-8');
      response.end('Esta url no existe en el sistema');
    }
  })
  .listen(8000, 'localhost');
