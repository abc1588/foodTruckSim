var namesArray = ['Harrison','Evan','Duy','Keaton','Brian','Hanran','William','Nolan','Eric','Parker','Jeff','Ryan','Dan'];

function getRandomValue(min=0, max=100){
	if(Array.isArray(min)){
		max = min.length;
		min = 0;
	}
	var num = ( Math.random()* (max-min)+min) >> 0;
	return num;
}
function getRandomClientName(){
	return namesArray[getRandomValue(namesArray)];
}
function getRandomFoodTruckName(){
	return namesArray[getRandomValue(namesArray)]+ "'s truck";
}

class FoodTruckSim{
	constructor(){
		this.trucks = [];
		this.customers = [];
	}
	addCustomer(name){
		var client = new Customer( name );
		this.customers.push(client);
	}
	addTruck(name, menu){
		var truck = new FoodTruck(name, menu);
		this.trucks.push( truck );
	}
	addCustomerToTruck(customer=this.customers[getRandomValue(this.customers)], truck=this.trucks[getRandomValue(this.trucks)]){
		if(truck.constructor === FoodTruck && customer.constructor === Customer){
			truck.addCustomer(customer);
		} else {
			console.error( 'arguments must be a customer or a truck, or undefined');
		}
	}
}
var menu = [
	{
		name: 'chitlins',
		price: 8.00,
		timeToPrepare: 2
	},
	{
		name: 'burrito',
		price: 5.00,
		timeToPrepare: 1
	},
	{
		name: 'Spaghetti',
		price: 12.50,
		timeToPrepare: 1
	},
	{
		name: 'churro',
		price: 4.00,
		timeToPrepare: .5
	}
]

var simulation = new FoodTruckSim();
simulation.addCustomer(getRandomClientName());
simulation.addCustomer(getRandomClientName());
simulation.addCustomer(getRandomClientName());
simulation.addTruck( getRandomFoodTruckName(), menu);
simulation.addCustomerToTruck();
simulation.addCustomerToTruck();
simulation.addCustomerToTruck();
simulation.addCustomerToTruck();
simulation.addCustomerToTruck();








