akcli
=====

CLI for aggressive-koala

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/akcli.svg)](https://npmjs.org/package/akcli)
[![Downloads/week](https://img.shields.io/npm/dw/akcli.svg)](https://npmjs.org/package/akcli)
[![License](https://img.shields.io/npm/l/akcli.svg)](https://github.com/ak-cli/akcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @sebastian.gelotte/akcli
$ akcli COMMAND
running command...
$ akcli (-v|--version|version)
@sebastian.gelotte/akcli/0.0.2 win32-x64 node-v9.5.0
$ akcli --help [COMMAND]
USAGE
  $ akcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`akcli atom`](#akcli-atom)
* [`akcli help [COMMAND]`](#akcli-help-command)
* [`akcli molecule`](#akcli-molecule)
* [`akcli organism`](#akcli-organism)
* [`akcli page`](#akcli-page)
* [`akcli template`](#akcli-template)

## `akcli atom`

Creates boilerplate file structure for an atom

```
USAGE
  $ akcli atom

OPTIONS
  -n, --name=name  name of the atom

DESCRIPTION
  Path is hardcoded to 'src/components/01-atoms/'
```

_See code: [src\commands\atom.js](https://github.com/ak-cli/akcli/blob/v0.0.2/src\commands\atom.js)_

## `akcli help [COMMAND]`

display help for akcli

```
USAGE
  $ akcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src\commands\help.ts)_

## `akcli molecule`

Creates boilerplate file structure for a molecule

```
USAGE
  $ akcli molecule

OPTIONS
  -n, --name=name  name of the molecule

DESCRIPTION
  Path is hardcoded to 'src/components/02-molecules/'
```

_See code: [src\commands\molecule.js](https://github.com/ak-cli/akcli/blob/v0.0.2/src\commands\molecule.js)_

## `akcli organism`

Creates boilerplate file structure for an organism

```
USAGE
  $ akcli organism

OPTIONS
  -n, --name=name  name of the organism

DESCRIPTION
  Path is hardcoded to 'src/components/03-organisms/'
```

_See code: [src\commands\organism.js](https://github.com/ak-cli/akcli/blob/v0.0.2/src\commands\organism.js)_

## `akcli page`

Not implemented

```
USAGE
  $ akcli page

DESCRIPTION
  ...
```

_See code: [src\commands\page.js](https://github.com/ak-cli/akcli/blob/v0.0.2/src\commands\page.js)_

## `akcli template`

Not implemented

```
USAGE
  $ akcli template

DESCRIPTION
  ...
```

_See code: [src\commands\template.js](https://github.com/ak-cli/akcli/blob/v0.0.2/src\commands\template.js)_
<!-- commandsstop -->
