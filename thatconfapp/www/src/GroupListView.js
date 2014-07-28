var GroupListView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };


    this.render = function() {
	var template = "{{# .}} \
			<div><a class='groupLink' href='#matchesByGroup?group={{ name}}'>Group {{ name }}</a></div> \
			<table id='container' class='groupListTable' > \
			{{#teams}} \
				<tr> \
				<td style='width:2%;text-align:center'><div id='{{ code }}' /></td> \
				<td ><a class='teamNameLink' href='#matchesByTeam?teamCode={{ code }}'>{{ name }}</a></td> \
				<td><i class='fa fa-chevron-right'></i></td> \
				</tr> \
			{{/teams}} \
			</table> \
			{{/ .}} ";

	var groupListTemplate = Handlebars.compile(template);
        this.el.innerHTML = groupListTemplate(adapter.getGroups());
	this.wireUpEvents();
        return this.el;
    };

    this.wireUpEvents = function() {
	var buttons = this.el.getElementsByTagName('button');
	// convert nodelist into an array
    	var matchesButtons = Array.prototype.slice.call(buttons, 0);

	var that = this;
	matchesButtons.forEach(function(button){
		var code = button.id;
		button.onclick = function(e) {
		var matchDaysByGroup = adapter.getMatchDaysByGroup(code);
		var matchListView = new MatchListView(matchDaysByGroup);
		that.el.innerHTML = '';
		that.el.innerHTML = matchListView.render().innerHTML;
		};
	});
    }

    this.initialize();
}
