const {Command, flags} = require('@oclif/command')
const fs = require('fs')
const mkdirp = require('mkdirp')
const chalk = require('chalk')

const TEMPLATE_HBS = ''
const TEMPLATE_SCSS = ''
const TEMPLATE_CONFIG = ''
const TEMPLATE_MD = ''

const componentPath = 'src/components/01-atoms/'

class AtomCommand extends Command {
  async run() {
    const {flags} = this.parse(AtomCommand)
    const name = flags.name || 'new-component'
    const path = `${componentPath}/${name}`

    const folderExists = fs.existsSync(path)

    if (folderExists) {
      this.log(chalk.red('🚫   Atom already exists'))
    } else {
      mkdirp(path,  err => {
        if (err) throw err
        this.log(chalk.green(`✔ /${name}/`))

        fs.writeFile(`${path}/_${name}.scss`, TEMPLATE_SCSS, err => {
          if (err) throw err
          this.log(chalk.green(`✔   | _${name}.scss`))
        })

        fs.writeFile(`${path}/${name}.config.js`, TEMPLATE_CONFIG, err => {
          if (err) throw err
          this.log(chalk.green(`✔   | ${name}.config.js`))
        })

        fs.writeFile(`${path}/${name}.hbs`, TEMPLATE_HBS, err => {
          if (err) throw err
          this.log(chalk.green(`✔   | ${name}.hbs`))
        })

        fs.writeFile(`${path}/README.md`, TEMPLATE_MD, err => {
          if (err) throw err
          this.log(chalk.green('✔   | README.md'))
        })
      })
    }
  }
}

AtomCommand.description = `Creates boilerplate file structure for an atom
Path is hardcoded to 'src/components/01-atoms/'
`

AtomCommand.flags = {
  name: flags.string({char: 'n', description: 'name of the atom'}),
}

module.exports = AtomCommand
