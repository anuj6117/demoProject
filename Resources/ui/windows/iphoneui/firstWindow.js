exports.createFirstWindow = function() {
	var platform= Ti.Platform.osname;
	var ui = require('/ui/ui');

	var win = ui.createWindow({
		title : L("firstScreen_window_title"),
	});
	var winTitle = ui.createNavBar(L("firstScreen_window_title"));
	win.add(winTitle)

	var view = Ti.UI.createScrollView({
		showVerticalScrollIndicator : true,
		showHorizontalScrollIndicator : false,
		height : Ti.UI.SIZE,
		width : Ti.UI.SIZE,
		disableBounce : false,
		layout : 'vertical',
		top : 0
	});

	var labelIntro = ui.createLabelIntro({
		top : 40,
		text : L("firstScreen_label_labelIntro"),
	});

	// Create a Button.
	var submit = ui.createButton({
		title : L("firstScreen_button_submit"),
		top : 20,
	});

	var name = ui.createLabel({
		top : 20,
		text : L("firstScreen_label_name"),
	});
	var fieldUserName = ui.createTextField({
		top : 3,
	});
	var email = ui.createLabel({
		top : 10,
		text : L("firstScreen_label_email"),
	});
	var fieldEmail = ui.createTextField({
		top : 3,
	});
	var padding = Ti.UI.createView({
		height : 30,
		top : 5
	});

	view.add(labelIntro);
	view.add(name);
	view.add(fieldUserName);
	win.fieldUserName=fieldUserName;
	view.add(email);
	view.add(fieldEmail);
	win.fieldEmail=fieldEmail;
	view.add(submit);
	win.submit=submit;

	view.add(padding);
	win.add(view);
	Ti.include('/controllers/firstWindow.js');
	var controller = createController(win);
	return win;
};
