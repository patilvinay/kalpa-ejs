/* eslint-disable prettier/prettier */
/* eslint-disable no-underscore-dangle */
const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const process = (obj) => {
  const _obj = obj.node["kalpa-ejs"];
  // console.log(_obj)
  const options = {};
  const str = fs.readFileSync(_obj.vars.template, {
    encoding: "utf8",
    flag: "r",
  });

  const _str = ejs.render(
    // eslint-disable-next-line prettier/prettier
    str, {
      entity: obj.import.entity,
    },
    options
  );
  let fullFileName = _obj.vars.dest;
  // eslint-disable-next-line prefer-const
  let _var = {};
  _var.file = path.basename(fullFileName);
  _var.directory = path.dirname(fullFileName);
  _var.bwd = obj.__data.bwd;

  // eslint-disable-next-line prettier/prettier
  fullFileName = path.isAbsolute(fullFileName) ?
    // eslint-disable-next-line prettier/prettier
    fullFileName :
    path.join(_var.bwd, _var.directory, _var.file);
  fs.writeFileSync(fullFileName, _str);
};
exports.process = process;
