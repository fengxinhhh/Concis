//根据项目目录写入vscode-snippets README.md
const fs = require('fs-extra');
const path = require('path');

const baseTemplate = fs.readFileSync(path.join(__dirname, 'base-template.md'), 'utf-8');
const componentList = fs.readdirSync(path.join(__dirname, '../../packages/concis-react/src'));

let tableTemplate = '';

componentList.forEach((f) => {
  if (f[0].charCodeAt(0) >= 65 && f[0].charCodeAt(0) <= 90) {
    //组件
    tableTemplate += `|c${f.toLowerCase()}|snippet a Concis ${f} Component|\n`;
  }
});

const fileContent = `${baseTemplate}${tableTemplate}`;
console.log(fileContent);

fs.writeFile(
  path.resolve(__dirname, '../../packages/concis-vscode-snippets/README.md'),
  fileContent,
  'utf-8',
).then(() => {
  console.log('生成concis-vscode-snippets 成功'); // eslint-disable-line
});
