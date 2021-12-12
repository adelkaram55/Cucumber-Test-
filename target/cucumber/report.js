$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/.feature');
formatter.feature({
  "line": 1,
  "name": "Google search feature",
  "description": "",
  "id": "google-search-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Verify when the user inserts text within search field then it directs him to result page.",
  "description": "",
  "id": "google-search-feature;verify-when-the-user-inserts-text-within-search-field-then-it-directs-him-to-result-page.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inserts text within search and selects enter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Google search should directs me to result page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberJava.openBrowser()"
});
formatter.result({
  "duration": 14975522819,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 4896331829,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.loginButton()"
});
formatter.result({
  "duration": 5826939381,
  "status": "passed"
});
formatter.uri('cucumberJava/cucumberJava.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Google search functionality",
  "description": "",
  "id": "cucumberjava;google-search-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User inserts text within search and selects enter",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Google search should directs me to result page",
  "keyword": "Then "
});
formatter.match({
  "location": "CucumberJava.openBrowser()"
});
formatter.result({
  "duration": 15978650033,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 15428885360,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.loginButton()"
});
formatter.result({
  "duration": 14882618724,
  "status": "passed"
});
});