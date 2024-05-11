const fs = require("fs");

function performanceReporter(config) {
  var results = [];
  var path = "";

  this.createReportDirectory = () => {
    path = config?.performanceReporter?.path ?? "./output";
    fs.mkdirSync(path, { recursive: true });
    return this;
  };
  this.writeReportToFile = () => {
    let filename =
      config?.performanceReporter?.filename ?? "performance.report.json";
    let filepath = require("path").join(path, filename);
    fs.writeFileSync(filepath, JSON.stringify(results, null, 2));
  };

  this.onRunComplete = (browsers, result) => {
    this.createReportDirectory().writeReportToFile();
  };

  this.onSpecComplete = (browser, result) => {
    results.push(result);
  };
}

performanceReporter.$inject = ["config"];

module.exports = {
  "reporter:performance": ["type", performanceReporter],
};
