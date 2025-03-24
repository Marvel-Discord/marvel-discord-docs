---
sidebar_position: 10000
sidebar_label: Contributing to the Docs
---

# How to Contribute to the Docs

These docs are open-source on [GitHub](https://github.com/Rocked03/marvel-discord-docs), where the repository is automatically deployed to the website. 

To contribute, push your edits to a branch and open a pull request.

... for those not too familiar with coding, here's how you can get started 😉

## Setup

### Installation

- Create an account on [**GitHub**](https://github.com/)
  - You'll need to let Rocked know your username so you can be given edit access to the repository.
- Download [**git**](https://git-scm.com/)
- Download [**Node.js**](https://nodejs.org/en)
- Download an IDE, such as [**Visual Studio Code**](https://code.visualstudio.com/)
- Download a git client such as [**SourceTree**](https://www.sourcetreeapp.com/) or [**Sublime Merge**](https://www.sublimemerge.com/). This isn't strictly necessary if you're keen to use git from either of the command line or within your IDE, but git clients are typically the most straightforward.

### Cloning the repository

:::warning[Note]

While git is independent of your OS, some of these commands only work for Windows. Go to [this guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) for Mac and Linux.

:::

You can clone the repository with these commands in the Command Prompt terminal.

```cmd
cd C:/path/to/the/directory/you/want/to/put/your/files/into
git clone https://github.com/Rocked03/marvel-discord-docs.git
```

For more details (or if you're not on Windows), see https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository.

If you've only just installed git, keep the terminal open so you can run these commands:

```cmd
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Editing

### Creating a branch

Before you start editing, create a new branch to work on. This keeps your changes separate from the published website until it's ready. You can do this within your git client or in terminal.

### Navigating the codebase

Firstly, open the newly created codebase folder in your IDE (e.g. Visual Studio Code). Your IDE should have a pane reflecting the file tree of the codebase. 

All the documentation exists in the `docs/` folder. Files are written in [Markdown](https://www.markdownguide.org/).

New pages use this general structure:

```md title="docs/management/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

You can view the changes you make in real-time by running the development server.

```cmd
npx docusaurus start
```

### Saving your changes

After you've made your changes, **save** the file. 

You'll then need to **commit** your changes to your branch. You can do this in your git client or in terminal. Once you've committed your changes, **push** them to the repository.

### Opening a pull request

Once you've pushed your changes, go to [the repository](https://github.com/Rocked03/marvel-discord-docs) on GitHub. You should see a banner at the top of the page prompting you to open a pull request. Click on it and follow the instructions to open a pull request.

The pull request will be reviewed by Rocked. Some edits (content, styling, etc.) may possibly be required before merging. Once the pull request is approved, you can merge it into the main branch, and your changes will be automatically deployed to the website. 

:::info[Confused?]

Just ask in the staff room in the server! Rocked or anybody else will be happy to help you out. 😊

:::
