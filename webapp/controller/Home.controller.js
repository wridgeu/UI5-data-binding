sap.ui.define([
  "com/mrb/UI5-Data-Binding/controller/BaseController",
  "sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
  "use strict";

  return BaseController.extend("com.mrb.UI5-Data-Binding.controller.Home", {
    onInit: function(){
      
      var oModel = new JSONModel({
        greetingText: "Hi, my name is Marco"
      });

      //Set model globally for all Views/Controls (Dirty)
      sap.ui.getCore().setModel(oModel);
    }
  });
});
