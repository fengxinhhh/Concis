import * as vscode from 'vscode';

const compileFiles = ['react', 'typescript', 'javascript', 'javascriptreact', 'typescriptreact'];

function provideHover(document: vscode.TextDocument, position: vscode.Position) {
  //移入Concis组件Dom，出现介绍
  const line = document.lineAt(position);
  const isConcisComponentDom = line.text.includes('<Button');
  if (isConcisComponentDom) {
    const isCN = vscode.env.language === 'zh-cn';
    let text = isCN
      ? `查看Button组件官方文档\n
Concis -> http://react-view-ui.com:92/#/common/button`
      : `View the official documentation of the Button component\n
Concis -> http://react-view-ui.com:92/#/common/button`;

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
