import {Command, flags} from '@oclif/command'
import chalk from 'chalk'
import passwordAPI from '../api/passwordAPI'

export default class Generate extends Command {
  static description = 'generate a password :)';

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'password_name'}]

  async run() {
    const {args, flags} = this.parse(Generate)

    const password = args.password_name;

    if (password) {
      if (!passwordAPI.find(password)) {
        passwordAPI.generate(password)
        this.log(`${chalk.green('[Success]')} Your password is: ${passwordAPI.get(password)}`)
      } else {
        this.log(chalk.red('password with name: [' + password + '] already exists. Please pick another name'))
      }
    } else {
      this.log(chalk.red('please specify a name for your password'))
    }
  }
}
