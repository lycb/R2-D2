import {Command, flags} from '@oclif/command'
import passwordAPI from '../api/passwordAPI'
import chalk from 'chalk'
const Table  = require('cli-table')

export default class List extends Command {
  static description = 'print out all saved passwords! :o'

  async run() {
    const table = new Table({
      head: [
        chalk.magenta('index'),
        chalk.magenta('name'),
        chalk.magenta('password'),
      ]
    })

    const passwords = passwordAPI.list()
    for (let i = 0; i < passwords.length; i++) {
      table.push([ i, passwords[i].name, passwords[i].value ])
    }

    this.log(table.toString())
  }
}
