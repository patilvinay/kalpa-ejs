"use strict";
let ejs = require('ejs')
var fs = require('fs')
const path = require("path")
const process = obj => {
  var _obj = obj.node["kalpa-ejs"];
  var options = {};
  const str = fs.readFileSync(_obj.vars.template, 
                {encoding:'utf8', flag:'r'}); 
  let _str=ejs.render(str, {entity: obj.import.entity}, options);
  let file=path.join(obj.__data.cwd,_obj.vars.dest)
  fs.writeFileSync(file, _str);
};

exports.process = process;
