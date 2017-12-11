sap.ui.define([ "sap/ui/core/UIComponent" ],

function(UIComponent) {
	"use strict";
	return UIComponent.extend("simple_hello.Component", {

		init :function() {
			UIComponent.prototype.init.apply(this, arguments);

			
			
		},

		metadata : {
			manifest :"json"
		}

	});
});
