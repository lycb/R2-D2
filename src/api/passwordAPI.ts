import * as fs from 'fs'
import * as path from 'path'
import * as os from 'os'

const passwordFile = path.join(os.homedir(), 'r2d2', 'dontlook.json')
const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

interface Password {
  name: string;
  value: string;
}

class passwordAPI {
	private passwords: Password[] = []

	constructor() {
		if (!(fs.existsSync(path.dirname(passwordFile)))) {
      fs.mkdirSync(path.dirname(passwordFile))
		  fs.writeFileSync(passwordFile, "[]", { encoding: 'utf-8' });
    }
    this.passwords = JSON.parse(fs.readFileSync(passwordFile, { encoding: 'utf-8' }))
	}

	private savePassword() {
    const data = JSON.stringify(this.passwords)
    fs.writeFileSync(passwordFile, data, { encoding: 'utf-8' })
	}

	generate(name : string, length : number = 8, special : boolean = true) {
    const charsLength = special ? allowedChars.length : allowedChars.length - '!@#$%^&*()'.length
    const randChar = () => allowedChars[Math.floor(Math.random() * charsLength)]
    const value = [...Array(length)].map(c => randChar()).join('')

		const newPassword : Password = { name, value }
		this.passwords.push(newPassword)
		this.savePassword()
	}

	list() {
		return this.passwords;
	}

	get(name : string) : string {
		if (this.find(name)) {
			for (let password of this.passwords) {
				if (password.name === name.toLowerCase()) {
					return password.value
				}
			}
		}
		return "password not found with name: [" + name + "]";
	}

	remove (name : string) {
  	for (let password of this.passwords) {
  		if (password.name === name.toLowerCase()) {
  			const index = this.passwords.indexOf(password)
  			this.passwords.splice(index, 1)
  			this.savePassword()
  		}
		}
	}

	removeAll() {
		this.passwords = [];
		this.savePassword();
	}

	find (name : string) : boolean {
		for (let password of this.passwords) {
			if (password.name === name.toLowerCase()) {
				return true;
			}
		}
		return false;
	}
}

const api = new passwordAPI
export default api 