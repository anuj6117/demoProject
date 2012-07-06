exports.createFirstWindow = function() {
	var platform= Ti.Platform.osname;
	var ui = require('/ui/ui');

	var win = ui.createWindow({
		title : L("firstScreen_window_title"),
	});
	var winTitle = ui.createNavBar(L("firstScreen_window_title"));
	win.add(winTitle)

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
		left:235,
		text : L("firstScreen_label_name"),
	});
	var fieldUserName = ui.createTextField({
		top : 3,
	});
	var email = ui.createLabel({
		top : 10,
		left:235,
		text : L("firstScreen_label_email"),
	});
	var fieldEmail = ui.createTextField({
		top : 3,
	});
	win.add(labelIntro);
	win.add(name);
	win.add(fieldUserName);
	win.fieldUserName=fieldUserName;
	win.add(email);
	win.add(fieldEmail);
	win.fieldEmail=fieldEmail;
	win.add(submit);
	win.submit=submit;

	Ti.include('/controllers/firstWindow.js');
	var controller = createController(win);
	return win;
};