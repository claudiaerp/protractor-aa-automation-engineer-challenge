exports.config = {
  framework: "jasmine2",
  //specs: ["specs/**/*.spec.js"],
  specs: ['specs/**/shino.positive.spec.js',
          'specs/**/shino.negative.spec.js'],
  suites: {
    PositiveTestingShino: 'specs/**/shino.positive.spec.js',
    NegativeTestingShino: 'specs/**/shino.negative.spec.js'
  },  
  directConnect: true,
  params: {
		baseUrl: 'https://www.shino.de/parkcalc/'
	},
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: 4444,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: [
          '--start-maximized'
      ]
    }
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 5000000,
    print: () => { },
  },
  onPrepare: () => {
    
    // Testing against a non-angular site - set ignoreSynchronization setting to true
    browser.ignoreSynchronization = true;
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

    jasmine.getEnv().addReporter(
      new SpecReporter({
        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
        suite: {
          displayNumber: true,    // display each suite number (hierarchical)
        },
        spec: {
          displaySuccessful: true,
          displayPending: true,   // display each pending spec
          displayDuration: true,  // display each spec duration
        },
        summary: {
          displaySuccessful: false, // display summary of all successes after execution
          displayFailed: true,    // display summary of all failures after execution
          displayPending: false,   // display summary of all pending specs after execution
          displayDuration: true,
        },
      }),
    );
  }
};
