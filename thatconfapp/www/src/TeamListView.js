var TeamListView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };


    this.render = function() {
	var template = "<table id='container' border='0' class='teamList'  > \
			{{# .}} \
				<tr > \
				<td ><div id='{{ code }}' /></td> \
				<td ><a class='teamNameLink' href='#matchesByTeam?teamCode={{ code }}'>{{ name }}</a></td> \
				<td><i class='fa fa-chevron-right'></i></td> \
				</tr> \
			{{/.}} \
			</table>"; 

	var teamListTemplate = Handlebars.compile(template);
        this.el.innerHTML = teamListTemplate(adapter.getTeams());
        return this.el;
    };

    this.initialize();
}
