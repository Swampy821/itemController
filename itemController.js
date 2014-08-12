(function() {

	"use strict";

	function itemController(defaultObj){
		this.data = this.getDefaults();
		if(typeof defaultObj === 'object') {
			this.updateItem(defaultObj);
		}
	}
	itemController.prototype.updateItem = function(itemObj) {
		this.data.name = (itemObj.name!==undefined ? itemObj.name : this.data.name);
		this.data.description = (itemObj.description ? itemObj.description : this.data.description);
		this.data.type = (itemObj.type ? itemObj.type : this.data.type);
		this.data.str = (itemObj.str ? itemObj.str : this.data.str);
		this.data.ac = (itemObj.ac ? itemObj.ac : this.data.ac);
		this.data.dex = (itemObj.dex ? itemObj.dex : this.data.dex);
		this.data.end = (itemObj.end ? itemObj.end : this.data.end);
		this.data.attack = (itemObj.attack ? itemObj.attack : this.data.attack);
		this.data.dur = (itemObj.dur ? itemObj.dur : this.data.dur);
	};
	itemController.prototype.getDefaults = function() {
		var itemObj = {
			"name": "",
			"description":"",
			"type":"",
			"str":0,
			"ac":0,
			"dex":0,
			"end":0,
			"attack":0,
			"dur":0
		};
		return itemObj;
	};

	window.itemController = itemController;
})();