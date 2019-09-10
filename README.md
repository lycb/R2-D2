R2-D2
=====
R2-D2 is a command-line tool that generates, stores, and removes your passwords from your local machine! 

# Why?
* Help you come up with stronger passwords
* Help you store passwords 

# Install
1. `clone https://github.com/lycb/R2-D2`
2. `cd R2-D2` 
3. `npm install`
4. `npm link`
5. `r2d2 --help`

# Commands
<!-- commands -->
* [`r2d2 generate [PASSWORD_NAME]`](#r2d2-generate-password_name)
* [`r2d2 remove [PASSWORD_NAME]`](#r2d2-remove-password_name)
* [`r2d2 list`](#r2d2-list)

### `r2d2 generate [PASSWORD_NAME]`

generate a password :)

```
USAGE
  $ r2d2 generate [PASSWORD_NAME]

OPTIONS
  -h, --help  show CLI help
```

### `r2d2 remove [PASSWORD_NAME]`

remove password(s) :P

```
USAGE
  $ r2d2 remove [PASSWORD_NAME]

OPTIONS
  -a, --all   remove all passwords
  -h, --help  show CLI help
```

### `r2d2 list`

print out all saved passwords! :o

```
USAGE
  $ r2d2 list
```
<!-- commandsstop -->

# Screenshot
`will add later`

# FAQs
1. Is the file encrypted / Is it safe?
    * No encryption is currently implemented
2. Can I change where to save the file? 
    * Yes, you can edit the PasswordAPI.js file and change where you save the password 
<!-- Add in a page on instructions on HOW to change where you save your file -->
3. Is there a limit to how many passwords I can save?
    * There is no limit.
4. Do I have special characters? 
    * No special characters will be generated in the passwords
5. Can I change the length of how many characters I want in my password? 
    * Currently you cannot, all passwords will be 8 characters long

# Support
Please create a new issue and I will get back to you soon.

# Contribution Guidelines
1. Fork
2. Change the code
3. Make a pull request 
4. Add suggestions to the suggestion file

# License
<!-- link below -->
[MIT License](https://github.com/lycb/R2-D2/blob/master/LICENSE) 

