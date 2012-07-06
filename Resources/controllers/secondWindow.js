function createController(win) {
	var platform = Ti.Platform.osname;
	win.back.addEventListener('click', function() {
		win.close();
	});
};