$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bank.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test",
  "description": "As a user I want to login into xyz bank website",
  "id": "bank-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3601261100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 43069000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "bankManager Should Add Customer Successfully",
  "description": "",
  "id": "bank-test;bankmanager-should-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I click On \"Bank Manager Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click On the \"Add Customer\" Tab",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter FirstName",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter LastName",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter PostCode",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click On \"Add Customer\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I verify message \"Customer added successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on \"ok\" button on popup",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 487068200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Customer",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheTab(String)"
});
formatter.result({
  "duration": 319539500,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterFirstName()"
});
formatter.result({
  "duration": 358397900,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterLastName()"
});
formatter.result({
  "duration": 43592900,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iEnterPostCode()"
});
formatter.result({
  "duration": 43000400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Customer",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 37788200,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSeePopupDisplayed()"
});
formatter.result({
  "duration": 11900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully",
      "offset": 18
    }
  ],
  "location": "BankSteps.iVerifyMessage(String)"
});
formatter.result({
  "duration": 11835100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnPopup(String)"
});
formatter.result({
  "duration": 6584400,
  "status": "passed"
});
formatter.after({
  "duration": 606616900,
  "status": "passed"
});
formatter.before({
  "duration": 2463148000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "bankManager Should Open Account Successfully",
  "description": "",
  "id": "bank-test;bankmanager-should-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I click On \"Bank Manager Login\" Tab",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click On the \"Open Account\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I Search customer that created in first test",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Select currency \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on \"process\" button1",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I see popup displayed",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the message \"Account created successfully\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on \"ok\" button on popup",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Bank Manager Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTab(String)"
});
formatter.result({
  "duration": 421503200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open Account",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 333309600,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatCreatedInFirstTest()"
});
formatter.result({
  "duration": 337059100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 19
    }
  ],
  "location": "BankSteps.iSelectCurrency(String)"
});
formatter.result({
  "duration": 54974300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "process",
      "offset": 12
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "BankSteps.iClickOnButton(String,int)"
});
formatter.result({
  "duration": 36322000,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSeePopupDisplayed()"
});
formatter.result({
  "duration": 8600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully",
      "offset": 22
    }
  ],
  "location": "BankSteps.iVerifyTheMessage(String)"
});
formatter.result({
  "duration": 8865100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ok",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnPopup(String)"
});
formatter.result({
  "duration": 5471600,
  "status": "passed"
});
formatter.after({
  "duration": 601790800,
  "status": "passed"
});
formatter.before({
  "duration": 2411043100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12900,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "customer Should Login And Logout Successfully",
  "description": "",
  "id": "bank-test;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify \"Logout\" Tab displayed",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on \"Logout\" logout Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I verify \"Your Name\" text displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 555689800,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2081323800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 31110900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 10
    }
  ],
  "location": "BankSteps.iVerifyTabDisplayed(String)"
});
formatter.result({
  "duration": 278531700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Logout",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLogoutButton(String)"
});
formatter.result({
  "duration": 29392800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name",
      "offset": 10
    }
  ],
  "location": "BankSteps.iVerifyTextDisplayed(String)"
});
formatter.result({
  "duration": 15520800,
  "status": "passed"
});
formatter.after({
  "duration": 618770900,
  "status": "passed"
});
formatter.before({
  "duration": 2437495700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "BankSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 10800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "customer Should Deposit Money Successfully",
  "description": "",
  "id": "bank-test;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I click on \"Customer Login\" customer login Tab",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I search customer that I created",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \"Login\" login Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \"Deposit\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I Enter amount 100",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Deposit\" Button on the page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I verify message \"\"Deposit Successful\"\" on the page",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 47,
      "value": "#  @regression"
    },
    {
      "line": 48,
      "value": "#  Scenario: Customer should withdraw money successfully"
    },
    {
      "line": 49,
      "value": "#    When  I click on \"Customer Login\" customer login Tab"
    },
    {
      "line": 50,
      "value": "#    And   I search customer that I created"
    },
    {
      "line": 51,
      "value": "#    And   I click on \"Login\" login Button"
    },
    {
      "line": 52,
      "value": "#    And   I click on \"Deposit\" Tab on page"
    },
    {
      "line": 53,
      "value": "#    And   I Enter amount 100"
    }
  ],
  "line": 54,
  "name": "I click on the \"Withdrawl\" Tab on page",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I Enter amount 50 on the page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click next on \"Withdraw\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I verify that message \"Transaction Successful\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Customer Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnCustomerLoginTab(String)"
});
formatter.result({
  "duration": 481707600,
  "status": "passed"
});
formatter.match({
  "location": "BankSteps.iSearchCustomerThatICreated()"
});
formatter.result({
  "duration": 2083683700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnLoginButton(String)"
});
formatter.result({
  "duration": 30706700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnTabOnPage(String)"
});
formatter.result({
  "duration": 293431000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmount(int)"
});
formatter.result({
  "duration": 290203500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit",
      "offset": 12
    }
  ],
  "location": "BankSteps.iClickOnButtonOnThePage(String)"
});
formatter.result({
  "duration": 37716900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    },
    {
      "val": "",
      "offset": 38
    }
  ],
  "location": "BankSteps.iVerifyMessageDepositSuccessfulOnThePage(String,String)"
});
formatter.result({
  "duration": 18358600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdrawl",
      "offset": 16
    }
  ],
  "location": "BankSteps.iClickOnTheTabOnPage(String)"
});
formatter.result({
  "duration": 2031723900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "BankSteps.iEnterAmountOnThePage(int)"
});
formatter.result({
  "duration": 2045264100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Withdraw",
      "offset": 17
    }
  ],
  "location": "BankSteps.iClickNextOnButton(String)"
});
formatter.result({
  "duration": 31593600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction Successful",
      "offset": 23
    }
  ],
  "location": "BankSteps.iVerifyThatMessage(String)"
});
formatter.result({
  "duration": 4040290900,
  "status": "passed"
});
formatter.after({
  "duration": 634027600,
  "status": "passed"
});
});