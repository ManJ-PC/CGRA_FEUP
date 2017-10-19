/**
 * MyInterface
 * @constructor
 */
 
 
function MyInterface() {
	//call CGFinterface constructor 
	CGFinterface.call(this);
};

MyInterface.prototype = Object.create(CGFinterface.prototype);
MyInterface.prototype.constructor = MyInterface;

/**
 * init
 * @param {CGFapplication} application
 */
MyInterface.prototype.init = function(application) {
	// call CGFinterface init
	CGFinterface.prototype.init.call(this, application);
	
	// init GUI. For more information on the methods, check:
	//  http://workshop.chromeexperiments.com/examples/gui
	
	this.gui = new dat.GUI();

	// add a button:
	// the first parameter is the object that is being controlled (in this case the scene)
	// the identifier 'doSomething' must be a function declared as part of that object (i.e. a member of the scene class)
	// e.g. LightingScene.prototype.doSomething = function () { console.log("Doing something..."); }; 

	this.gui.add(this.scene, 'doSomething');


	// add a group of controls (and open/expand by defult)
	
	var group=this.gui.addFolder("Options");
	group.open();

	// add two check boxes to the group. The identifiers must be members variables of the scene initialized in scene.init as boolean
	// e.g. this.option1=true; this.option2=false;
	
	group.add(this.scene, 'option1');
	group.add(this.scene, 'option2');
	
	// add a slider
	// must be a numeric variable of the scene, initialized in scene.init e.g.
	// this.speed=3;
	// min and max values can be specified as parameters
	
	this.gui.add(this.scene, 'speed', 0.1, 2);

	this.gui.add(this.scene, 'texture', [ 'molten', 'metal', 'military' ] );


	return true;
};

MyInterface.prototype.processKeyDown = function(event) {
	// call CGFinterface default code (omit if you want to override)
	//CGFinterface.prototype.processKeyboard.call(this,event);
	CGFinterface.prototype.processKeyDown.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	var Pointer = null;
	var CAPCHAT = 32;
	//console.log(event.type);
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{

		
		case (65+CAPCHAT):
		case (65):	// only works for capital 'A', as it is
			this.scene.keyA = true;
			break;
		case(68+CAPCHAT):	
		case (68):	// only works for capital 'D', as it is
			this.scene.keyD = true;
			break;
		case(87+CAPCHAT):
		case (87):	// only works for capital 'W', as it is
			this.scene.keyW = true;
			break;
		case (83+CAPCHAT):	
		case (83):  // only works for capital 'S', ad it is
			this.scene.keyS = true;
			break;
		case (73+CAPCHAT):	
		case (73):  // only works for capital 'I', ad it is
			this.scene.keyI = true;
			break;
		case (74+CAPCHAT):	
		case (74):  // only works for capital 'J', ad it is
			this.scene.keyJ = true;
			break;
		case (80+CAPCHAT):
		case (80):
			this.scene.keyL = true;
			break;
		case (76+CAPCHAT):
		case (76):
			this.scene.keyP = true;
			break;
	};
	
	
};

/**
 * processKeyboard
 * @param event {Event}
 */
 /*
MyInterface.prototype.processKeyboard = function(event) {
	// call CGFinterface default code (omit if you want to override)
	CGFinterface.prototype.processKeyboard.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	var Pointer = null;
	var CAPCHAT = 32;
	//console.log(event.type);
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{

		
		case (65+CAPCHAT):
		case (65):	// only works for capital 'A', as it is
		console.log("tt" + event.type);
		console.log(event.type === 'keydown');
			if(event.type === 'keydown') this.scene.keyA = true;
			else if(event.type === 'keyup') this.scene.keyA = false;
			break;
		case(68+CAPCHAT):	
		case (68):	// only works for capital 'D', as it is
			if(event.type === 'keydown') this.scene.keyD = true;
			else if(event.type === 'keyup') this.scene.keyD = false;
			break;
		case(87+CAPCHAT):
		case (87):	// only works for capital 'W', as it is
			if(event.type === 'keydown') this.scene.keyW = true;
			else if(event.type === 'keyup') this.scene.keyW = false;
			break;
		case (83+CAPCHAT):	
		case (83):  // only works for capital 'S', ad it is
			if(event.type === 'keydown') this.scene.keyS = true;
			else if(event.type === 'keyup') this.scene.keyS = false;
			break;
		case (73+CAPCHAT):	
		case (73):  // only works for capital 'I', ad it is
			if(event.type === 'keydown') this.scene.keyI = true;
			else if(event.type === 'keyup') this.scene.keyI = false;
			break;
		case (74+CAPCHAT):	
		case (74):  // only works for capital 'J', ad it is
			if(event.type === 'keydown') this.scene.keyJ = true;
			else if(event.type === 'keyup') this.scene.keyJ = false;;
			break;
		
	};
};*/

MyInterface.prototype.processKeyUp = function(event) {
	// call CGFinterface default code (omit if you want to override)
	//CGFinterface.prototype.processKeyboard.call(this,event);
	CGFinterface.prototype.processKeyUp.call(this,event);
	
	// Check key codes e.g. here: http://www.asciitable.com/
	// or use String.fromCharCode(event.keyCode) to compare chars
	var Pointer = null;
	var CAPCHAT = 32;
	//console.log(event.type);
	// for better cross-browser support, you may also check suggestions on using event.which in http://www.w3schools.com/jsref/event_key_keycode.asp
	switch (event.keyCode)
	{

		
		case (65+CAPCHAT):
		case (65):	// only works for capital 'A', as it is
			this.scene.keyA = false;
			break;
		case(68+CAPCHAT):	
		case (68):	// only works for capital 'D', as it is
			this.scene.keyD = false;
			break;
		case(87+CAPCHAT):
		case (87):	// only works for capital 'W', as it is
			this.scene.keyW = false;
			break;
		case (83+CAPCHAT):	
		case (83):  // only works for capital 'S', ad it is
			this.scene.keyS = false;
			break;
		case (73+CAPCHAT):	
		case (73):  // only works for capital 'I', ad it is
			this.scene.keyI = false;
			break;
		case (74+CAPCHAT):	
		case (74):  // only works for capital 'J', ad it is
			this.scene.keyJ = false;
			break;
		case (80+CAPCHAT):
		case (80):
			this.scene.keyL = false;
			break;
		case (76+CAPCHAT):
		case (76):
			this.scene.keyP = false;
			break;
		
	};
	
	
};