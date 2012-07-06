exports.createSecondWindow = function(user) {
var ui = require('/ui/ui');

var win = ui.createWindow({  
    title:'About Application',
    navBarHidden:false,
    });
 var winTitle = ui.createNavBar("About Application");
	win.add(winTitle);
	
var back = Ti.UI.createButton({
		title : L("secondScreen_button_back"),
		height : 30,
		width : 45,
		left : 5
	});
	winTitle.add(back);
	win.back=back;
	var welcomeUser = ui.createLabelIntro({
		top : 20,
		left: 20,
		text : L("secondScreen_label_welcomeUser") + user,
		textAlign:'left',
	});
	
   win.add(welcomeUser);
   var aboutApp = ui.createLabelIntro({
		top : 20,
		text : L("secondScreen_label_aboutApp"),
	});
	win.add(aboutApp);
	var points = ui.createLabelIntro({
		top : 20,
		left:20,
		textAlign:'left',
		text : L("secondScreen_label_points"),
	});
	win.add(points);
	
	var blog = ui.createLabelIntro({
		top : 20,
		textAlign:'left',
		text : L("secondScreen_label_blog"),
	});
	win.add(blog);
	
	Ti.include('/controllers/secondWindow.js');
	var controller = createController(win); 

    return win;
};