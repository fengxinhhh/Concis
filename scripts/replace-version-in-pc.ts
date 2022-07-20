//更新concis-react/package.json中的版本
const fs = require('fs-extra');
const path = require('path');
const { version } = require('../packages/concis-react/package.json');

const fileText = fs.readFileSync(
  path.join(__dirname, '../packages/concis-react/package.json'),
  'utf-8',
);

const replacedVersion = fileText.split('\n').map((t) => {
  if (/"version":/.test(t)) {
    let newVersion = version.split('.');
    let [first, secord, third] = newVersion;
    if (third >= 10 || secord >= 10) {
      if (third >= 10) {
        third = 0;
        secord = Number(secord) + 1;
      }
      if (secord >= 10) {
        third = 0;
        secord = 0;
        first = Number(first) + 1;
      }
    } else {
      third = Number(third) + 1;
    }

    newVersion[newVersion.length - 1] = Number(newVersion[newVersion.length - 1]) + 1;
    console.log(`"version": "${first}.${secord}.${third}"`);
    return `  "version": "${first}.${secord}.${third}",`;
  }
  return t;
});

fs.outputFile(
  path.resolve(__dirname, '../packages/concis-react/package.json'),
  replacedVersion.join('\n'),
).then(() => {
  console.log('替换 package.json 中的 version 成功！'); // eslint-disable-line
});
