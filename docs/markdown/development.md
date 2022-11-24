- [Contributing](#contributing)
- [Download Or Clone](#download-or-clone)
- [Developing With JavaScript](#developing-with-javascript)
- [Developing With TypeScript](#developing-with-typescript)
- [Setting Up The Environment.](#setting-up-the-environment)
  - [Node.js \& NPM](#nodejs--npm)
    - [Using The Included Files](#using-the-included-files)
      - [Javascript](#javascript)
      - [Typescript](#typescript)
    - [Using Your Own Files](#using-your-own-files)
      - [Javascript](#javascript-1)
      - [Typescript](#typescript-1)
    - [Creating The Files](#creating-the-files)
      - [JavaScript](#javascript-2)
      - [TypeScript](#typescript-2)
  - [JSDoc](#jsdoc)
    - [Adding Additional Markdown Files.](#adding-additional-markdown-files)
  - [Webpack](#webpack)
  - [TypeScript](#typescript-3)


## Contributing

Please note that if you are planning to contribute to the project you will be required to use the following tools for development:
* Git & GitHub
* Node & NPM
* TypeScript
* Webpack & Webpack-CLI
* JSDoc
* A Web Browser

You may use other tools that you are comfortable with also as long as these tools do not:
* Add extra files to the project.
* Add extra packages or dependencies.

If you feel like a new tool should be included in the tool-set feel free to open a *Refactoring Issue* and we will begin looking into it.

Please note that you planning to contribute to the project you will be required to use the include config and package files.

## Download Or Clone

Before you can begin working on the program you will need to get a copy of the files. Currently, simplePass is begin collaborated and distributed through GitHub, please navigate to [the simplePass repository](https://github.com/staticBanter/simplePass). Once here you can either clone the GitHub Repository or Download the Zip by click the *Code* button.

## Developing With JavaScript

If you wish to work on simplePass in pure JavaScript then their is no modification of code or other tools that are required to begin.

If you prefer your project in one single file you may take the ```simplePass/browser/simplePass.js``` file.
This file is the entire program bundled into one file.

If you prefer your project modular than you may take the entire ```simplePass/src``` directory.
This directory contains all the JavaScript module files that create the program.

You may also go through the project code and files and rename them to whatever you like, but for this demonstration we will stick with *simplePass*. Please be aware of what you are changing.

> **Interfaces**: If you are working with the modular version and have not encountered TypeScript Interfaces before. simplePass is originally build with TypeScript, it uses TypeScript Interfaces to define objects. If you are unfamiliar with the concept of interfaces, don't worry, you do not need them to develop in JavaScript and can safely delete the ```interfaces``` directory. However, if you are using a documentation program such as "JSDoc", you may continue to create *virtual interface* comments as normal.

We do have some recommended tools to help make your development easier and more robust, but they are completely optional;
* [Node.js & NPM](https://nodejs.org/en/download/) - JavaScript runtime environment & package manager. Allows for the installation and utilization of the other tools.
* [Webpack](https://webpack.js.org/guides/installation/#root) - JavaScript bundler. Allows for compacting javascript files into a single bundle and more.
* [Webpack-CLI](https://github.com/webpack/webpack-cli#how-to-install) - Command Line Interface for Webpack.
* [JSDoc](https://github.com/jsdoc/jsdoc#installation-and-usage) - JavaScript Doc-Comment documentation generator.

If you choose any of these tools and need help configuring them please see *[Setting Up The Environment](#setting-up-the-environment)*

## Developing With TypeScript

This is the recommended method for development on the project.

To begin it is required that you take the following directories and files from the repo and put them under a directory named simplePass:
* ```simplePass/`` - The directory to output the TypeScript
* ```src/``` - The directory to contain the TypeScript Files
* ```LICENSE``` - The programs license file.
* ```tsconfig.json``` - TypeScript configuration file
* ```webpack.config.js``` - Webpack configuration file.

The following directories and files are optional:
* If working with JSDocs as well and would like to continue creating documentation:
  * ```docs/``` - Directory containing markdown documents and the output of JSDoc.
  * ```jsdoc.config.json``` - Configuration file for JSDoc
* If you do not plan on creating or using your own NPM package you may also include:
  * ```package.json``` - NPM package file for the project.

You may also go through the project code and files and rename them to whatever you like, but for this demonstration we will stick with *simplePass*. Please be aware of what you are changing.

You may use your own tool-set if you are more comfortable but be wary of any differences tool-sets.
The following tools are recommended for development of the project:
* [Node.js & NPM](https://nodejs.org/en/download/) - JavaScript runtime environment & package manager. Allows for the installation and utilization of the other tools.
* [Webpack](https://webpack.js.org/guides/installation/#root) - JavaScript bundler. Allows for compacting javascript files into a single bundle and more.
* [Webpack-CLI](https://github.com/webpack/webpack-cli#how-to-install) - Command Line Interface for Webpack.
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#installing-typescript) - TypeScript complier for transpiling JavaScript files.

We do have some recommended tools to help make your development easier and more robust, but they are completely optional;
* [JSDoc](https://github.com/jsdoc/jsdoc#installation-and-usage) - JavaScript Doc-Comment documentation generator.


## Setting Up The Environment.

> **Note**: Please note that we will not be demonstrating how to install or *configure* any of the recommended tools on your system, the following will assume you already have the tools installed and are able to run the required commands.
> The following is demonstrating what configuration options should be set and what commands to run.

Regardless if you are choosing to develop with JavaScript or TypeScript if you decided to work with any of the tools we recommended, we will also help you configure them as well.

> **Note**: All of the following commands should be executed in the projects working directory.

### Node.js & NPM

Currently, all of the tools in the tool-set can be run using NPM and the ```npm run``` command. Therefore it is highly recommended that you use Node.js and NPM for your development environment.

#### Using The Included Files

##### Javascript

If you decided to use the included ```package.json``` file and want to develop in Javascript there are some slight modifications to the file that can be made to remove unneeded packages.
Please open the file and:
1. Locate the ```devDependencies``` attribute.
2. Remove the following packages:
   1. typescript

You may also remove the following commands:
1. tsc
2. tsc-watch

Once we have cleaned up our package.json file we may install our packages by running the ```npm install``` command.

##### Typescript

If you decided to use the included ```package.json``` file and want to develop in TypeScript there are no modifications needed to the file.

You may proceed to run the ```npm install``` command.

#### Using Your Own Files

If you decided to use your own ```package.json``` file no problem.

If you choose you may install the optional tools:

```bash
# Webpack & Webpack-CLI - Needed to bundle files.
npm install --save-dev webpack webpack-cli 
```

```bash
# JSDoc - Needed to auto-generate documentation files.
npm install --save-dev jsdoc
```

##### Javascript

Because all the development tools for JavaScript are completely optional there is not need to install any packages. 

##### Typescript

If you choose to develop in Typescript you will need the following to include to following packages.

```bash
# TypeScript - Needed to transpile TypeScript files.
npm install --save-dev typescript
```

#### Creating The Files

If want to create a new ```package.json``` file run the ```npm init``` command. This will create the file in your working directory. Once you have created the file, ensure you overview the [NPM package.json Documentation]() to ensure to have all the proper attributes configured to your liking.

If you like you may now install any optional packages by running the following commands:

```bash
# Webpack & Webpack-CLI - Needed to bundle files.
npm install --save-dev webpack webpack-cli 
```

```bash
# JSDoc - Needed to auto-generate documentation files.
npm install --save-dev jsdoc
```

##### JavaScript

Other than installing your desired packages there are not other steps needed.

##### TypeScript

Developing in TypeScript requires the following packages to be installed.

```bash
# TypeScript - Needed to transpile TypeScript files.
npm install --save-dev typescript
```

For a complete understanding of Node.js  and NPM please visit their respective documentation pages at [Node.js | Docs](https://nodejs.org/docs/), [Node.js | Getting Started | What Is NPM](https://nodejs.org/knowledge/getting-started/npm/what-is-npm/) and [NPM | Docs](https://docs.npmjs.com/).

### JSDoc

If you decided to use JSDoc and continue creating the documentation, we recommend you use the include JSDoc config file with the project, also keeping the ```docs/``` directory structure intact and following the same format (Unless you have a deep understanding of JSDoc). Finally we also recommend including the following command in your ```package.json``` *script* attribute 
```bash
# Run jsdoc in the 'simplePass' directory, include tutorials from 'docs/markdown/', run with the following configuration options.
"docs-build": "jsdoc ./simplePass --tutorials ./docs/markdown --configure ./jsdoc.config.json"
```

<!--
TODO: Insert links to documentation pages here
-->
For a complete understanding of JSDoc please visit its documentation pages at [JSDoc](https://jsdoc.app/).

#### Adding Additional Markdown Files.

To add additional Markdown files to the documentation add a markdown file with the name of your choosing to the ```docs/``` directory.

JSDocs provides some configurations that explains the linking of the files and you may customize these attributes to your liking in the ```docs/jsdoc.config.json``` file. The documentation for this file can be found at [JSDoc | About Configuring JSDoc](https://jsdoc.app/about-configuring-jsdoc.html). 

Linking from one file to anther is done like so;

```bash
# Directory Structure
| +-- docs/
| | +-- main.md
| | +-- example.md
| | +-- sub_dir/
| | | +-- sub-file.md
```

If you would like to create a link inside of ```main.md``` linking to ```example.md```. You would preform the following:
```md
<!-- Link inside of main.md linking to example.md -->
[link to example](./tutorial-example.html)
```

```md
<!-- Link inside of main.md linking to sub_file.md -->
[link to sub-file](./sub_dir/tutorial-sub-file.html)
```
Notice how the following:
1. The files are still relatively linked. This is because JSDoc maintains the copied directory structure.
2. The files all got prefixed with *tutorial* this is a limitation of the JSDoc program and is suppressed in the final documentation output due to some minor modifications to the default JSDoc template (but it's still there behind the scenes).
3. The ```.md``` extension gets replaced with a ```.html``` one.

### Webpack

If you decide to use Webpack for bundling we recommend you use the included ```webpack.config.js``` file unless you have an understanding of Webpack.

We also recommend include this command in your ```package.json```; 

```bash
# Run Webpack in build mode with the following configuration
"webpack-build": "webpack build --config webpack.config.js"
```

For a complete understanding of Webpack please visit its documentation pages at [Webpack | Guides](https://webpack.js.org/guides/).

### TypeScript

If you decide to use TypeScript for transpliling we recommend you use the included ```tsconfig.json``` file unless you have an understanding of TypeScript.

We also recommend you include the following commands in your ```package.json```;
```bash
# Run the TypeScript compiler in production mode and watch the working directory for changes.
"tsc-watch": "tsc --watch --project .",
```

```bash
# Run the TypeScript compiler
"tsc": "tsc --project .",
```

For a complete understanding of TypeScript please visit its documentation pages at [TypeScript | Docs](https://www.typescriptlang.org/docs/).
