sap.ui
        .define(
                [ "mf_fullapp/controller/BaseController", "sap/m/MessageToast" ],
                function(BaseController, MessageToast) {
                    "use strict";
                    return BaseController.extend("mf_fullapp.controller.TilePage",
                    {
                        onInit : function (evt) 
                        {

                        },
                        onTilePressed: function(evt)
                        {
                            var oRouter = this.getRouter();
                            oRouter.navTo("navpage");
                        }
                     });
                });
