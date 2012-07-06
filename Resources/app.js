var platform= Ti.Platform.osname;
var win = require('/ui/windows/' + platform + 'ui/firstWindow').createFirstWindow()
win.open();
