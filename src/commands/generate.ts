import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import passwordAPI from '../api/passwordAPI'

export default class Generate extends Command {
  static description = 'generate a password :)';

  static flags = {
    help: flags.help({char: 'h'}),
    length: flags.integer({
      char: 'l',
      description: 'Length of password (>= 8). Defaults to 8.',
      default: 8,
    }),
  }

  static args = [{name: 'password_name'}]

  async run() {
    const {args, flags} = this.parse(Generate)
    const password = args.password_name;
    const length = flags.length;

    if (length < 8 || length > 64) {
      this.log(`${chalk.red('!ERROR!')} Cannot create password with length ${length}. Password length must be 8-64.`);
      return;
    }

    if (password) {
      if (!passwordAPI.find(password)) {
        passwordAPI.generate(password, length)
        this.log(`${chalk.green('[SUCCESS]')} Your password is: [${passwordAPI.get(password)}]`)
      } else {
        this.log(`${chalk.red('!ERROR!')} Password with name: [${password}] already exists. Please pick another name.`);
      }
    } else {
      this.log(`${chalk.red('!ERROR!')} Please specify a name for your password.`);
    }
  }
}
