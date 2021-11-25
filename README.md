[![NPM version][npm-image]][npm-url] [![Downloads][npm-downloads-image]][npm-url] [![star this repo][gh-stars-image]][gh-url] [![fork this repo][gh-forks-image]][gh-url] [![Build Status][travis-image]][travis-url] ![Code Style][codestyle-image]

# eslint-plugin-always

> ESLint plugin that always reports with configurable message

## Why?

It sounds a bit strange to have a ESLint rule that always reports. The reason why this plugin was created is a special use case:

The root ESLint configuration in the project fits for the build scripts but not for the rest of the project.
There is a subfolder that resets the ESLint configuration:

```json
{
  "root": true
}
```

So all files in this folder structure won't check any ESLint rules.
The subfolders must contain ESLint configurations which can differ between each subfolder.

For the case that someone adds a subfolder and forgets the ESLint configuration this rule was created. So every file within the subfolder will report an error

> No ESLint configuration present.

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

## License

MIT © 2021 [Jens Simon](https://github.com/jenssimon)

[npm-url]: https://www.npmjs.com/package/eslint-plugin-always
[npm-image]: https://badgen.net/npm/v/eslint-plugin-always
[npm-downloads-image]: https://badgen.net/npm/dw/eslint-plugin-always

[gh-url]: https://github.com/jenssimon/eslint-plugin-always
[gh-stars-image]: https://badgen.net/github/stars/jenssimon/eslint-plugin-always
[gh-forks-image]: https://badgen.net/github/forks/jenssimon/eslint-plugin-always

[travis-url]: https://travis-ci.com/jenssimon/eslint-plugin-always
[travis-image]: https://travis-ci.com/jenssimon/eslint-plugin-always.svg?branch=master

[codestyle-image]: https://badgen.net/badge/code%20style/airbnb/f2a
