// @ts-nocheck
sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel",
        "sap/ui/unified/library"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
	function (Controller, JSONModel, unifiedLibrary) {
        "use strict";
        
        var CalendarDayType = unifiedLibrary.CalendarDayType;

		return Controller.extend("com.mainproject.HTML5Module.controller.VaccinationTracker.vaccinetracker", {
        
              onInit: function () { 

                  let dayType = {
                                   "type5" : CalendarDayType.Type05
                                }
                  let oVaccModel = new JSONModel("model/vacc.json");
                  this.getView().setModel(oVaccModel, "vacc");

                  let oViewConfig = {"table" : true,
                                    "calendar": false };
                  let oViewModel = new JSONModel(oViewConfig);
                  this.getView().setModel(oViewModel, "view");
                  
              
              },

              formatDate: function(input){
                    return new Date(input);
              },

              formatText: function(input){
                  var now = new Date;
                  var inputDate = new Date(input);

                  if(inputDate < now){
                      return 'Error';
                  } else {
                      return 'Success';
                  }
              }
              

              


			
		});
	});
