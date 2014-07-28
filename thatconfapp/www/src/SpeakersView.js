var SpeakersView = function(speakersToDisplay, adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {
				var template = 
				"<span>"	
		+		"{{# .}}"	
		+		'<div>'
		+			'{{ name  }}'
		+			'<ul>'
		+				'{{#titles }}'
		+					'<li><a href="#showsessionsbytitle?title={{ . }}">{{ . }}</a></li>'
		+				'{{/titles }}'
		+			'</ul>'
		+		'</div>'
		+		"{{/.}}"	
		+		"</span>";	

			var speakersTemplate = Handlebars.compile(template);
      this.el.innerHTML = speakersTemplate(speakersToDisplay);
      return this.el;
    };


    this.initialize();
}
