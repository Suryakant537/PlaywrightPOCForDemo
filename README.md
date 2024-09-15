Allure report generation
In Config place:
reporter: [
    [
      "allure-playwright",
      {
        detail: true,
        outputFolder: "my-allure-results",
        suiteTitle: false,
      },
    ],
  ],
  Commands to run allure
1.  npx playwright test allure-playwright
2.  allure generate my-allure-results -o allure-report --clean
3.  allure open allure-report
