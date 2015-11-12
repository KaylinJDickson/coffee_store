$(function()
{

//-----------------------------------------------------------------------------

// Create an order (collection of coffees)
// Add a coffee to the order

// Create an Sugar object
// name
// getPrice()
// getName()
    
    //functions and constructors

    // Create an Sugar object
function Sugar(spoons)
{
	this.spoons = spoons;
//one spoon costs R1, thus any number spoons will be multiplied by by R1 
    // getPrice()
	this.getPrice = function()
	{
		return this.spoons * 1;
	};
//getName function determines what the name of the sugar will be, calculated by the number of spoons.
	this.getName = function()
	{
		if (this.spoons == 0)
		{
			return "Bitter";
		}
		else if (this.spoons == 1)
		{
			return "Sweet";
		}
		else
		{
			return "Very Sweet";
		}
	};
}
var zeroSugar = new Sugar(0);
var oneSugar = new Sugar (1);
var twoSugar = new Sugar (2);


// Create a Size object
// name
// getPrice()
// getName()

function Size(name)
{
	this.name = name;
	
	this.getPrice = function()
	{
		if (this.name == "Short")
		{
			return 11;
		}
		else if (this.name == "Tall")
		{
			return 13;
		}
		else if (this.name == "Grande")
		{
			return 15;
		}
		else
		{
			return 0;
		}
	};
	
	this.getName = function()
	{
		return this.name;
	};
}
    
var shortSize = new Size("Short");
var tallSize = new Size ("Tall");
var grandeSize = new Size ("Grande");

// Create an espresso object
// numShots
// getPrice()
// getName()
    
//this. --parent obbject paramiter
// Create an espresso object
function Espresso(shots)
{
	this.shots = shots;
//Number the shots, multiply by R4 because each shot costs R4
	this.getPrice = function()
	{
		return this.shots*4;//result x4
	};		
//getName determines the NAME of the espresso according to Each number of shots	
	this.getName = function()
	{
		if (this.shots == 1)
		{
			return "Single";
		}
		else if (this.shots == 2)
		{
			return "Double";
		}
		else (this.shots == 3)
		{
			return "Triple";
		}
	};	
}
var shotsOne = new Espresso(1);
var shotsTwo = new Espresso(2);
var shotsThree = new Espresso(3);

// name
// getPrice()
// getName()
//this will have two parameters - one for type of milk and one for part
//then make a coffee object with all the names in and one for all the prices

// Create an typeMilk object
function Milk(type, parts)//two parameters
{
	this.type = type;
	this.parts = parts;
// getPrice()
	this.getPrice = function()
	{
		if(this.type == "Full Cream")
		{
			return 3* this.parts;
//will return 3 x how many parts where chosen
		}
		else
		{
			return 2* this.parts;
		}
	};
// getName()
	this.getName = function()
	{
		var name = "";
//variable starts off empty, name will be = to 
		if (this.parts == 0)  
            
//if 0 is chosen this name will show
		{
			name = "Americano";
		}	
		else if (this.parts == 1)
		{
			name = "Latte";
		}
		else if (this.parts == 2)
		{
			name = "Cuppachino";
		}
		if (this.type == "Full Cream")
		{
			return name;
//this will just return the name of each option selected
		}
		else (this.type == "Low Fat")
		{
			return "Skinny" + " " + name;
//meanig that if Low Fat milk option is selected, add the string "Skinny" to the variable name.
		}
	};
}	
/////////////////////////////////////////////////////////////////////////////////////////////
// Create a addOn object
// name
// getPrice()
// getName()
function AddOn(exstra)
{
	this.extra = extra;
	
	this.getPrice = function()
	{
		if (this.extra == "Cream")
		{
			return 3;
		}
		else if (this.extra == "Chocolate Syrup")
		{
			return 4;
		}
		else if (this.extra == "Caramel Syrup")
		{
			return 4;
		}
		else if (this.extra == "Whiskey")
		{
			return 12;
		}
		else
		{
			return 0;
		}
	};

	this.getName = function()
	{
		if (this.extra == "Cream")
		{
			return "Wild";
		}
		else if (this.extra == "Chocolate Syrup")
		{
			return "Choc";
		}
		else if (this.extra == "Caramel Syrup")
		{
			return "Caramel";
		}
		else if (this.extra == "Whiskey")
		{
			return "Irish";
		}
		else
		{
			return "Nothing";
		}
	};
}

// Create a coffee object
// Made up of different components
// Size
// Espresso
// Sugar
// Milk
//exstra
// getPrice() is the combined prices of all components

    // Create a coffee object
function Coffee()
{
	//start with an empty array []; 
	this.ingredients = [];
	
	this.addIngredients = function(sugar, size, espresso, milk, addOn)
	{
		this.ingredients.push(sugar, size, espresso, milk, addOn);
		//.push pushes all the objects into the function
//The push() method adds new items to the end of an array, and returns the new length.
	};

	this.getTotal = function()
	{
		var total = 0;
		//start with nothing 0
			for (var i = 0; i < this.ingredients.length; i++)
			// i is used as the placeholder
			{
				total = total + this.ingredients[i].getPrice()
                
//for loop that calculates the total 
//keeps that total and adds it to the next each time going through the loop.
				
			}
		return total;
	};
// getName() is the combined names of all the components	
	this.collectionName = function()
	{
		var name = "";
			for (var i = 0; i < this.ingredients.length; i++)
                //update vairables
			{
				name = name + " " + this.ingredients[i].getName()
//keeps the name and adds the next name after going through the loop
			}	
		return name;
	};
}	


// Create an order object
function Order ()
{
	 this.coffeeOrder = [];
	// Array of coffees (Start with an empty array)
	 this.addCoffee = function(coffee)
	 // addCoffee() add a coffee to the array
	 {
		 this.coffeeOrder.push(coffee)
	 };
	this.getTotalPrice = function()
	// getTotalPrice() is the combined prices of all coffees in the order
	{
		var total = 0;
			for (var i = 0; i < this.coffeeOrder.length; i++)
			{
				total = total + this.coffeeOrder[i].getTotalPrice()
			}
		return total;
	};		
}



// Switch the current order
    //?
// Create an order collection object
        
        
// Array of orders
// Store the current order
// addCoffee() function which adds the new coffee to the current order ONLY

    //Html done
//-----------------------------------------------------------------------------

// jQuery to handle user input

var order = new Order(); //object

function display()
{
	// Remove the current display
	$("#tablebody tr").remove();
	
	// Build the html display
	var html = '';
	for (var i = 0; i < order.coffeeOrder.length; i++)
	{
		var currentCoffee = order.coffeeOrder[i];
		
		html += "<tr>";
		html += "<td>" + currentCoffee.collectionName() + "</td>";
		html += "<td>" + currentCoffee.getTotal() + "</td>";
		html += "</tr>";
		
	}
	// Append html to dom
	$("#tablebody").append(html);
}

$("#buynow").on("click", function()
{
	var coffee = new Coffee();//coffee objects
	
	var formShots = +$("#espresso").val();
	var espresso = new Espresso(formShots);
	
	var formSugar = +$("#sugar").val();
	var sugar = new Sugar(formSugar);
	
	var formSize = $("#size").val();
	var size = new Size(formSize);
	
	var milkType = $("#type").val();
	var milkParts = +$("#parts").val();
	var milk = new Milk(milkType, milkParts);
	
	var exstra = $("#extra").val();
	var addOn = new AddOn(extra);
	
	coffee.addIngredients(espresso, size, sugar, addOn, milk); //how the order willdisplay
	var price = 
	
	
	order.addCoffee(coffee);
	display();
});





// Add a function to do something when "new order" is clicked
// A new order object to be created
// The new order object to be added to the order collection
// The new order object to become the current working order
// Update screen to reflect the new order

// Add a function to do something when "add coffee" is clicked
// Create a new coffee object and all associated ingredient/component objects
// Add the coffee to the current order
// Update the screen

// Add a function to do something when an order is clicked
// Switch the current order to the order clicked
// Update the screen
    //?

// Update Screen should:
// Show all orders
// Show all coffees in each order (name)
// Show total cost of coffees and orders
    //?
// Highlight/indicate current order
    //?

//-----------------------------------------------------------------------------
});