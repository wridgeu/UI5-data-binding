sap.ui.define([
  "sap/ui/test/opaQunit",
  "com/mrb/UI5-Data-Binding/test/integration/pages/App"
], function (opaTest) {
  "use strict";

  opaTest("should show correct number of nested pages", function (Given, When, Then) {

    // Arrangements
    Given.iStartMyApp();

    // Assertions
    Then.onTheAppPage.iShouldSeePageCount(1);

    // Cleanup
    Then.iTeardownMyApp();
  });

});
