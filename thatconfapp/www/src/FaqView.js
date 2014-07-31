var FaqView = function() {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

			
			 var markup = '<div>Faq qoes here</div>';
       this.el.innerHTML = markup;
       return this.el;
    };



    this.initialize();
};
