sap.ui.define(
  [
    "com/mrb/UI5-Data-Binding/controller/BaseController",
    "sap/ui/model/json/JSONModel",
  ],
  function (BaseController, JSONModel) {
    "use strict";

    return BaseController.extend("com.mrb.UI5-Data-Binding.controller.Home", {
      onInit: function () {
        // Create a JSON model from an object literal
        var oModel, oMessageManager, oProductModel;

        oProductModel = new JSONModel();
        oProductModel.loadData("./model/Products.json");

        oModel = new JSONModel({
          firstName: "Harry",
          lastName: "Hawk",
          enabled: true,
          address: {
            street: "Dietmar-Hopp-Allee 16",
            city: "Walldorf",
            zip: "69190",
            country: "Germany",
          },
          salesToDate: 12345.6789,
          priceThreshold: 20,
          currencyCode: "EUR",
        });

        //Set model globally for all views/controls (dirty) "sap.ui.getCore().setModel(oModel);""
        //the go-to way for global definition would be to define the model within the manifest.json-file
        //and retrieve it via "this.getOwnerComponent().getModel();"
        this.getView().setModel(oModel);

        //set loaded JSON file as model with name 'products'
        this.getView().setModel(oProductModel, "products");

        //MessageManager is a singleton
        oMessageManager = sap.ui.getCore().getMessageManager();
        oMessageManager.registerObject(this.getView(), true);
      },
      onItemSelected: function (oEvent) {
        var oSelectedItem = oEvent.getSource();
        var oContext = oSelectedItem.getBindingContext("products");
        var sPath = oContext.getPath();
        var oProductDetailPanel = this.byId("productDetailsPanel");
        oProductDetailPanel.bindElement({ path: sPath, model: "products" });
      },
    });
  }
);
