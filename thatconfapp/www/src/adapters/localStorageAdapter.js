var LocalStorageAdapter = function() {

    this.initialize = function() {
		}  

    var gridMenuItems =
    { rows:
	[
		[
			{ id:'lnkSessions', url:'#sessions', label: 'Sessions', icon: 'fa fa-calendar-o fa-5x'},
			{ id:'lnkSpeakers', url:'#speakers', label: 'Speakers', icon: 'fa fa-user fa-5x'},
			{ id:'lnkFamilySessions', url:'#familySessions', label: 'Family Sessions', icon: 'fa fa-child fa-5x'},
		],

		[
			{ id:'lnkMySchedule', url:'#mySchedule', label: 'My Schedule', icon: 'fa fa-check-square-o fa-5x'},
			{ id:'lnkSponsors', url:'#sponsors', label: 'sponsors', icon: 'fa fa-dollar fa-5x'},
			{ id:'lnkPolicies', url:'#policies', label: 'Policies', icon: 'fa fa-book fa-5x'},
		]	


	]
    };



this.getGridMenuItems = function() { return gridMenuItems; };


this.getSessions = function() {
	var sessions = [
  {
    "day": "-",
    "scheduled": "-",
    "room": "",
    "name": "Kenny Young",
    "category": "Cloud",
    "level": "200",
    "title": "Getting the C-Level to level up to the Cloud"
  },
  {
    "day": "-",
    "scheduled": "-",
    "room": "",
    "name": "Josh Schultz",
    "category": "Other",
    "level": "100",
    "title": "The Evergreen Developer: Timeless Skills for a Long Career"
  },
  {
    "day": "-",
    "scheduled": "-",
    "room": "Room Not Scheduled",
    "name": "Jeff Key",
    "category": "Other",
    "level": "100",
    "title": "Why are you still hard-coding business logic?"
  },
  {
    "day": "Sat",
    "scheduled": "8:30a",
    "room": "c",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "GiveCamp and The Humanitarian Toolbox"
  },
  {
    "day": "Sun",
    "scheduled": "1:00p",
    "room": "D",
    "name": "CoderDojo Chi",
    "category": "Family",
    "level": "300",
    "title": "Kid's Coder Dojo - Choose Your Own Adventure"
  },
  {
    "day": "Sun",
    "scheduled": "1:00p",
    "room": "B",
    "name": "Ryan Hatch",
    "category": "Other",
    "level": "400",
    "title": "Lean Startup 101 : Accelerating Ideas into Product Success"
  },
  {
    "day": "Sun",
    "scheduled": "6:00p",
    "room": "Conference Center",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Early Registration and Meet and Greet"
  },
  {
    "day": "M",
    "scheduled": "7:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Breakfast ( M )"
  },
  {
    "day": "M",
    "scheduled": "8:30a",
    "room": "Mess Hall",
    "name": "Elizabeth Naramore",
    "category": "Keynote",
    "level": "400",
    "title": "Ripples on the Pond"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "E",
    "name": "Christopher Woodruff",
    "category": "Mobile",
    "level": "200",
    "title": "Developing Mobile Solutions with Azure Mobile Services in Windows 8.1 and Windows Phone"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Tamarind",
    "name": "Jenna Pederson",
    "category": "Web",
    "level": "200",
    "title": "Leave No Trace: Test Driven Development using the SOLID Principles"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "C",
    "name": "Ryan Niemeyer",
    "category": "Web",
    "level": "200",
    "title": "Oh the Memories! -  An Introduction to Browser Memory Leak Testing"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "B",
    "name": "Richard Campbell",
    "category": "Other",
    "level": "300",
    "title": "People"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "F",
    "name": "Chris Risner",
    "category": "Cloud",
    "level": "200",
    "title": "Pushing Data to Millions of Devices in Seconds"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Banyan",
    "name": "Benjamin Gavin",
    "category": "Family",
    "level": "400",
    "title": "Robotics Camp – Arrival – Day 1"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Cypress",
    "name": "Emily Davis",
    "category": "Family",
    "level": "100",
    "title": "Teaching Kids to Program"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Wisteria",
    "name": "Greg Tarnoff",
    "category": "Other",
    "level": "100",
    "title": "The UX of Stairs - When simple tasks aren’t so simple"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Portia",
    "name": "Aaron Hayon",
    "category": "Web",
    "level": "200",
    "title": "Twitter Bootstrap – A Web Developers Best Friend"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "G",
    "name": "Wade Wegner",
    "category": "Mobile",
    "level": "400",
    "title": "Want to Build an SDK for Your API? Learn Tips from the Trenches"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "Guava",
    "name": "Nathan Dotz",
    "category": "Other",
    "level": "200",
    "title": "What I wish the older kids had told me about becoming a functional programmer"
  },
  {
    "day": "M",
    "scheduled": "10:30a",
    "room": "D",
    "name": "Cori Drew",
    "category": "Other",
    "level": "200",
    "title": "You've used git. You've used TFS. Why aren't you using them together?"
  },
  {
    "day": "M",
    "scheduled": "11:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Lunch ( M )"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Guava",
    "name": "Brent Stineman",
    "category": "Cloud",
    "level": "300",
    "title": "Azure Service Bus – Enabling Internet of Things"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "D",
    "name": "Jeff Blankenburg",
    "category": "Other",
    "level": "100",
    "title": "Fear"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Tamarind",
    "name": "Patrick Seda",
    "category": "Mobile",
    "level": "200",
    "title": "Gamification vs. Motivation in Children's Educational Apps"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Mangrove",
    "name": "Alper Sunar",
    "category": "Mobile",
    "level": "100",
    "title": "Hybrid mobile apps don't have to suck: Minimalist's Guide to Building Hybrid Mobile Apps"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "B",
    "name": "Leon Gersing",
    "category": "Other",
    "level": "100",
    "title": "Leon's Allegory of the Cave"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Wisteria",
    "name": "George Heeres",
    "category": "Other",
    "level": "100",
    "title": "Linux for Windows Developers"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "F",
    "name": "Joe Brinkman",
    "category": "Web",
    "level": "200",
    "title": "MongoDB: The ultimate backpack for the cloud"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "C",
    "name": "Keith Dahlby",
    "category": "Web",
    "level": "200",
    "title": "One Delegate to Rule Them All: Understanding OWIN"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Aralia",
    "name": "Jonathan Mills",
    "category": "Mobile",
    "level": "100",
    "title": "Rocking Out With Android Studio"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Portia",
    "name": "Matt Netkow",
    "category": "Mobile",
    "level": "200",
    "title": "Seeing the forest for the trees: Building Fully Featured HTML5 Mobile Apps"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "G",
    "name": "Joe Eames",
    "category": "Web",
    "level": "200",
    "title": "Slow Roasted AngularJS Best Practices"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "E",
    "name": "Angela Dugan",
    "category": "Other",
    "level": "300",
    "title": "Structuring Your TFS ALM Environment for the Long Haul"
  },
  {
    "day": "M",
    "scheduled": "1:00p",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "Family",
    "level": "100",
    "title": "That Wildlife"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Mangrove",
    "name": "Aaron Hoffman",
    "category": "Other",
    "level": "100",
    "title": "$0 to $60"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "B",
    "name": "Pete Brown",
    "category": "Other",
    "level": "300",
    "title": "A device in every chicken in every camp pot: IoT and embedded devices for people who love to code and make"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "G",
    "name": "John Lindquist",
    "category": "Web",
    "level": "200",
    "title": "AngularJS - Top 10 Tips"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Guava",
    "name": "Judah Himango",
    "category": "Cloud",
    "level": "200",
    "title": "Call of the Raven: RavenDB for the .NET Camper"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Cypress",
    "name": "Phil Van Houten",
    "category": "Family",
    "level": "300",
    "title": "Don't go outside; stay inside and make your first Minecraft mod!"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "E",
    "name": "Brandon Martinez",
    "category": "Web",
    "level": "200",
    "title": "From Callback Hell to the JavaScript “Promise” Land"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Tamarind",
    "name": "Dave Arel",
    "category": "Mobile",
    "level": "300",
    "title": "HTML5 Mobile Apps Don't Have To Suck"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "F",
    "name": "Lauren Amundson",
    "category": "Other",
    "level": "100",
    "title": "Inspiring a Culture of Innovation"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "D",
    "name": "Steve Marx",
    "category": "Mobile",
    "level": "300",
    "title": "Syncing Is Hard"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Wisteria",
    "name": "Dennis Burton",
    "category": "Cloud",
    "level": "100",
    "title": "The Cloud Mixing Bowl"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Portia",
    "name": "Coraline Ehmke",
    "category": "Other",
    "level": "100",
    "title": "The Open Source Survival Guide for Women"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "C",
    "name": "Bill Wagner",
    "category": "Web",
    "level": "200",
    "title": "Working with TypeScript"
  },
  {
    "day": "M",
    "scheduled": "2:30p",
    "room": "Aralia",
    "name": "John Ptacek",
    "category": "Other",
    "level": "100",
    "title": "You Can’t Always Be Hiking – Ways to Hack Your Day to Better Health"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "D",
    "name": "Jason Follas",
    "category": "Other",
    "level": "100",
    "title": "Bitcoin and Cryptocurrency: How Does It Work?"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "B",
    "name": "Mike Wood",
    "category": "Cloud",
    "level": "200",
    "title": "Cloud - It's More than Just Virtual Machines"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "C",
    "name": "Roger Brogan",
    "category": "Mobile",
    "level": "200",
    "title": "Cross Platform Phone Dev with AngularJS and PhoneGap"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Guava",
    "name": "Michael Perry",
    "category": "Other",
    "level": "300",
    "title": "Cryptography Ghost Stories"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Tamarind",
    "name": "Edward Thomson",
    "category": "Other",
    "level": "400",
    "title": "Deep Dive into Git"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "G",
    "name": "Russ Unger",
    "category": "Other",
    "level": "100",
    "title": "From Muppets to Mastery: Core UX Principles from Mr. Jim Henson"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "F",
    "name": "Evan Carothers",
    "category": "Cloud",
    "level": "200",
    "title": "Google Cloud Platform & App Engine - The Swiss Army Knife PaaS"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "E",
    "name": "Eric Boyd",
    "category": "Cloud",
    "level": "200",
    "title": "Microsoft Azure Web Sites for the Web Developer"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Cypress",
    "name": "Derek Curtis",
    "category": "Family",
    "level": "400",
    "title": "Paddle Your Own Canoe--Navigating the Computer Science Career Backwater"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Wisteria",
    "name": "Cory House",
    "category": "Web",
    "level": "200",
    "title": "Real World Single Page Apps: A Knockout Case Study"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Mangrove",
    "name": "Michael Boeke",
    "category": "Other",
    "level": "200",
    "title": "UX Antipatterns: Hidden User Traps in Sites and Apps"
  },
  {
    "day": "M",
    "scheduled": "4:00p",
    "room": "Portia",
    "name": "Tim Miller",
    "category": "Mobile",
    "level": "300",
    "title": "Your Future is so Bright You Gotta Wear Shades... or Glass"
  },
  {
    "day": "M",
    "scheduled": "5:30p",
    "room": "Conference Center",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Happy Hour"
  },
  {
    "day": "M",
    "scheduled": "7:00p",
    "room": "Open Spaces Room",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Game Night"
  },
  {
    "day": "M",
    "scheduled": "7:00p",
    "room": "b",
    "name": "Michael Wheeler",
    "category": "Web",
    "level": "100",
    "title": "That Coderetreat"
  },
  {
    "day": "T",
    "scheduled": "7:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Breakfast ( T )"
  },
  {
    "day": "T",
    "scheduled": "8:30a",
    "room": "Mess Hall",
    "name": "Tim Huckaby",
    "category": "Keynote",
    "level": "200",
    "title": "The Engaging User Experience & the Natural User Interface"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Cypress",
    "name": "Sharon Cichelli",
    "category": "Family",
    "level": "200",
    "title": "Circuits in Play Dough"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Tamarind",
    "name": "Travis Stevenson",
    "category": "Cloud",
    "level": "400",
    "title": "Creating The Forest From The Trees:  Installing and Optimizing XEN"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "G",
    "name": "Brent Schooley",
    "category": "Mobile",
    "level": "300",
    "title": "Creating Xamarin Bindings for Native iOS Libraries"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "B",
    "name": "Ryan Anklam",
    "category": "Web",
    "level": "200",
    "title": "Going Node At Netflix"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "E",
    "name": "Beth Tucker Long",
    "category": "Web",
    "level": "200",
    "title": "I've Been Hacked"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Wisteria",
    "name": "Brad Marsh",
    "category": "Mobile",
    "level": "100",
    "title": "LigerMobile - Hybrid App Development for the Pragmatic Perfectionist"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "C",
    "name": "Seth Juarez",
    "category": "Other",
    "level": "200",
    "title": "Machine Learning – Recommender Engine and Anomaly Detection"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Mangrove",
    "name": "gus emery",
    "category": "Web",
    "level": "200",
    "title": "Making Rich Data apps are a Breeze(.js)"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Guava",
    "name": "Jeremiah Billmann",
    "category": "Web",
    "level": "200",
    "title": "Meet Koa - the next generation web framework for Node.js"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "D",
    "name": "Jimmy Bogard",
    "category": "Other",
    "level": "200",
    "title": "ORMs - you're doing it wrong"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Banyan",
    "name": "Benjamin Gavin",
    "category": "Family",
    "level": "400",
    "title": "Robotics Camp – Day 2"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "F",
    "name": "Dustin Ewers",
    "category": "Web",
    "level": "200",
    "title": "Telling Campfire Stories with Data: Beautiful Interactive Data Visualizations with D3.js"
  },
  {
    "day": "T",
    "scheduled": "10:30a",
    "room": "Portia",
    "name": "Kassandra Perch",
    "category": "Web",
    "level": "200",
    "title": "Write Firefox OS apps using the Web Tech you already know"
  },
  {
    "day": "T",
    "scheduled": "11:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Lunch ( T )"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "C",
    "name": "Keith Casey",
    "category": "Cloud",
    "level": "200",
    "title": "12 Reasons Your API Sucks"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Mangrove",
    "name": "Darrel Miller",
    "category": "Mobile",
    "level": "300",
    "title": "Building an API client library that bends but doesn't break"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "B",
    "name": "Matt Milner",
    "category": "Mobile",
    "level": "200",
    "title": "Building cross-platform mobile applications with Xamarin Studio and Azure Mobile Services"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Tamarind",
    "name": "JC Grubbs",
    "category": "Web",
    "level": "300",
    "title": "Building Web Applications with Elixir"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "D",
    "name": "Brian Hogan",
    "category": "Other",
    "level": "100",
    "title": "Come To The Vim Side"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Aralia",
    "name": "Matthew Renze",
    "category": "Other",
    "level": "100",
    "title": "Exploratory Data Analysis with R"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Portia",
    "name": "Susan Yount",
    "category": "Cloud",
    "level": "200",
    "title": "Getting to Know Windows Azure Mobile Services"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "E",
    "name": "Dennis Welu",
    "category": "Mobile",
    "level": "100",
    "title": "Go X-Platform with Xamarin"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "F",
    "name": "Pete Brown",
    "category": "Mobile",
    "level": "300",
    "title": "How to build amazing creative music apps for Windows"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Cypress",
    "name": "Annalee and Brian Kalbfleisch",
    "category": "Family",
    "level": "200",
    "title": "Legos"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Wisteria",
    "name": "Kevin McMahon",
    "category": "Mobile",
    "level": "100",
    "title": "Securing your Android Apps"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "G",
    "name": "Javier Lozano",
    "category": "Web",
    "level": "200",
    "title": "SignalR All The Things!"
  },
  {
    "day": "T",
    "scheduled": "1:00p",
    "room": "Guava",
    "name": "Jeremy Green",
    "category": "Web",
    "level": "300",
    "title": "Supercharge your productivity with Ember.js"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Aralia",
    "name": "Maulan Byron",
    "category": "Cloud",
    "level": "300",
    "title": "Capacity Planning on the Fly"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "G",
    "name": "rob sullivan",
    "category": "Other",
    "level": "100",
    "title": "Enterprise 2.0.0 - Building Apps on the Postgres Framework"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "C",
    "name": "Shay Howe",
    "category": "Web",
    "level": "100",
    "title": "How Constraints Cultivate Growth"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Portia",
    "name": "Kevin Hakanson",
    "category": "Web",
    "level": "100",
    "title": "Internationalize your JavaScript Application: Prepare for the next billion internet users."
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "F",
    "name": "Robert Boedigheimer",
    "category": "Other",
    "level": "300",
    "title": "Keep Your Campfire Secrets...  Secret"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "D",
    "name": "Jeff Weber",
    "category": "Mobile",
    "level": "200",
    "title": "Making A Game With Unity"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Guava",
    "name": "Jason Young",
    "category": "Cloud",
    "level": "400",
    "title": "Massively Parallel Azure Systems"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "B",
    "name": "Ryan Anklam",
    "category": "Web",
    "level": "300",
    "title": "Rethink Async With RXJS"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Mangrove",
    "name": "Tom Steele",
    "category": "Mobile",
    "level": "300",
    "title": "Should You Hitch Your Mobile Development Saddle to the Xamarin Horse? (Exploring the Xamarin Option for Cross Platform Mobile Development)"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Cypress",
    "name": "Keith Burnell",
    "category": "Family",
    "level": "300",
    "title": "Teaching the Junior Campers to Program with the Grown Up Tools"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Tamarind",
    "name": "Tony Guidici",
    "category": "Cloud",
    "level": "300",
    "title": "Using HDInisght and Internet of Things To See The Forest For The Trees"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "Wisteria",
    "name": "Kelley Muir",
    "category": "Other",
    "level": "100",
    "title": "UX Stories to Tell in the Dark"
  },
  {
    "day": "T",
    "scheduled": "2:30p",
    "room": "E",
    "name": "Greg Levenhagen",
    "category": "Mobile",
    "level": "200",
    "title": "Write Xbox One"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Portia",
    "name": "Aaron Douglas",
    "category": "Mobile",
    "level": "300",
    "title": "Advanced Core Data - Much Wow"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "B",
    "name": "Joe Johnston",
    "category": "Other",
    "level": "100",
    "title": "Design for Sensors"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Wisteria",
    "name": "Lance Larsen",
    "category": "Mobile",
    "level": "200",
    "title": "Dude"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Tamarind",
    "name": "Nik Molnar",
    "category": "Web",
    "level": "200",
    "title": "Full Stack Web Performance"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Cypress",
    "name": "Richard Campbell",
    "category": "Family",
    "level": "100",
    "title": "Internet Safety for Parents and Kids"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Guava",
    "name": "Ian Muir",
    "category": "Web",
    "level": "200",
    "title": "Let's Hack a Website"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Aralia",
    "name": "Mike Hodnick",
    "category": "Other",
    "level": "100",
    "title": "Live-Coded Music: electronic campfire sing-alongs of the future"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "C",
    "name": "Josh Gretz",
    "category": "Mobile",
    "level": "100",
    "title": "Marvelous Mobile Ruby Development"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "Mangrove",
    "name": "Eryn O'Neil",
    "category": "Web",
    "level": "100",
    "title": "Programmers Can UX Too"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "E",
    "name": "Ryan Cromwell",
    "category": "Other",
    "level": "100",
    "title": "Sweet Elixir! A Gentle Introduction to Erlang’s cute younger brother Elixir"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "F",
    "name": "Jaim Zuber",
    "category": "Mobile",
    "level": "200",
    "title": "Tales From the Client Side. MVC and Other Patterns for iOS Development"
  },
  {
    "day": "T",
    "scheduled": "4:00p",
    "room": "G",
    "name": "Jacob Gable",
    "category": "Web",
    "level": "300",
    "title": "What can JavaScript ES6 features do for me today?"
  },
  {
    "day": "T",
    "scheduled": "5:30p",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "That Pig Roast"
  },
  {
    "day": "T",
    "scheduled": "10:30p",
    "room": "Indoor Waterpark",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "That Waterpark Party"
  },
  {
    "day": "W",
    "scheduled": "7:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Breakfast ( W )"
  },
  {
    "day": "W",
    "scheduled": "8:30a",
    "room": "Mess Hall",
    "name": "Mike McGee",
    "category": "Keynote",
    "level": "300",
    "title": "How One Year of Crazy Created the New Normal"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "F",
    "name": "Dan Piessens",
    "category": "Cloud",
    "level": "300",
    "title": "Building stable agile cloud applications"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "E",
    "name": "Steven Hoober",
    "category": "Mobile",
    "level": "100",
    "title": "Design for Fingers"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Portia",
    "name": "Guy Starbuck",
    "category": "Mobile",
    "level": "300",
    "title": "Digitally Sign on the Dotted Line"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Guava",
    "name": "Md Khan",
    "category": "Web",
    "level": "200",
    "title": "High Performance JavaScript"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "G",
    "name": "Dan Normington",
    "category": "Mobile",
    "level": "200",
    "title": "Manage your app in the background - Keeping your app alive with background tasks"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "C",
    "name": "Damon Payne",
    "category": "Other",
    "level": "300",
    "title": "Modern GPU Computing"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "D",
    "name": "Mike Ward",
    "category": "Web",
    "level": "200",
    "title": "NancyFx - ASP.NET's Super-Duper-Happy Framework"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Banyan",
    "name": "Benjamin Gavin",
    "category": "Family",
    "level": "400",
    "title": "Robotics Camp - The Finale - Day 3"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Cypress",
    "name": "Katelyn Drew",
    "category": "Family",
    "level": "100",
    "title": "Scratch for kids!"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Wisteria",
    "name": "Mina Markham",
    "category": "Web",
    "level": "200",
    "title": "SMACSS Your Sass Up"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "B",
    "name": "Mike Rohde",
    "category": "Other",
    "level": "100",
    "title": "The Sketchnote Mini-Workshop"
  },
  {
    "day": "W",
    "scheduled": "10:30a",
    "room": "Tamarind",
    "name": "Paul Drew",
    "category": "Cloud",
    "level": "200",
    "title": "Windows DevOps: Introducing Agile Environments"
  },
  {
    "day": "W",
    "scheduled": "11:30a",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Lunch ( W )"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "B",
    "name": "Jim Holmes",
    "category": "Other",
    "level": "200",
    "title": "“OMG! This Codebase Sucks!” Paying Down Technical Debt While Continuing to Deliver Value"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Aralia",
    "name": "Janie Clayton-Hasz",
    "category": "Mobile",
    "level": "200",
    "title": "All the Audio You Need: Intro to AV Foundation Audio"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Tamarind",
    "name": "Eric Potter",
    "category": "Other",
    "level": "100",
    "title": "Connecting C# to Arduino and the world outside your computer"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Wisteria",
    "name": "Mark Greenway",
    "category": "Cloud",
    "level": "200",
    "title": "Cut Your Hair and Get an Azure WebJob!"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "E",
    "name": "Bertine Buchan",
    "category": "Web",
    "level": "200",
    "title": "Front-End Development for Back-End Developers"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Mangrove",
    "name": "Alex Koppel",
    "category": "Mobile",
    "level": "200",
    "title": "iPads everywhere: Working with tablets at scale"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "D",
    "name": "Tyson Stewart",
    "category": "Cloud",
    "level": "300",
    "title": "Keeping Your Edge by Deploying Faster"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "G",
    "name": "Jason Bock",
    "category": "Other",
    "level": "300",
    "title": "Managing the .NET Compiler"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Portia",
    "name": "Doug Rhoten",
    "category": "Mobile",
    "level": "100",
    "title": "Objective-C for C# Developers"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "F",
    "name": "Brad Broulik",
    "category": "Web",
    "level": "200",
    "title": "Responsive Web Development Patterns"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Cypress",
    "name": "Alexander Headley",
    "category": "Family",
    "level": "300",
    "title": "Scratch 2d Game Programming"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "Guava",
    "name": "Lori Lalonde",
    "category": "Mobile",
    "level": "200",
    "title": "Using The Power of Speech In Your Windows Phone Apps"
  },
  {
    "day": "W",
    "scheduled": "1:00p",
    "room": "C",
    "name": "Eryn O'Neil",
    "category": "Other",
    "level": "200",
    "title": "You're the Tech Lead! Now What?"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Aralia",
    "name": "Chris Gardner",
    "category": "Other",
    "level": "100",
    "title": "Biometrics: Using Your Body for Fun and Profit"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "C",
    "name": "Vince Bullinger",
    "category": "Mobile",
    "level": "100",
    "title": "Cross-Platform Trek Through the Mobile Development Forest with Titanium"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Guava",
    "name": "Eric Frost",
    "category": "Web",
    "level": "200",
    "title": "Django Unchained"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "E",
    "name": "Danielle Boldt",
    "category": "Other",
    "level": "100",
    "title": "From Zero to Full Deployment Automation in 60 Minutes"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "B",
    "name": "Jacob Gable",
    "category": "Web",
    "level": "100",
    "title": "Getting Started with Open Source Contributions on Github"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Portia",
    "name": "Tim Hansen",
    "category": "Cloud",
    "level": "200",
    "title": "HIPAA and Staying Compliant in the Cloud"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Cypress",
    "name": "Edward Brey",
    "category": "Family",
    "level": "400",
    "title": "How to show kids that coding is even better than the zip line"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "G",
    "name": "Chris Powers",
    "category": "Web",
    "level": "200",
    "title": "Look Ma"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Tamarind",
    "name": "Mike Bluestein",
    "category": "Mobile",
    "level": "200",
    "title": "Making 2D Games that Run Everywhere using C#"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "F",
    "name": "Tony Surma",
    "category": "Mobile",
    "level": "200",
    "title": "Making your Apps Work Deep in the Woods"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Wisteria",
    "name": "Andrei Marukovich",
    "category": "Mobile",
    "level": "200",
    "title": "Modern desktop apps: get the best of both worlds"
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "Mangrove",
    "name": "Ashley Bennett Ewald",
    "category": "Other",
    "level": "100",
    "title": "Setting Up Camp: 10 Things You Must Do To Create a Successful Startup."
  },
  {
    "day": "W",
    "scheduled": "2:30p",
    "room": "D",
    "name": "Todd Gardner",
    "category": "Web",
    "level": "300",
    "title": "Traces of Errors: A Scavenger Hunt for Better JavaScript Stacktraces"
  },
  {
    "day": "W",
    "scheduled": "4:00p",
    "room": "Mess Hall",
    "name": "That Conference",
    "category": "That Conference",
    "level": "100",
    "title": "Closing Remarks"
  },
  
]; 

	return sessions;
}
    
this.getSpeakers = function () {

	var sessions = this.getSessions();
	var speakerSessions = [];
	sessions.map(function(s){
		if(speakerSessions.filter(function(ss){ return ss.name === s.name; }).length === 0){
			speakerSessions.push({'name': s.name, 'titles': [s.title]});
		}
		else { 
			var existingSpeaker = speakerSessions.filter(function(ss){ return ss.name === s.name; })[0];
			existingSpeaker.titles.push(s.title);
		}

	});

	return speakerSessions.sort(function(a,b){if(a.name>b.name) return 1; if(a.name<b.name){ return -1 }; return 0;});
};

this.getSessionsFilteredBy = function(sessionProperty, sessionValue){
	return this.getSessions().filter(function(s){ return s[sessionProperty] === sessionValue });
};

this.getSessionsByTitle = function(sessionName){
	return this.getSessionsFilteredBy('title', sessionName);
};

this.getSessionsByCategory = function(category){
	return this.getSessionsFilteredBy('category', category);
};

this.getSessionsByLevel = function(level){
	return this.getSessionsFilteredBy('level', level);
};

this.getSessionsByScheduled = function(scheduled){
	return this.getSessionsFilteredBy('scheduled', scheduled);
};

this.getSessionsByRoom = function(room){
	return this.getSessionsFilteredBy('room', room);
};

this.getSessionsByDay = function(day){
	return this.getSessionsFilteredBy('day', day);
};

this.initialize();



};
