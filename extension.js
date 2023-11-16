const vscode = require('vscode');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const disposable = vscode.commands.registerTextEditorCommand('googleSearch', () => {
		const editor = vscode.window.activeTextEditor;
		let selection = editor.selection;
		let text = editor.document.getText(selection);
		let url = new URL('https://google.com/search');
		url.searchParams.append('q', text)
		vscode.env.openExternal(vscode.Uri.parse(`${url}`))
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
