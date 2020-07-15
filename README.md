R2-D2
=====
R2-D2 is a command-line tool that generates, stores, and removes your passwords from the comfort of your own terminal!

# Disclaimer
Don't actually use this. It is not safe. This is just a CLI project made by a student.

# Why?
* Help you come up with stronger passwords
* Help you store passwords 

# Install
**Requirements**
* Unix/Linux machine
* Terminal

**Follow these steps**
```
clone https://github.com/lycb/R2-D2
cd R2-D2
npm install
npm link
r2d2 --help
```

# Commands
<!-- commands -->
#### `r2d2 generate [PASSWORD_NAME]`

Generate passwords. User **must** specify a name for the password. 

```
USAGE
  $ r2d2 generate [PASSWORD_NAME]

OPTIONS
  -h, --help  show CLI help
```

#### `r2d2 remove [PASSWORD_NAME]`

Removes a specific password or all passwords.

```
USAGE
  $ r2d2 remove [PASSWORD_NAME]

OPTIONS
  -a, --all   remove all passwords
  -h, --help  show CLI help
```

#### `r2d2 list`

Prints out all the saved passwords. 

```
USAGE
  $ r2d2 list
```
<!-- commandsstop -->

# Program Snippet
```
user-command$ r2d2 list
┌───────┬───────┬──────────┐
│ index │ name  │ password │
├───────┼───────┼──────────┤
│ 0     │ jenny │ 7j26kgys │
├───────┼───────┼──────────┤
│ 1     │ sean  │ 58bfvnmx │
└───────┴───────┴──────────┘

user-command$ r2d2 remove -a
!WARN! All saved passwords will be removed!
? Are you sure you want to delete all passwords?(Y/n) y

user-command$ r2d2 list
!EMPTY! No password to display. Generate more.

user-command$ r2d2 generate helloworld
[SUCCESS] Your password is: [9r9a42r9]

user-command$ r2d2 list
┌───────┬────────────┬──────────┐
│ index │ name       │ password │
├───────┼────────────┼──────────┤
│ 0     │ helloworld │ 9r9a42r9 │
└───────┴────────────┴──────────┘

user-command$ r2d2 remove helloworld
[SUCCESS] Your password with name: [helloworld] was successfully removed

user-command$ r2d2 list
!EMPTY! No password to display. Generate more.
```

# FAQs
1. Is the file encrypted / Is it safe?
    * No encryption is currently implemented
2. Can I change where to save the file? 
    * Yes, you can edit the PasswordAPI.js file and change where you save the password 
3. Is there a limit to how many passwords I can save?
    * There is no limit.
4. Do I have special characters? 
    * No special characters will be generated in the passwords
5. Can I change the length of how many characters I want in my password? 
    * Currently you cannot, all passwords will be 8 characters long

# Support
1. Create an issue
2. Be specific of the issue you want help with

# Contribution Guidelines
1. Fork
2. Do what you need to do
3. Make a pull request 

# License
<!-- link below -->
[MIT License](https://github.com/lycb/R2-D2/blob/master/LICENSE) 

