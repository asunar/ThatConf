(function() {
		var adapter = new LocalStorageAdapter();

    /* --------------------------------- Event Registration -------------------------------- */
    window.addEventListener('hashchange', route);

    /* ---------------------------------- Local Functions ---------------------------------- */

    function replaceChildren(parentElement, children) {
	parentElement.innerHTML = '';
	parentElement.appendChild(children);
    }

    function route() {
        var hash = window.location.hash;
	var content = $('#content');

	var showHome = function(){
		replaceChildren(content, new HomeView(adapter).render());
	};

	var showSessions = function(){
		var sessionsToDisplay = adapter.getSessions();
		replaceChildren(content, new SessionsView(sessionsToDisplay).render());
	};

	var showSpeakers = function(){
		var speakersToDisplay = adapter.getSpeakers();
		replaceChildren(content, new SpeakersView(speakersToDisplay).render());

	};	if(!hash){
		showHome();
		return;
	}

	var showSessionsBySpeakers = function(){
		var speakers = getUrlVars().speakers;
		var sessionsToDisplay = adapter.getSessionsBySpeaker(speakers);
		replaceChildren(content, new SessionsView(sessionsToDisplay).render());

	};	
	
	if(!hash){
		showHome();
		return;
	}	

	var showSessionsByTitle = function() {
		var title = getUrlVars().title;
		var sessionsToDisplay = adapter.getSessionsByTitle(title);
		replaceChildren(content, new SessionsView(sessionsToDisplay).render());
	};	

	var showSessionsByDay = function() {
		var day = getUrlVars().day;
		var sessionsToDisplay = adapter.getSessionsByDay(day);
		replaceChildren(content, new SessionsView(sessionsToDisplay).render());
	};

	var showSessionsByScheduled = function() {
		var scheduled = getUrlVars().scheduled;
		var sessionsToDisplay = adapter.getSessionsByScheduled(scheduled);
		replaceChildren(content, new SessionsView(sessionsToDisplay).render());
	};

	var hashWithoutQueryString = hash;
	if(hash.lastIndexOf('?') !== -1) {
		hashWithoutQueryString = hash.substring(0, hash.lastIndexOf('?'))
	}	
	
	var routeTable = {
	'#home': showHome,
	'#sessions': showSessions,
	'#speakers': showSpeakers,
	'#showsessionsbytitle': showSessionsByTitle,
	'#showsessionsbyday': showSessionsByDay,
	'#showsessionsbyscheduled': showSessionsByScheduled,
	'#showsessionsbyspeaker': showSessionsBySpeakers,
	};

	routeTable[hashWithoutQueryString]();
    }

    route();
}());
