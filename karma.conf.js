const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    client: {
      jasmine: {
        random: false,
        timeoutInterval: 300000,
      },
    },

    files: [
      { pattern: "./src/**/*.js", type: "module" },
      { pattern: "./test/**/*.js", type: "module" },

      { pattern: "./data/**/*.js", type: "module"},
    ],
    
    preprocessors: {
      "src/**/!(*.test).js": ["karma-coverage-istanbul-instrumenter"],
    },
    plugins: ["karma-*", require("./tasks/benchmarkReporter.js")],
    reporters: ["spec", "coverage-istanbul", "benchmark"],
    benchmarkReporter: {
      dir: "./output",
      filename: "benchmark.report.json",
    },
    coverageIstanbulInstrumenter: {
      esModules: true,
    },
    coverageIstanbulReporter: {
      reports: ["html", "text", "lcovonly"],
      dir: path.join(__dirname, "coverage"),
      skipFilesWithNoCoverage: true,
    },
    customLaunchers: {
      Chrome_with_memory: {
        base: "ChromeHeadless",
        flags: [
          "--no-sandbox", //
          "--enable-precise-memory-info",
          "--js-flags=--expose-gc", // Enable garbage collection
          "--disable-extensions", // Disable extensions
          "--disable-gpu", // Disable GPU acceleration
          "--disable-background-timer-throttling", // Disable background timer throttling
          "--disable-backgrounding-occluded-windows", // Disable backgrounding of occluded windows
          "--disable-renderer-backgrounding", // Disable renderer backgrounding
        ],
      },
    },
    browsers: ["Chrome_with_memory"],
    browserNoActivityTimeout: 300000,
    browserDisconnectTimeout: 300000,
    browserDisconnectTolerance: 3, // Increase the disconnect tolerance
    captureTimeout: 300000, // Increase the capture timeout
    singleRun: true,
    logLevel: config.DISABLE,

  });
};
