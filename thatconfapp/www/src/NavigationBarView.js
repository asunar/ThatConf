var NavigationBarView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

				var template = 
			"<table style='width:100%;height:100%; text-align:center'>"
		+		'<tr>'
		+     "<td onclick=" + "window.location='{{ url }}'><a class='navBarItem' href='#home'><i class='fa fa-home fa-w fa-2x'></i></a></td>"
		+		"{{# . }}"	
		+			"<td onclick=" + "window.location='{{ url }}'" + ">"
		+			"<a href={{ url }} class='navBarItem' >"	
		+			"<i class='{{ icon }} fa-w fa-2x'></i>"
		+			"</a>"
		+			"</td>"
		+		"{{/.}}"	
		+		'</tr>'
		+	'</table>';

			 menuTemplate = Handlebars.compile(template)	
       this.el.innerHTML = menuTemplate(adapter.getNavigationBarItems());
       return this.el;
    };



    this.initialize();
};
