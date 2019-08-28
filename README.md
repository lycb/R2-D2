R2-D2
=====

A tool that generates passwords

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/R2-D2.svg)](https://npmjs.org/package/R2-D2)
[![Downloads/week](https://img.shields.io/npm/dw/R2-D2.svg)](https://npmjs.org/package/R2-D2)
[![License](https://img.shields.io/npm/l/R2-D2.svg)](https://github.com/lycb/R2-D2/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g R2-D2
$ r2d2 COMMAND
running command...
$ r2d2 (-v|--version|version)
R2-D2/0.0.0 linux-x64 node-v10.16.3
$ r2d2 --help [COMMAND]
USAGE
  $ r2d2 COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`r2d2 hello [FILE]`](#r2d2-hello-file)
* [`r2d2 help [COMMAND]`](#r2d2-help-command)

## `r2d2 hello [FILE]`

describe the command here

```
USAGE
  $ r2d2 hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ r2d2 hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/lycb/R2-D2/blob/v0.0.0/src/commands/hello.ts)_

## `r2d2 help [COMMAND]`

display help for r2d2

```
USAGE
  $ r2d2 help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
