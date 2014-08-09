var HomeView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

				var template = 
			"<table border='1' class='gridMenuContainer'>"
		+		"{{#each rows}}"	
		+		'<tr>'
		+			"{{#.}}"	
		+			"<td style='width: 33%' class='gridMenuItem'>"
		+			"<a href={{ url }} class='navBarItem' >"	
		+			"<i class='{{ icon }} fa-5x'></i><div>{{ label }}</div>"
		+			"</a>"
		+			"</td>"
		+			"{{/.}}"
		+		'</tr>'
		+		"{{/each}}"	
		+	'</table>';

			 menuTemplate = Handlebars.compile(template)	
       this.el.innerHTML = menuTemplate(adapter.getGridMenuItems());
       return this.el;
    };



    this.initialize();
};
