exports.config = {
  framework: 'jasmine',
  getPageTimeout: 50000,
  highlightDelay: 1000,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['webtables.js']
};