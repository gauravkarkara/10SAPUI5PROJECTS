// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("com.mainproject.HTML5Module.controller.Tiles", {
			onInit: function () {
                let myTilesModel = new JSONModel("model/tiles.json");
                  // @ts-ignore
                  this.getView().setModel(myTilesModel, "tiles");
                  },

            press: function(oRoute){
                this.getOwnerComponent().getRouter().navTo(oRoute);
            }
               
			
		});
	});
