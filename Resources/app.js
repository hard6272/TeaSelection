var tabGroup = Titanium.UI.createTabGroup();
//
//
(function() {
	var win1 = Titanium.UI.createWindow({  
		title:'Select Color',
		backgroundColor:'#000616'
	});
	var Teas = ['#f5f5dc', '#ffe4b5', '#ffe4c4', '#d2b48c', 
'#c3b091', '#926f5b', '#804000', '#654321', '#3d2b1f'];
allRows = [];
var theColours = Ti.UI.createTableView({});
for (var i=0; i<Teas.length; i++) {
	theRow = Ti.UI.createTableViewRow({
		backgroundColor:Teas[i], 
		height:50,
		TeaColour:Teas[i]
	});
allRows.push(theRow);
}
theColours.setData(allRows);
win1.add(theColours);
//
function getVerdict(colour) {
	var indicator = colour.charAt(1);
	var msg;
	//crude decision on tea strength based on 2nd hex char
	switch (indicator) {
		case 'f': msg = 'Milky'; break;
		case 'd': msg = 'Nice'; break;
		case 'c': msg = 'Perfect'; break;
		case '9': msg = 'A bit strong'; break;
		case '8': msg = 'Builders tea'; break;
		case '6': msg = 'Send it back'; break;
		case '3': msg = 'No milk here'; break;
	}
	return msg;
};
//
function showTeaVerdict(_args) {
	var teaVerdict = Ti.UI.createWindow({
		layout:'vertical'
		});
	teaVerdict.backgroundColor = _args;
	teaVerdict.msg = getVerdict(_args);
	var judgment = Ti.UI.createLabel({
		text:teaVerdict.msg, top:'50%'
	});
	var close = Ti.UI.createButton({
		title:'Choose again', top:'25%'
	});
	close.addEventListener('click', function(e) {
		teaVerdict.close();
		teaVerdict = null;
	});
teaVerdict.add(judgment);
teaVerdict.add(close);
teaVerdict.open();
}
//
theColours.addEventListener('click', function(e) {
	showTeaVerdict(e.source.TeaColour);
	});
//
var tab1 = Titanium.UI.createTab({
    icon:'KS_nav_views.png',
    title:'Tea Selection',
    window:win1
});
//
//
var MapModule = require('ti.map');
//
var win2 = Titanium.UI.createWindow({
    title:'FIND TEA',
    backgroundColor: '#000616'
});
//
var tab2 = Titanium.UI.createTab({
    icon:'KS_nav_ui.png',
    title:'FIND TEA',
    window:win2
});
//
var mapView = MapModule.createView({
	mapType: MapModule.NORMAL_TYPE,
		region: {latitude: 52.4831, longitude: -1.8936,
			latitudeDelta: 6.0, longitudeDelta: 6.0},
		animate:true,
		regionFit:true,
});
//
var birmingham = MapModule.createAnnotation({
	latitude: 52.4831,
	longitude: -1.8936,
	title: 'Birmingham',
	subtitle: 'England, UK',
	pincolor: MapModule.ANNOTATION_RED,
	animate: true
});
//
mapView.addAnnotation(birmingham);
//
win2.add(mapView);
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
//
tabGroup.open();
//
})();
