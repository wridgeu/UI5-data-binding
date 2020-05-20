sap.ui.define(
  [
    "com/mrb/UI5-Data-Binding/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
  ],
  function (BaseController, JSONModel, ResourceModel) {
    "use strict";

    return BaseController.extend("com.mrb.UI5-Data-Binding.controller.Home", {
      onInit: function () {
        // Create a JSON model from an object literal
        var oModel = new JSONModel({
          firstName: "Harry",
          lastName: "Hawk",
          enabled: true,
          panelHeaderText: "Data Binding Basics",
        });

        // Create a resource bundle for language specific texts
        // nowadays those are being declared via manifest.json
        var oResourceModel = new ResourceModel({
          bundleName: "com.mrb.UI5-Data-Binding.i18n.i18n_example",
        });

        //Set model globally for all views/controls (dirty) "sap.ui.getCore().setModel(oModel);""
        //the go-to way for global definition would be to define the model within the manifest.json-file
        //and retrieve it via "this.getOwnerComponent().getModel();"
        this.getView().setModel(oModel);
        this.getView().setModel(oResourceModel, "i18n_example")
      },
    });
  }
);
