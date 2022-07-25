# SvelteKit-Storybook Helper
This extension was created to make writing component libraries with SvelteKit and Storybook much faster by automating the repetitive task of creating new files and typing in boilerplate code. This extension assumes your SvelteKit-Storybook project has a lib directory under src where all your components live, and a stories directory under src where all your stories live so that the Create Stories command works correctly. It also assumes that you are using the Storybook addon @storybook/addon-svelte-csf in order for the snippets to be meaningful.

## Features

### Create Stories (Command)
Run this command to create a Storybook stories file based on the current open document.

### Initialize .stories.svelte File (Snippet)
This snippet is inserted as a part of the Create Stories command to provide a template for the new file. The prefix (trigger text) for this snippet is 'story-init'. 

### Create Story (Snippet)
This snippet is used to quickly create a new story. The prefix for this snippet is 'story'.