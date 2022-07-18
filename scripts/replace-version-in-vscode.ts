const fs = require('fs-extra');
const path = require('path');
const { version } = require('../packages/concis-vscode-snippets/package.json');

const fileText = fs.readFileSync(
  path.join(__dirname, '../packages/concis-vscode-snippets/package.json'),
  'utf-8',
);

const replacedVersion = fileText.split('\n').map((t) => {
  if (/"version":/.test(t)) {
    let newVersion = version.split('.');
    newVersion[newVersion.length - 1] = Number(newVersion[newVersion.length - 1]) + 1;
    console.log(newVersion.join('.'));
    return `  "version":"${newVersion.join('.')}",`;
  }
  return t;
});

fs.outputFile(
  path.resolve(__dirname, '../packages/concis-vscode-snippets/package.json'),
  replacedVersion.join('\n'),
).then(() => {
  console.log('替换 package.json 中的 version 成功！'); // eslint-disable-line
});
