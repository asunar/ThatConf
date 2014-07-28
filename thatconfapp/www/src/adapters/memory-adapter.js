var MemoryAdapter = function() {

    this.initialize = function() {

    };

    var gridMenuItems =
    { rows:
	[
		[
			{ id:'lnkToday', url:'#today', label: 'Today', icon: 'fa fa-clock-o fa-5x'},
			{ id:'lnkTomorrow', url:'#tomorrow', label: 'Tomorrow', icon: 'fa fa-calendar-o fa-5x'},
			{ id:'lnkSchedule', url:'#schedule', label: 'Schedule', icon: 'fa fa-calendar fa-5x'}
		],

		[
			{ id:'lnkTeams', url:'#teams', label: 'Teams', icon: 'fa fa-users fa-5x'},
			{ id:'lnkGroups', url:'#groups', label: 'Groups', icon: 'fa fa-list-alt fa-5x'},
			{ id:'lnkMySchedule', url:'#mySchedule', label: 'My Schedule', icon: 'fa fa-check-square-o fa-5x'}
		]	


	]
    };



this.getGridMenuItems = function() { return gridMenuItems; };


    var schedule =
  
{
  "matchDays": [
    {
      "date": "2014-06-12T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186456",
          "group": "A",
          "team1Name": "Brazil",
          "team1Code": "bra",
          "team2Name": "Croatia",
          "team2Code": "cro",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-13T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186492",
          "group": "A",
          "team1Name": "Mexico",
          "team1Code": "mex",
          "team2Name": "Cameroon",
          "team2Code": "cmr",
          "time": "11:00"
        },
        {
          "matchId": "300186510",
          "group": "B",
          "team1Name": "Spain",
          "team1Code": "esp",
          "team2Name": "Netherlands",
          "team2Code": "ned",
          "time": "14:00"
        },
        {
          "matchId": "300186473",
          "group": "B",
          "team1Name": "Chile",
          "team1Code": "chi",
          "team2Name": "Australia",
          "team2Code": "aus",
          "time": "16:00"
        }
      ]
    },
    {
      "date": "2014-06-14T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186471",
          "group": "C",
          "team1Name": "Colombia",
          "team1Code": "col",
          "team2Name": "Greece",
          "team2Code": "gre",
          "time": "11:00"
        },
        {
          "matchId": "300186489",
          "group": "D",
          "team1Name": "Uruguay",
          "team1Code": "uru",
          "team2Name": "Costa Rica",
          "team2Code": "crc",
          "time": "14:00"
        },
        {
          "matchId": "300186513",
          "group": "D",
          "team1Name": "England",
          "team1Code": "eng",
          "team2Name": "Italy",
          "team2Code": "ita",
          "time": "16:00"
        },
        {
          "matchId": "300186507",
          "group": "C",
          "team1Name": "Côte d'Ivoire",
          "team1Code": "civ",
          "team2Name": "Japan",
          "team2Code": "jpn",
          "time": "20:00"
        }
      ]
    },
    {
      "date": "2014-06-15T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186494",
          "group": "E",
          "team1Name": "Switzerland",
          "team1Code": "sui",
          "team2Name": "Ecuador",
          "team2Code": "ecu",
          "time": "11:00"
        },
        {
          "matchId": "300186496",
          "group": "E",
          "team1Name": "France",
          "team1Code": "fra",
          "team2Name": "Honduras",
          "team2Code": "hon",
          "time": "14:00"
        },
        {
          "matchId": "300186477",
          "group": "F",
          "team1Name": "Argentina",
          "team1Code": "arg",
          "team2Name": "Bosnia and Herzegovina",
          "team2Code": "bih",
          "time": "17:00"
        }
      ]
    },
    {
      "date": "2014-06-16T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186475",
          "group": "G",
          "team1Name": "Germany",
          "team1Code": "ger",
          "team2Name": "Portugal",
          "team2Code": "por",
          "time": "11:00"
        },
        {
          "matchId": "300186505",
          "group": "F",
          "team1Name": "Iran",
          "team1Code": "irn",
          "team2Name": "Nigeria",
          "team2Code": "nga",
          "time": "14:00"
        },
        {
          "matchId": "300186512",
          "group": "G",
          "team1Name": "Ghana",
          "team1Code": "gha",
          "team2Name": "USA",
          "team2Code": "usa",
          "time": "17:00"
        }
      ]
    },
    {
      "date": "2014-06-17T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186479",
          "group": "H",
          "team1Name": "Belgium",
          "team1Code": "bel",
          "team2Name": "Algeria",
          "team2Code": "alg",
          "time": "11:00"
        },
        {
          "matchId": "300186509",
          "group": "A",
          "team1Name": "Brazil",
          "team1Code": "bra",
          "team2Name": "Mexico",
          "team2Code": "mex",
          "time": "14:00"
        },
        {
          "matchId": "300186499",
          "group": "H",
          "team1Name": "Russia",
          "team1Code": "rus",
          "team2Name": "Korea Republic",
          "team2Code": "kor",
          "time": "16:00"
        }
      ]
    },
    {
      "date": "2014-06-18T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186478",
          "group": "B",
          "team1Name": "Australia",
          "team1Code": "aus",
          "team2Name": "Netherlands",
          "team2Code": "ned",
          "time": "11:00"
        },
        {
          "matchId": "300186498",
          "group": "B",
          "team1Name": "Spain",
          "team1Code": "esp",
          "team2Name": "Chile",
          "team2Code": "chi",
          "time": "14:00"
        },
        {
          "matchId": "300186453",
          "group": "A",
          "team1Name": "Cameroon",
          "team1Code": "cmr",
          "team2Name": "Croatia",
          "team2Code": "cro",
          "time": "16:00"
        }
      ]
    },
    {
      "date": "2014-06-19T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186468",
          "group": "C",
          "team1Name": "Colombia",
          "team1Code": "col",
          "team2Name": "Côte d'Ivoire",
          "team2Code": "civ",
          "time": "11:00"
        },
        {
          "matchId": "300186486",
          "group": "D",
          "team1Name": "Uruguay",
          "team1Code": "uru",
          "team2Name": "England",
          "team2Code": "eng",
          "time": "14:00"
        },
        {
          "matchId": "300186454",
          "group": "C",
          "team1Name": "Japan",
          "team1Code": "jpn",
          "team2Name": "Greece",
          "team2Code": "gre",
          "time": "17:00"
        }
      ]
    },
    {
      "date": "2014-06-20T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186500",
          "group": "D",
          "team1Name": "Italy",
          "team1Code": "ita",
          "team2Name": "Costa Rica",
          "team2Code": "crc",
          "time": "11:00"
        },
        {
          "matchId": "300186514",
          "group": "E",
          "team1Name": "Switzerland",
          "team1Code": "sui",
          "team2Name": "France",
          "team2Code": "fra",
          "time": "14:00"
        },
        {
          "matchId": "300186463",
          "group": "E",
          "team1Name": "Honduras",
          "team1Code": "hon",
          "team2Name": "Ecuador",
          "team2Code": "ecu",
          "time": "17:00"
        }
      ]
    },
    {
      "date": "2014-06-21T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186466",
          "group": "F",
          "team1Name": "Argentina",
          "team1Code": "arg",
          "team2Name": "Iran",
          "team2Code": "irn",
          "time": "11:00"
        },
        {
          "matchId": "300186493",
          "group": "G",
          "team1Name": "Germany",
          "team1Code": "ger",
          "team2Name": "Ghana",
          "team2Code": "gha",
          "time": "14:00"
        },
        {
          "matchId": "300186511",
          "group": "F",
          "team1Name": "Nigeria",
          "team1Code": "nga",
          "team2Name": "Bosnia and Herzegovina",
          "team2Code": "bih",
          "time": "16:00"
        }
      ]
    },
    {
      "date": "2014-06-22T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186481",
          "group": "H",
          "team1Name": "Belgium",
          "team1Code": "bel",
          "team2Name": "Russia",
          "team2Code": "rus",
          "time": "11:00"
        },
        {
          "matchId": "300186495",
          "group": "H",
          "team1Name": "Korea Republic",
          "team1Code": "kor",
          "team2Name": "Algeria",
          "team2Code": "alg",
          "time": "14:00"
        },
        {
          "matchId": "300186483",
          "group": "G",
          "team1Name": "USA",
          "team1Code": "usa",
          "team2Name": "Portugal",
          "team2Code": "por",
          "time": "16:00"
        }
      ]
    },
    {
      "date": "2014-06-23T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186470",
          "group": "B",
          "team1Name": "Netherlands",
          "team1Code": "ned",
          "team2Name": "Chile",
          "team2Code": "chi",
          "time": "11:00"
        },
        {
          "matchId": "300186467",
          "group": "B",
          "team1Name": "Australia",
          "team1Code": "aus",
          "team2Name": "Spain",
          "team2Code": "esp",
          "time": "11:00"
        },
        {
          "matchId": "300186472",
          "group": "A",
          "team1Name": "Cameroon",
          "team1Code": "cmr",
          "team2Name": "Brazil",
          "team2Code": "bra",
          "time": "15:00"
        },
        {
          "matchId": "300186452",
          "group": "A",
          "team1Name": "Croatia",
          "team1Code": "cro",
          "team2Name": "Mexico",
          "team2Code": "mex",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-24T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186465",
          "group": "D",
          "team1Name": "Italy",
          "team1Code": "ita",
          "team2Name": "Uruguay",
          "team2Code": "uru",
          "time": "11:00"
        },
        {
          "matchId": "300186484",
          "group": "D",
          "team1Name": "Costa Rica",
          "team1Code": "crc",
          "team2Name": "England",
          "team2Code": "eng",
          "time": "11:00"
        },
        {
          "matchId": "300186457",
          "group": "C",
          "team1Name": "Japan",
          "team1Code": "jpn",
          "team2Name": "Colombia",
          "team2Code": "col",
          "time": "14:00"
        },
        {
          "matchId": "300186455",
          "group": "C",
          "team1Name": "Greece",
          "team1Code": "gre",
          "team2Name": "Côte d'Ivoire",
          "team2Code": "civ",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-25T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186458",
          "group": "F",
          "team1Name": "Nigeria",
          "team1Code": "nga",
          "team2Name": "Argentina",
          "team2Code": "arg",
          "time": "11:00"
        },
        {
          "matchId": "300186464",
          "group": "F",
          "team1Name": "Bosnia and Herzegovina",
          "team1Code": "bih",
          "team2Name": "Iran",
          "team2Code": "irn",
          "time": "11:00"
        },
        {
          "matchId": "300186482",
          "group": "E",
          "team1Name": "Honduras",
          "team1Code": "hon",
          "team2Name": "Switzerland",
          "team2Code": "sui",
          "time": "14:00"
        },
        {
          "matchId": "300186515",
          "group": "E",
          "team1Name": "Ecuador",
          "team1Code": "ecu",
          "team2Name": "France",
          "team2Code": "fra",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-26T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186476",
          "group": "G",
          "team1Name": "Portugal",
          "team1Code": "por",
          "team2Name": "Ghana",
          "team2Code": "gha",
          "time": "11:00"
        },
        {
          "matchId": "300186469",
          "group": "G",
          "team1Name": "USA",
          "team1Code": "usa",
          "team2Name": "Germany",
          "team2Code": "ger",
          "time": "11:00"
        },
        {
          "matchId": "300186480",
          "group": "H",
          "team1Name": "Korea Republic",
          "team1Code": "kor",
          "team2Name": "Belgium",
          "team2Code": "bel",
          "time": "15:00"
        },
        {
          "matchId": "300186506",
          "group": "H",
          "team1Name": "Algeria",
          "team1Code": "alg",
          "team2Name": "Russia",
          "team2Code": "rus",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-28T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186487",
          "group": "Round  of 16",
          "team1Name": "[1A]",
          "team1Code": "[1a]",
          "team2Name": "[2B]",
          "team2Code": "[2b]",
          "time": "11:00"
        },
        {
          "matchId": "300186491",
          "group": "Round of 16",
          "team1Name": "[1C]",
          "team1Code": "[1c]",
          "team2Name": "[2D]",
          "team2Code": "[2d]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-29T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186508",
          "group": "Round of 16",
          "team1Name": "[1B]",
          "team1Code": "[1b]",
          "team2Name": "[2A]",
          "team2Code": "[2a]",
          "time": "11:00"
        },
        {
          "matchId": "300186459",
          "group": "Round of 16",
          "team1Name": "[1D]",
          "team1Code": "[1d]",
          "team2Name": "[2C]",
          "team2Code": "[2c]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-06-30T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186462",
          "group": "Round of 16",
          "team1Name": "[1E]",
          "team1Code": "[1e]",
          "team2Name": "[2F]",
          "team2Code": "[2f]",
          "time": "11:00"
        },
        {
          "matchId": "300186460",
          "group": "Round of 16",
          "team1Name": "[1G]",
          "team1Code": "[1g]",
          "team2Name": "[2H]",
          "team2Code": "[2h]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-01T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186503",
          "group": "Round of 16",
          "team1Name": "[1F]",
          "team1Code": "[1f]",
          "team2Name": "[2E]",
          "team2Code": "[2e]",
          "time": "11:00"
        },
        {
          "matchId": "300186497",
          "group": "Round of 16",
          "team1Name": "[1H]",
          "team1Code": "[1h]",
          "team2Name": "[2G]",
          "team2Code": "[2g]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-04T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186485",
          "group": "Quarter-finals",
          "team1Name": "[W53]",
          "team1Code": "[w53]",
          "team2Name": "[W54]",
          "team2Code": "[w54]",
          "time": "11:00"
        },
        {
          "matchId": "300186461",
          "group": "Quarter-finals",
          "team1Name": "[W49]",
          "team1Code": "[w49]",
          "team2Name": "[W50]",
          "team2Code": "[w50]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-05T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186504",
          "group": "Quarter-finals",
          "team1Name": "[W55]",
          "team1Code": "[w55]",
          "team2Name": "[W56]",
          "team2Code": "[w56]",
          "time": "11:00"
        },
        {
          "matchId": "300186488",
          "group": "Quarter-finals",
          "team1Name": "[W51]",
          "team1Code": "[w51]",
          "team2Name": "[W52]",
          "team2Code": "[w52]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-08T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186474",
          "group": "Semi-finals",
          "team1Name": "[W57]",
          "team1Code": "[w57]",
          "team2Name": "[W58]",
          "team2Code": "[w58]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-09T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186490",
          "group": "Semi-finals",
          "team1Name": "[W59]",
          "team1Code": "[w59]",
          "team2Name": "[W60]",
          "team2Code": "[w60]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-12T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186502",
          "group": "Play-off for third place",
          "team1Name": "[L61]",
          "team1Code": "[l61]",
          "team2Name": "[L62]",
          "team2Code": "[l62]",
          "time": "15:00"
        }
      ]
    },
    {
      "date": "2014-07-13T00:00:00-05:00",
      "matches": [
        {
          "matchId": "300186501",
          "group": "Final",
          "team1Name": "[W61]",
          "team1Code": "[w61]",
          "team2Name": "[W62]",
          "team2Code": "[w62]",
          "time": "14:00"
        }
      ]
    }
  ]
}
  
