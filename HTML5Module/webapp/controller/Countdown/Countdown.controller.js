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

		return Controller.extend("com.mainproject.HTML5Module.controller.Countdown.Countdown", {
        
              onInit: function () { 

                this.myTimer = {
                  "days": 0,
                  "hours":0,
                  "minutes":0,
                  "seconds":0
              };

              let myCounterModel = new JSONModel(this.myTimer);
              this.getView().setModel(myCounterModel, "Counter");
              this.interval = setInterval(this.calculateTime.bind(this), 1000);
              // this.calculateTime();
              
              },

              calculateTime: function() {

              let currentDate = new Date();
              let techEdDate  = new Date("8 Dec 2020");

              let Diff =  techEdDate.getTime() - currentDate.getTime(); 

              this.myTimer.days = Math.floor(Diff / (1000 * 3600 * 24));
              this.myTimer.hours = Math.floor(( Diff % (1000 * 3600 * 24) ) / (1000 * 3600 ));
              this.myTimer.minutes = Math.floor(( Diff % (1000 * 3600 ) ) / (1000 * 60 ));
              this.myTimer.seconds = Math.floor(( Diff % (1000 * 60 ) ) / (1000 ));
              this.getView().getModel("Counter").setData(this.myTimer);
              IF (Diff <= 0) 
              clearInterval(this.interval);
              }
              

              


			
		});
	});
