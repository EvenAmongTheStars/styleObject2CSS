const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const symbol = vscode.workspace.getConfiguration('styleObject2CSS.settings').get('doubleQuotation') ? "\"" : "\'";
	// context.subscriptions.push(vscode.commands.registerCommand('extension.test', function () {
	// console.log(vscode.workspace.getConfiguration('styleObject2CSS.settings').get('doubleQuotation'))
	// }));
	// console.log('Congratulations, your extension "styleObject2CSS" is now active!');
	context.subscriptions.push(vscode.commands.registerCommand('extension.transform', function () {
		let editor = vscode.window.activeTextEditor,
			selection = editor.selection,
			text = editor.document.getText(selection);
		if (!editor) {
			return;
		}
		// console.log(text);
		let r = new RegExp(/(['|"]?)([a-z]+)([A-Z]?)([a-z]*)(['|"]?)(: )(['|"])(.*)(['|"])(,?)/g);
		let result = text.replace(r, (match, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, offset, string) => {
			p3 = p3 ? '-' + p3.toLowerCase() : '';
			return `${p2}${p3}${p4}${p6}${symbol}${p8}${symbol};`;

		})
		// console.log(result);
		let snippet = new vscode.SnippetString(result);
		editor.insertSnippet(snippet);
	}));
}
exports.activate = activate;

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
