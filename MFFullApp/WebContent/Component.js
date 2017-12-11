sap.ui.define([ "sap/ui/core/UIComponent" ],

function(UIComponent) {
	"use strict";
	return UIComponent.extend("mf_fullapp.Component", {

		init :function() {
			UIComponent.prototype.init.apply(this, arguments);

			/* create the views based on the url/hash */
			this.getRouter().initialize();
			
			// load tile model
			var oJSONModel = new sap.ui.model.json.JSONModel();
            oJSONModel.loadData("model/tile.json", "",false);
            this.setModel(oJSONModel,"tile_model");
			
		},

		metadata : {
			manifest :"json"
		}

	});
});
