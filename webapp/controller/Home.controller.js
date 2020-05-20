sap.ui.define(
  [
    "com/mrb/UI5-Data-Binding/controller/BaseController",
    "sap/ui/model/json/JSONModel"
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.mrb.UI5-Data-Binding.controller.Home", {
      onInit: function () {
        // Create a JSON model from an object literal
        var oModel, oMessageManager;

        oModel = new JSONModel({
          firstName: "Harry",
          lastName: "Hawk",
          enabled: true,
          address: {
            street: "Dietmar-Hopp-Allee 16",
            city: "Walldorf",
            zip: "69190",
            country: "Germany"
          },
          salesToDate: 12345.6789,
          currencyCode: "EUR"
        });

        //Set model globally for all views/controls (dirty) "sap.ui.getCore().setModel(oModel);""
        //the go-to way for global definition would be to define the model within the manifest.json-file
        //and retrieve it via "this.getOwnerComponent().getModel();"
        this.getView().setModel(oModel);
        
        //MessageManager is a singleton
        oMessageManager = sap.ui.getCore().getMessageManager();
        oMessageManager.registerObject(this.getView(), true);
      },
    });
  }
);
