sap.ui.define(
  [
    "com/mrb/UI5-Data-Binding/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.mrb.UI5-Data-Binding.controller.Home", {
      onInit: function () {
        var oModel = new JSONModel({
          greetingText: "Hi, my name is Marco",
        });

        //Set model globally for all views/controls (dirty) "sap.ui.getCore().setModel(oModel);""        
        //the go-to way for global definition would be to define the model within the manifest.json-file
        //and retrieve it via "this.getOwnerComponent().getModel();"
        this.getView().setModel(oModel);
      },
    });
  }
);
