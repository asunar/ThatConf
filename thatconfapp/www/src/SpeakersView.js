var SpeakersView = function(speakersToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
				var template = 
				"<ul>"	
		+		"{{# .}}"	
		+		'<li>'
		+			'<a href="#showsessionsbyspeaker?speakers={{ UserName }}">{{ FirstName }} {{ LastName }}</a></div>'
		+		'</li>'
		+		"{{/.}}"	
		+		"</ul>";	

			var speakersTemplate = Handlebars.compile(template);
      this.el.innerHTML = speakersTemplate(speakersToDisplay);
      return this.el;
    };


    this.initialize();
}
