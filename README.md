[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![CI](https://github.com/jenssimon/eslint-plugin-always/actions/workflows/ci.yml/badge.svg)](https://github.com/jenssimon/eslint-plugin-always/actions/workflows/ci.yml)

# eslint-plugin-always

> ESLint plugin that **always reports** with a configurable message.

Simply reports **ALWAYS**!

There is a reason why we want to do so! See [Why?](#why)

## Installation

```sh
$ yarn add eslint-plugin-always --dev
```

## Usage

Add the plugin to your ESLint configuration:

```json
{
  "plugins": [
    "always"
  ]
}
```

And then add the following rule:

```json
{
  "rules": {
    "always/always": ["error", {
      "message": "Hello World"
    }]
  }
}
```

## Why?

> I need to notice the team members that the new folder must contain a ESLint configuration.

> **Notice**
>
> I will simply show you the use case which is the reason why I created this plugin.

There is a `cartridges/` folder in the project. This folder contains multiple packages which may need a different ESLint configuration.

The surrounding application uses another ESLint configuration.
But this configuration isn't applicable for the packages in the `cartridges/` folder.

```
├── cartridges
│   ├── app_foo
│   │   ├── .eslintrc.json
│   ├── int_foo
│   │   ├── .eslintrc.json
│   ├── int_bar
│   │   ├── .eslintrc.json
│   ├── int_new <-- DETECT WHY THIS FOLDER DOESN'T HAVE A LINT CONFIGURATION
│   ├── bc_foo
│   │   ├── .eslintrc.json
│   ├── .eslintrc.json <-- THE FILE THAT ENABLES THIS RULE AND CONTAINING root: true
├── packages.json <-- CONTAINING THE SURROUNDING LINT CONFIGURATION
```

For a new package `cartidges/int_new` a valid ESLint configuration **must** be added.

`cartridges/.eslintrc.json` resets the ESLint configuration and adds this rule.

```json
{
  "root": true,
  "plugins": [
    "always"
  ],
  "rules": {
    "always/always": ["error", {
      "message": "No ESLint config found. Please add one or ignore the cartridge."
    }]
  }
}
```

So all files in this folder structure won't check any ESLint rules.
The subfolders must contain ESLint configurations which can differ between each subfolder.

For the case that someone adds a subfolder and forgets the ESLint configuration this rule was created. So every file within the subfolder will report an error

```
No ESLint config found. Please add one or ignore the cartridge.
```

## License

MIT © 2023 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/eslint-plugin-always
[npm-image]: https://badgen.net/npm/v/eslint-plugin-always
[npm-downloads-image]: https://badgen.net/npm/dw/eslint-plugin-always

[gh-url]: https://github.com/jenssimon/eslint-plugin-always
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/eslint-plugin-always
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/eslint-plugin-always
[gh-status-image]: https://badgen.net/github/status/jenssimon/eslint-plugin-always