;

    
this.getAllMatches = function() { return schedule.matchDays; };
this.getMatchesByDate = function(date) { 
		return schedule.matchDays.filter(function(matchDay) {
							return new Date(matchDay.date).getTime() === date.getTime(); 
						});
		};



this.addUnique = function (teams, code, name){
	var count = (teams.filter(function(existingTeam) { return existingTeam.code === code })).length;
	
	if(count === 0) {
		teams.push({code: code, name: name});
	}
};
 

this.getTeams = function() { 
	/*
	var teams = [];
	firstRound = schedule.matchDays.filter(function(md){ 
						return (new Date(md.date)).getTime() <= (new Date(2014, 5, 17)).getTime(); 
						});
	var addIfUnique = this.addUnique;
	firstRound.forEach(function (frm){ 
		frm.matches.forEach(function(m){ 
					addIfUnique(teams, m.team1Code, m.team1Name);
					addIfUnique(teams, m.team2Code, m.team2Name);
				})
		});
	teams.sort(function (a, b) {
	    if (a.name > b.name)
	      return 1;
	    if (a.name < b.name)
	      return -1;
	    // a must be equal to b
	    return 0;
	});	
	*/
	var teams = [{"code":"alg","name":"Algeria"},{"code":"arg","name":"Argentina"},{"code":"aus","name":"Australia"},{"code":"bel","name":"Belgium"},{"code":"bih","name":"Bosnia and Herzegovina"},{"code":"bra","name":"Brazil"},{"code":"cmr","name":"Cameroon"},{"code":"chi","name":"Chile"},{"code":"col","name":"Colombia"},{"code":"crc","name":"Costa Rica"},{"code":"cro","name":"Croatia"},{"code":"civ","name":"Côte d'Ivoire"},{"code":"ecu","name":"Ecuador"},{"code":"eng","name":"England"},{"code":"fra","name":"France"},{"code":"ger","name":"Germany"},{"code":"gha","name":"Ghana"},{"code":"gre","name":"Greece"},{"code":"hon","name":"Honduras"},{"code":"irn","name":"Iran"},{"code":"ita","name":"Italy"},{"code":"jpn","name":"Japan"},{"code":"kor","name":"Korea Republic"},{"code":"mex","name":"Mexico"},{"code":"ned","name":"Netherlands"},{"code":"nga","name":"Nigeria"},{"code":"por","name":"Portugal"},{"code":"rus","name":"Russia"},{"code":"esp","name":"Spain"},{"code":"sui","name":"Switzerland"},{"code":"usa","name":"USA"},{"code":"uru","name":"Uruguay"}]; 

	return teams;
};


