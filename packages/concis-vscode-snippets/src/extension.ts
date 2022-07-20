import * as vscode from 'vscode';
import { componentList } from './componentList';

const compileFiles = ['react', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact'];

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  //移入Concis组件Dom，出现介绍
  const line = document.lineAt(position);
  let isConcisComponentDom = false;
  let matchComponent = '';
  for (let i = 0; i < componentList.length; i++) {
    const component = componentList[i];
    if (line.text.includes(`<${component}`)) {
      isConcisComponentDom = true;
      matchComponent = component;
    }
  }
  if (isConcisComponentDom) {
    const isCN = vscode.env.language === 'zh-cn';
    let componentDocPath = '';
    for (let i = 0; i < matchComponent.length; i++) {
      const str = matchComponent[i];
      if (i !== 0 && str.charCodeAt(0) >= 65 && str.charCodeAt(0) <= 90) {
        componentDocPath += '-';
      }
      componentDocPath += str;
    }
    let text =
      (isCN
        ? `查看 ${matchComponent} 组件官方文档`
        : `View the official documentation of the Button component`) +
      `\n
Concis -> http://react-view-ui.com:92/#/common/${componentDocPath.toLowerCase()}`;

    return new vscode.Hover(text);
  }
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.languages.registerHoverProvider(compileFiles, {
      provideHover,
    }),
  );
}

export function deactivate() {}
