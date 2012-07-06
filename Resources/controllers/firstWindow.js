function createController(win) {
	var platform= Ti.Platform.osname;
// Listen for click events.
	win.submit.addEventListener('click', function() {
		if(win.fieldUserName.value == "" || win.fieldEmail.value == "") {
			alert('please fill both fields');

		} else {
			var secondWindow = require('/ui/windows/' + platform + 'ui/secondWindow').createSecondWindow(win.fieldUserName.value);
			secondWindow.open();
		}
	});
};