this.getGroups = function(){
	var groups =[
    {
        "name": "A",
        "teams": [
            {
                "code": "bra",
                "name": "Brazil"
            },
            {
                "code": "cro",
                "name": "Croatia"
            },
            {
                "code": "mex",
                "name": "Mexico"
            },
            {
                "code": "cmr",
                "name": "Cameroon"
            }
        ]
    },
    {
        "name": "B",
        "teams": [
            {
                "code": "esp",
                "name": "Spain"
            },
            {
                "code": "ned",
                "name": "Netherlands"
            },
            {
                "code": "chi",
                "name": "Chile"
            },
            {
                "code": "aus",
                "name": "Australia"
            }
        ]
    },
    {
        "name": "C",
        "teams": [
            {
                "code": "col",
                "name": "Colombia"
            },
            {
                "code": "gre",
                "name": "Greece"
            },
            {
                "code": "civ",
                "name": "Côte d'Ivoire"
            },
            {
                "code": "jpn",
                "name": "Japan"
            }
        ]
    },
    {
        "name": "D",
        "teams": [
            {
                "code": "uru",
                "name": "Uruguay"
            },
            {
                "code": "crc",
                "name": "Costa Rica"
            },
            {
                "code": "eng",
                "name": "England"
            },
            {
                "code": "ita",
                "name": "Italy"
            }
        ]
    },
    {
        "name": "E",
        "teams": [
            {
                "code": "sui",
                "name": "Switzerland"
            },
            {
                "code": "ecu",
                "name": "Ecuador"
            },
            {
                "code": "fra",
                "name": "France"
            },
            {
                "code": "hon",
                "name": "Honduras"
            }
        ]
    },
    {
        "name": "F",
        "teams": [
            {
                "code": "arg",
                "name": "Argentina"
            },
            {
                "code": "bih",
                "name": "Bosnia and Herzegovina"
            },
            {
                "code": "irn",
                "name": "Iran"
            },
            {
                "code": "nga",
                "name": "Nigeria"
            }
        ]
    },
    {
        "name": "G",
        "teams": [
            {
                "code": "ger",
                "name": "Germany"
            },
            {
                "code": "por",
                "name": "Portugal"
            },
            {
                "code": "gha",
                "name": "Ghana"
            },
            {
                "code": "usa",
                "name": "USA"
            }
        ]
    },
    {
        "name": "H",
        "teams": [
            {
                "code": "bel",
                "name": "Belgium"
            },
            {
                "code": "alg",
                "name": "Algeria"
            },
            {
                "code": "rus",
                "name": "Russia"
            },
            {
                "code": "kor",
                "name": "Korea Republic"
            }
        ]
    }
];
 return groups;
};

