$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava/cucumberJava.feature');
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
  "duration": 15536360772,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.goToFacebook()"
});
formatter.result({
  "duration": 5668198995,
  "status": "passed"
});
formatter.match({
  "location": "CucumberJava.loginButton()"
});
formatter.result({
  "duration": 5031112073,
  "status": "passed"
});
});