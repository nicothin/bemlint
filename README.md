# bemlint

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

This linter checks attribute `class` in final `html` files for [BEM naming](https://github.com/bem/bem-naming) conventions.

Initiative cli code based on [ESLint](https://github.com/eslint/eslint)


## Installation

```
npm install -g bemlint
```

## Usage

```
bemlint test.html test2.html [options]
```

## Sublime-Linter
You can use it with [SublimeLinter-contrib-bemlint](https://github.com/DesTincT/SublimeLinter-contrib-bemlint) plugin.

![Sublime Plugin](/sublime.png?raw=true "Screenshot")

## Options

- __--elem/-e__ - element delimeter, default: 
```
bemlint test.html --elem='__'
```

- __--mod/-m__ - modifier and value delimeter, default: 
```
bemlint test.html --mod='_'
```

- __--wordPattern/-wp__ - regex, defines proper names for blocks, default: 
```
bemlint test.html -wp='[a-z0-9]+(?:-[a-z0-9]+)*'
```

- __--bem-prefixes/-bp__ - array of block names prefix for lint, example: 
```
bemlint test.html -bp='['b-', 'l-', 'helper-']'
```

- __--format/-f__ - specific output format, default: 
```
bemlint test.html -f='stylish'
```
Available: compact|checkstyle|html|json|table|tap|unix|visualstudio|junit|jslint-xml|html-template-message|html-template-page|html-template-result

- __--exclude-rules/-er__ - Array of rules ids to exclude from lint: 
```
bemlint test.html -er='['isBlockElementInBlock']'
```

- __--no-ignore__ - Disable use of .bemlintignore 
```
bemlint test.html --no-ignore
```

## Rules
- `dublicate` - finds same classes in one attribute
- `isBlockElementInBlock` - Block and his element cannot be in one place, wrong => `class="b-block b-block__element`
- `isBlockModNoBlock` - Block mod should be paired with it's block, wrong => `class="b-block_mod_val"`
- `isElemModNoElement` - Element mod should be paired with it's element, wrong => `class="b-block__element_mod"`
- `isBlockWrapElement` - Element should be nested in it's block =>
```
//right
<div class="b-dropdown">
  <div class="b-dropdown__element"></div>
</div>

//wrong, b-dropdown__element is not in block b-dropdown
<div class="b-dropdown3">
  <div class="b-dropdown__element"></div>
</div>
```


[npm-image]: https://img.shields.io/npm/v/bemlint.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/bemlint
[travis-image]: https://img.shields.io/travis/DesTincT/bemlint/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/DesTincT/bemlint
[downloads-image]: https://img.shields.io/npm/dm/bemlint.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/bemlint
