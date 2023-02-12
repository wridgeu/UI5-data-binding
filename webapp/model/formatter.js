sap.ui.define([
	"sap/m/library",
	"sap/ui/core/Locale",
	"sap/ui/core/LocaleData",
	"sap/ui/model/type/Currency",
	"sap/ui/core/Core"
], function (mobileLibrary, Locale, LocaleData, Currency, Core) {
	"use strict";
	return {
		formatMail: function (sFirstName, sLastName) {
			var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		},
		formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
			var sBrowserLocale = Core.getConfiguration().getLanguage();
			var oLocale = new Locale(sBrowserLocale);
			var oLocaleData = new LocaleData(oLocale);
			var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
			return oCurrency.formatValue([fUnitPrice * iStockLevel, sCurrCode], "string");

		}
	};
});
