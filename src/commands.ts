import { TextEncoder } from 'util';
import * as vscode from 'vscode';
import * as path from 'path';

export async function createStories() {
  // .../src/lib/example.svelte -> .../src/stories/example.stories.svelte
  const activePath = vscode.window.activeTextEditor?.document.fileName as string // .../src/lib/example.svelte
  const nameNoExt = path.basename(activePath, '.svelte') // example
  const newFilePath = path.join(activePath, '..', '..', 'stories', `${nameNoExt}.stories.svelte`)

  const newFileURI = vscode.Uri.file(newFilePath)
  const encoder = new TextEncoder()
  const view = encoder.encode('')

  // Create file and add snippet
  await vscode.workspace.fs.writeFile(newFileURI, view) 
  await vscode.window.showTextDocument(newFileURI)
  await vscode.commands.executeCommand("editor.action.insertSnippet", {
    name: "Initialize .stories.svelte file",
  });
} 