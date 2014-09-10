var NavigationBarView = function(adapter) {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

				var template = 
			"<table style='width:100%;height:100%; text-align:center'>"
		+		'<tr>'
		+     "<td class='navBarCell' data-url='#home' >"
		+			"<i class='fa fa-home fa-w fa-2x'></i></td>"
		+		"{{# . }}"	
		+			"<td  class='navBarCell' data-url='{{ url }}'>"
		+			"<i class='{{ icon }} fa-w fa-2x'></i>"
		+			"</td>"
		+		"{{/.}}"	
		+		'</tr>'
		+	'</table>';

			 menuTemplate = Handlebars.compile(template)	
       this.el.innerHTML = menuTemplate(adapter.getNavigationBarItems());
			 this.wireUpEvents();
       return this.el;
    };

		this.wireUpEvents = function() {
			var navBarCells = this.el.getElementsByClassName('navBarCell');
			var buttonNodes = this.el.getElementsByTagName('i');

			// convert nodelist into an array
			var navButtons = Array.prototype.slice.call(buttonNodes, 0);
			var cells = Array.prototype.slice.call(navBarCells, 0);
			cells.forEach(function(cell){
				cell.onclick = function(e){
					window.location.href = this.dataset.url;
					cells.forEach(function(c){ c.classList.remove('selectedNavBarItem');c.children[0].classList.remove('selectedIcon');  })
					cell.classList.toggle('selectedNavBarItem');
					cell.children[0].classList.toggle('selectedIcon')
				}
			});
		};

    this.initialize();
};
