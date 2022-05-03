const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      platform: process.env.PLATFORM,
      app: __dirname + process.env.APP,
      desiredCapabilities: {
        appActivity: process.env.PLATFORM == 'Android' ? process.env.ACTIVITY : '',
        appPackage: process.env.PLATFORM == 'Android' ? process.env.PACKAGE : '',
        deviceName: process.env.DEVICE,
        platformVersion: process.env.VERSION
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js',
    sistemaPage: './pages/sistemaPage.js',
    homePage: './pages/homePage.js',
    cadastroPage: './pages/cadastroPage.js', 
  },
  mocha: {
    reporterOptions: {
      reportDir: 'output',
      reportFilename: "[status]_[datetime]-[name]-report",
      timestamp: "longDate"
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'desafio-03-automacao-mobile'
}