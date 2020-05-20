sap.ui.define([
	"sap/m/library"
], function (mobileLibrary) {
	"use strict";
	return {
		formatMail: function(sFirstName, sLastName) {
			var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
	};
});
