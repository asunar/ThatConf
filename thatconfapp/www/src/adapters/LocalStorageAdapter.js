var LocalStorageAdapter = function() {

    this.initialize = function() {
        this.populateConfDays();
        this.markSessionsInMySchedule();
    }


    var gridMenuItems = {
        rows: [
            [{
                id: 'lnkSessions',
                url: '#sessions',
                label: 'Sessions',
                icon: 'fa fa-calendar-o'
            }, {
                id: 'lnkSpeakers',
                url: '#speakers',
                label: 'Speakers',
                icon: 'fa fa-user'
            }, {
                id: 'lnkFamilySessions',
                url: '#familysessions',
                label: 'Family Sessions',
                icon: 'fa fa-child'
            }, ],

            [{
                id: 'lnkMySchedule',
                url: '#myschedule',
                label: 'My Schedule',
                icon: 'fa fa-check-square-o'
            }, {
                id: 'lnkMap',
                url: '#map',
                label: 'Map',
                icon: 'fa fa-map-marker'
            }, {
                id: 'lnkCodeOfConduct',
                url: '#policies',
                label: 'Code of Conduct',
                icon: 'fa fa-book'
            }, ]


        ]
    };



    this.getGridMenuItems = function() {
        return gridMenuItems;
    };

    this.getNavigationBarItems = function() {
        return _.flatten(this.getGridMenuItems().rows);
    };

    this.getAcceptedSessionsByTimeSlot = function() {
        return new ThatConfData().getAcceptedSessionsByTimeSlot();
    };

    this.getSpeakers = function() {
        return new ThatConfData().getSpeakers();
    };

    this.populateConfDays = function() {
        var sessionList = [];
        this.getAcceptedSessionsByTimeSlot().forEach(function(d) {
            var sessionToAdd = {};
            sessionToAdd.Day = d.Day;
            sessionToAdd.Sessions = [];
            d.TimeSlots.forEach(function(ts) {
                ts.Sessions.forEach(function(s) {
                    sessionToAdd.Sessions.push({
                        Id: s.Id,
                        Title: s.Title,
                        Category: s.Category,
                        Description: s.Description,
                        ScheduledRoom: s.ScheduledRoom,
                        IsUserFavorite: s.IsUserFavorite,
                        SpeakerNames: s.Speakers.map(function(aSpeaker) {
                            return aSpeaker.FirstName + " " + aSpeaker.LastName;
                        }).join(),
                        Speakers: s.Speakers.map(function(speaker) {
                            return speaker.UserName;
                        }).join(),
                        Time: ts.Time.replace(' AM', 'a').replace(' PM', 'p')
                    })
                })

            })
            sessionList.push(sessionToAdd);
        })

        localStorage.setItem("TCA:ConfDays", JSON.stringify(sessionList));
    };

    this.getSessions = function() {
        var storedConfDays = JSON.parse(localStorage["TCA:ConfDays"]);
        var that = this;
        storedConfDays.forEach(function(d) {
            d.Sessions.forEach(function(s) {
                s.IsInMySchedule = that.isSessionInMySchedule(s.Id);
            });
        });
        return storedConfDays;
    };

    this.markSessionsInMySchedule = function() {
        var sessionIdsInMySchedule = this.getSessionIdsInMySchedule();
        var that = this;
        sessionIdsInMySchedule.forEach(function(sessionId) {
            that.getSessionById(sessionId).IsUserFavorite = true;
        });
    };



    this.getSessionsBySpeaker = function(speakerUserName) {
        return this.getSessions().map(function(d) {
            return {
                Day: d.Day,
                Sessions: d.Sessions.filter(function(s) {
                    return _.contains(s.Speakers, speakerUserName);
                })
            }
        }).filter(function(day) {
            return day.Sessions.length > 0;
        })
    }

    this.getSessionsByCategory = function(category) {
        return this.getSessions().map(function(d) {
            return {
                Day: d.Day,
                Sessions: d.Sessions.filter(function(s) {
                    return s.Category === category;
                })
            }
        }).filter(function(day) {
            return day.Sessions.length > 0;
        })
    };

    this.getSessionById = function(id) {
        return this.getSessions().map(function(d) {
            return {
                Day: d.Day,
                Sessions: d.Sessions.filter(function(s) {
                    return s.Id === id;
                })
            }
        }).filter(function(day) {
            return day.Sessions.length > 0;
        })
    };

    this.getSessionIdsInMySchedule = function() {
        var storedIds = localStorage["TCA:SessionsInMySchedule"];
        if (storedIds) {
            return JSON.parse(storedIds);
        } else {
            return [];
        }
    };

    this.saveSessionsInMySchedule = function(sessionsInMySchedule) {
        localStorage.setItem("TCA:SessionsInMySchedule", JSON.stringify(sessionsInMySchedule));
    };

    this.addToMySchedule = function(id) {
        var sessionsInMySchedule = this.getSessionIdsInMySchedule();
        sessionsInMySchedule.push(id);
        this.saveSessionsInMySchedule(sessionsInMySchedule);
    };

    this.removeFromMySchedule = function(id) {
        var sessionsInMySchedule = this.getSessionIdsInMySchedule();
        sessionsInMySchedule = sessionsInMySchedule.filter(function(savedId) {
            return savedId !== id;
        });
        this.saveSessionsInMySchedule(sessionsInMySchedule);
    }


    this.getSessionsInMySchedule = function() {
        var sessionIdsInMySchedule = this.getSessionIdsInMySchedule();
        return this.getSessions().map(function(d) {
            return {
                Day: d.Day,
                Sessions: d.Sessions.filter(function(s) {
                    return _.contains(sessionIdsInMySchedule, s.Id);
                })
            }
        }).filter(function(day) {
            return day.Sessions.length > 0;
        });
    };

    this.isSessionInMySchedule = function(id) {
        return _.contains(this.getSessionIdsInMySchedule(), id);
    };

    this.initialize();



};
