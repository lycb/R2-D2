import {Command, flags} from '@oclif/command'
import passwordAPI from '../api/passwordAPI'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
const Table  = require('cli-table')

export default class Remove extends Command {
  static description = 'remove password(s) :P';

  static flags = {
    help: flags.help({char: 'h'}),
    all: flags.boolean({char: 'a'}),
  }

  static args = [{name: 'password_name'}]

  async run() {
    const {args, flags} = this.parse(Remove)

    if (flags.all) {
      this.log(`${chalk.red('!WARN!')} All saved passwords will be removed!`);
      const prompt = await inquirer.prompt([
      {
        message: "Are you sure you want to delete all passwords?(Y/n)",
        type: "input",
        name: "ans",
        validate: function(ans:string) {
          if(ans.toLowerCase() === "y" || ans.toLowerCase() === "n") {
            return true;
          } else {
            return "Please enter a valid value"
          }
        }
      }]).then(answers => {
        if (answers.ans.toLowerCase() === 'y') {
          passwordAPI.removeAll();
        }
      })
    } else {
      const password = args.password_name;

      if (password) {
        if (passwordAPI.find(password)) {
          passwordAPI.remove(password)
          this.log(`${chalk.green('[SUCCESS]')} Your password with name: [${password}] was successfully removed`)
        } else {
          this.log(`${chalk.red('!ERROR!')} Password with name: [${password}] does not exist. Please pick another name.`);
        }
      } else {
        this.log(`${chalk.red('!ERROR!')} Please specify a name for your password`);
      }
    }
  }
}