this.getMatchDaysByTeam = function(code) {
	var matchDaysByTeam = [];
	
	schedule.matchDays.forEach(function(matchDay){
		matchDay.matches.forEach(function(match){
			if(match.team1Code === code || match.team2Code === code) {
				matchDaysByTeam.push({ date: matchDay.date, matches : [match] });
			}
		});
	});

	return matchDaysByTeam;
};

this.getMatchDaysByGroup = function(groupName) {
	var matchDaysByGroup = [];
	
	schedule.matchDays.forEach(function(matchDay){
		var groupMatchDay = { "date" : matchDay.date };
		groupMatchDay.matches = [];
		matchDay.matches.forEach(function(match){
			if(match.group === groupName) {
				groupMatchDay.matches.push(match);
			}
		});
		if(groupMatchDay.matches.length > 0) {
			matchDaysByGroup.push(groupMatchDay);
		}
	});

	return matchDaysByGroup;
};

var mySchedule = [];

this.findMatchDayInMySchedule = function(matchDay){
	var existingMatchDay = mySchedule.filter(function(x) { 
		return x.date.getTime() === matchDay.date.getTime()
	});
	return existingMatchDay;
};

this.addToMySchedule = function(matchDay) {
	var existingMatchDay = this.findMatchDayInMySchedule(matchDay);

	matchDay.matches[0].isInMySchedule = true;
	if(existingMatchDay.length === 0){
		mySchedule.push(matchDay);
	} else {
		existingMatchDay[0].matches.push(matchDay.matches[0]);
	}

};

this.removeFromMySchedule = function(matchDay){
	var existingMatchDay = this.findMatchDayInMySchedule(matchDay);
	
	matchDay.matches[0].isInMySchedule = false;
	if(existingMatchDay[0].matches.length === 1){
		mySchedule = mySchedule.filter(function(x){ 
			return x.date.getTime() !== existingMatchDay[0].date.getTime(); 
		});
	} else{
		existingMatchDay[0].matches = existingMatchDay[0].matches.filter(function(x){ return x.matchId !== matchDay.matches[0].matchId });
	}
};

this.getMySchedule = function() { 
	return mySchedule;
};







};
