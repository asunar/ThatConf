var SessionsView = function(sessionsToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var template = " \
			{{#.}} \
				<div style='margin-top:10px;border-bottom: 5px solid #DCDCDC;'>{{ Day }}</div>  \
				{{#Sessions}} \
					{{#.}} \
				<table id='container'  class='sessionsTable' > \
					<tr style='border-bottom: 1px solid #DCDCDC;'> \
					<td style='width:15%'>{{ this.Time }}</td> \
					<td style='width:85%'>{{ this.Title }}</td> \
					</tr> \
				</table> \
					{{/ .}} \
				{{/ Sessions}} \
			{{/ .}} \
			  ";

			var sessionsTemplate = Handlebars.compile(template);
      this.el.innerHTML = sessionsTemplate(sessionsToDisplay);
      return this.el;
    };


    this.initialize();
}
