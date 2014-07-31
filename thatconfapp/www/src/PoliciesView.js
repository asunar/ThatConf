var PoliciesView = function() {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

			
			 var markup = '<div>Policies go here</div>';
       this.el.innerHTML = markup;
       return this.el;
    };



    this.initialize();
};
