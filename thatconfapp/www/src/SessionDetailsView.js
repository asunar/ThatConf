var SessionDetailsView = function(sessionsToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
	var template = " \
			{{#.}} \
				<div>{{ Day }}</div>  \
				{{#Sessions}} \
					{{#.}} \
					<div>{{Time}}</div> \
					<div>{{SpeakerNames}}</div> \
					<div>{{Description}}</div> \
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
