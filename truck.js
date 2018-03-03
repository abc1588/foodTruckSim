

class FoodTruck{
	constructor(name, menu){
		this.name = name;
		this.menu = menu;
		this.customerQueue = [];
		this.chefNextAvailableTimer = null;
	}
	initializeQueue(){
		if(!this.customerQueue.length){
			console.warn('no customers!');
			return;
		}
		if(this.chefNextAvailableTimer){
			console.log('there is already a customer waiting')
			return;
		}
		this.startTimer();

	}
	startTimer(){
		this.clearTimer();
		var currentCookingTime = this.customerQueue[0].item.timeToPrepare * 3000;
		var boundfunction = this.handleTimerEvent.bind(this)
		this.chefNextAvailableTimer = setTimeout( boundfunction, currentCookingTime );
	}
	clearTimer(){
		if(this.chefNextAvailableTimer!==null){
			clearTimeout(this.chefNextAvailableTimer);
			this.chefNextAvailableTimer = null;
		}
	}
	handleTimerEvent(){
		this.clearTimer();
		console.log(this);
		console.log(this.name + ' is making food!');
		var nextCustomerOrder = this.customerQueue.shift();
		debugger;

		console.log(`gave a ${nextCustomerOrder.item.name} to ${nextCustomerOrder.customer.name}`);
		this.initializeQueue();
	}
	pickRandomMenuItem(){
		return this.menu[ getRandomValue(this.menu)];
	}
	addCustomer(customer){
		var orderObject = {
			customer,
			item: this.pickRandomMenuItem()
		}
		this.customerQueue.push( orderObject );
		this.initializeQueue();
	}
}









