//! !!脚本不要乱跑，计费百度服务，要测试的话请单词调用translate函数，传参为组件名

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const md5 = require('md5');

// 遍历packages/concis-react路径下所有md文件
// 请求https://translate.google.com/?hl=zh-CN&sl=zh-CN&tl=en&text=
// 获取翻译结果
// 替换所有文件内容
const dir = path.resolve(__dirname, '../packages/concis-react/src');
const files = fs.readdirSync(dir);
// 批量翻译所有src下的组件文档
files.forEach((file, index) => {
  // 由于翻译接口有频繁性限制，每次翻译间隔2s
  setTimeout(() => {
    translate(file);
  }, index * 2000);
});
// 翻译单个文档
// translate('Link');

function translate(componentName) {
  // 判断file首字母大写
  if (componentName[0] === componentName[0].toUpperCase()) {
    const filePath = path.resolve(dir, componentName, 'index.md');
    // 标题部分，不翻译
    let titleFile = fs.readFileSync(filePath, 'utf-8').split('\n').slice(0, 11).join('\n');
    titleFile = titleFile.split('\n');
    titleFile[1] = titleFile[1].split(' ').slice(0, 2).join(' ');
    titleFile[10] = titleFile[10].split(' ').slice(0, 2).join(' ');
    titleFile = titleFile.join('\n');
    titleFile = titleFile.replace('组件', 'Component');
    if (titleFile.includes('数据录入')) {
      titleFile = titleFile.replace('数据录入', 'Data entry');
    } else if (titleFile.includes('通用')) {
      titleFile = titleFile.replace('通用', 'Common');
    } else if (titleFile.includes('其他')) {
      titleFile = titleFile.replace('其他', 'Other');
    } else if (titleFile.includes('数据展示')) {
      titleFile = titleFile.replace('数据展示', 'Data display');
    } else if (titleFile.includes('反馈')) {
      titleFile = titleFile.replace('反馈', 'Feedback');
    } else if (titleFile.includes('导航')) {
      titleFile = titleFile.replace('导航', 'Navigation');
    } else if (titleFile.includes('布局')) {
      titleFile = titleFile.replace('布局', 'Layout');
    }

    // 翻译段内容
    const content = fs.readFileSync(filePath, 'utf-8').split('\n').slice(11).join('\n');
    const appId = '20221007001374697';
    const salt = Math.random();
    const q = encodeURIComponent(content);
    const key = 'EfQ6uV7DdlwzKLzVgFMC';
    const sign = md5(appId + content + salt + key);
    axios
      .get(
        `https://fanyi-api.baidu.com/api/trans/vip/translate?from=zh&to=en&appid=${appId}&salt=${salt}&sign=${sign}&q=${q}`
      )
      .then((res) => {
        const result = res.data.trans_result;
        let newFile = '';
        result.forEach((item, index) => {
          if (newFile.includes('<code') || newFile.includes(',') || newFile.includes('.')) {
            result[index - 1] += '\n';
            newFile += '\n';
          }
          if (item.dst.includes('-')) {
            const i = item.dst.indexOf('-');
            item.dst = `${item.dst.substring(0, i)}- ${item.dst.substring(i + 1)}`;
          }
          if (item.dst.includes('##')) {
            item.dst = item.dst.replace('##', '## ');
          }
          if (item.dst.includes("'")) {
            item.dst = item.dst.replaceAll("'", '`');
          }
          newFile += `${item.dst}\n`;
        });
        fs.writeFileSync(filePath, `${titleFile}\n\n${newFile}`);
        console.log(`${componentName}组件翻译完成...`);
      });
  }
}
