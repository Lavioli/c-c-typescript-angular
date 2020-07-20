const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "sf-ui/cucumber-json/",
  reportPath: "sf-ui/report",
  pageTitle: "SF UI",
  reportName: "Submissions & Feedback UI",
  metadata: {
    browser: {
      name: "chrome",
      version: "83",
    },
    device: "Local test machine",
    platform: {
      name: "osx",
      version: "10.15.6",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Submissions & Feedback UI" },
      { label: "Release", value: "0.92.0" },
    ],
  },
});
