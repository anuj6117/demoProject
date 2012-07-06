exports.createSecondWindow = function(user) {
	var ui = require('/ui/ui');

	var win = ui.createWindow({
		title : L("secondScreen_window_title"),
		navBarHidden : false,
	});
	var winTitle = ui.createNavBar(L("secondScreen_window_title"));
	win.add(winTitle);

	var back = Ti.UI.createButton({
		title : L("secondScreen_button_back"),
		height : '30dp',
		width : '45dp',
		left : '5dp'
	});
	win.back=back;

	winTitle.add(back);

	var welcomeUser = ui.createLabelIntro({
		top : 20,
		left : 20,
		text : L("secondScreen_label_welcomeUser") + user,
		textAlign : 'left',
	});

	win.add(welcomeUser);
	var aboutApp = ui.createLabelIntro({
		top : 20,
		width : '80%',
		text : L("secondScreen_label_aboutApp"),
	});
	win.add(aboutApp);
	var points = ui.createLabelIntro({
		top : 20,
		left : 80,
		textAlign : 'left',
		text : L("secondScreen_label_points"),
	});
	win.add(points);

	var blog = ui.createLabelIntro({
		top : 20,
		textAlign : 'left',
		text : L("secondScreen_label_blog"),
	});
	win.add(blog);
	Ti.include('/controllers/secondWindow.js');
	var controller = createController(win);
	return win;
}; 