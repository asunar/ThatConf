var MapView = function() {

    this.initialize = function() {
        this.el = document.createElement("div");
    };

    this.render = function() {

	var markup = '<div id="image" style="height:90%; overflow: auto" ></div>';
       this.el.innerHTML = markup;
       return this.el;
    };



    this.initialize();
};
