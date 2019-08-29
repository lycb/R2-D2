R2-D2
=====

A CLI tool that generates passwords

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)

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
* [`r2d2 generate [PASSWORD_NAME]`](#r2d2-generate-password_name)
* [`r2d2 list`](#r2d2-list)
* [`r2d2 remove [PASSWORD_NAME]`](#r2d2-remove-password_name)
* [`r2d2 help [COMMAND]`](#r2d2-help-command)

## `r2d2 generate [PASSWORD_NAME]`

generate a password :)

```
USAGE
  $ r2d2 generate [PASSWORD_NAME]

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/generate.ts](https://github.com/lycb/R2-D2/blob/v0.0.0/src/commands/generate.ts)_


## `r2d2 list`

print out all saved passwords! :o

```
USAGE
  $ r2d2 list
```

_See code: [src/commands/list.ts](https://github.com/lycb/R2-D2/blob/v0.0.0/src/commands/list.ts)_

## `r2d2 remove [PASSWORD_NAME]`

remove password(s) :P

```
USAGE
  $ r2d2 remove [PASSWORD_NAME]

OPTIONS
  -a, --all   remove all passwords
  -h, --help  show CLI help
```

_See code: [src/commands/remove.ts](https://github.com/lycb/R2-D2/blob/v0.0.0/src/commands/remove.ts)_

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

