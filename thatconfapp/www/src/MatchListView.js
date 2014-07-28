var MatchListView = function(matchesToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var template = "{{# .}} \
			<div class='matchListTableContainer'>{{ date }} </div> \
			<table id='container' class='matchListTable' > \
			{{#matches}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td>{{ group }}</td> \
				<td style='width:5%;'><div id='{{ team1Code }}' /></td> \
				<td style='width:40%'>{{ team1Name }}</td> \
				<td style='width:5%;text-align:center'>{{ time }}</td> \
				<td style='width:40%;text-align:right'>{{ team2Name }}</td> \
				<td style='width:5%'><div id='{{ team2Code }}' /></td> \
				<td style='width:5%'><i data-match='{{../date}} 2014|{{matchId}}' class='fa fa-{{#if isInMySchedule }}minus{{else}}plus{{/if}} square'></td> \
				</tr> \
			{{/matches}} \
			</table> \
			{{ else }}	\
			  <p class='noMatch'>No match on this date</p> \
			{{/ .}} ";

	var matchListTemplate = Handlebars.compile(template);
	var matchDaysToDisplay = [];

	matchesToDisplay.forEach(function(md) {
		var matches = md.matches.map(function(m){
			var d = new Date(md.date);
			d.setUTCHours(m.time.split(':')[0]);
			return { "group" : m.group, "matchId" : m.matchId, "team1Code": m.team1Code, "team2Code" : m.team2Code, "team1Name": m.team1Name, "team2Name" : m.team2Name, "time" : d.getHours() + ":00", "isInMySchedule" : adapter.isMatchInMySchedule(m.matchId)  };
			
		});
		matchDaysToDisplay.push({"date": formatDate(new Date(md.date)),"matches": matches});
	});
        this.el.innerHTML = matchListTemplate(matchDaysToDisplay);
	this.wireUpEvents(adapter);
        return this.el;
    };

    this.wireUpEvents = function(adapter) {
	var buttons = this.el.getElementsByTagName('i');
	// convert nodelist into an array
	var addButtons = Array.prototype.slice.call(buttons, 0);

	addButtons.forEach(function(button){
		button.onclick = function(e) {
		var matchData = this.dataset.match;
		var matchDataInfo = matchData.split("|");
		matchData = { "date" : new Date(matchDataInfo[0]), "matches" :[{"matchId": matchDataInfo[1] } ]};
		var isAdding = this.classList.contains("fa-plus");
		
		if(isAdding) {
			adapter.addToMySchedule(matchDataInfo[1]);
			this.classList.remove("fa-plus");
			this.classList.add("fa-minus");
		} else {
			adapter.removeFromMySchedule(matchDataInfo[1]);
			this.classList.remove("fa-minus");
			this.classList.add("fa-plus");		
		}
		};

	});
    }
    this.initialize();
}
