var _ = require("/lib/underscore");
var platform= Ti.Platform.osname;
var applyDefaults = function(params, defaults) {
	params = params || {};
	_.defaults(params, defaults);
};

exports.createWindow = function(params) {
	params = params || {};

	var defaults = {
		layout : 'vertical',
		title:'New Window',
    	backgroundImage:'/images/back.png',
   		barColor : '#121212',
	};
	applyDefaults(params, defaults);
	return Ti.UI.createWindow(params);
};

exports.createNavBar = function(title) {

	var titleView = Ti.UI.createView({
		top : 0,
		backgroundImage : '/images/androidTitleBarBlack.png',
		height : '44dp',
		//	width : "100%"
	});
	var labelTitle = Ti.UI.createLabel({
		font : {
			fontSize : '20dp',
			fontWeight : 'bold'
		},
		color : "#fff",
		text : title,
		textAlign : 'center',
		//width : 100
	});
	titleView.add(labelTitle);
	return titleView;
};

exports.createLabelIntro = function(params) {
	params = params || {};

	var defaults = {
		top: '10dp',
	color:'#111',
	text:'Default Text',
	textAlign:'center',
	
	height: Ti.UI.SIZE,
	font : {
			fontWeight:'bold'
			
		}
	};
	if(platform=="ipad")
	{
		defaults.width='70%';
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createLabel(params);

};

exports.createLabel = function(params) {
	params = params || {};

	var defaults = {
	top : '10dp',
		left : '35dp',
		color : '#111',
		text : 'Default Label',
		font : {
			fontSize : '14dp',
			fontWeight : 'bold'

		}
	};
	applyDefaults(params, defaults);
	return Ti.UI.createLabel(params);

};
exports.createTextField = function(params) {
	params = params || {};

	var defaults = {
	height : '37dp',
		top : '10dp',
		width : '80%',
		//	softKeyboardOnFocus : Ti.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, // Android only
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	};
	if(platform=="ipad")
	{
		defaults.width=300;
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createTextField(params);
};
exports.createButton = function(params) {
	params = params || {};

	var defaults = {
	title : 'Default button',
		backgroundImage : '/images/button.png',
		color : '#dbdbdb',
		height : '37dp',
		width : '80%',
		top : '10dp',
	};
	if(platform=="ipad")
	{
		defaults.width=300;
		
	}
	applyDefaults(params, defaults);
	return Ti.UI.createButton(params);
};
