// jshint esversion:8
const parseTemplate = require('./replaceTemplates');

module.exports = function captureHtml(data, template){
  return data.map((element) => parseTemplate(template, element)).join('');
};
