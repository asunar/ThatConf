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
					<td style='width:80%'><a href='#sessiondetails?id={{ Id }}'>{{ this.Title }}</a></td> \
					<td style='width:5%'><i data-id={{ Id }} class='fa fa-{{#if this.IsInMySchedule }}minus{{else}}plus{{/if}} square'></td> \
					</tr> \
				</table> \
					{{/ .}} \
				{{/ Sessions}} \
			{{/ .}} \
			  ";

			var sessionsTemplate = Handlebars.compile(template);
      this.el.innerHTML = sessionsTemplate(sessionsToDisplay);
			this.wireUpEvents(adapter);
      return this.el;
    };


		this.wireUpEvents = function(adapter) {
			var buttonNodes = this.el.getElementsByTagName('i');
			// convert nodelist into an array
			var addButtons = Array.prototype.slice.call(buttonNodes, 0);
			addButtons.forEach(function(button){
				button.onclick = function(e){
					var id = parseInt(this.dataset.id, 10);
					var isAdding = this.classList.contains("fa-plus");
					if(isAdding){
						adapter.addToMySchedule(id);
						this.classList.remove("fa-plus");	
						this.classList.add("fa-minus");	
					} else {
						adapter.removeFromMySchedule(id);
						this.classList.remove("fa-minus");	
						this.classList.add("fa-plus");	
					}
				}
			});
		};

    this.initialize();
}
