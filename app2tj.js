(function(){
	'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


	ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var kupljeno=this;
		kupljeno.itemName="";
		kupljeno.itemQuantity="";
		kupljeno.addItem=function(){
			ShoppingListCheckOffService.addItem(kupljeno.itemName, kupljeno.itemQuantity);
		}
	}

	AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var prekrizeno=this;
		prekrizeno.items=ShoppingListCheckOffService.getItems();
		prekrizeno.items2=ShoppingListCheckOffService.getItems2();
		prekrizeno.removeItem= function(itemIndex){
			ShoppingListCheckOffService.removeItem(itemIndex);
		};
	}

	function ShoppingListCheckOffService(){
		var service=this;
		var items=[];
		var items2=[];
		service.addItem=function(itemName, quantity){
			var item={
				name: itemName,
				quantity: quantity
			};
			items.push(item);
		};
		service.removeItem=function(itemIndex){
			items2.push(items[itemIndex]);
			items.splice(itemIndex,1);
			console.log(items2);
		};
		service.getItems=function(){
			return items;
		};
		service.getItems2=function(){
			return items2;
		};
	}
})();