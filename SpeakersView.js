var SessionsView = function(sessionsToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var template = " \
			<table id='container' class='sessionsTable' > \
			{{#.}} \
				<tr style='border-bottom: 1px solid #DCDCDC;'> \
				<td>{{ day }}</td> \
				<td>{{ scheduled }}</td> \
				<td>{{ name }}</td> \
				<td>{{ title }}</td> \
				</tr> \
			{{/ .}} \
			</table> \
			  ";

			var sessionsTemplate = Handlebars.compile(template);
      this.el.innerHTML = sessionsTemplate(sessionsToDisplay);
      return this.el;
    };


    this.initialize();
}
