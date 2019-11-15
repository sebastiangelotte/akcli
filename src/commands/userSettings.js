const {Command} = require('@oclif/command')
const fs = require('fs')
const chalk = require('chalk')

const TEMPLATE_USERSETTINGS = `
//
// User specific settings
//

module.exports = {
    servers: {
        run: 'fractal', // Possible values: fractal, integration, both
        fractal: {
            port: 3000,
            uiPort: 3002
        },
        integration: {
            fileTypesToReload: ['cshtml'],
            injectHtml: true,
            proxyTarget: '', // Note: Also include the port (port and uiPort below are for the integration server itself)
            port: 4000,
            uiPort: 4002
        }
    },
    plugins: {
        webpack: {
            useJsHotReload: true
        },
        eslint: {
            useErrorOverlay: true,
            useAutoFix: true
        }
    }
}
`

class AtomCommand extends Command {
  async run() {
    fs.writeFile(`aggressive-koala.user.settings.js`, TEMPLATE_USERSETTINGS, err => {
        if (err) throw err
        this.log(chalk.green(`✔   | aggressive-koala.user.settings.js`))
      })
  }
}

AtomCommand.description = `Creates aggressive-koala.user.settings.js'
`

module.exports = AtomCommand
