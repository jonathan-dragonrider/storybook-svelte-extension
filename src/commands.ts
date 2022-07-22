import { TextEncoder } from 'util';
import * as vscode from 'vscode';

export async function createStories() {
  // Get path of active document, and create path for new file
  const filePath = vscode.window.activeTextEditor?.document.fileName as string
  const fileName = filePath.split('/').at(-1) as string
  const dir = filePath.replace(fileName, '')
  const nameWithoutExtension = fileName.split('.').at(0)
  
  const newFileName = `${dir}${nameWithoutExtension}.stories.js`
  const newFileURI = vscode.Uri.file(newFileName)
  const encoder = new TextEncoder()
  const view = encoder.encode('')

  // Create file and add snippet
  await vscode.workspace.fs.writeFile(newFileURI, view) 
  await vscode.window.showTextDocument(newFileURI)
  await vscode.commands.executeCommand("editor.action.insertSnippet", {
    name: "Initialize stories file",
  });
} 