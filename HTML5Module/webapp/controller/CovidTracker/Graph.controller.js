// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        'sap/viz/ui5/data/FlattenedDataset',
        'sap/viz/ui5/format/ChartFormatter',
        'sap/viz/ui5/api/env/Format',
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
	function (Controller, JSONModel, FlattenedDataset, ChartFormatter, Format) {
		"use strict";

		return Controller.extend("com.mainproject.HTML5Module.controller.CovidTracker.Graph", {

               oVizFrame : null,
              onInit: function () { 
                Format.numericFormatter(ChartFormatter.getInstance());
                var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
                 oVizFrame.setVizProperties({
                legend: {
                    title: {
                        visible: false
                    }
                },
                title: {
                    visible: false
                }
            });

            var dataModel = new JSONModel("https://api.rootnet.in/covid19-in/stats/latest");
            oVizFrame.setModel(dataModel,"Graph");

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            oPopOver.setFormatString(ChartFormatter.DefaultPattern.STANDARDFLOAT); 
                       
              }
			
		});
	});