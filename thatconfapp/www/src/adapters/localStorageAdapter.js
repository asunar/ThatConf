var LocalStorageAdapter = function() {

    this.initialize = function() {
		}  

    var gridMenuItems =
    { rows:
	[
		[
			{ id:'lnkSessions', url:'#sessions', label: 'Sessions', icon: 'fa fa-calendar-o fa-5x'},
			{ id:'lnkSpeakers', url:'#speakers', label: 'Speakers', icon: 'fa fa-user fa-5x'},
			{ id:'lnkFamilySessions', url:'#familysessions', label: 'Family Sessions', icon: 'fa fa-child fa-5x'},
		],

		[
		{ id:'lnkMySchedule', url:'#mySchedule', label: 'My Schedule', icon: 'fa fa-check-square-o fa-5x'},
			{ id:'lnkSponsors', url:'#sponsors', label: 'sponsors', icon: 'fa fa-dollar fa-5x'},
			{ id:'lnkPolicies', url:'#policies', label: 'Policies', icon: 'fa fa-book fa-5x'},
		]	


	]
    };



this.getGridMenuItems = function() { return gridMenuItems; };

this.getAcceptedSessionsByTimeSlot= function() {
return [
  {
    "TimeSlots": [
      {
        "Sessions": [
          {
            "Id": 5468,
            "Title": "GiveCamp and The Humanitarian Toolbox",
            "Description": "On August 9th and 10th, That Conference will host the 2014 Midwest GiveCamp. This year, Midwest Midwest GiveCamp and That Conference will team up with the Humanitarian Toolbox in a quest to help build software in support of disaster relief. This is a free event for all paid attendees and food will be provided.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-09T08:30:00",
            "ScheduledRoom": "c",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "GiveCamp"
              },
              {
                "Name": "Humanitarian Toolbox"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-21T23:14:39.013",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "8:30 AM"
      }
    ],
    "Day": "Sat 8/9"
  },
  {
    "TimeSlots": [
      {
        "Sessions": [
          {
            "Id": 4459,
            "Title": "Kid's Coder Dojo - Choose Your Own Adventure",
            "Description": "That Conference is teaming up with Coder Dojo Chicago (CoderDojoChi) to deliver an afternoon of teaching our younger campers (age 7-17) how to work with HTML, CSS and JavaScript to create a \"Choose Your Own Adventure\" game.\r\n\r\nThis session is for parents and their children who have purchased a family ticket.  There is no additional cost to attend, but you must sign yourself and your child(ten) up for this session through EventBrite.\r\n\r\nBy the end of the session, students will understand how the language HTML, CSS, and Javascript work together to build the web. Students will develop an understanding of how HTML is used to define the structure of web pages. In keeping with CoderDojoChi’s philosophy of learning-by-doing, students will use their knowledge to hack together their own “Choose Your Own Adventure” game.\r\n\r\nStudents are expected to provide their own laptop for the Dojo.\r\n\r\nCoderDojoChi is a free computer organization for kids interested in learning how to code. The Chicago Chapter was started by Ali Karbassi in March 2013; the chapter has grown with the help of many volunteers from around the Chicago area.\r\n\r\nThe main CoderDojo organization is a not-for-profit organization founded by James Whelton and Bill Liao. It was first started in early 2011 when Whelton hacked the iPod Nano and his younger students expressed an interest in learning how to code. He set up a computer club in his school (PBC Cork) and taught basic HTML and CSS. Later that year he and Bill Liao expanded CoderDojo beyond the after-school computer club.\r\n\r\nA second Dojo was launched soon after in nearby Dublin. The increasing success led to more Dojos in Ireland and around the world that are set up and run entirely by volunteers. Currently, there are nearly 200 Dojos in 24 countries. For a complete list of Dojos and more information on the project, visit CoderDojo.com.\r\n\r\nAbout the speaker: Ali Karbassi, the founder of CoderDojoChi, is a Senior Interactive Developer and Architect, Ali strives to combine multiple aspects of life to produce new meaning and push limits both physical and technical in his work. He has worked in many different programming and technology fields in the past fifteen years. Currently, he works with a small group of innovators at Iota Partners doing research and development.",
            "Category": "Family",
            "Level": "300",
            "ScheduledDateTime": "2014-08-10T13:00:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "CoderDojo",
                "LastName": "Chi",
                "HeadShot": "/cloud/profilephotos/CoderDojo-Chi-01eae8c1-5b7f-4a73-b905-20d51f45b7e3-635397807243373843.png",
                "UserName": "CoderDojoChi",
                "Biography": "We are here to open doors that are otherwise closed. We are here to freely offer our knowledge. We speak the language of the future. A language that does not discriminate by race, religion, nationality, or gender.\r\n\r\nCoderDojoChi is a free computer organization for kids interested in learning how to code. The Chicago Chapter was started by Ali Karbassi in January 2013; the chapter has grown with the help of many volunteers from around the Chicago area.",
                "WebSite": "http://CoderDojoChi.org",
                "Company": "SapientNitro",
                "Title": null,
                "Twitter": "@CoderDojoChi",
                "Facebook": "https://www.facebook.com/coderdojochi",
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/company/coderdojochi/",
                "GitHub": "https://github.com/CoderDojoChi",
                "LastUpdated": "2014-07-01T03:09:15.047"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "css"
              },
              {
                "Name": "HTML"
              },
              {
                "Name": "family"
              },
              {
                "Name": "Dojo"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:55.527",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 4457,
            "Title": "Lean Startup 101 : Accelerating Ideas into Product Success",
            "Description": "Let's face it.  Startup companies & new products are exciting.  Do you have a new product idea... or interested in startups?  Maybe you built a product - and no one came?  Want to learn how to create successful new products?\r\n\r\nLearn how to transform product ideas into a successful business - using Lean Startup.  Learn how to create business models using a test-driven approach. Learn how to avoid the top reasons for startup failure.  Learn how to run experiments to validate your assumptions and reach success faster.  Meet some awesome people & get hands-on collaboration with other attendees.  WARNING:  This session is highly addictive and may be hazardous to your health.  Only come if you want to make a dent in the world.",
            "Category": "Other",
            "Level": "400",
            "ScheduledDateTime": "2014-08-10T13:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ryan",
                "LastName": "Hatch",
                "HeadShot": "/cloud/profilephotos/Ryan-Hatch-034f867c-9a44-4475-8621-ca8e75699051.png",
                "UserName": "rdhatch",
                "Biography": "Ryan is a lean software entrepreneur & product delivery leader who helps teams launch new products people want to buy. He combines customer-centered product strategy with rapid, agile execution & continuous delivery.  Ryan co-founded Dynamis, funded by Golden Angels in 2012, to create sales growth for insurance brokers and enable employers to maximize their group health insurance. He excels at energizing teams towards shared purpose around the customer and business.  Ryan now works with other startups & product development teams using lean principles to accelerate growth & time-to-market.",
                "WebSite": "http://www.resultech.com",
                "Company": "Resultech",
                "Title": "Product Innovation Leader",
                "Twitter": "rdkhatch",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/rdhatch/",
                "GitHub": null,
                "LastUpdated": "2014-05-15T03:46:40.55"
              }
            ],
            "Tags": [
              {
                "Name": "devops"
              },
              {
                "Name": "agile"
              },
              {
                "Name": "lean startup"
              },
              {
                "Name": "product management"
              },
              {
                "Name": "continuous delivery"
              },
              {
                "Name": "business"
              },
              {
                "Name": "startups"
              },
              {
                "Name": "design"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "investment"
              },
              {
                "Name": "continuous deployment"
              },
              {
                "Name": "product ownership"
              },
              {
                "Name": "product architecture"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-23T11:19:14.12",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "1:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4440,
            "Title": "Early Registration and Meet and Greet",
            "Description": "You just rolled into town, tent is setup, now what? Why not, stop down at the convention center, and get registered before the rush. Once you have your badge and swag, turn around and grab a drink from the cash bar and meet a few new campers before the official conference starts.  If you are bringing along the family, after you register, stop by rooms A&H so the kid's can decorate and personalize their badge!",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-10T18:00:00",
            "ScheduledRoom": "Conference Center",
            "IsFamilyApproved": true,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-21T12:10:26.23",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "6:00 PM"
      }
    ],
    "Day": "Sun 8/10"
  },
  {
    "TimeSlots": [
      {
        "Sessions": [
          {
            "Id": 4441,
            "Title": "Breakfast ( Monday )",
            "Description": "Get out of bed sleepy head and get fed. Come down to the mess hall, grab a plate, cup of java, and wake up before our first keynoter jumps up on stage.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T07:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T23:34:01.663",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "7:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 5459,
            "Title": "Ripples on the Pond",
            "Description": "The actions we take in our everyday lives can have profound impacts on the world around us. The choice is ours. What will you do with the time you have here on Earth? How will you use what you learn? What kind of legacy will you leave? How will you treat those who are just starting out? In this keynote, we’ll talk about the complexities of the human brain, the power of choice and knowledge, and how the tiniest actions can make the biggest ripples on the tech community pond.",
            "Category": "Keynote",
            "Level": "400",
            "ScheduledDateTime": "2014-08-11T08:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Elizabeth",
                "LastName": "Naramore",
                "HeadShot": "/cloud/profilephotos/Elizabeth-Naramore-a0fa0945-7ecc-4dc8-95f8-4e5e77cad055-635391378588631590.jpg",
                "UserName": "ElizabethN",
                "Biography": "Elizabeth is an author, speaker, mentor, and recovering web developer. She currently works on the Community Team at GitHub, and she’s all about looking at new ways to solve old problems. She lives in Cincinnati, Ohio with her partner, their 3 children, and a dog named Raisin.",
                "WebSite": "http://naramore.net/blog",
                "Company": "GitHub",
                "Title": "EventHandler",
                "Twitter": "@ElizabethN",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/ElizabethN",
                "LastUpdated": "2014-06-23T16:31:08.08"
              }
            ],
            "Tags": [
              {
                "Name": "Community"
              },
              {
                "Name": "learning"
              },
              {
                "Name": "Psychology"
              },
              {
                "Name": "Mentorship"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T22:55:11.33",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "8:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 2179,
            "Title": "Developing Mobile Solutions with Azure Mobile Services in Windows 8.1 and Windows Phone",
            "Description": "Mobile applications are the current hot development topics today. Windows 8.1 and Windows Phone applications developed with Azure are designed to be easily reused, simplifying your experience and optimizing your time when building your own phone applications leveraging cloud services. How to architect and build your mobile app with Azure will be explained by Microsoft MVP Chris Woodruff along with best practices to take back to your team and organization.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Christopher",
                "LastName": "Woodruff",
                "HeadShot": "/cloud/profilephotos/Christopher-Woodruff-2d76098d-008b-47fd-8377-a960756f9c05.png",
                "UserName": "cwoodruff",
                "Biography": "Chris Woodruff (or Woody as he is commonly known as) has a degree in Computer Science from Michigan State University’s College of Engineering. Woody has been developing and architecting software solutions for almost 15 years and has worked in many different platforms and tools. He is a community leader, helping such events as Day of .NET Ann Arbor, West Michigan Day of .NET and CodeMash. He was also instrumental in bringing the popular Give Camp event to Western Michigan where technology professionals lend their time and development expertise to assist local non-profits. As a speaker and podcaster, Woody has spoken and discussed a variety of topics, including database design and open source. He is a Microsoft MVP in Visual C# and was recognized in 2010 as one of the top 20 MVPs world-wide.",
                "WebSite": "http://chriswoodruff.com",
                "Company": "Woodruff Solutions LLC",
                "Title": "Partner",
                "Twitter": "cwoodruff",
                "Facebook": "https://www.facebook.com/chris.woodruff",
                "GooglePlus": "https://plus.google.com/+ChrisWoodruff",
                "LinkedIn": "http://www.linkedin.com/in/chriswoodruff/",
                "GitHub": "https://github.com/cwoodruff",
                "LastUpdated": "2014-04-11T14:15:51.84"
              }
            ],
            "Tags": [
              {
                "Name": "Windows"
              },
              {
                "Name": "data"
              },
              {
                "Name": "Windows Phone"
              },
              {
                "Name": "odata"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:50.03",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2252,
            "Title": "Leave No Trace: Test Driven Development using the SOLID Principles",
            "Description": "Learn how to be a responsible camper in your own codebase by applying the SOLID principles to your test driven development practice. We will review the SOLID principles and then follow a test driven development workflow to build or improve our codebase. Campers will leave with a solid understanding of the SOLID principles as well as techniques for implementing test driven development on their project.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jenna",
                "LastName": "Pederson",
                "HeadShot": "/cloud/profilephotos/Jenna-Pederson-f87a63f7-e5da-465c-927b-c2fd98d58f72-635383642223372797.jpg",
                "UserName": "jennapederson",
                "Biography": "Jenna Pederson is an independent software developer based out of Minneapolis. She has worn a variety of hats in the development of building desktop software, web, and mobile applications. With experience from the front-end all the way down to the physical servers, from development to business analysis and testing, Jenna is a passionate developer who enjoys getting other developers excited about the technology and how to solve business problems.",
                "WebSite": "http://www.612softwarefoundry.com",
                "Company": "612 Software Foundry",
                "Title": "Owner/Developer",
                "Twitter": "jennapederson",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://linkedin.com/in/jennapederson",
                "GitHub": "https://github.com/jennapederson",
                "LastUpdated": "2014-06-14T17:38:27.027"
              }
            ],
            "Tags": [
              {
                "Name": "tdd"
              },
              {
                "Name": "testing"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:53.857",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2164,
            "Title": "Oh the Memories! -  An Introduction to Browser Memory Leak Testing",
            "Description": "Going to camp is a wonderful time filled with many lasting memories. Just like how our brains can be overwhelmed by all of the great experiences at camp, our web applications can also suffer from trying to remember too many things. Browser memory leaks are an often overlooked, yet important, issue in modern web development that can be overcome with the right techniques.\r\n\r\nIn this session, we will take an introductory look at the tools and approaches that you can use to identify and investigate browser memory leaks. We will look at common scenarios that cause this problem, as well as patterns to use in your code to avoid leaks. Additionally, we will explore the various options for debugging and profiling leaks across different browsers and platforms. You'll leave this session with some new memories that will help you start tackling leaks in your web apps today!\r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ryan",
                "LastName": "Niemeyer",
                "HeadShot": "/cloud/profilephotos/Ryan-Niemeyer-6744ffa4-3516-4679-8b00-bef5f0dd90f1.jpg",
                "UserName": "rniemeyer",
                "Biography": "Ryan Niemeyer is an Architect for appendTo and has over 15 years of experience in the software industry working with primarily web-based technologies. He loves JavaScript, participating in the open source community, helping others, and trying to learn new things everyday.  He has been involved with the Knockout.js project for the last few of years and writes about his experiences with it at knockmeout.net. \r\n\r\nRyan lives in Verona, Wisconsin with his wonderful wife and two daughters. Besides web development, he enjoys spending time with his family, playing basketball and cheering on the Wisconsin Badgers.",
                "WebSite": "http://knockmeout.net",
                "Company": "appendTo",
                "Title": "Architect",
                "Twitter": "RPNiemeyer",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "rniemeyer",
                "LastUpdated": "2014-05-06T00:54:55.45"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "javascript"
              },
              {
                "Name": "Profiling"
              },
              {
                "Name": "Memory"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:57.79",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2334,
            "Title": "People, Process, Tools – The Essence of DevOps",
            "Description": "DevOps is about making software better – by bringing everyone involved in software closer together, including (but not limited to): domain experts, architects, developers, designers, testers, security and operations. This session takes you through the DevOps culture, focusing on people, process and tools (in that order). You’ll learn how to get the conversation started between the teams, how to bring the teams closer together, and how to ultimately become one team (we’re all in this together)! Understanding DevOps is about focusing on what’s important: building and delivering the best software you can.\r\n",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Richard",
                "LastName": "Campbell",
                "HeadShot": "/cloud/profilephotos/Richard-Campbell-24cf3721-88a6-4175-97b8-eb42e2e03dc8.jpg",
                "UserName": "RCampbell",
                "Biography": "Richard Campbell has spent more than 30 years playing around with microcomputers. Along the way he's done virtually every job you can  imagine in the industry, from manufacturing to programming to consulting, training and writing. An impressive list of organizations, including Barnes&Noble.com, Dow Chemical, Johnson & Johnson Health Care Services, Reuters, Subaru/Isuzu and the U.S. Air Force, have benefited from Richard's consulting expertise. He’s one of the co-founders of Strangeloop Networks, building the AS1000 scaling appliance for accelerating web sites. Strangeloop was sold to Radware Networks in 2013. Today Richard is a Microsoft Regional Director, an ASP.NET MVP and a serial entrepreneur. Richard is a partner in PWOP Productions (www.pwop.com) that creates a number of popular podcasts. He's the co-host of .NET Rocks!, the Internet Audio Talkshow for .NET Developers (www.dotnetrocks.com) which publishes three times a week to over 150,000 listeners in more than 120 countries worldwide, as well as host of RunAs Radio (www.runasradio.com), the podcast for Microsoft IT Professionals. You can reach Richard on twitter @richcampbell.",
                "WebSite": "http://www.dotnetrocks.com",
                "Company": ".NET Rocks!",
                "Title": "Co-Host",
                "Twitter": "richcampbell",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-14T19:53:35.793"
              }
            ],
            "Tags": [
              {
                "Name": "devops"
              },
              {
                "Name": "testing"
              },
              {
                "Name": "agile"
              },
              {
                "Name": "continuous delivery"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:56.413",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2204,
            "Title": "Pushing Data to Millions of Devices in Seconds",
            "Description": "An important part of any mobile application is being able to send it notifications and trigger updates that present timely information to users.  Azure Notification Hubs allows you to easily do that for Android, iOS, Windows Phone, and Windows Store applications at scale.  Along with the ability to deliver to millions of devices, you get powerful capabilities like push connection management, push templates, tag based registrations and delivery, and much more.  All of this at low cost and without being tied into storing all of your data in the cloud!",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Chris",
                "LastName": "Risner",
                "HeadShot": "/cloud/profilephotos/Chris-Risner-1a6bfe45-c614-45e7-b9ae-1932320f5cac-635375124573302563.jpeg",
                "UserName": "ChrisRisner",
                "Biography": "Chris Risner is a Senior Technical Evangelist at Microsoft. There he is focused on connecting Microsoft Azure with mobile apps. He has been working with iOS and Android development for the past several years. Before working in mobile development, Chris worked on many large scale enterprise applications in Java and .NET. Chis is a constant learner who loves technology of all flavors and has a vast amount of experience in iOS, Android, Smart Clients, Asp.Net MVC, C#, Java, and Objective C. You can find out more about Chris at http://chrisrisner.com and http://twitter.com/chrisrisner.\r\n",
                "WebSite": "http://chrisrisner.com",
                "Company": "Microsoft",
                "Title": "Senior Technical Evangelist",
                "Twitter": "ChrisRisner",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/+chrisrisner",
                "LinkedIn": null,
                "GitHub": "https://github.com/chrisrisner",
                "LastUpdated": "2014-06-04T21:01:03.29"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Cloud"
              },
              {
                "Name": "Azure"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:48.617",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4453,
            "Title": "Robotics Camp – Arrival – Day 1",
            "Description": "You push your way off the bus and into the sweltering August heat.   Surrounded by scores of fellow geeklings you stare, open-mouthed, at the scene before you.  A dilapidated old gate with the tagline ‘Welcome, Future Robot Masters’, painted some many years ago in what must have been yellow paint, leads to a dusty campfire circle surrounded by numerous log cabins.  You can almost hear the complaints rising from the throats of those gathered when an old man with a grizzled beard steps around the corner of the nearest cabin and cracks a welcoming, if somewhat toothless, smile.\r\n\r\n“Ah, this year’s campers ‘ave arriv’d!  Come into the carty’rd and let’s take a look at ye” he announces and waves you through the gate and into the ‘courtyard’.  You and your bus-mates give each other a puzzled look and step through the gate, wondering how you can possibly rectify the straight-out-of-the-eighties summer camp look with what you were promised in the brochure you received in the mail.\r\n\r\n“Come in, come in!  ‘Ave a seat while I grab me things” the old man says, and wonders off into the largest of the cabins…  So begins your adventure in what the brochure described as “A Fast-Paced Introduction to the latest innovations in robotics instruction”… \r\n\r\nOut of the corner of your eye, you spot a glint of light reflecting off the ground near the edge of one of the cabins, but as you turn to focus your attention on it, the light mysteriously disappears, leaving a small cloud of dust in its wake.   As you try to find a log with the minimum amount of moss growing on it, you wonder if there isn’t more here than meets the eye…\r\n\r\n------------------------------------------------------------------------------------------\r\n\r\nCome on down to camp to get an introduction to the Vex IQ Robotics system.  This day-long session / open space will cover the basics of the system, outline the tools available and allow you to spend some hands-on time with some Vex IQ Robots.  After the initial overview / demo, we will be presenting the goals of the camp and assigning campers to teams.  Teams will work throughout the conference to build and program a Vex IQ robot to perform specific tasks to earn badges along their path to robotics mastery.\r\n\r\nSchedule:\r\n- Camp Overview\r\n- Presentation of the Vex IQ system, including a chance to play with some pre-built robots\r\n- Team Formation\r\n- Goal Announcements\r\n- Guided Builder Space\r\n- Goal Achievement\r\n",
            "Category": "Family",
            "Level": "400",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Banyan",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Benjamin",
                "LastName": "Gavin",
                "HeadShot": "/cloud/profilephotos/Benjamin-Gavin-8ed9516a-2287-494b-809f-5362a9b589fd.jpg",
                "UserName": "bengavin",
                "Biography": "Ben is a Senior Software Engineer at Skyline Technologies and has been writing software for the web and beyond for over 20 years [but doesn't feel old enough for that to be true].  He loves learning and experimenting with technology, mentoring other developers and sharing what he can with the communities and people who have taught him so much over the years.  His current focus is primarily around the Microsoft technology stack, including C#, Azure, Windows 8 and Windows Phone and helping his customers get the best solution for their needs.",
                "WebSite": "https://www.virtual-olympus.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "virtualolympus",
                "Facebook": null,
                "GooglePlus": "ben@virtual-olympus.com",
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-07T15:13:29.54"
              },
              {
                "FirstName": "Paul",
                "LastName": "Shepard",
                "HeadShot": "/cloud/profilephotos/Paul-Shepard-f953ea38-5cde-4407-b642-e476ce2d74ca-635370560270512400.jpg",
                "UserName": "PaulShepard",
                "Biography": "Software engineer and father of 6 children, I am passionate about getting technology in the hands of kids. This year I enjoyed the awesome privilege of coaching a group of elementary aged kids with little to no experience coding or building robots to a Regional championship and an invitation to World Championships. I'm excited to share how agile dev practices empowered my team to go from lost to boss in a way that is turning heads in a robotics community which has long embraced a stricter waterfall approach. ",
                "WebSite": null,
                "Company": "Skyline Technologies",
                "Title": "Software Engineer",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-24T21:43:22.647"
              }
            ],
            "Tags": [
              {
                "Name": "robots"
              },
              {
                "Name": "Vex Robotics"
              },
              {
                "Name": "Vex IQ"
              },
              {
                "Name": "ROBOT-C"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:46.137",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2255,
            "Title": "Teaching Kids to Program",
            "Description": "If you are going to That Conference, you likely know how valuable programming skills are, and perhaps you one day want your kids to learn these skills too. Programming teaches kids many valuable lessons: how to think logically and rationally, how to plan ahead, how to problem solve, and how to swear properly. But how do we teach kids to program today? When we were kids we were ecstatic to see a green blinking cursor on the screen prompting us to type our name so we could have the program print it repeatedly on the page while(true). How do we get today’s kids with XBoxes and Nintendos interested in rudimentary programming of “if” statements? In this session Emily Davis (age 12) and her dad Scott will discuss four programming languages and how they work for kids: Scratch, Lego Mindstorms, Python, and C#. We will demonstrate each language and talk about Emily's experience in each, what worked well and what didn’t, and what approaches you might take to get your own kids into programming.  Emily will also demo the application she has build for the Windows 8 store.",
            "Category": "Family",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Emily",
                "LastName": "Davis",
                "HeadShot": "/cloud/profilephotos/Emily-Davis-4f95dc53-aa36-4ecd-b9c6-10eddfed150b-635355063431226713.jpg",
                "UserName": "EmilyPrograms",
                "Biography": "Emily Davis is 12 years old.  She is a big nerd and very proud of her collection of geeky t-shirts.  She likes Star Wars, Legos, Minecraft and coding.  Her mom and dad are both software developers and even her little brother as written a couple apps. Emily's father owns a gaming company called QONQR and he will be helping with her presentation.",
                "WebSite": "http://www.QONQR.com",
                "Company": null,
                "Title": "Kid",
                "Twitter": "@QONQR",
                "Facebook": "https://www.facebook.com/QONQR",
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-12T15:46:24.523"
              }
            ],
            "Tags": [
              {
                "Name": "kids"
              },
              {
                "Name": "intro"
              },
              {
                "Name": "programming"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:47.107",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 1185,
            "Title": "The UX of Stairs - When simple tasks aren’t so simple",
            "Description": "A year and half ago I was a perfectly normal adult capable of anything I set my mind to. Then I started getting dizzy spells which got progressively worse. Today, I have 2-3 active hours a day, I shouldn't drive, I need a cane and can no longer take the stairs. I sleep more, need more down time to recuperate and see the world quite differently.\r\n\r\nI take the audience through this journey I've travelled over the last year, as well as how the world 'caters' to people with disabilities. I'll cover everything from the user experience of big box stores to using the web. ",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Greg",
                "LastName": "Tarnoff",
                "HeadShot": "/cloud/profilephotos/Greg-Tarnoff-64a302ae-6173-40fa-86d1-f26e2256ed64-635357708329549498.jpg",
                "UserName": "gtarnoff",
                "Biography": "The desire to understand how things work is one of my most driving factors. It has pushed me to take things apart in order to figure out how to put them together. Of course this led to me trying to make them do things they weren’t supposed to do, otherwise known as hacking.\r\n\"I do that which I don’t know how to do, so that I may know how to do it.\" -Picasso\r\nWhen colleagues get stuck, I am often called to because they think I can solve the unsolvable. Reality is, I just don’t limit how see the problem and throw solutions at it until one sticks.\r\nI like to do things. And when the things I want to do aren’t happening, I tend to make them happen. This is why I founded MadHackerHaus. That’s how I got started in technology. It’s what pushes me today.",
                "WebSite": "http://tarnoff.info",
                "Company": "Recurly",
                "Title": "Front End Engineer",
                "Twitter": "@gregtarnoff",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/gregorytarnoff/",
                "GitHub": "https://github.com/gtarnoff",
                "LastUpdated": "2014-05-15T17:15:51.783"
              }
            ],
            "Tags": [
              {
                "Name": "user experience"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "accessibility"
              },
              {
                "Name": "#a11y"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:52.55",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2352,
            "Title": "Twitter Bootstrap – A Web Developers Best Friend",
            "Description": "If you are a web developer, you have most likely had a project where your customer wanted a website that looked good on all types of devices and all types of resolutions.  Upon hearing this requirement, you immediately hit your favorite search engine and searched responsive design, or researched how to do media queries.  If you were like me, you quickly became overwhelmed on all the different tools and techniques that were required to build a responsive web site.  Well campers, fear no more.  Twitter Bootstrap may be just the thing you have been looking for.  Twitter Bootstrap provides a CSS framework built from the ground up with responsive design in mind.  It takes the pain out of building responsive design websites while also maintaining cross browser compatibility.  Come hear about the different components and CSS classes that make up Twitter Bootstrap.  Learn how to leverage the classes to optimize for different devices and save yourself the headache of creating everything from scratch.  Learn about my own burnt fingers integrating Twitter Bootstrap into web applications.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Aaron",
                "LastName": "Hayon",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "ahayon",
                "Biography": "Aaron is a Senior Software Engineer and Azure Architect at Skyline Technologies, Inc. With over 10 years of custom software development experience, Aaron has recently made the switch from a business application developer to a marketing website developer. While Aaron loves technology and cutting code, Aaron enjoys discussions and giving talks on the ways technology can help enable businesses to achieve success. In his free time, you can find Aaron giving talks on such topics as cloud technologies including Microsoft Azure as well as some of the latest website technologies such as CSS3 and HTML5\r\n. Aaron's overall passion is to help businesses achieve success through technology.  \r\n",
                "WebSite": "www.skylinetechnologies.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "@amhayon",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/aaronhayon/",
                "GitHub": null,
                "LastUpdated": "2014-07-08T01:10:09.75"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "Mobile"
              },
              {
                "Name": "Rsponsive Design"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:44.887",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1267,
            "Title": "Want to Build an SDK for Your API? Learn Tips from the Trenches",
            "Description": "Building an SDK and Visual Studio extension used by developers is no easy task, but using tools provided by Microsoft and other third parties makes it significantly easier. Join Wade Wegner, Technical Evangelist for salesforce.com, as he explains how he built the Salesforce Toolkits for .NET. In this session, learn about Dev/CI environments, NuGet packaging, targeting multiple platforms using the Portable Class Libraries, the Async and Await asynchronous design pattern, dynamics, and much more. Additionally, learn how to extend support to non-Microsoft platforms with Mono.NET and Xamarin tools. This talk is heavy in code and examples, so come on in and join us!",
            "Category": "Mobile",
            "Level": "400",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Wade",
                "LastName": "Wegner",
                "HeadShot": "/cloud/profilephotos/Wade-Wegner-e20d1ff8-87fe-4a86-a501-904ed1fb40e3.jpg",
                "UserName": "WadeWegner",
                "Biography": "Technical Evangelist at Salesforce. Microsoft Azure MVP & Insider. Aspiring Brewmaster. Former Microsoft Azure Engineer and CTO at Aditi Technologies.",
                "WebSite": "http://www.wadewegner.com/",
                "Company": "salesforce.com",
                "Title": "Senior Director",
                "Twitter": "WadeWegner",
                "Facebook": "https://www.facebook.com/wade.wegner",
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/wadewegner/",
                "GitHub": "https://github.com/wadewegner",
                "LastUpdated": "2014-05-05T22:59:13.54"
              }
            ],
            "Tags": [
              {
                "Name": ".net"
              },
              {
                "Name": "Visual Studio"
              },
              {
                "Name": "salesforce"
              },
              {
                "Name": "sdk"
              },
              {
                "Name": "mono.net"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:59.123",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2282,
            "Title": "What I wish the older kids had told me about becoming a functional programmer",
            "Description": "They tell you that you should learn a functional programming language because it will change how you think about code. What they don't tell you is how you'll be justifying your \"crazy\" ideas to your team members forever after that. How do you explain to someone that instead of writing a synchronized block you'd like to create 3 new classes and an interface to model an event stream with callbacks? Why on earth would you want to create an object to wrap potential nulls when an if-statement works just fine? If you haven't taken the plunge into functional yet, let me show you some of the ideas you'll bring back from your journey. If you're already a seasoned functional programmer, we can go over how to introduce the functional paradigms into our everyday work without scrapping it and rewriting the whole thing in OCaml.",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Nathan",
                "LastName": "Dotz",
                "HeadShot": "/cloud/profilephotos/Nathan-Dotz-ee77ae4e-6cc3-4b49-a48f-2a75fa6611a5.jpg",
                "UserName": "sleepynate",
                "Biography": "Nathan is a software engineer at Detroit Labs, where miracles are performed on mobile devices. He is a founding member of the All Hands Active Hackerspace, which has been working steadfastly to awesomify the brains of creators for over 4 years. He’s an open-source contributor, an open-education advocate, and a functional programming fanboy.\r\n",
                "WebSite": "http://www.sleepynate.com",
                "Company": "Detroit Labs",
                "Title": "Software Engineer",
                "Twitter": "nathandotz",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/sleepynate",
                "LastUpdated": "2014-04-14T13:51:57.473"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Ruby"
              },
              {
                "Name": "java"
              },
              {
                "Name": "Functional"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:55.127",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 163,
            "Title": "You've used git. You've used TFS. Why aren't you using them together?",
            "Description": "When you start a new job & they're using TFS, do you wish they were using git INSTEAD? Why don't YOU use them TOGETHER?\r\n\r\nThe git-tfs bridge enables the best of both worlds: TFS for devs who (like I used to say) \"have no interest in learning a command-line tool,\" while enabling those of use who have seen git solve version control challenges previously assumed unsolvable, to use our new git love.\r\n\r\nThis is a level 200 talk (meaning if you've never used git, this talk is not for you... yet. Go to a \"what is git?\" talk first. We will not cover the time-consuming \"what is a dvcs?\" topics and such). \r\n\r\nIf you've used both TFS & git, but only separately, or want to know even MORE about using both together, this talk is for you.\r\n",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T10:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Cori",
                "LastName": "Drew",
                "HeadShot": "/cloud/profilephotos/Cori-Drew-794d1ed4-1228-4b9e-8a3f-605bf1520dd4.jpg",
                "UserName": "coridrew",
                "Biography": "Cori Drew is a consultant with Improving Enterprises in Addison, TX. She started her programming career as a web developer before cutting her OOP teeth (& falling in love with C#) in 2003 in .NET Framework 1.1. Cori was a programmer for 8.5 years before discovering there was a developer community in 2009. Appreciation for growth & learning, enabled by our tech community, has inspired her to try to pay it forward.",
                "WebSite": "http://truncatedcodr.wordpress.com/",
                "Company": "Improving Enterprises",
                "Title": "Consultant",
                "Twitter": "@coridrew",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "coridrew",
                "LastUpdated": "2014-04-05T18:20:04.633"
              }
            ],
            "Tags": [
              {
                "Name": "Git"
              },
              {
                "Name": "tfs"
              },
              {
                "Name": "git-tfs"
              },
              {
                "Name": "git-tfs bridge"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:39:51.277",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "10:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 4442,
            "Title": "Lunch ( Monday )",
            "Description": "We know you want to eat right??? We might not have a campfire but we do have food. During lunch on Monday we will kick off this years epic open spaces.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T11:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              },
              {
                "Name": "Open Spaces"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:15:19.327",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "11:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 2169,
            "Title": "Azure Service Bus – Enabling Internet of Things",
            "Description": "Sensors on an assembly line. Cars driving down the freeway. Gamers playing the latest viral success. Attendees wandering around a conference? The proliferation of internet connected devices is creating ever increasing scenarios where you need to gather information from, and send message back to hundreds, thousands, or even millions of devices. Maybe you need to ingest and persist millions of messages per hour. In this session we’ll introduce you to Azure’s newest features that  you can leverage to help solve data flow challenges of the Internet of Things. ",
            "Category": "Cloud",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brent",
                "LastName": "Stineman",
                "HeadShot": "/cloud/profilephotos/Brent-Stineman-8f213be9-c893-4a96-a991-ddf244328ae9.jpg",
                "UserName": "bstineman",
                "Biography": "Brent Stineman has been in IT for over 20 years with a career that has spanned everything from mobile to mainframe. Most of this career has been focused on internet and distributed application development with the last 4 years being highly focused on Cloud Computing and the Windows Azure Platform. \r\n\r\nBrent began working with Windows Azure in early 2009 while a consultant with Sogeti USA. His efforts and passion led to his quick rise at Sogeti and eventual recognition as one of the inaugural Microsoft MVP for the Windows Azure platform in October of 2010. \r\n\r\nIn October of 2012, Brent left Sogeti to become a Technical Evangelist for Microsoft. In his new role he’s focused on helping ISVs in the US Central region adopt the Windows Azure platform. This allows him to more deeply pursue his passion for cloud and work with an even wider array of clients to solve the challenges and knock down the barriers of cloud adoption. Most recently, Brent has been doing this as part of the new Technical Evangelism and Development (TED) team within Microsoft’s corporate DPE group. ",
                "WebSite": "http://brentdacodemonkey.wordpress.com/",
                "Company": "Microsoft",
                "Title": "Cloud Evangelist",
                "Twitter": "@brentcodemonkey",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-07T12:47:23.467"
              }
            ],
            "Tags": [
              {
                "Name": "#azure #iot #mobile #messaging"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:36.58",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1236,
            "Title": "Fear",
            "Description": "We make thousands of decisions every single day. Some take thought, and some are just instinctual. How many of those decisions are based on fear? Fear of the unknown, fear of embarrassment, or maybe just fear of spiders? We will look at ways fear shapes our everyday lives, and how we can control it to make more rational decisions. Don’t let fear shut you down, make it an opportunity for success.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jeff",
                "LastName": "Blankenburg",
                "HeadShot": "/cloud/profilephotos/Jeff-Blankenburg-dcb1ab7e-80a6-43de-b607-74caebc554bb.jpg",
                "UserName": "jeffblankenburg",
                "Biography": "When I'm not preparing to speak at That Conference, I build stuff for mobile devices.",
                "WebSite": "http://jeffblankenburg.com",
                "Company": "Microsoft",
                "Title": "Senior Program Manager",
                "Twitter": "jeffblankenburg",
                "Facebook": "jeffblankenburg",
                "GooglePlus": null,
                "LinkedIn": "jeffblankenburg",
                "GitHub": "jeffblankenburg",
                "LastUpdated": "2014-03-31T15:04:30.76"
              }
            ],
            "Tags": [
              {
                "Name": "Soft Skills"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:38.32",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2408,
            "Title": "Gamification vs. Motivation in Children's Educational Apps",
            "Description": "One of the best ways to keep a mobile app user engaged is through gamification and a well thought-out reward system. Accomplish certain goals, and you’ll be rewarded with anything from points to badges to real world goods. But the real satisfaction is through elevating your social status … be the best amongst your friends!\r\n\r\nThis is most certainly true in mobile games. But does it really hold up in the domain of children’s educational apps? Perhaps, but not all gamification is created equal when targeting children. The apps must be fun, engaging, and keep a child wanting more. But what is the “more” that you should actually be targeting?",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Patrick",
                "LastName": "Seda",
                "HeadShot": "/cloud/profilephotos/Patrick-Seda-e684f8f7-ba83-4a06-b2ed-876cc2a716d6.jpg",
                "UserName": "pxtrick",
                "Biography": "Patrick is a Mobile Application Architect consultant and has created apps for all sizes of clients, including several Fortune 500 clients. Formerly a Professional Services Architect for Appcelerator, he is a Titanium fanboy who loves the capabilites enabling rapid and robust app development. Patrick is currently the Technical Lead at Propelics and is orchestrating enterprise app development.",
                "WebSite": "http://www.propelics.com",
                "Company": null,
                "Title": "Awesome",
                "Twitter": "pxtrick",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/patrickseda/",
                "GitHub": "patrickseda",
                "LastUpdated": "2014-04-15T04:08:32.267"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "motivation"
              },
              {
                "Name": "Games"
              },
              {
                "Name": "Education"
              },
              {
                "Name": "children"
              },
              {
                "Name": "gamification"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:48.343",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1162,
            "Title": "Hybrid mobile apps don't have to suck: Minimalist's Guide to Building Hybrid Mobile Apps",
            "Description": "Everyday, we're dealing with the great and terrible burden of choice. Native, Web or Hybrid; Angular, Ember or Backbone and the list goes on.\r\nSometimes we all get lost in the weeds of the documentation for the library/framework du jour.\r\n\r\nIn this session, I will share some ideas (and hopefully hear some of yours) to navigate around the mobile development landscape.\r\n\r\nThis session is not about \"Which should I choose?  Angular, Backbone, Ember?!?!”. There is a  4th, sensible choice of start small, understand the problems, and choose libraries where appropriate.\r\n\r\nWe will build a simple app using HTML, CSS, JavaScript and package it with PhoneGap build for app store submission  with a laser focus on simplicity. I'll also give you hard earned tips on how to make PhoneGap apps not suck: how to speed up buttons, and what user experiences to avoid. \r\n\r\nThe objective is to really understand the issues we're faced with (such as managing complexity, developing for multiple platforms, dependency management, testing, packaging for app stores and deployment) so that you can add tools & abstractions if/when they improve YOUR productivity and help YOU manage complexity.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Alper",
                "LastName": "Sunar",
                "HeadShot": "/cloud/profilephotos/Alper-Sunar-608f6cf4-768e-4a9d-98b7-5d786d92bec2.jpeg",
                "UserName": "AlperSunar",
                "Biography": "Software developer working with MS stack during the day and with HTML5, JS, PhoneGap, NodeJS, Ruby/Rails on the side.",
                "WebSite": "http://www.babybirdieapp.com",
                "Company": "Paylocity",
                "Title": "Web Developer",
                "Twitter": "asunar",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-06-20T14:59:11.15"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "css"
              },
              {
                "Name": "HTML"
              },
              {
                "Name": "PhoneGap"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T18:20:14.657",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1275,
            "Title": "Leon's Allegory of the Cave",
            "Description": "What is the role of the software developer in the modern world? We are more educated now than during any time in recorded human history. We have more access to tools and the ability to craft our own in order to better communicate with one another; to see the world in all of its various forms, beautiful and strange. All of this information, all of this knowledge and yet the quest for truth, understanding and wisdom has become increasingly strained. We adopt the ideologies and rituals of archetypes instead of masters and therein feel the hollowness of the modern human condition. In this session, I will present to you the teachings of my masters as I have come to understand them and the wisdom I’ve gained over the years in my relentless pursuit for truth in the modern world. Our collective existential ennui is distorting the very fabric of reality. Seeing the world as it truly is can free our minds to the infinite possibilities that lie before us. Can we be more than the context we are born into? Can we rise above the confining binds of hierarchy, class, status and the distortions of those we choose to associate ourselves? Let’s take some time to remember who we are, where we are going and discover, perhaps, why we are here.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Leon",
                "LastName": "Gersing",
                "HeadShot": "/cloud/profilephotos/Leon-Gersing-42582fb1-df39-4626-ba90-5f1575bd0dfa.png",
                "UserName": "rubybuddha",
                "Biography": "i tend binary zen gardens",
                "WebSite": "leongersing.com",
                "Company": "GitHub",
                "Title": "Developer",
                "Twitter": "rubybuddha",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "leongersing",
                "LastUpdated": "2014-04-10T21:26:55.057"
              }
            ],
            "Tags": [
              {
                "Name": "Soft Skills"
              },
              {
                "Name": "imagination"
              },
              {
                "Name": "freedom"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:45.637",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2412,
            "Title": "Linux for Windows Developers",
            "Description": "Do you feel left out from the cutting edge technology and development environments because you're stuck on\r\na Windows only platform? Or perhaps you're looking for a cheaper or more stable solution for your web accelerators,\r\nload balancers or other high performance network applications? In this session, we'll take a quick tour around\r\na Linux operating system. What's in the /usr partition? How do I compile an application? What is the XWindows \r\nsystem? We won't waste time talking about how distributionX is better or worse than distributionY! I'll share with \r\nyou how I got started administering and learning Linux systems and fell in love with the command line all over\r\nagain. Lets do some hacking together...",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "George",
                "LastName": "Heeres",
                "HeadShot": "/cloud/profilephotos/George-Heeres-43b7efc5-0967-4413-9887-74900b69a343.jpg",
                "UserName": "gheeres",
                "Biography": "I am a Senior Technology Consultant at the University of Wisconsin-Stevens Point with over 16 years of technology experience with an emphasis on web development. Throughout my career, I've worked as a server / network engineer and programmer simultaneously through concurrent employment, including starting my own ISP. Although starting a family has slowed me down a little, the passion remains and I make every effort to keep current with new technologies and best practices. \r\n\r\nMy philosophy on what it takes to be a developer is simple: If the code you wrote six months ago isn't garbage, then you're standing still. In our industry, if you're standing still... you're already moving backwards.",
                "WebSite": "http://blog.heeresonline.com/",
                "Company": "University of Wisconsin - Stevens Point",
                "Title": "Sr. Software Developer",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/+GeorgeHeeres",
                "LinkedIn": "https://www.linkedin.com/in/georgeheeres",
                "GitHub": "http://github.com/gheeres",
                "LastUpdated": "2014-04-15T04:12:49.897"
              }
            ],
            "Tags": [
              {
                "Name": "Linux"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:29:58.043",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2441,
            "Title": "MongoDB: The ultimate backpack for the cloud",
            "Description": "For the last 3 decades relational databases have ruled the development landscape.  Whenever a developer needed to store significant amounts of data they turned to their trusty RDBMS.  However, like everything in the development world, the reign of the RDBMS is being threatened by a new set of database leaders shouting the NoSQL mantra. MongoDB is one of the leaders on the frontline of the NoSQL revolution, and it is quickly gaining a large following and challenging relational databases for control of the cloud.\r\n\r\nIn this session I'll show you how easy it is to get up and running with MongoDB.  I'll walk through the entire installation process and build our first sample database all in under 2 minutes.  I'll cover the basics of querying the database using MongoDB's JSON based query syntax, how to scale your deployment using replication and sharding, and I'll finish up by showing you how easy it is to use MongoDB in your ASP.Net applications using the LINQ syntax you already know and love.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Joe",
                "LastName": "Brinkman",
                "HeadShot": "/cloud/profilephotos/Joe-Brinkman-98352b07-1f80-4ff2-b27d-f29f08cc48af.jpg",
                "UserName": "jbrinkman",
                "Biography": "Joe Brinkman started his programming career over 30 years ago while still in high.  Prior to co-founding DNN Corp, he served as CTO for DataSource Inc. where he led the effort for building an automation framework for working with Java J2EE.  As one of the original DotNetNuke core team members, Joe has spent the last 9 years helping to build and promote the #1 CMS for the Windows platform. Joe has co-authored multiple best-selling books for DNN and jQuery and is a frequent speaker at conferences and user groups.  When not working at the computer you can often find Joe in his woodshop buried in a pile of woodchips, working on his latest woodturning project.",
                "WebSite": "http://www.theaccidentalgeek.com",
                "Company": "DNN Corp.",
                "Title": "Technical Fellow, Co-Founder",
                "Twitter": "jbrinkman",
                "Facebook": "joe.brinkman",
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "jbrinkman",
                "LastUpdated": "2014-04-15T13:35:48.15"
              }
            ],
            "Tags": [
              {
                "Name": "MongoDB"
              },
              {
                "Name": "database"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:39.677",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2415,
            "Title": "One Delegate to Rule Them All: Understanding OWIN",
            "Description": "A list of keys, and a delegate: given a dictionary, return a Task. It is a strange fate that we should suffer so much fear and doubt over so small a thing. Yet from humble beginnings nearly four years ago, we have an open web standard for .NET that the community and Microsoft have fully embraced. From hosting with Katana or Helios to new frameworks and middleware free from the legacy of System.Web, the future of .NET web development will look much different from its past. This session will give a brief overview of OWIN and the current landscape, discuss its implications for .NET web application design, and review a real-world example of OWIN in action.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Keith",
                "LastName": "Dahlby",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "dahlbyk",
                "Biography": "Keith Dahlby is a new father, web developer, Git enthusiast, language geek and four-time C# MVP from Cedar Rapids, IA. By day he sells motorcycle parts at J&P Cycles; by night he sometimes blogs with Los Techies. His open source efforts include posh-git, a Git environment for PowerShell; and up-for-grabs.net, a site featuring open source projects looking to mentor new contributors. He's also a core contributor to LibGit2Sharp, used by GitHub for Windows and Git for Visual Studio. Keith has spoken at community events around the Midwest and studied Human-Computer Interaction at Iowa State University. His talks have been described as “terrific!”, “very interactive!”, and “the best I’ve seen all hour!”.",
                "WebSite": "http://keith.lostechies.com",
                "Company": "MAG Retail Group",
                "Title": "Software Developer",
                "Twitter": "dahlbyk",
                "Facebook": "dahlbyk",
                "GooglePlus": "KeithDahlby",
                "LinkedIn": "dahlbyk",
                "GitHub": "dahlbyk",
                "LastUpdated": "2014-04-14T04:55:16.933"
              }
            ],
            "Tags": [
              {
                "Name": ".net"
              },
              {
                "Name": "owin"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:43.97",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 100,
            "Title": "Rocking Out With Android Studio",
            "Description": "Android Development has come a long way with the release of Android Studio. In this sessions we will explore the power of Google’s new development platform – along with some tips and tricks for how to get the most out of it.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jonathan",
                "LastName": "Mills",
                "HeadShot": "/cloud/profilephotos/Jonathan-Mills-88da9c7b-c2e6-4e94-bb67-244f677e2e05-635350703632945767.jpeg",
                "UserName": "jonathanfmills",
                "Biography": "With over 18 years of experience in Software Development and Management, Jon has led and built agile teams in a wide range of environments from small start-ups to large scale financial institutions. As a skilled mentor and international speaker, Jon has the opportunity to promote positive management practices and personal development skills to developers and managers in many different situations. \r\nAs a director at PaigeTechnologies, Jon has the opportunity to help hiring managers identify and attract the best possible candidates for their IT needs. Jon is also able to work with potential candidates to teach them the skills necessary in the ever changing technology field. \r\nJon is able to ask the technical and tough questions of our clients to help drive beyond the initial job description and find a candidate that will be the right fit for the environment. Jon is able to observe trends in the work force in Kansas City and adapt a training program to meet those needs. All this helps PaigeTechnologies build a better workforce for the companies of the region.",
                "WebSite": "http://jonathanfmills.com",
                "Company": "Paige Technologies",
                "Title": "Research and Development",
                "Twitter": "@jonathanfmills",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/jonathanfmills",
                "GitHub": "https://github.com/jonathanfmills",
                "LastUpdated": "2014-05-07T14:40:15.213"
              }
            ],
            "Tags": [
              {
                "Name": "Android"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:29:59.497",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 1171,
            "Title": "Seeing the forest for the trees: Building Fully Featured HTML5 Mobile Apps",
            "Description": "Another year, another summer camp, and the war rages on in the battle between native vs. web mobile apps. While web technologies (HTML5, CSS3, JavaScript) continue to reach new heights in popularity, their usefulness when creating mobile apps is still questionable.  Many concerns exist: performance issues, responsiveness, mimicking a native UI, and more. \r\n\r\nIn this talk, I'll demonstrate that 2014 is THE year for web-based mobile application development.  The \"write once, run everywhere\" mantra for web may have been a pipe dream once but not anymore.  Using tools like KendoUI Mobile to create native UIs and PhoneGap Build to build the same app for different platforms (iOS, Android, and Windows Phone 8) in the cloud, I'll walk through the process of creating a sample app.  Along the way, I'll address all concerns, using my experience building my own successful PhoneGap app as a backdrop.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Matt",
                "LastName": "Netkow",
                "HeadShot": "/cloud/profilephotos/Matt-Netkow-5fc9bedd-7cb8-491b-b5a2-ccb5e21dea13.jpg",
                "UserName": "dotNetkow",
                "Biography": "Matt is a passionate polyglot software developer from Chicago.  By day, he works for The SAVO Group (Sales Enablement & Productivity SaaS) on the Consulting Services team, delivering custom integrations using primarily the .NET stack.  By night, he works on PhoneGap mobile apps, including his most recent success Fitwatchr, a Top 5 iOS Health & Fitness app for Fitbit and Weight Watchers members.",
                "WebSite": "http://www.netkow.com",
                "Company": "SAVO Group",
                "Title": "Senior Developer",
                "Twitter": "dotNetkow",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://www.github.com/dotNetkow",
                "LastUpdated": "2014-05-08T12:10:12.45"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Native"
              },
              {
                "Name": "css"
              },
              {
                "Name": "HTML"
              },
              {
                "Name": "PhoneGap"
              },
              {
                "Name": "KendoUI"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:46.98",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2200,
            "Title": "Slow Roasted AngularJS Best Practices",
            "Description": "Angular is the hottest client-side MVC framework today. But with so many new people learning it, the industry is short on lessons learned and best practices. This session will cover several Angular best practices learned while building a very large Angular application with over 100,000 lines of JavaScript. Learn how to organize your code, write effective and maintainable controllers, services and directives, communicate effectively between your Angular components, and generally do things the Angular way.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Joe",
                "LastName": "Eames",
                "HeadShot": "/cloud/profilephotos/Joe-Eames-79d0db70-5e02-499a-ae2d-2bf60ebfe834.jpg",
                "UserName": "JoeEames",
                "Biography": "Joe began his love of programming on an Apple III in BASIC. Although his preferred language is JavaScript, he has worked professionally with just about every major Microsoft language. He is currently a consultant and full time author for Pluralsight. Joe has always had a strong interest in education, and has worked both full and part time as a technical teacher for over ten years. He is a frequent blogger and speaker, organizer of ng-conf, the AngularJS conference (www.ng-conf.org), and a panelist on the JavaScript Jabber podcast (http://javascriptjabber.com/)",
                "WebSite": "www.pluralsight.com",
                "Company": "Watach Web Solutions",
                "Title": "Freelance Author",
                "Twitter": "josepheames",
                "Facebook": null,
                "GooglePlus": "https://google.com/+JoeEames",
                "LinkedIn": "https://www.linkedin.com/in/joeeames/",
                "GitHub": "https://github.com/joeeames",
                "LastUpdated": "2014-04-11T17:31:27.357"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Angular"
              },
              {
                "Name": "AngularJS"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:41.18",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 128,
            "Title": "Structuring Your TFS ALM Environment for the Long Haul",
            "Description": "Much like starting a campfire with a gallon of gasoline and a flamethrower, installing TFS for managing your software development efforts is relatively easy. Once the gas runs out, you need to keep things going, and you want to reduce the time and effort needed to maintain it, while at the same time not letting it burn itself out or explode. But how do you configure TFS to support your organization and team structure over the long haul? How many team project collections do you need? Which backend SCM system do you use? Do you create multiple team projects, or one team project to rule them all? Which process templates should you use? How much should you customize? Ahhhhhhhhhhh. So many questions!!\r\n\r\nThere are a lot of things to consider when setting up any ALM system, and making the wrong choices early on can cause major headaches (and HUGE consulting bills) down the road. Join Angela in reviewing best practices, discussing the ins and outs of how to structure your TFS projects, tips and tricks for setting up flexible and low maintenance systems, and get your most burning (see what I did there?) questions about TFS configuration answered! ",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Angela",
                "LastName": "Dugan",
                "HeadShot": "/cloud/profilephotos/Angela-Dugan-c9958264-93ab-444c-87a8-3aaf9d9c7c86.jpg",
                "UserName": "OakParkGirl",
                "Biography": "Angela Dugan is the Application Lifecycle Management (ALM) Practice Manager for Polaris Solutions, a small .NET development and ALM consulting firm based out of Chicago and St. Louis. Angela has been in software development since 1999, filling roles including business analyst, developer, tester, project manager, and architect. Angela spent 5+ years as an ALM Tools evangelist with Microsoft, helping customers across the Midwest to solve their toughest IT problems using improved processes and the Team Foundation Server tool suite. In 2011, she left Microsoft to follow her passion back into the consulting world where she could be far more hands-on with her customers, and is now running the ALM Practice at Polaris Solutions. Angela also runs the Chicago Visual Studio ALM user group, is an active organizer and speaker at several local conferences, is a Microsoft ALM MVP, and is a Certified Scrum master. \r\n\r\nOutside of wrangling TFS, Angela is an avid board gamer, an aspiring runner, and a Twitter addict. She lives in a 104 year old house in Oak Park that she is constantly working on/cursing at with her husband David.",
                "WebSite": "http://www.tfswhisperer.com/",
                "Company": "Polaris Solutions",
                "Title": "ALM Practice Manager",
                "Twitter": "OakParkGirl",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/pub/angela-dugan/1/979/1a6 ",
                "GitHub": null,
                "LastUpdated": "2014-04-03T17:23:48.37"
              }
            ],
            "Tags": [
              {
                "Name": "alm"
              },
              {
                "Name": "Team Foundation Server"
              },
              {
                "Name": "Application Lifecycle Management"
              },
              {
                "Name": "Process Improvement"
              },
              {
                "Name": "SCM"
              },
              {
                "Name": "Visual Studio"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:35.14",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4456,
            "Title": "That Wildlife",
            "Description": "Lions and tigers and bears, oh my!  Bring your family to this special event where Timbavati Wildlife Park will bring several wild animals to us and teach our little ones a bit about some awesome wildlife.  Experience the thrill of learning about an array of wonderful animals, while developing a personal connection with them.  \r\n\r\nWait, not enough? How about Free Admission to Timbavati Wildlife Park Upon check-in, each registered guest staying at the Kalahari Resort for That Conference will receive free general admission to Timbavati Wildlife Park! A value of up to $18.95 per ticket!  Check out their website for what the park has to offer.  \r\n\r\n\r\n\r\n",
            "Category": "Family",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T13:00:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              },
              {
                "Name": "Timbavati"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:08:05.223",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "1:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 2198,
            "Title": "$0 to $60,000 A Month In 6 Months - A Lean Startup Case Study on Agile Software Architecture",
            "Description": "Agile Development and Lean Startup are about creating cultures centered around the pursuit of knowledge, embracing \"I Don't Know\" as a perfectly acceptable answer, and an unacceptable solution. The companies that learn the fastest, win. From November 2013 through April 2014 MensStyleLab.com's revenue grew over 80% month over month, reaching over $60K in sales in a single month in April 2014. In this session I'll break down the steps that we took and what we learned along the way. We'll investigate the tools that startups use to measure and drive growth on a shoestring budget, and how these same principles can be applied anywhere to grow lean, with very little wasted time, effort, or resources.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Aaron",
                "LastName": "Hoffman",
                "HeadShot": "/cloud/profilephotos/Aaron-Hoffman-0c8cfe4e-46a0-41e4-88ef-eae2f5c663c1.jpg",
                "UserName": "aaronhoffman",
                "Biography": "Aaron is the Co-Founder & CEO of StoneFinch, an Agile Development and Data Analytics Consultancy based in Des Moines, Iowa. StoneFinch focuses on building lasting relationships and creating cultures of continuous learning. Aaron is also the Co-Founder and CTO of Men's Style Lab, a concierge menswear clothing company, a startup currently experiencing very rapid growth. He is a leader of the .NET User Group in Des Moines and is an active member of the entrepreneur community.",
                "WebSite": "http://stonefinch.com/",
                "Company": "StoneFinch",
                "Title": "Co-Founder & CEO",
                "Twitter": "aaron_hoffman",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/aaronhoffman/",
                "GitHub": "https://github.com/aaronhoffman",
                "LastUpdated": "2014-05-05T23:18:16.597"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "agile"
              },
              {
                "Name": "tools"
              },
              {
                "Name": "lean startup"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:21.61",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4,
            "Title": "A device in every chicken in every camp pot: IoT and embedded devices for people who love to code and make",
            "Description": "There's a lot of new stuff to talk about in this space. IoT is no longer just about Arduino, Netduino, and Raspberry Pi -- it's growing up as processors and their power requirements shrink. Learn how to make the most of your skills to code for everything from small microcontrollers up to embedded systems. Learn why you should look at this space as the next big opportunity. Convince your boss to let you get cool devices for research, and bring the challenge and fun of embedded programming back into your life. Also, we'll probably blink LEDs or maybe blow something up. Maybe both.",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Pete",
                "LastName": "Brown",
                "HeadShot": "/cloud/profilephotos/Pete-Brown-717bbc72-3a5a-405a-85db-714ef2d02fd3.jpg",
                "UserName": "Psychlist1972",
                "Biography": "XAML, gadget, and creative music apps guy at Microsoft. Creator of cool things in WPF and WinRT XAML, smeller of ozone, exploder of electrolytics, collector of synthesizers, and lover of all things 8 bit and retro, especially Commodore. Guy behind the WPF and creative music app demos at Build. Hangs around with people who find ways to get full operating systems on to postage stamp-sized computers. Sometimes known to hit his thumb with a hammer. Does not act his age.",
                "WebSite": "http://10rem.net",
                "Company": "Microsoft",
                "Title": "Geek",
                "Twitter": "@pete_brown",
                "Facebook": "http://facebook.com/pmbrown",
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-03-31T08:12:13.913"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "IoT"
              },
              {
                "Name": "Windows"
              },
              {
                "Name": "Embedded"
              },
              {
                "Name": "PCB"
              },
              {
                "Name": "Devices"
              },
              {
                "Name": "Connected"
              },
              {
                "Name": "Blinky"
              },
              {
                "Name": "Explosion"
              },
              {
                "Name": "Bang"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:35.937",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2330,
            "Title": "AngularJS - Top 10 Tips",
            "Description": "John created the AngularJS homepage videos, the AngularJS video site (http://egghead.io), and has been training developers on AngularJS since its inception. He’s picked up on many tricks and tips along the way and also seen where developers struggle with the concepts. He’ll teach the workflows and concepts that can only be learned through experience working across many different applications.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "John",
                "LastName": "Lindquist",
                "HeadShot": "/cloud/profilephotos/John-Lindquist-b7ee67fc-888a-45ad-96d0-dccf752379b1.jpg",
                "UserName": "johnlindquist",
                "Biography": "John is a Technology Evangelist at JetBrains (http://jetbrains.com) focusing on WebStorm.\r\n\r\nJohn has spent the majority of his career developing Rich Web Applications. Before joining JetBrains, he was a Technical Architect at Roundarch (http://roundarch.com) for 3 years leading large teams in building the latest and greatest in web apps for the Air Force, HBO, and Bloomberg. \r\n\r\nJohn focuses much of his free time on delivering high-quality video tutorials and offering them up for free on his youtube channel (http://youtube.com/johnlindquist).",
                "WebSite": "http://egghead.io",
                "Company": "JetBrains",
                "Title": "Developer",
                "Twitter": "@johnlindquist",
                "Facebook": null,
                "GooglePlus": "+johnlindquist",
                "LinkedIn": null,
                "GitHub": "https://github.com/johnlindquist",
                "LastUpdated": "2014-04-14T19:43:20.773"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "AngularJS"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:30.45",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2162,
            "Title": "Call of the Raven: RavenDB for the .NET Camper",
            "Description": "The NoSQL movement continues to pick up steam as Campers discover they don't need monolithic relational databases. Sometimes, we just need to get some work done and start storing our data without worrying about tables schemas or PM > Update-Database.\r\n\r\nWhat's a Camper to do?\r\n\r\nRavenDB might just be the ticket. The new RavenDB sports a high-speed managed storage engine, fully transactional document store, an HTML5 tooling, and -- oh yes! -- first-class LINQ support. What more could a Camper ask for, eh?",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Judah",
                "LastName": "Himango",
                "HeadShot": "/cloud/profilephotos/Judah-Himango-a44b68dc-f89b-49c7-8ed9-6d6f645c4f71-635349902626710095.jpg",
                "UserName": "JudahGabriel",
                "Biography": "I'm an independent software developer who likes building things. \r\nI've built stuff for big companies like 3M (3m.com/vas), tiny companies like youth homeless shelters (http://ysnmn.org). I've built stuff for my religious community (messianicradio.com, messianicchords.com, etzmitzvot.com). \r\nI'm a father of 2, husband, guitar player, and music lover.",
                "WebSite": "http://debuggerdotbreak.wordpress.com",
                "Company": "BitShuva",
                "Title": "Builder of Things",
                "Twitter": "@judahgabriel",
                "Facebook": "https://www.facebook.com/",
                "GooglePlus": "https://plus.google.com/+JudahHimango",
                "LinkedIn": "https://www.linkedin.com/pub/judah-himango/44/244/b74",
                "GitHub": "https://github.com/JudahGabriel",
                "LastUpdated": "2014-07-21T02:50:34.513"
              }
            ],
            "Tags": [
              {
                "Name": "NoSQL"
              },
              {
                "Name": "RavenDB"
              },
              {
                "Name": "database"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:33.197",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 37,
            "Title": "Don't go outside; stay inside and make your first Minecraft mod!",
            "Description": "That sandbox outside is crawling with ants and the neighborhood bully keeps knocking down your sand castle.  Forget that!  Stay inside where it's cool and you can play in your own private sandbox, Minecraft.  But did you know you can make it even better by writing your own mods?\r\n\r\nMy 8-year-old son is obsessed with Minecraft, so I thought I'd see what the fuss was all about.  I was instantly hooked--fascinated by the complexities of the game and further by its flexibility in extending and adding new features.  Bring your kids as I teach you the basics about writing your first Minecraft mod!  They come up with the ideas, and you make them happen!\r\n\r\nIn this session, I plan to cover:\r\n\r\n- Setting up your IDE (Eclipse)\r\n- Installing Minecraft Forge\r\n- Creating recipes, smelting, items, and blocks\r\n- Packaging your new mod\r\n\r\nThe recommended age for this session is 6th grade and up for children who want to learn about creating Minecraft mods using Eclipse.  Parents who want to work with their younger children (2nd through 5th grade) to create mods are welcome to join us as well!",
            "Category": "Family",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Phil",
                "LastName": "Van Houten",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "pvanhouten",
                "Biography": "I'm a geek; always have been, always will.  As a kid, I used to write programs in basic on my family's Apple IIc:\r\n10 PRINT \"Butt\"\r\n20 GOTO 10\r\nHilarious.\r\n\r\nWhen I started my career, I had aspirations to be a network engineer, but was reluctantly forced into software development due to lack of work one summer during college--best thing that could have happened to me.  Since then, I've worked primarily in a consulting role on the Microsoft stack: classic ASP, .NET 1.1 - 4.5, MS SQL, and IIS.  I have dabbled in other areas like Ruby, Python, Node.js, and Java and like to think of myself as a flexible learner.\r\n\r\nI currently work at SA Ignite, a healthcare startup based in Chicago, as principal engineer of the web stack.  I'm the father of two wonderful kids and married to my beautiful high school sweetheart.  My son's recent addiction to Minecraft has gotten me interested in modding and has given us something where we can excitedly share our individual discoveries in the game.",
                "WebSite": "http://geekswithblogs.net/pvanhouten/",
                "Company": "SA Ignite",
                "Title": "Principal Engineer",
                "Twitter": "pvanhouten",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "philvanhouten",
                "GitHub": "pvanhouten",
                "LastUpdated": "2014-03-31T14:25:49.277"
              }
            ],
            "Tags": [
              {
                "Name": "family"
              },
              {
                "Name": "kids"
              },
              {
                "Name": "minecraft"
              },
              {
                "Name": "java"
              },
              {
                "Name": "eclipse"
              },
              {
                "Name": "modding"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:40.877",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 12,
            "Title": "From Callback Hell to the JavaScript “Promise” Land",
            "Description": "We’ve all been there: buried 15 layers deep in JavaScript functions wondering where in the Callback Hell we are. How did we get here? Handling asynchronous code forces us to build an unmanageable stack of function calls, often leaving us buried beneath them. Is there a better way to handle this? Luckily, there is; I promise.\r\n\r\nJavaScript promises give us an elegant way to handle asynchronous code. Through the power of its “then” method, we’re able to chain, instead of stack, our logic together. We’ll dive into the core of promises, as well as how to break apart common Callback Hell scenarios into beautiful method chains that’d make the most experienced developer shed a tear.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brandon",
                "LastName": "Martinez",
                "HeadShot": "/cloud/profilephotos/Brandon-Martinez-2954a4df-7df5-4ae2-a758-37850470e654.jpg",
                "UserName": "brandonmartinez",
                "Biography": "Brandon is a software engineer working remotely in Ludington, Michigan for Skyline Technologies out of Appleton, Wisconsin. Specializing in .NET and Web Development, he has been honing his skills since junior high in both Microsoft and open source development.\r\nWhen he’s not coding, he enjoys spending his time with his wife and son, practicing his photography skills, playing guitar, or drinking a fresh cup of coffee.",
                "WebSite": "http://www.brandonmartinez.com/",
                "Company": "Skyline Technologies",
                "Title": "Software Engineer",
                "Twitter": "brandonmartinez",
                "Facebook": "http://facebook.brandonmartinez.com/",
                "GooglePlus": "http://google.brandonmartinez.com/",
                "LinkedIn": "http://linkedin.brandonmartinez.com/",
                "GitHub": "http://github.brandonmartinez.com/",
                "LastUpdated": "2014-03-31T12:56:02.15"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Promises"
              },
              {
                "Name": "ECMAScript 6"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:24.42",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1213,
            "Title": "HTML5 Mobile Apps Don't Have To Suck",
            "Description": "Sometimes, you've got to rock the boat to keep it from sinking. Belly's decision to scrap their native iPad app and build an HTML5 app was a risky move but proved to be one of the best decisions the startup has made. While mobile web is considered a harsh environment with low processing power, a few key techniques can be used to get the best performance out of your application. Belly's unique deployment platform, built on Phonegap's mobile framework, enables instantaneous software updates to any or all devices; making A/B testing a breeze. In this talk, Dave Arel will discuss how to build fast, proficient, native-like HTML5 mobile applications, and the enormous benefit it surely brings.\r\n",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dave",
                "LastName": "Arel",
                "HeadShot": "/cloud/profilephotos/David-Arel-e6b386ca-e85d-4cf0-9ce5-c54c07d08734.jpg",
                "UserName": "davearel",
                "Biography": "Dave Arel is a product engineer with a focus mainly in JavaScript. As the Director of JavaScript Engineering and Head of Front-End at Belly, he is directly responsible for the development of their [HTML5 iPad application](http://html5hub.com/html5-mobile-never-looked-so-good/) which is used by thousands of businesses and millions of users. So when it's not working properly, blame him. Dave is easily recognizable by his lack of hair and eau de hockey-bag cologne.\r\n\r\n@davearel | davearel.com | bellycard.com",
                "WebSite": "http://tech.bellycard.com",
                "Company": "Belly",
                "Title": "Director of JavaScript Engineering",
                "Twitter": "davearel",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/davearel",
                "GitHub": "https://github.com/davearel",
                "LastUpdated": "2014-05-13T20:39:48.207"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "hybrid apps"
              },
              {
                "Name": "PhoneGap"
              },
              {
                "Name": "Mobile Web"
              },
              {
                "Name": "ipad"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:27.43",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2366,
            "Title": "Inspiring a Culture of Innovation",
            "Description": "How do some companies always seem to come up with great new ideas?  Innovation isn’t a lucky coincidence.  It takes hard work and a culture that allows for savvy risk taking.  But, innovation isn’t just about the idea; it’s also about the execution.\r\n\r\nCompanies like Google, Amazon, Atlassian, Colgate-Palmolive and others have fostered innovation at all levels by leveraging their most important resources--humans.  We will learn how they inspired their employees then turned ideas into money-making initiatives.  We will discuss how managers can encourage innovation and how individuals can bring more creativity, freedom and happiness to your jobs.  \r\n",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Lauren",
                "LastName": "Amundson",
                "HeadShot": "/cloud/profilephotos/Lauren-Amundson-b8307b39-2a78-4d44-b052-38e2c8333c08-635421632340635043.jpg",
                "UserName": "laurenamundson",
                "Biography": "Lauren is Director, Development at SAVO Group, a mid-sized B2B web company in Chicago that specializes in enabling sales people to sell smarter.  She is passionate about writing beautiful code and inspiring her team to do the same.  She spends most of her coding time using C# and JavaScript.",
                "WebSite": "http://laurenamundson.com",
                "Company": "SAVO Group",
                "Title": "Director, Development",
                "Twitter": "laurenamundson",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-28T16:54:38.58"
              }
            ],
            "Tags": [
              {
                "Name": "Management"
              },
              {
                "Name": "Soft-Skills"
              },
              {
                "Name": "Job Satisfaction"
              },
              {
                "Name": "Innovation"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:34.577",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1207,
            "Title": "Syncing Is Hard",
            "Description": "If you're building a mobile app or a client-heavy HTML/JavaScript app, there's probably data that you manipulate locally on a device and also store on a server. That means you're syncing, and syncing is hard. This talk will cover all the things you're probably NOT thinking about when rolling your own syncing engine, like offline caching, change notification, and advanced conflict resolution. Drawing from his experience at Dropbox and Microsoft, Steve will discuss the thorny challenges and potential solutions for sync.",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Steve",
                "LastName": "Marx",
                "HeadShot": "/cloud/profilephotos/Steve-Marx-707382ad-b302-4374-a791-c40d16b1bc06.jpg",
                "UserName": "smarx",
                "Biography": "Steve Marx is a Developer Advocate for Dropbox, helping developers make better applications with the power of Dropbox’s platform. Prior to joining Dropbox, Steve founded Webscript.io and Site44, which uses Dropbox’s API to turn Dropbox folders into websites. Previously, Steve spent 10 years at Microsoft working on developer platforms, most recently Microsoft’s cloud platform, Windows Azure.",
                "WebSite": "http://smarx.com",
                "Company": "Dropbox",
                "Title": "Developer Advocate",
                "Twitter": "smarx",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "smarx",
                "LastUpdated": "2014-04-07T20:12:43.933"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Cloud"
              },
              {
                "Name": "Storage"
              },
              {
                "Name": "sync"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:37.273",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2210,
            "Title": "The Cloud Mixing Bowl",
            "Description": "How many times have you heard, \"Use the right tool for the job,\" followed up with \"We are a .NET shop?\" The right tool for the job might be an existing Ruby gem, nodejs package, .NET library, or trusted partner's system. This talk focuses on cross-platform communication leveraging a system split between node on Heroku and .NET on Windows Azure. Learn how to utilize Windows Azure Service Bus to glue together these different languages and platforms.",
            "Category": "Cloud",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dennis",
                "LastName": "Burton",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "dburton",
                "Biography": "Dennis Burton is a web developer who constantly challenges the norm. He is a Windows Azure Insider and MVP that is known for taking tools and frameworks from non-Microsoft ecosystems and running them on Windows Azure. You will often find him developing nodejs projects on his Mac using Visual Studio with the vim extension. Dennis's multi-platform passions also extend to his community involvement, where he serves as an organizer for both the Southeast Michigan JavaScript meetup and the Ann Arbor .NET Developer Group.\t",
                "WebSite": "http://developusing.net",
                "Company": "Arana Software",
                "Title": "Problem Solver",
                "Twitter": "dburton",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "dennisburton",
                "LastUpdated": "2014-04-11T21:00:43.7"
              }
            ],
            "Tags": [
              {
                "Name": "Azure"
              },
              {
                "Name": "Service Bus"
              },
              {
                "Name": "heroku"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:29.097",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2402,
            "Title": "The Open Source Survival Guide for Women",
            "Description": "Open source is the foundation on which the modern internet economy is built. But women are significantly underrepresented in the community-- in fact, only 10% of female developers contribute to open source. In this talk we will explore why participating in open source is so important, how it can be an expression of our shared values, and discuss resources and strategies to help women navigate and thrive in this often hostile environment.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Coraline",
                "LastName": "Ehmke",
                "HeadShot": "/cloud/profilephotos/Coraline-Ehmke-e58f6a89-792d-4796-a2fe-75ac0b073714.png",
                "UserName": "Bantik",
                "Biography": "Coraline Ada Ehmke is a speaker, author, teacher, open source advocate and technologist with 20 years of experience in developing apps for the web. As a founding member of LGBTech.org, CultureOffset.org, and OpenSourceForWomen.org, she works diligently to promote diversity and inclusivity in the tech industry. Her current interests include small-application ecosystems, APIs, business intelligence, machine learning, and predictive analytics.",
                "WebSite": "http://bantik.github.io",
                "Company": "Instructure",
                "Title": "Senior Software Engineer",
                "Twitter": "Bantik",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "Bantik",
                "LastUpdated": "2014-04-15T03:18:20.46"
              }
            ],
            "Tags": [
              {
                "Name": "open source"
              },
              {
                "Name": "diversity"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:26.067",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1261,
            "Title": "Working with TypeScript",
            "Description": "The best things about JavaScript is that it runs everywhere, has great dynamic features and implements wonderful functional behavior. The worst thing, well, that's a harder question. Overall, JavaScript is a great language, but it's not easy to be productive when working on large projects. \r\nIn this talk, you'll learn how TypeScript was designed to extend and embrace JavaScript idioms on large scale projects. You can be dynamic and free. You can also have tools help you out to ensure correct code and behavior. TypeScript also adds language support for common JavaScript development patterns. You'll be able to clearly express the same designs you use in JavaScript more concisely and clearly.\r\n\r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Bill",
                "LastName": "Wagner",
                "HeadShot": "/cloud/profilephotos/Bill-Wagner-6336fa9a-a680-4bd1-b9a5-17f6c6f5fb74.jpg",
                "UserName": "BillWagner1",
                "Biography": "Bill’s technical time is spent between curly braces, primarily with C#. His technical areas of focus are C#, .NET, TypeScript. His other, non-coding passion is to help organizations build effective, high-functioning developer teams. Bill is the author of the best selling \"Effective C#\", now in its second edition, and \"More Effective C#\". He has created LiveLessons on Async programming in C# and C# Puzzlers. His articles have appeared in MSDN Magazine, the C# Developer Center, Visual C++ Developer's Journal, Visual Studio Magazine, ASP.NET Pro, .NET Developer's Journal and more. He's written hundreds of technical articles for software developers. He actively blogs about technical and business topics at http://thebillwagner.com. Bill is also a regional director for Microsoft.\r\n",
                "WebSite": "http://thebillwagner.com",
                "Company": "Bill Wagner Software ",
                "Title": "Founder",
                "Twitter": "@billwagner",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/BillWagner",
                "LastUpdated": "2014-04-10T13:55:59.97"
              }
            ],
            "Tags": [
              {
                "Name": "TypeScript"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:22.977",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2271,
            "Title": "You Can’t Always Be Hiking – Ways to Hack Your Day to Better Health",
            "Description": "Developers do awesome things by creating apps and web sites that make users go ooh and ahh (and possibly occasionally curse).\r\nDespite doing awesome things for those around you, you generally are not doing awesome things for yourself. Sitting all day is\r\nbad for you. Noshing pizza to rip through a late night code jam isn’t optimal eating. Missing sleep trying to ship code is\r\nnot great. In this presentation, we will talk through some ways developers can hack their day to better health with some simple steps\r\nand ideas you can incorporate in your day to make sure you are still slinging code in the old folks home.\r\n",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T14:30:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "John",
                "LastName": "Ptacek",
                "HeadShot": "/cloud/profilephotos/John-Ptacek-e075198b-c8b7-47b2-b8a9-15298bda3368.png",
                "UserName": "jptacek",
                "Biography": "John is a Skyline Technologies Senior Engineer where his primary focus is the design, development and solutions for customers on the web; sometimes with MVC, occasionally SharePoint, sometimes with duct tape and often on Azure. His experiences at Skyline have included a diverse set of technologies such as C#, Silverlight, XAML, SharePoint, web, JavaScript and has led him around the world. He live in Appleton, WI with his wife and a gaggle of children who are usually playing music. Follow him on twitter @jptacek or on his blog at http://www.jptacek.com. . ",
                "WebSite": "http://www.jptacek.com",
                "Company": "Skyline Technologies.com",
                "Title": "Chief Bacon Maker",
                "Twitter": "jptacek",
                "Facebook": null,
                "GooglePlus": "http://www.google.com/+johnptacek",
                "LinkedIn": "http://www.linkedin.com/in/johnptacek",
                "GitHub": "http://www.github.com/jptacek",
                "LastUpdated": "2014-05-16T13:31:25.05"
              }
            ],
            "Tags": [
              {
                "Name": "Health"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:31.797",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "2:30 PM"
      },
      {
        "Sessions": [
          {
            "Id": 148,
            "Title": "Bitcoin and Cryptocurrency: How Does It Work?",
            "Description": "The Internet has enabled a lot of digital substitutions in our lives. Email, Google Maps, iTunes, Netflix, Craigslist, Amazon - all have largely replaced antiquated \"real world\" systems and businesses that were commonly used only a decade ago. But what about money itself? Bitcoin, and its many offshoots, was created with the vision of being the Internet’s Currency that could be exchanged from one person to another without requiring governments or banks to intermediate. This talk will introduce cryptocurrency, and deep dive into some of the underlying concepts such as transactions and blocks, hashing, mining, proof-of-work, digital signatures, and transaction malleability. ",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jason",
                "LastName": "Follas",
                "HeadShot": "/cloud/profilephotos/Jason-Follas-07c33dd5-c73e-43a8-8264-c577d48d723f.jpg",
                "UserName": "jfollas",
                "Biography": "Jason Follas has spent the better part of the past twenty years successfully delivering software for clients in the manufacturing, engineering, and financial services sectors. He is a frequent speaker at conferences and user groups, and loves the opportunity to teach as well as to learn from others. His career has been centered around the use of Microsoft technologies, from ASP.NET and SQL Server to writing Windows Store and Windows Phone applications. Most recently, he has focused on writing web client apps using HTML5 and JavaScript.\r\n\r\nJason was previously a Microsoft MVP for SQL, and is currently a Microsoft MVP for Visual C#. When not working or speaking, you can find him writing a number of casual games currently in the Windows Store, fishing for catfish in the local river, or riding his motorcycle across the flattest part of Ohio.",
                "WebSite": "http://jasonfollas.com",
                "Company": "Falafel Software",
                "Title": "Sr. Software Architect",
                "Twitter": "jfollas",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/jfollas",
                "GitHub": "https://github.com/jfollas",
                "LastUpdated": "2014-06-14T15:37:05.897"
              }
            ],
            "Tags": [
              {
                "Name": "bitcoin"
              },
              {
                "Name": "commerce"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T04:27:44.343",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2296,
            "Title": "Cloud - It's More than Just Virtual Machines",
            "Description": "One of the aspects of Cloud Service providers to look at is the additional, value-add services that they provide beyond just virtual machines managed outside your data center.  Windows Azure offers a cornucopia of options for services that can help you secure your applications, provide communication foundations and use in your solutions.  The presentation will provide an overview of several of these options, including: Windows Azure Active Directory, Service Bus Brokered Messaging, Windows Azure Caching and Windows Azure Storage.\r\n",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "Wood",
                "HeadShot": "/cloud/profilephotos/Mike-Wood-d743ba1f-71fa-46ee-88b4-7e79dedf2138-635349752488097894.jpg",
                "UserName": "mikewo",
                "Biography": "Mike Wood is a Technical Evangelist for Red Gate Software on the Cerebrata Team. He describes himself as a problem solving, outdoorsy, user group founding, dog-loving, blog writing, solution creating, event planning, married, technology speaking, father of one kind of guy. When he's not living up to that title he's an avid reader, (horrible) violinist and gamer. Michael is one of the Founding Directors of the Cincinnati .NET User Group as well as the founder of the Cincinnati Software Architecture Special Interest Group.  He is also a Microsoft MVP in Windows Azure. You can catch up with Mike on his blog at http://mvwood.com/blog and on twitter under the handle @mikewo.",
                "WebSite": "http://www.mvwood.com",
                "Company": "Red Gate",
                "Title": "Technical Evangelist",
                "Twitter": "mikewo",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/mikewo/",
                "GitHub": null,
                "LastUpdated": "2014-05-06T12:15:07.333"
              }
            ],
            "Tags": [
              {
                "Name": "Azure"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:25.01",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1252,
            "Title": "Cross Platform Phone Dev with AngularJS and PhoneGap",
            "Description": "Use AngularJS and the PhoneGap frameworks to  to write IOS, Android and Windows Phone apps with one code base.  Find out the different approaches for cross platform development and see how to choose the right one.  Learn how write your application once and run it on multiple phone platforms.  See how to setup the development environment,  write code that works in the browser and phone, see how to debug and learn the different options for building your apps.  We will look at the PhoneGap build service and how to build locally.  Learn how to setup and monitor beta tests with Test Flight.  Learn the gotchas, tips and tricks for making your code run correctly on different devices.  Learn how to access the GPS, Camera, Contacts, etc. all from JavaScript.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Roger",
                "LastName": "Brogan",
                "HeadShot": "/cloud/profilephotos/Roger-Brogan-af235b3d-a8bd-4c0f-9da7-7bbec5b329b0-635350724250376304.jpg",
                "UserName": "RogerBrogan",
                "Biography": "Roger Brogan has been in the IT industry for over 14 years. In 1997, he founded CyberNet Solutions Inc.\r\nin order to pursue his career in IT consulting and training. He has many IT certifications including, A+, \r\nCertified Novell Administrator, Microsoft Certified Trainer, Microsoft Certified Solutions Developer .NET, \r\nCertified Java Programmer, Certified Java Instructor and a few others. For most of the past 12 years, \r\nhe has specialized in trainer computer programmers and computer administrators. He has taught \r\nclasses for many large companies including Dell, IBM, SUN, Discover, Blue Cross Blue Shield, Avaya, Ace \r\nHardware and many others. Teaching these courses have taken him over most of the United States and \r\na few international locations as well. He has taught classes in India, Israel and Ireland. He is currently \r\nspecializing in cloud, mobile, security and virtualization technologies. He currently resides in downtown \r\nChicago and still often travels for business. He specializes in ASP.NET and Azure cloud development and \r\nMicrosoft’s ASP.NET based servers and products such as SharePoint Services and SQL Server.",
                "WebSite": "http://www.cybernetsolutions.com",
                "Company": "CyberNet Solutions",
                "Title": "President",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/roger-brogan/1/31a/246",
                "GitHub": null,
                "LastUpdated": "2014-05-07T15:13:49.92"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "ios"
              },
              {
                "Name": "Angular"
              },
              {
                "Name": "AngularJS"
              },
              {
                "Name": "Android"
              },
              {
                "Name": "Windows Phone"
              },
              {
                "Name": "PhoneGap"
              },
              {
                "Name": "Phone"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:26.573",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2289,
            "Title": "Cryptography Ghost Stories",
            "Description": "Heartbleed. Target. Safari. Snapchat. NSA.\r\n\r\nIf you don't understand how cryptography works, you are in real danger of misusing it. Such mistakes can be extremely costly.\r\n\r\nIt doesn't have to be difficult. The mathematics behind modern cryptography is surprisingly simple. It isn't the complexity of the math that makes digital cryptography effective. On the contrary, the simplicity of the math gives us confidence that we've learned enough about the space to trust the results. I'll show you the formulas, and demonstrate exactly why -- and how far -- you can trust them.",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Michael",
                "LastName": "Perry",
                "HeadShot": "/cloud/profilephotos/Michael-Perry-f97bad0a-8e4e-406b-8b8c-89c452eaed81.jpg",
                "UserName": "michaellperry",
                "Biography": "Software is math. Every class is a theorem. The compiler is the proof. And unit tests check our work.\r\nMichael has recorded Pluralsight courses on CQRS, XAML Patterns, and Cryptography, in addition to Provable Code. He maintains the spoon-bending Update Controls and Correspondence open-source libraries. And he helps his clients at Improving Enterprises benefit from the power of software mathematics. You can find out more at qedcode.com.\r\n",
                "WebSite": "http://qedcode.com",
                "Company": "Improving Enterprises",
                "Title": "Principal Consultant",
                "Twitter": "michaellperry",
                "Facebook": "michael.leo.perry",
                "GooglePlus": "mperry@mallardsoft.com",
                "LinkedIn": "michaellperry",
                "GitHub": "michaellperry",
                "LastUpdated": "2014-04-07T03:09:55.953"
              }
            ],
            "Tags": [
              {
                "Name": "security"
              },
              {
                "Name": "Encryption"
              },
              {
                "Name": "Cryptography"
              },
              {
                "Name": "nsa"
              },
              {
                "Name": "heartbleed"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:22.233",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2300,
            "Title": "Deep Dive into Git",
            "Description": "Git has quickly become an incredibly popular version control system, but how does it actually work?  It's very different from a centralized version control system, and understanding how it models history allows you to understand how to use it.  In this session you will learn more about how Git actually works under the covers and how distributed version control is both fast and flexible.  We will learn the fundamentals of a repository and how to successfully collaborate with other developers using Git.",
            "Category": "Other",
            "Level": "400",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Edward",
                "LastName": "Thomson",
                "HeadShot": "/cloud/profilephotos/Edward-Thomson-c58df67d-e6bc-48e5-89fc-a36c2c6a74b9-635350067204240748.JPG",
                "UserName": "ethomson",
                "Biography": "Edward Thomson is a Senior Software Development Engineer at Microsoft, where he develops the core Git functionality for Visual Studio and Team Foundation Server.  Edward is the author of the Git section of Professional Team Foundation Server 2013, available from Wrox Press, and a core contributor to the open-source libgit2 project that provides the underlying Git repository management functionality for a number of applications.  Before joining Microsoft, Edward developed version control tools at Teamprise and SourceGear.  You can find Edward on Twitter as @ethomson and online at http://www.edwardthomson.com/.",
                "WebSite": "http://www.edwardthomson.com/",
                "Company": "Microsoft",
                "Title": "Software Development Engineer",
                "Twitter": "@ethomson",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/ethomson/",
                "LastUpdated": "2014-05-06T20:58:40.423"
              }
            ],
            "Tags": [
              {
                "Name": "Git"
              },
              {
                "Name": "Version Control"
              },
              {
                "Name": "dvcs"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:17.813",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1250,
            "Title": "From Muppets to Mastery: Core UX Principles from Mr. Jim Henson ",
            "Description": "\r\nJim Henson started working as a puppeteer in 1954, a fair 40-50 years before many of us even considered User Experience as a career. He did, however, take it upon himself to apply many of the core principles that UX Designers are falling love with today (or are at least using as part of our everyday lives). Hang out for a quick dive into the life of Jim Henson, with a view into his work from the perspective of how it pertains to what it is we’re doing today, that promises to even leave Waldorf and Statler happy.\r\n\r\nAnd yes, there will be muppets.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Russ",
                "LastName": "Unger",
                "HeadShot": "/cloud/profilephotos/Russ-Unger-e6c54b0e-6dca-43c4-9291-2940e562f655.jpg",
                "UserName": "runger",
                "Biography": "Russ Unger is an Experience Design Director for GE Capital Americas where he leads teams and projects in design and research . He is co-author of the book “A Project Guide to UX Design”, “Designing the Conversation”, and “Speaker Camp” for Peachpit Press (Voices That Matter). Russ is also working on a book on guerrilla design and research methods that is due out well, sometime. \r\n\r\nRuss is co-founder of ChicagoCamps, which hosts low-cost, high-value technology events in the Chicago area, and he is also on the Advisory Board for the Department of Web Design and Development at Harrington College of Design. Russ has 2 daughters who both draw better than he does and are currently beginning to surpass his limited abilities in coding.\r\n\r\nHe really wants you to go to Prototypes, Process & Play (http://pppconf.com) in Chicago this summer, too.",
                "WebSite": "http://userglue.com",
                "Company": "GE Capital Americas",
                "Title": "Experience Design Director",
                "Twitter": "russu",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-05T23:46:42.19"
              }
            ],
            "Tags": [
              {
                "Name": "UX"
              },
              {
                "Name": "Muppets"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:27.94",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2430,
            "Title": "Google Cloud Platform & App Engine - The Swiss Army Knife PaaS",
            "Description": "Presenters:\r\nEvan Carothers (CEO - Docalytics.com)\r\nRyan Morlok (CTO - Docalytics.com)\r\n\r\nGoogle App Engine (GAE) is a very strong platform-as-a-service offering, running on the same infrastructure Google uses for many of it's own systems, including Google Apps. It allows a high level of abstraction most cloud/platform providers can't touch, while offering you a plethora of tools and APIs to leverage to easily scale a product without all the headaches of system administration & setup.\r\n\r\nMassively scaling an app for high traffic on GAE and Google Cloud is almost as easy as putting in your credit card and turning a few dials. GAE offers many APIs you can use with minimal to no setup, including their proprietary noSQL datastore (bigtable), SQL, Memcached, task queues, XMPP, MapReduce, sockets, and more. As exciting as this sounds, GAE isn't exactly a silver bullet - it's a great choice for certain types of application, and a poor choice for others. Understanding the restrictions GAE places on your application architecture is very important before diving in, and knowing where GAE excels and where it's limiting can help you vet a decision to move forward with it as your selected service provider.\r\n\r\nOver 2 years of developing Docalytics (and previous apps on GAE) we have learned the ins and outs of GAE as a provider, and the best ways to leverage their offering to easily run complex apps at scale while keeping costs down and performance high. Though GAE offers Python, Java, PHP, and Go language support, this session will focus primarily on their Python version, with many of the platform concepts being language-agnostic. We will discuss application architecture decisions, platform gotchas & limitations, vetting GAE versus other cloud/PaaS providers, and strategies for long-term development on GAE.",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Evan",
                "LastName": "Carothers",
                "HeadShot": "/cloud/profilephotos/Evan-Carothers-b049a59c-ba0a-4997-bc8e-03a75953c6b0.png",
                "UserName": "ecarot",
                "Biography": "Experienced startup-focused web/software developer, designer, and architect who works comfortably across the entire tech stack, from backend servers all the way to the front-facing presentation layer,. Evan has built and managed multiple high-volume production applications and platforms to run reliably and at scale.",
                "WebSite": "www.docalytics.com",
                "Company": "Docalytics",
                "Title": "CEO",
                "Twitter": "docalytics",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-15T05:36:27.283"
              }
            ],
            "Tags": [
              {
                "Name": "Architecture"
              },
              {
                "Name": "paas"
              },
              {
                "Name": "Google Cloud"
              },
              {
                "Name": "App Engine"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:20.753",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2418,
            "Title": "Microsoft Azure Web Sites for the Web Developer",
            "Description": "Do you develop web applications and services using Classic ASP, ASP.NET, PHP or Node.js? If the answer is yes, you should get acquainted with Microsoft Azure Web Sites.\r\n\r\nIn this session, Microsoft Azure MVP, Eric D. Boyd will walk you through what Microsoft Azure Web Sites is all about, and it’s not your father’s Azure. If you’ve been scared away from Azure by the complexity of Azure Cloud Services, Web and Worker roles, and all the complex PaaS talk, don’t fear. Azure Web Sites removes all of this complexity and simplifies the cloud for the web developer. And you still get all of the benefits of self-service, elastic, economy of scale cloud services.\r\n\r\nYou will leave this session knowing how to:\r\n•\tGet started with Microsoft Azure Web Sites\r\n•\tSetup WordPress and another web applications in minutes\r\n•\tDeploy your own applications on-demand using FTP, Web Deploy and Command Line Interfaces\r\n•\tSetup continuous deployment using TFS, GIT and even Dropbox\r\n\r\nYou’ll also learn how to scale up your web site during heavy load and how to automate the scaling decisions so you don’t have to worry about.\r\n\r\nIn addition to the how to lessons, Eric will raise the hood on Azure Web Sites and show you how the service is architected, and how Microsoft delivers such an easy to use platform, that’s powerful and reliable, on top of existing Azure services.\r\n\r\nIf you’re a web developer, this is a session you won’t want to miss.\r\n",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Eric",
                "LastName": "Boyd",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "ericdboyd",
                "Biography": "Eric D. Boyd is the Founder and CEO of responsiveX, a Windows Azure MVP, and a regular speaker at national conferences, regional code camps and local user groups. He is so passionate about apps and cloud services that he founded responsiveX (www.responsiveX.com), a management and technology consultancy that helps customers create great web, mobile and client experiences, and these apps are often powered by cloud services. Eric launched his technology career almost two decades ago with a web development startup and has served in multiple roles since including developer, consultant, technology executive and business owner. You can find Eric blogging at http://www.EricDBoyd.com and on Twitter at http://twitter.com/EricDBoyd.  ",
                "WebSite": "http://www.EricDBoyd.com",
                "Company": "responsiveX",
                "Title": "Founder & CEO",
                "Twitter": "EricDBoyd",
                "Facebook": "EricDBoyd",
                "GooglePlus": "EricDBoyd",
                "LinkedIn": "EricDBoyd",
                "GitHub": "EricDBoyd",
                "LastUpdated": "2014-04-15T04:50:24.767"
              }
            ],
            "Tags": [
              {
                "Name": "Azure"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:19.347",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4460,
            "Title": "Paddle Your Own Canoe--Navigating the Computer Science Career Backwater                                                                                                                                                            ",
            "Description": "Ever wonder what you want to do when you “grow up”?  Have you ever considered a career in technology, but don’t know where to start?  Would you like to try a job now to see if you like the job before you start your career?  If the answer to any of these questions is yes, this session is for you.  We will talk about the future demand for careers in computer science and what that means for you.  We will talk about the education necessary to enter the field and what you can start doing now to prepare.  We will point you to several resources to help you get started now so you can start building skills before you get into college.  Who knows, you may become the next teenager to build and sell an app to a large company for 30 million dollars!",
            "Category": "Family",
            "Level": "400",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Derek",
                "LastName": "Curtis",
                "HeadShot": "/cloud/profilephotos/Derek-Curtis-9219537b-f50b-4f77-be9c-b00f6201013a-635358034959954350.jpg",
                "UserName": "bobvbob",
                "Biography": "I am a husband and father, first. I love spending time with my family. They are the best part of my life. My wife and our six children really define who I am and who I want to become. After dropping out of college to start a short-lived business (9 months), I earned a Bachelor of General Studies from Brigham Young University and later an MBA from DePaul University. I started programming on a dare from one of my managers and I have been programming ever since.  I went independent and started my own company in 2005 so I could have more control over the my career and haven't looked back.  My clients have included: Jockey, NEC Displays, Fellowes, BMC, Federal Home Loan Bank of Chicago, and Kraft Foods, \r\n\r\nI love my profession! Programming has been a wonderful outlet to combine right-brained creativity with left-brained numbers and logic. I am passionate about teaching a younger generation to program. ",
                "WebSite": "http://www.plaidpony.com",
                "Company": "Plaid Pony Technology Solutions LLC",
                "Title": "President",
                "Twitter": "@plaidponytech",
                "Facebook": "https://www.facebook.com/bobvbob",
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/derekcurtis",
                "GitHub": null,
                "LastUpdated": "2014-05-16T02:19:05.99"
              }
            ],
            "Tags": [
              {
                "Name": "Education"
              },
              {
                "Name": "Careers"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:56.84",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 155,
            "Title": "Real World Single Page Apps: A Knockout Case Study",
            "Description": "Typical technology sessions walk through a trivial example application to give you a taste of the technology. So hey, let’s do the opposite! In this session we’ll dissect a highly complex single page application that's soon to be used by over 1,000 automotive dealerships to finance and sell cars.\r\n\r\nWe’ll walk through how to manage a pure client-side application with 1000’s of lines of custom JavaScript and review how Web API, Knockout, RequireJS, KendoUI, and surprisingly little jQuery can join forces to make the browser sing. You’ll gain a clear understanding of when a single page app approach makes sense and learn how to pragmatically divide responsibilities between the client and server. We’ll compare the performance of a complex web apps in modern browsers to older versions of Internet Explorer. And we’ll close out by discussing multiple principals for creating single page applications.  This session will give you an appreciation for how far you can push ultra-responsive client-side rendering in the real-world.\r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Cory",
                "LastName": "House",
                "HeadShot": "/cloud/profilephotos/Cory-House-b8e1794c-ae6a-47fb-8cb9-5c162ddf0a99.jpg",
                "UserName": "housecor",
                "Biography": "Cory is founder of Bitnative LLC, an agile software development and training consultancy. He is a Microsoft MVP (C#), Pluralsight author, INETA speaker, independent consultant, and blogger with 15 years experience in full-stack software development. As a software architect at VinSolutions, Cory specializes in creating C# .NET and JavaScript based single page applications for the automotive industry. He regularly speaks on clean code, architecture, and software career development at conferences and user groups across the country. Cory is author of \"Clean Code: Writing Code for Humans\", \"Architecting Applications in .NET\", and \"Becoming an Outlier\" on Pluralsight. Cory blogs at bitnative.com and is active on Twitter as @housecor.",
                "WebSite": "http://www.bitnative.com",
                "Company": "Bitnative LLC",
                "Title": "President",
                "Twitter": "housecor",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/u/0/104997628038333365690/posts",
                "LinkedIn": "https://www.linkedin.com/profile/view?id=4609328&trk=nav_responsive_tab_profile",
                "GitHub": "https://github.com/coryhouse",
                "LastUpdated": "2014-07-06T02:53:16.337"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "RequireJS"
              },
              {
                "Name": "Durandal"
              },
              {
                "Name": "Knockout"
              },
              {
                "Name": "Web API"
              },
              {
                "Name": "SPA"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "Single Page Applications"
              },
              {
                "Name": "KendoUI"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T04:27:47.217",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2311,
            "Title": "UX Antipatterns: Hidden User Traps in Sites and Apps",
            "Description": "Let’s face it, as designers we’ve all been guilty of carelessly adopting popular usability and design conventions from time to time. Usually, we get the benefit of someone else’s thoughtfulness and research - no effort required. Unfortunately, popular solutions to user interface problems are sometimes actually counterproductive.\r\n\r\nIn this session, Michael Boeke will be discussing user experience antipatterns - design conventions that appear to be good solutions at first, but actually end up hampering usability. We’ll look at a number of real life antipatterns collected from around the web, and explore some better approaches. Hopefully, we’ll all walk out with a few new items in our design toolkit, and an increased awareness (and wariness) of design conventions.\r\n\r\nTakeaways:\r\nAttendees should walk away from the talk with answers to the following questions:\r\n- What are design patterns and antipatterns?\r\n- How do antipatterns affect the user's experience of your software?\r\n- What are some examples of common UX antipatterns, and what are some better alternative patterns that designers can use?\r\n- How is the shift from desktop to mobile devices affecting design patterns, and what new antipatterns are finding their way into mobile experiences?\r\n- How should designers approach their work to eliminate UX antipatterns from their designs, or at least minimize their occurrence?",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Michael",
                "LastName": "Boeke",
                "HeadShot": "/cloud/profilephotos/Michael-Boeke-f9332c18-bd6a-4b23-9db6-594dcfb840c6-635357584814304892.jpg",
                "UserName": "mvboeke",
                "Biography": "Michael Boeke is a designer, product guy, and startup veteran, who currently designs and manages products at online payments company Braintree. He focuses on applying design thinking and modern technology to shake-up traditional (boring) industries. \r\n\r\nPrior to Braintree, Michael launched the first web-based CRM and accounting platforms for hedge funds at Backstop. Previous to that, he designed the CarePages social support platform for hospital patients, which is now part of the Everyday Health network.\r\n\r\nMichael lives, works, and runs countless miles in the wonderful city of Chicago. He writes about product design and startup life at michaelboeke.com and on Twitter @mvboeke.",
                "WebSite": "http://michaelboeke.com/",
                "Company": "Braintree",
                "Title": "Product Manager",
                "Twitter": "mvboeke",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/michaelboeke",
                "GitHub": "https://github.com/mvboeke",
                "LastUpdated": "2014-05-15T13:50:21.713"
              }
            ],
            "Tags": [
              {
                "Name": "design"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "antipatterns"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:23.647",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2396,
            "Title": "Your Future is so Bright You Gotta Wear Shades... or Glass",
            "Description": "Is Google Glass going to be a huge part of our development future? This raises many questions and some very strong opinions. Although they may not be fully ready for the general consumer, there are specific scenarios where Google Glass can provide incredible value. This includes many business uses. In this session we will focus on the developer story behind Google Glass. This is a whole new world of development with simultaneously many limitations and advanced capabilities. The developer and user experience is very different than anything we have typically seen before. We will step through a sample application in detail to understand how you begin to create, write, test, and deploy applications to Glass. ",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-11T16:00:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tim",
                "LastName": "Miller",
                "HeadShot": "/cloud/profilephotos/Tim-Miller-349ec5db-e46a-4af9-a9b6-e8bdcd53f3a5.jpg",
                "UserName": "timrmiller",
                "Biography": "I am a Senior Software Engineer for Skyline Technologies. Currently dedicated to creating great applications and user experiences for the web and mobile devices. Including Windows, iOS and Android.",
                "WebSite": "http://www.timrmiller.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "timrmiller",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-15T00:55:57.547"
              }
            ],
            "Tags": [
              {
                "Name": "Xamarin"
              },
              {
                "Name": "Android"
              },
              {
                "Name": "Google Glass"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:29.277",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "4:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4443,
            "Title": "Happy Hour",
            "Description": "After the last session on Monday don’t go running off just yet, stick around for happy hour. We’re rolling out the beverage carts and some finger food. One of the best parts of a conference is meeting all the great people and exchanging ideas. This is a great opportunity to do just that.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T17:30:00",
            "ScheduledRoom": "Conference Center",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:08:08.49",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "5:30 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4444,
            "Title": "Game Night",
            "Description": "In case you haven’t heard, there is going to be a Game Night social event on Monday during That Conference. What could be better after a long day of having some serious tech knowledge dropped on you than killing zombies, humiliating your friends over a friendly game of Munchkin, or showing off your ability to recall trivial facts at a moment’s notice? It will be happening after the Happy Hour, so go grab a few drinks and some grub and then be sure to head on over to the designated gaming areas and GET YOUR GAME ON! The fun and “friendly competition” begins at 7pm sharp and continues until midnight. The event is free and the schedule is pretty flexible, so feel free to stop by at any point during the event and stay as only long as you want.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T19:00:00",
            "ScheduledRoom": "Open Spaces Room",
            "IsFamilyApproved": true,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              },
              {
                "Name": "Game Night"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-21T12:10:31.807",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 4461,
            "Title": "That Coderetreat",
            "Description": "Coderetreat is an intensive practice event, focusing on the fundamentals of software development and design. By providing developers the opportunity to take part in focused practice, away from the pressures of 'getting things done', the coderetreat format has proven itself to be a highly effective means of skill improvement. Practicing the basic principles of modular and object-oriented design, developers can improve their ability to write code that minimizes the cost of change over time.\r\n\r\nThis is an hands-on session and each attendee is required to have a laptop with one or more development environments setup (with a unit testing framework) and ready to code.\r\n\r\nIf you plan on attending, please email mwheeler@solidconsultants.com with any languages/dev environments you will be bringing and any languages/dev environments  you would be interested in using that you do not have.\r\n\r\nFor more information, visit http://coderetreat.org/about.",
            "Category": "Web",
            "Level": "100",
            "ScheduledDateTime": "2014-08-11T19:00:00",
            "ScheduledRoom": "b",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Michael",
                "LastName": "Wheeler",
                "HeadShot": "/cloud/profilephotos/Michael-Wheeler-7d178591-7a54-4262-a11a-afdbfdfdff68.jpg",
                "UserName": "mcwheeler",
                "Biography": "Just your average software developer that loves to learn and thinks the best way to do that is to help others learn.",
                "WebSite": "http://www.solidconsultants.com",
                "Company": "SOLID Consultants, LLC.",
                "Title": "Grand Poobah",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-06-10T12:58:28.277"
              }
            ],
            "Tags": [
              {
                "Name": "hands-on"
              },
              {
                "Name": "coderetreat"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T15:45:34.193",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "7:00 PM"
      }
    ],
    "Day": "Mon 8/11"
  },
  {
    "TimeSlots": [
      {
        "Sessions": [
          {
            "Id": 4445,
            "Title": "Breakfast ( Tuesday )",
            "Description": "Get out of bed sleepy head and get some chow. Come down to the mess hall, grab a plate, some java, and wake up before our keynoter jumps on stage and drops some campfire stories.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T07:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T23:34:03.827",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "7:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 5462,
            "Title": "The Engaging User Experience & the Natural User Interface",
            "Description": "An explosion of new devices, multi-touch capable computers, large form factor multi-touch screens, smartphones, slates & tablets now have touch-enabled screens with the inherent user expectation of applications designed for touch.  This revolution in the Natural User Interface (NUI) provides a great opportunity to enhance user experiences. \r\n\r\nAs the world of NUI evolves, and revolutionary 3D camera devices pave the path for gesture and voice controlled interfaces.  There is an increasing demand to create meaningful and engaging NUI user experiences.  Touch, gesture or voice optimized experiences require you to think of visual design in a whole new way and demands a new set of user interaction design skills. \r\n\r\nToday, solutions that leverage touch, gesture and voice are becoming the norm.  And software platforms are poised to leverage this revolution we call NUI.  A reinvigorated focus on user experience with rich client and rich internet application (RIA) developer technologies have created even greater opportunities for the creation of awesome NUI applications.  When you couple that with the advent of multi touch, gesture and voice (and ultimately neural) capable hardware at consumer prices and the high level APIs to leverage these NUI capabilities, we have the start of the new age of software focused on the Natural User Experience (NUI).   NUI applications manifest in “new” platforms and developer technologies and can leverage innovative capabilities like Cloud, Big Data, and parallel computing. \r\n\r\nThis demo focused session will take an amusing look at the past and take an impressive look at some of the best NUI software being built today and into the immediate future and will even delve into the NUI of the future.\r\n",
            "Category": "Keynote",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T08:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tim",
                "LastName": "Huckaby",
                "HeadShot": "/cloud/profilephotos/Tim-Huckaby-7d205536-d7a1-4f3b-87ef-04d55a6405c3-635410392660992630.jpg",
                "UserName": "TimHuckaby",
                "Biography": "Tim Huckaby  \r\nTim Huckaby is an industry luminary focused on Engaging User Experiences, User Interaction Design and the Natural User Interface (NUI) as applied with software in systems of all industries.  Mr. Huckaby’s expertise encompasses NUI as Touch, Gesture, Voice and Neural interfaces as applied by a number of compelling software technologies on many software and hardware platforms on a broad spectrum of devices. \r\n\r\nMr. Huckaby has been called a “Pioneer of the Smart Client Revolution” by the press.  Mr. Huckaby’s uncanny prediction of locally installed, native application popularity became true.  This prediction of The Smart Client Revolution was the predecessor to the app store phenomena we see today where applications are downloaded from an application store and installed natively on the device as contrasted to using web applications in a browser. \r\n\r\nMr. Huckaby has been awarded many times for the highest rated technical & industry presentations and keynotes for Microsoft and many other industry & technology conferences like CES and events all around the world. Mr. Huckaby is consistently rated in the top 10% of all speakers at these events. Having worked for or with Microsoft for over 25 years, Mr. Huckaby has been on stage with, and done numerous keynote demos for many Microsoft executives including Bill Gates and Steve Ballmer. \r\n\r\nIn 1999 Mr. Huckaby founded InterKnowlogy, a custom application development firm that creates high-impact software experiences and continues to flourish over 15 years later.  In 2011 Mr. Huckaby founded Actus Interactive Software, which licenses a suite of Interactive Digital Signage products, as a product company compliment to InterKnowlogy.  Mr. Huckaby founded both companies and serves each of them as Chairman.  \r\n\r\nMr. Huckaby has 35 years of technology experience including serving on a Microsoft server product team as a development lead on an architecture team.  Mr. Huckaby worked on some famous and not so famous Microsoft Server codebases in the late nineties.  Mr. Huckaby is a Microsoft Regional Director, a Microsoft MVP and serves on many councils and boards like the Microsoft Application Development Partner Advisory Council and the Microsoft Healthcare Executive Board and the Association for Competitive Technology.   \r\n",
                "WebSite": "http://www.InterKnowlogy.com",
                "Company": "Interknowlogy",
                "Title": "Founder / Chairman",
                "Twitter": "@TimHuckaby",
                "Facebook": "http://www.facebook.com/Tim.Huckaby.Carlsbad",
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/timhuckaby",
                "GitHub": null,
                "LastUpdated": "2014-07-15T16:41:13.16"
              }
            ],
            "Tags": [
              {
                "Name": "Kinect"
              },
              {
                "Name": "NUI"
              },
              {
                "Name": "User Interaction Design"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T22:55:14.267",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "8:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 4439,
            "Title": "Circuits in Play Dough",
            "Description": "Electronic circuits are easy to get started with. Fitting fragile parts and bendy wires into tiny holes in breadboards, on the other hand, make electronics a \"grown-ups only\" game. It turns out, home-made, non-toxic play dough (the kind my mom used to cook up for me) conducts electricity! Using clay instead of breadboards, small hands can build circuits with joy. This session is an open workshop, with multiple stations, plenty of play dough and electronic components, and kid-friendly instructions on posters. It's the perfect place for young inventors and their adult mentors to sit together and make LEDs light up, build switches to create interactive circuits, and talk about batteries, electrons, and safety (and make sculptures, of course!).\r\nAges: Kindergarten and up",
            "Category": "Family",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Sharon",
                "LastName": "Cichelli",
                "HeadShot": "/cloud/profilephotos/Sharon-Cichelli-5923f279-4257-4dc8-ba5a-2716e3b5a765-635357817011482387.jpg",
                "UserName": "scichelli",
                "Biography": "Sharon Cichelli is a Headspring Senior Consultant, developing custom enterprise software for her clients and coaching teams to deliver value without death marches. She is a .NET developer, open-source contributor, user group organizer, technical blogger, pinball fan, and Arduino enthusiast.",
                "WebSite": "http://lostechies.com/sharoncichelli/",
                "Company": "Headspring",
                "Title": "Senior Consultant",
                "Twitter": "scichelli",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/scichelli",
                "LastUpdated": "2014-05-15T20:15:08.427"
              }
            ],
            "Tags": [
              {
                "Name": "electronics"
              },
              {
                "Name": "circuits"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:49.897",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2256,
            "Title": "Creating The Forest From The Trees:  Installing and Optimizing XEN",
            "Description": "XEN.  It's used by Amazon, Best Buy, Google and others.  And now you've decided to jump in and try your hand out in harnessing this power.    Now that you've decided to play in it,  you realized that there are a lot of moving parts. You Googled for help.  You played with the examples, and realized that you just jumped into the deep end.  And, you've realized that you are not only learning XEN, but you are learning Linux, and the power of open source.\r\n\r\nIn this session we will talk about what it takes to install and optimize Linux and XEN, and go over the underpinnings that make it all run.  I will talk about performance and stability configurations.  And finally we will talk about architectures and tools that will help you get you to a usable product.\r\n\r\nBy the end of this, you should be able to understand how to install XEN, perform initial tuning, and obtain a glimpse at what it is that makes Amazon amazing.",
            "Category": "Cloud",
            "Level": "400",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Travis",
                "LastName": "Stevenson",
                "HeadShot": "/cloud/profilephotos/Travis-Stevenson-3eb65cc4-1ecd-42e1-ae10-be1a86a18df4-635349822570311842.png",
                "UserName": "TravisStevenson",
                "Biography": "Travis Stevenson has been active in Opensource communities for 20 years.  He first got into technology and security at the age of 10 when he got frustrated with the lack of security in protecting his basic code from prying eyes.  More recently, he created platforms and organizational models for Cloud computing based on opensource software technologies.  Are these some how related? We think so.",
                "WebSite": "http://www.directsupply.com",
                "Company": "Direct Supply",
                "Title": "Sr. Platform Architect",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/travisstevenson/",
                "GitHub": null,
                "LastUpdated": "2014-05-06T14:11:03.657"
              }
            ],
            "Tags": [
              {
                "Name": "Linux"
              },
              {
                "Name": "XEN"
              },
              {
                "Name": "Networking"
              },
              {
                "Name": "Filesystems"
              },
              {
                "Name": "Shared Storage"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:16.42",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 70,
            "Title": "Creating Xamarin Bindings for Native iOS Libraries",
            "Description": "So, you found a really awesome component for iOS but there's no Xamarin support.  Guess you're out of luck, huh? Thankfully, it is your lucky day! In this session I will show you what steps you need to take to create C# bindings to native iOS libraries so that you can bring all the fun things you find on Cocoa Controls into your Xamarin applications. I will cover binding simple libraries using Objective Sharpie as well as more advanced manual examples using iOS Binding Projects. Finally, I'll cover the steps necessary to create a component out of your newly bound project for submission to the Xamarin Component Store.",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brent",
                "LastName": "Schooley",
                "HeadShot": "/cloud/profilephotos/Brent-Schooley-91da314f-f4ee-456a-a6c3-f08a033f07dc-635388063099015263.jpg",
                "UserName": "brentschooley",
                "Biography": "Brent is a Developer Evangelist for Twilio representing the Philadelphia metro.  He is a software developer who has been working with Microsoft technologies since 2004. His interests include client and mobile application development and user experience design with a recent emphasis on iOS and client-side JavaScript frameworks. Other platforms he has worked with include WPF, Silverlight, Windows Forms, Windows Phone, and Windows 8. He has a passion for making people’s experiences with software the best that they can possibly be.  Brent is the author of Designing for Windows 8, a Windows 8 design primer from Apress. ",
                "WebSite": "http://about.me/brentschooley",
                "Company": "Twilio",
                "Title": "Developer Evangelist",
                "Twitter": "brentschooley",
                "Facebook": "http://facebook.com/brentschooley",
                "GooglePlus": "https://plus.google.com/+BrentSchooley/",
                "LinkedIn": "http://linkedin.com/in/brentschooley",
                "GitHub": "http://github.com/brentschooley",
                "LastUpdated": "2014-06-19T20:27:06.867"
              }
            ],
            "Tags": [
              {
                "Name": "ios"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "Xamarin"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:06.023",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 145,
            "Title": "Going Node At Netflix",
            "Description": "The Node.js movement is starting to make its way into Netflix.  This session will be a case study of how we are moving from a Java & Struts based web server and moving to a Node based solution.  Attendees will also hear about how adjusted our thinking, the tools and frameworks we used, and will address a few of the pain points we encountered along the way and how we solved them. \r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ryan",
                "LastName": "Anklam",
                "HeadShot": "/cloud/profilephotos/Ryan-Anklam-08e6f960-00ad-4f79-8bd5-956b1b6fc856.jpg",
                "UserName": "bittersweetryan",
                "Biography": "Ryan Anklam is a Senior UI Engineer at Netflix where is working on reinventing TV and continually improving the Netflix user experience. He has been developing for the web since JavaScript was mainly used for mouseover images and crude form validation. Ryan is also a passionate open source advocate and contributor.",
                "WebSite": "http://blog.ankl.am",
                "Company": "Netflix",
                "Title": "Senior UI Engineer",
                "Twitter": "@bittersweetryan",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/ryananklam/",
                "GitHub": "http://www.github.com/bittersweetryan/",
                "LastUpdated": "2014-04-04T04:49:53.48"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "node.js"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-24T22:04:17.21",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2273,
            "Title": "I've Been Hacked, Now What?",
            "Description": "Put on your trench coat and grab your magnifying glass as we walk through investigating a real-life hacked WordPress website. You'll experience first-hand what tools can help you find the vulnerability and the point of entrance. Learn what the hacker might have left behind, how to seal up the most common problem areas, and how to set up notifications to help you spot a hack more quickly in the future. Even though we will be going through a WordPress website, most of the tools discussed are applicable to any website. ",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Beth",
                "LastName": "Tucker Long",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "e3betht",
                "Biography": "Beth Tucker Long is the Editor-In-Chief of php[architect] magazine (http://www.phparch.com), co-organizer of Madison PHP (http://www.madisonphp.com), and she also teaches PHP courses and freelances. You can find her on Twitter (@e3betht) or on her blog (http://www.alittleofboth.com). She runs Treeline Design - http://www.treelinedesign.com, a web development company, and Playlist Event Music - http://www.playlisteventmusic.com, a DJ company, along with her husband, Chris. ",
                "WebSite": "http://www.TreelineDesign.com and http://www.phparch.com",
                "Company": "Treeline Design and php[architect]",
                "Title": null,
                "Twitter": "e3betht",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-14T12:33:29.127"
              }
            ],
            "Tags": [
              {
                "Name": "security"
              },
              {
                "Name": "wordpress"
              },
              {
                "Name": "hacked"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:03.237",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 101,
            "Title": "LigerMobile - Hybrid App Development for the Pragmatic Perfectionist",
            "Description": "Presently hybrid apps are at the forefront of the mobile development discussion. When done properly they allow for a shared code base between iOS and Android apps, web developers the opportunity to put their front end skills to use for mobile development, and the ability to reuse any number of previously created HTML/CSS/JS components.\r\n\r\nThe problem is that building them requires a different way of thinking and a new set of tools. During the creation of the new ReachLocal app, both of these things were developed. The \"single page app\" approach and the Cordova Framework were extended to produce the new LigerMobile framework which has allowed for the creation of truly hybrid mobile applications.\r\n\r\nThis session will present this framework, complete with code samples and an example of a published application.  In addition we hope to get feedback from the audience as the plan the roadmap for the open source project.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brad",
                "LastName": "Marsh",
                "HeadShot": "/cloud/profilephotos/Brad-Marsh-863e621a-7d5f-48a0-971b-e0a14ae64a3a-635394865376205911.png",
                "UserName": "bradleytmarsh",
                "Biography": "Brad is a Senior Developer at ReachLocal, who has spent the last 7 years focusing on user experience driven development on both the web and mobile.  An avid writer and artist, as well as programmer, he founded LitLift.com, a novel planning website, and helped create Skill Sketch, an iPhone app meant to inspire the artist in everyone.  Currently he is a member of the Liger core team, trying to help expand the world of app development to web developers and designers.",
                "WebSite": "https://medium.com/@Bbqhacker",
                "Company": "ReachLocal ",
                "Title": "Senior Developer",
                "Twitter": "bbqhacker",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/brad-marsh/a/648/47b",
                "GitHub": "https://github.com/dottertrotter",
                "LastUpdated": "2014-06-27T17:22:25.363"
              }
            ],
            "Tags": [
              {
                "Name": "app development"
              },
              {
                "Name": "hybrid apps"
              },
              {
                "Name": "mobile development"
              },
              {
                "Name": "ligermobile"
              },
              {
                "Name": "cordova"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:04.703",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2358,
            "Title": "Machine Learning – Recommender Engine and Anomaly Detection",
            "Description": "Machine learning is often perceived to be a daunting topic, when in fact its concepts are fairly intuitive and easy to use. This session will introduce nuML machine learning library basics, and will thus address the clustering issue in .NET applications by focusing on the practical real-world applications of recommendation engines and anomaly detection. At the conclusion of this session, attendees will be able to immediately use their unlabeled data to create powerful models for predicting the future based on the past. ",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Seth",
                "LastName": "Juarez",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "sethjuarez",
                "Biography": "Seth Juarez holds a Master’s Degree in Computer Science where his field of research was Artificial Intelligence, specifically in the realm of Machine Learning. Seth is the Analytics Program Manager for DevExpress where he specializes in products dealing with data analysis, shaping, and presentation. When he is not working in that area, Seth devotes his time to an open source Machine Learning Library, specifically for .NET, intended to simplify the use of popular machine learning models, as well as complex statistics and linear algebra.",
                "WebSite": "http://www.devexpress.com",
                "Company": "DevExpress",
                "Title": "Analytics Program Manager",
                "Twitter": "sethjuarez",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-08T14:23:28.06"
              }
            ],
            "Tags": [
              {
                "Name": "C#"
              },
              {
                "Name": "machine learning"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:15.063",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1230,
            "Title": "Making Rich Data apps are a Breeze(.js)",
            "Description": "This session is a must see for users needing to develop Rich Data Single page application utilizing Knockout.js and Breeze.js. We will cover the strengths that Breeze will afford the user. These strengths include Querying, Async, Change Tracking, Data Binding, Caching and Offline Storage…  You will leave this session knowing more about Breeze, and how to build a better Rich Data application in your enterprise. This session also utilizes Knockout data binding and will cover the basic details of that as well.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "gus",
                "LastName": "emery",
                "HeadShot": "/cloud/profilephotos/gus-emery-0d32a063-59b1-453d-a822-66b5bc496038.jpg",
                "UserName": "GusEmery",
                "Biography": "Gus Emery is a Principal with Kosmik Innovations, a Microsoft Partner in Minnesota. Gus also is a Co-Host of  #CodeCast a biweekly development PodCast striving to distribute development knowledge to the masses. Gus has spent the last 20 years architecting and implementing highly-scalable ASP.Net applications and distributed n-tiered applications across a broad array of industries in the Twin Cities. Gus has been working with Visual Basic since v3.0 and C# .Net since inception, and loves to seek out new and exciting technologies that facilitate productivity improvements and serve his customers’ technological needs!",
                "WebSite": "http://www.kosmikinnovations.com",
                "Company": "Kosmik Innovations",
                "Title": "Principal",
                "Twitter": "@n_f_e",
                "Facebook": null,
                "GooglePlus": "+Gus",
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-08T16:30:26.227"
              }
            ],
            "Tags": [
              {
                "Name": "C#"
              },
              {
                "Name": "Knockout"
              },
              {
                "Name": "Web API"
              },
              {
                "Name": "SPA"
              },
              {
                "Name": "Single Page"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:29:55.68",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2393,
            "Title": "Meet Koa - the next generation web framework for Node.js",
            "Description": "Doing Node.js web development, and Connect and Express got ya down?  Not to worry, the team behind Express has developed a new and refreshing web framework for Node.js, called Koa.  It's a small, expressive middleware that leverages function generators (uber-nifty ECMAScript 6 syntactic sugar) to help rid yourself of those ugly callbacks.  However, don't let the word middleware scare you away - Koa comes complete with high level 'treats' and a refined set of methods to make development of the middleware-to-web-application stack that much easier and less prone to error.\r\n\r\nIn this session, you'll get an introduction to Koa, understand how it uses function generators, and learn how to build a simple web application using recommended patterns.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jeremiah",
                "LastName": "Billmann",
                "HeadShot": "/cloud/profilephotos/Jeremiah-Billmann-7e35bb01-ca8e-4a9b-bda8-7258023b0d75.jpg",
                "UserName": "jbillmann",
                "Biography": "Jeremiah Billmann is a Senior Software Engineer with Skyline Technologies.  Jeremiah has been in software consulting for much of the past decade taking on roles ranging from developer to software development manager.\r\n\r\nHe has a tremendous amount of passion for software design patterns, best practices and web applications. He feels most at home in the world of  HTML and JavaScript leveraging either ASP.NET MVC or Node.js.\r\n\r\nWhen he isn't coding, he has a conflict of interests as he holds a personal trainer certification and appreciates well-crafted beer.",
                "WebSite": "http://jbillmann.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "jbillmann",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-03-31T17:38:38.107"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "javascript"
              },
              {
                "Name": "node.js"
              },
              {
                "Name": "Framework"
              },
              {
                "Name": "Express"
              },
              {
                "Name": "middleware"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:09.247",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2404,
            "Title": "ORMs - you're doing it wrong",
            "Description": "\r\nNothing gets DBAs more riled up than a developer infatuated with an Object-Relational Mapper. ORMs work great at mapping from relational to objects, but can be a crutch. If you want to make your DBA (and your users happy), you’ll want to use your ORM intelligently.\r\n\r\nIn this session, we’ll look at application patterns, ORM features and more to discover the right way of using your ORM. We’ll also look at when to ditch your heavyweight ORM and reach for a lighter one. Finally, we’ll cover why abstracting your ORM is evil and alternatives that give us more flexibility and maintainability in the long run.",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jimmy",
                "LastName": "Bogard",
                "HeadShot": "/cloud/profilephotos/Jimmy-Bogard-ff2a0cb8-8a9a-4954-bead-34123e0bc238.jpg",
                "UserName": "JimmyBogard",
                "Biography": "Jimmy has delivered solutions ranging from shrink?wrapped products to enterprise e?commerce applications for Fortune 100 customers. Jimmy is a member of the ASPInsiders group, the C# Insiders group, and received the \"Microsoft Most Valuable Professional\" (MVP) award for ASP.NET in 2009-2013. Jimmy is also the creator and lead developer of the popular OSS library AutoMapper.",
                "WebSite": "http://jimmybogard.lostechies.com",
                "Company": "Headspring",
                "Title": "Technical Architect",
                "Twitter": "jbogard",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "jbogard",
                "LastUpdated": "2014-04-15T03:01:32.317"
              }
            ],
            "Tags": [
              {
                "Name": "Architecture"
              },
              {
                "Name": "ORM"
              },
              {
                "Name": "Entity Framework"
              },
              {
                "Name": "NHibernate"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:10.78",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4454,
            "Title": "Robotics Camp – Day 2",
            "Description": "(… the story continues …)\r\n\r\nIt’s been 2 weeks and you simply cannot believe how crazy things have become.  Josh is running around mumbling something about orphaned pointer references and Margaret lost her pocket protector with a mistimed lean into the practice field.  Both of them are lost in conversation, at least one having an inkless pocket, and you’re wondering how you can possibly get the gear ratios right to prevent the blocks from flying out of the field every time you hit the trigger.  You turn to Gregg and ask him to pass a 12-tooth gear your way, if he wouldn’t mind.  Gregg turns from his work on the wheel assembly and digs through the parts bin.  \r\n\r\nEverywhere around camp, thousands of robots are taking care of cleaning, chopping wood and preparing meals.  About the only things handled by humans around here are the lessons and latrine duty… seriously, of all the things that couldn’t be handled by automated assistants, ick.  In any case, the camp has come alive, and the stark differences between the day of arrival and today are beyond count.\r\n\r\n‘Captain Metalbeard’, as he likes to be called, wanders into the room to see how things are going.  He reminds the team that competition is only two weeks away, and they’ve only completed 1 of the preliminary tests successfully.  “Ya scurvy builders are fallin’ behind, and yer blasted coders are looking haggard.  Ya’ gots two weeks ta finish yer work, or you’ll be left in the dust”, he cries as he leaves the cabin, winking at you out of the corner of his eye.\r\n\r\nYou’ve been the ‘star camper’ on this particular team, but you don’t know how long the team can keep squeaking by.  Clearly you need a breakthrough before everything falls to pieces…  Now about that gear…\r\n\r\n------------------------------------------------------------------------------------------\r\n\r\nNOTE:  Campers planning to participate in Day 2 are strongly encouraged to join us for Day 1 of the camp, as late campers are not guaranteed to have access to physical robotics kits, nor the background/learning from Day 1.  The greatest mastery level achievable by those without a physical robot is level 2.  All are welcome to come in and observe, but please reserve workspaces for those participating in the challenges.\r\n\r\nSchedule:\r\n- Day 2 Overview\r\n- Group Q & A\r\n- Guided Builder Space\r\n- Goal Achievement\r\n",
            "Category": "Family",
            "Level": "400",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Banyan",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Benjamin",
                "LastName": "Gavin",
                "HeadShot": "/cloud/profilephotos/Benjamin-Gavin-8ed9516a-2287-494b-809f-5362a9b589fd.jpg",
                "UserName": "bengavin",
                "Biography": "Ben is a Senior Software Engineer at Skyline Technologies and has been writing software for the web and beyond for over 20 years [but doesn't feel old enough for that to be true].  He loves learning and experimenting with technology, mentoring other developers and sharing what he can with the communities and people who have taught him so much over the years.  His current focus is primarily around the Microsoft technology stack, including C#, Azure, Windows 8 and Windows Phone and helping his customers get the best solution for their needs.",
                "WebSite": "https://www.virtual-olympus.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "virtualolympus",
                "Facebook": null,
                "GooglePlus": "ben@virtual-olympus.com",
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-07T15:13:29.54"
              },
              {
                "FirstName": "Paul",
                "LastName": "Shepard",
                "HeadShot": "/cloud/profilephotos/Paul-Shepard-f953ea38-5cde-4407-b642-e476ce2d74ca-635370560270512400.jpg",
                "UserName": "PaulShepard",
                "Biography": "Software engineer and father of 6 children, I am passionate about getting technology in the hands of kids. This year I enjoyed the awesome privilege of coaching a group of elementary aged kids with little to no experience coding or building robots to a Regional championship and an invitation to World Championships. I'm excited to share how agile dev practices empowered my team to go from lost to boss in a way that is turning heads in a robotics community which has long embraced a stricter waterfall approach. ",
                "WebSite": null,
                "Company": "Skyline Technologies",
                "Title": "Software Engineer",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-24T21:43:22.647"
              }
            ],
            "Tags": [
              {
                "Name": "robots"
              },
              {
                "Name": "Vex Robotics"
              },
              {
                "Name": "Vex IQ"
              },
              {
                "Name": "ROBOT-C"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:00.637",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 82,
            "Title": "Telling Campfire Stories with Data: Beautiful Interactive Data Visualizations with D3.js",
            "Description": "We are surrounded by ever increasing mountains of data. Finding insights in that data is one of the big challenges of the 21st century. One way to make your data work for you is to visualize it. This talk explores one of the most popular client side data visualization libraries: D3.js. Using D3.js, we will show you how to create your own interactive data visualizations.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dustin",
                "LastName": "Ewers",
                "HeadShot": "/cloud/profilephotos/Dustin-Ewers-9d9f8995-bb7e-48f3-a6a0-435402b90ceb.jpg",
                "UserName": "DustinEwers",
                "Biography": "Dustin Ewers is a web developer in Madison, WI who primarily works with ASP.Net. He blogs about technology at http://dustinewers.com/. Follow him on Twitter at @DustinJEwers. ",
                "WebSite": "http://dustinewers.com/",
                "Company": "Wisconsin Interactive Network",
                "Title": "Developer",
                "Twitter": "@DustinJEwers",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/dustinewers/",
                "GitHub": "https://github.com/DustinEwers",
                "LastUpdated": "2014-07-17T18:03:43.113"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Data Visualization"
              },
              {
                "Name": "D3.js"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:07.907",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 79,
            "Title": "Write Firefox OS apps using the Web Tech you already know",
            "Description": "Want to write a native phone app? Want to use JS (hint: Yeah)? Firefox OS is your new best friend. This talk goes into the super easy development process for FFOS apps- including using the simulator, android bundler, and debugging tools provided by the fantastic and active community. Use your favorite language, libraries, and frameworks, and a few new APIs, to build native phone apps- today!\r\n\r\nWhat you should know before you see this: HTML5, CSS3, Basic-Intermediate JS.\r\n\r\nI will be bringing a sample phone but will also show how to use the simulator.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T10:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Kassandra",
                "LastName": "Perch",
                "HeadShot": "/cloud/profilephotos/Kassandra-Perch-2b4caac8-f814-436f-a482-85a8fcec66c4.jpg",
                "UserName": "kperch",
                "Biography": "Dev, crafter, gamer from Austin, TX. Unrepentant JS Addict. Slings JS for RetailMeNot during the day, slings JS for fun and at Girl Develop It ATX students on nights/weekends. Huge fan of JS on hardware. Mozillian.\r\n\r\n",
                "WebSite": "http://eunknown.net",
                "Company": "RetailMeNot",
                "Title": "Engineering Evangelist",
                "Twitter": "@kassandra_perch",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/kperch",
                "LastUpdated": "2014-05-06T21:17:31.003"
              }
            ],
            "Tags": [
              {
                "Name": "Firefox OS"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "JS"
              },
              {
                "Name": "Hardware"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:12.157",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "10:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 4447,
            "Title": "Lunch ( Tuesday )",
            "Description": "We know you want to eat right??? We might not have a campfire but we do have food. Enjoy the bacon and relax with a few new friends.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T11:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:15:19.36",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "11:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 1215,
            "Title": "12 Reasons Your API Sucks",
            "Description": "Those first moments of using an API are pivotal. There’s nothing like downloading this week’s PDF of the documentation, setting up a SOAP client, reconfiguring all your URLs, and decoding the latest binary payloads. It makes your heart sing and your blood pressure rise.\r\n\r\nJust like there are code smells through the rest of your project, there are API smells that make them hard to design, hard to launch, and hard to maintain. We’ll use this time to explore a few common APIs to highlight those issues and demonstrate strategies to fix the issues before they become problems.",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Keith",
                "LastName": "Casey",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "caseysoftware",
                "Biography": "Keith Casey currently serves as an API Architect working to make APIs easier, more consistent, and help solve real world problems. Previously, as a developer evangelist at Twilio, he worked to get good technology into the hands of good people to do great things. In his spare time, he works to build and support the Austin technology community, blogs occasionally at CaseySoftware.com and is completely fascinated by monkeys. Keith is also the author of \"A Practical Approach to API Design\" from Leanpub.",
                "WebSite": "http://clarify.io",
                "Company": "Clarify",
                "Title": "Director of Product",
                "Twitter": "CaseySoftware",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/CaseySoftware",
                "LastUpdated": "2014-07-16T20:21:08.28"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "REST"
              },
              {
                "Name": "api"
              },
              {
                "Name": "documentation"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:57.22",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2438,
            "Title": "Building an API client library that bends but doesn't break",
            "Description": "Are you building a Web API? Planning to build a client libraries? What if I could show you a way of building client libraries where you will never need a v2 ?  If it could allow users to experiment with new API features before you released an updated client library?  If it allowed users to customize the HTTP request generation and response handling whilst keeping the easy to use strong types? What if I could show you how to make it easy for clients to consume hypermedia representations? And reduce the amount of boilerplate code in the library at the same time.  \r\n\r\nGive me an hour of your time and I'll show you how.",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Darrel",
                "LastName": "Miller",
                "HeadShot": "/cloud/profilephotos/Darrel-Miller-7ea77797-cdd6-4f75-b55d-507b3e722f00-635353500831602057.jpg",
                "UserName": "darrelmiller",
                "Biography": "Darrel has been building distributed business applications for more than 20 years. He is an active member of the .NET community and OSS contributor.  When he’s not reading IETF specifications in order to answer Stack Overflow questions, or writing tooling to help people build hypermedia driven client applications, you will find him enjoying time with his wife and daughter in Montreal, Quebec. Darrel joined Runscope to ensure that they provide the best support possible to .NET developers who are building and consuming Web APIs. Darrel has been a long time member of the Microsoft Web API advisory board, a Microsoft Integration MVP and recently co-authored the O'Reilly book, Designing Evolvable Web APIs with ASP.NET. ",
                "WebSite": "http://www.bizcoder.com",
                "Company": "Runscope Inc.",
                "Title": "Developer Advocate",
                "Twitter": "darrel_miller",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/darrelmiller",
                "LastUpdated": "2014-05-10T20:21:29.413"
              }
            ],
            "Tags": [
              {
                "Name": "http"
              },
              {
                "Name": "webapi"
              },
              {
                "Name": "Hypermedia"
              },
              {
                "Name": "client"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T18:20:21.377",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2403,
            "Title": "Building cross-platform mobile applications with Xamarin Studio and Azure Mobile Services",
            "Description": "You want to build a mobile application and you love C#. Then you are in luck. Xamarin Studio is an IDE enabling you to write applications in C# for Windows, Windows Phone, Android, IOS and MacOS. Azure Mobile Services allows you to write a C# back end for mobile applications running on any device. Using these two great tools you can use the language you love, C#, to build native mobile applications with amazing code reuse. In this session you will learn how to build a native mobile applications and a shared set of services all using C#. You will see how to work with data, enable push notifications and identify users on all the major mobile platforms while leveraging the Azure cloud to host your API. This talk will cover all the latest features of Azure mobile services to get you up and running with your application as quickly as possible.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Matt",
                "LastName": "Milner",
                "HeadShot": "/cloud/profilephotos/Matt-Milner-69fb1467-c0ad-451b-85c7-511a4f72c466-635350672237080568.jpg",
                "UserName": "mattmilner",
                "Biography": "Matt Milner is an independent consultant and trainer who, from the early days of the internet, was building websites and databases to help organizations manage their business. Over the years he has built numerous systems using web technologies such as ASP.NET and integration technologies including BizTalk Server, WCF, WF, and yes, even MSMQ. Currently Matt splits his time between building applications and teaching other developers about the latest Microsoft technologies including Windows Azure, Windows 8 and Web API. In addition to creating training videos for Pluralsight Matt contributes to the community by speaking at code camps, user groups, and international conferences including Tech Ed, Dev Days, and DevWeek.",
                "WebSite": "http://mattmilner.com/",
                "Company": "M3 Technology Partners Inc.",
                "Title": "President",
                "Twitter": "milnertweet",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/matt.milner",
                "GitHub": null,
                "LastUpdated": "2014-05-07T13:48:03.573"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "Azure"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:00.257",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2281,
            "Title": "Building Web Applications with Elixir",
            "Description": "Elixir is an exciting new functional language built on the Erlang virtual machine.  It has all the great functional features but packaged up in an approachable syntax.  And, it can take advantage of the long history of highly scalable distributed libraries written for Erlang.  In this talk we'll explore the Elixir language and the landscape of tools and frameworks for building web applications and services with Elixir.  We'll cover:\r\n\r\n* Elixir - an introduction to the language for those not familiar (immutability, pattern matching, etc)\r\n* Plug - an amazing pluggable web architecture\r\n* Ecto - a language-integrated query implementation for talking to the database\r\n* OTB - the distributed computing framework that ships with Erlang",
            "Category": "Web",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "JC",
                "LastName": "Grubbs",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "thegrubbsian",
                "Biography": "JC has been designing and writing software for over 15 years.  He's worked in tiny consulting shops up to large multi-national conglomerates.  Today he leads the team at DevMynd, an Ember and Ruby-on-Rails consulting firm in Chicago.  He is passionate about delivering high quality solutions to customers and doing it with a team that loves what they do and the people they work with.",
                "WebSite": "http://www.devmynd.com",
                "Company": "DevMynd",
                "Title": "CEO, Practice Lead",
                "Twitter": "thegrubbsian",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/jcgrubbs",
                "GitHub": "https://github.com/thegrubbsian",
                "LastUpdated": "2014-04-14T14:02:13.057"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "elixir"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:54.28",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2260,
            "Title": "Come To The Vim Side",
            "Description": "It's said that we read code 10 times more than we write it, and if you're like most developers, that involves a lot of jumping around the file scrolling, editing, and context switching. Your editor has keyboard shortcuts, but why not look at an editor that's 100% keyboard shortcuts?\r\n\r\nVim is a fast and efficient text editor that will make you a faster, more efficient software developer. It's available on almost every operating system and you can use it with almost every programming language. Vim is so powerful and useful that there are plugins for Eclipse, Visual Studio, and SublimeText that emulate or integrate Vim. But in order to take advantage of this fantastic way of editing your code, you need to learn the basics.\r\n\r\nIn this hands-on talk for Vim newbies, you'll learn the basics of movement, editing, and customization. Bring your laptop and get ready to edit text in a fast, efficient way.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brian",
                "LastName": "Hogan",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "bphogan",
                "Biography": "Brian P. Hogan is an author, editor, teacher, and web developer. He's the author of \"Automate With Grunt\", \"tmux: Productive Mouse Free Development\", and \"HTML5 and CSS3: Level Up With Today's Web Technologies.\" When not hacking on Ruby or JavaScript code, he’s mentoring students, writing songs, watching “The Simpsons” and spending quality time with his wife and daughters.",
                "WebSite": "http://napcs.com",
                "Company": "NAPCS",
                "Title": "Chief Problem Solver",
                "Twitter": "bphogan",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "napcs",
                "LastUpdated": "2014-04-11T14:16:56.663"
              }
            ],
            "Tags": [
              {
                "Name": "vim"
              },
              {
                "Name": "editors"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:49.723",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1258,
            "Title": "Exploratory Data Analysis with R",
            "Description": "R is a popular open-source programming language for data analysis.  Its interactive programming environment and data visualization capabilities make R an ideal tool for exploratory data analysis.  This session will provide an introduction to the R programming language as well as demonstrate how R can be used for exploratory data analysis.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Matthew",
                "LastName": "Renze",
                "HeadShot": "/cloud/profilephotos/Matthew-Renze-2fd13c3f-414a-4aab-8d05-d3ec2de28bfe-635353534777099629.jpg",
                "UserName": "renze1577",
                "Biography": "Matthew is a software consultant with over 14 years of professional experience building large-scale data-driven desktop, server, and web applications.  He is a graduate of Iowa State University with double degrees in Computer Science and Philosophy with a minor in Economics.  Matthew's current interests include data analytics, data visualization, and machine learning.  ",
                "WebSite": "http://www.matthewrenze.com/",
                "Company": "Renze Consulting",
                "Title": "Software Consultant",
                "Twitter": "@MatthewRenze",
                "Facebook": "https://www.facebook.com/matthew.renze",
                "GooglePlus": "https://plus.google.com/u/0/109447705328457330617/posts",
                "LinkedIn": "https://www.linkedin.com/pub/matthew-renze/4/98a/192",
                "GitHub": "https://github.com/matthewrenze",
                "LastUpdated": "2014-05-10T21:17:57.71"
              }
            ],
            "Tags": [
              {
                "Name": "Data Visualization"
              },
              {
                "Name": "Big Data"
              },
              {
                "Name": "R"
              },
              {
                "Name": "Exploratory Data Analysis"
              },
              {
                "Name": "Data Analytics"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:30:01.117",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2383,
            "Title": "Getting to Know Windows Azure Mobile Services",
            "Description": "Windows Azure Mobile Services is the missing piece mobile developers have been wishing for. Come learn how to use Mobile Services as a backend for your Windows Store, Windows Phone 8, iOS, and Android apps! In this session, we will create a new cloud-based mobile service and learn how to build simple native Win 8/Win Phone 8/iOS/and Android apps using one common backend. You’ll leave this session armed with the knowledge to use Mobile Services for your own mobile apps.",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Susan",
                "LastName": "Yount",
                "HeadShot": "/cloud/profilephotos/Susan-Yount-f662c476-c410-4260-a478-ff46967f32c1.jpg",
                "UserName": "SuzieZUMO",
                "Biography": "Susan Yount is a Professional Services Consultant for the Microsoft Consulting Group at Logicalis. She has a passion for growing business and people, and has served the National Mobile Solution Leadership Committee. She most recently led an outstanding Agile team in the creation and deployment of a very visible multinational project for a multi-billion dollar organization. Susan guides teams via strong technical expertise, encourages and rewards great ideas, and focus on the needs of the non-technical end user. She has a clear vision for what’s coming around the bend, and is a regular participant in technical communities, such as MIGang, CodeMash, CocoaConf, and  SPC14 in Vegas.",
                "WebSite": "http://iturbandictionary.com/default.aspx",
                "Company": "Logicalis",
                "Title": "Professional Services Consultant for the Microsoft Consulting Group",
                "Twitter": "@SuzieZUMO",
                "Facebook": "https://www.facebook.com/susan.anspaughyount",
                "GooglePlus": "https://Google+ account is too inactive to share",
                "LinkedIn": "https://www.linkedin.com/in/susanyount/",
                "GitHub": "https://deleted github account for time being",
                "LastUpdated": "2014-04-15T01:40:23.417"
              }
            ],
            "Tags": [
              {
                "Name": "Azure"
              },
              {
                "Name": "Multi Platform"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:03.337",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2240,
            "Title": "Go X-Platform with Xamarin",
            "Description": "Good old fashioned (circa 2002+) C# skills still have a place in modern and consumer facing apps living across platform. Using Xamarin you can apply those basic C# survival skills such as Linq, lambdas, async/await, and other wholesome goodness inside Visual Studio to make high performing visually appealing native apps. We'll take a look at the sweet spots for using Xamarin and walk through the basics of a cross-platform solution using C# and the Xamarin/Visual Studio ecosystem.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dennis",
                "LastName": "Welu",
                "HeadShot": "/cloud/profilephotos/Dennis-Welu-6280a094-76d4-43e2-965f-2a4a1c36bf80.jpg",
                "UserName": "DennisWelu",
                "Biography": "Dennis Welu is the president of Motis Consulting in Dubuque, Iowa. Dennis has computed for decades...if you go way back to that goofy phone modem thing you placed in a receiver to play Oregon Trail. His experience ranges from hands on engineering to product management to executive leadership. He has been a consultant to clients large and small – from startup to Fortune 100 companies. Motis is focused primarily on mobile software development.\r\n",
                "WebSite": "http://www.motisconsulting.com/",
                "Company": "Motis Consulting",
                "Title": "President",
                "Twitter": "@DennisWelu",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/dennis-welu/35/7ab/907",
                "GitHub": null,
                "LastUpdated": "2014-05-06T12:46:40.913"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Native"
              },
              {
                "Name": "Cross Platform"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "Xamarin"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:51.08",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 5,
            "Title": "How to build amazing creative music apps for Windows",
            "Description": "Creative Music apps are top sellers on iOS, commanding premium prices and having high recurring usage numbers. But there are a lot of creative music apps in the Apple app store. On Windows, the category is currently wide open, without a lot of competition. This makes it a great place to dive in and make some money (or fame), once you know how to build these apps. Learn how to build controller and synthesizer apps for the Windows Store. Learn best practices for low-latency audio and touch, plus more that I can't reveal just yet. :) Whether you want to create the next AniMoog Synthesizer, or the most awesomest Fart Soundboard ever, you'll learn some useful techniques here.",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Pete",
                "LastName": "Brown",
                "HeadShot": "/cloud/profilephotos/Pete-Brown-717bbc72-3a5a-405a-85db-714ef2d02fd3.jpg",
                "UserName": "Psychlist1972",
                "Biography": "XAML, gadget, and creative music apps guy at Microsoft. Creator of cool things in WPF and WinRT XAML, smeller of ozone, exploder of electrolytics, collector of synthesizers, and lover of all things 8 bit and retro, especially Commodore. Guy behind the WPF and creative music app demos at Build. Hangs around with people who find ways to get full operating systems on to postage stamp-sized computers. Sometimes known to hit his thumb with a hammer. Does not act his age.",
                "WebSite": "http://10rem.net",
                "Company": "Microsoft",
                "Title": "Geek",
                "Twitter": "@pete_brown",
                "Facebook": "http://facebook.com/pmbrown",
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-03-31T08:12:13.913"
              }
            ],
            "Tags": [
              {
                "Name": "Music"
              },
              {
                "Name": "Synthesizer"
              },
              {
                "Name": "Apps"
              },
              {
                "Name": "Windows"
              },
              {
                "Name": "MIDI"
              },
              {
                "Name": "Audio"
              },
              {
                "Name": "Creative"
              },
              {
                "Name": "WPF"
              },
              {
                "Name": "Windows Store"
              },
              {
                "Name": "Native"
              },
              {
                "Name": "WASAPI"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:01.797",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4452,
            "Title": "Legos, Robotics and Programming",
            "Description": "Do your little ones spend hours building Lego Creations? Do they like Robots? Of course they do (and so do you)! \r\n \r\nLets use that creativity to introduce programming concepts with Lego's WeDo and Lego Mindstorms EV3 robotics software. This hands-on session will introduce campers to motors, sensors and programming! Children ages 5-17 will enjoy presentations by fellow young campers who has participated in Lego Robotics teams for the past 3 years. After this introduction there will be various activities for the campers to enjoy. \r\n \r\nWhile the campers are building , the parents will be able to learn about jr.FLL (junior FIRST Lego League) and FLL and how you can start your own team! We will also discuss other activities that help encourage these young campers in programming and engineering. So please come join us and build something great!\r\n \r\n Notes: \r\n This is a hands-on session.  Feel free to drop in at any time during the session for a chance to use the kits.  Due to a limited number of WeDo and EV3 robots, we ask that children limit their time so everyone has a chance to program the robots.\r\n The Lego provided are not to take home. Please be sure your camper knows this before attending the course.\r\n Parents must stay in the room with your camper, and should have fun as well.",
            "Category": "Family",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Annalee and Brian",
                "LastName": "Kalbfleisch",
                "HeadShot": "/cloud/profilephotos/Brian-Kalbfleisch-527a0189-8ede-4f76-8648-ea4b4b4ea4d8-635404633132370997.jpg",
                "UserName": "kalbster",
                "Biography": "Annalee is an 8 year old student, and a veteran That Conference speaker. For the past 3 years, her team of friends has participated in  jr.FLL (Junior FIRST Lego League) learning about robotics, programming and social issues while having fun.  This year, the team is starting the next level of competition in the FLL. Annalee loves art and uses her creativity to come up with innovative solutions to the FIRST challenges.  Annalee will be sharing her experiences and assisting young participants in WeDo robotics programming.\r\n\r\nBrian is the Assistant Director of IT Development at the Radiological Society of North America. For the past 3 years, he has been a coach and sponsor for US FIRST. Hosting Annalee's team after school has given him the opportunity to teach children computer programming and robotics in a fun and engaging way. Watching the teams work, learn and present together has been an inspiration which he hopes to share with others at That Conference.",
                "WebSite": "http://www.rsna.org",
                "Company": "RSNA",
                "Title": "Assistant Director of IT Development",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/brian-kalbfleisch/3/7b5/7",
                "GitHub": null,
                "LastUpdated": "2014-07-09T02:05:16.203"
              },
              {
                "FirstName": "Jason",
                "LastName": "Dobbs",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "mkedobbs",
                "Biography": "Jason is a Principal Business Consultant at SafeNet Consulting in Milwaukee, WI.  With over 15 years of IT experience across a number of industries and technologies under his belt, Jason has moved into a role where he can help solve problems across a wide variety of SafeNet's clients.  \r\n\r\nOne of Jason's passions has been working with children to get them excited about technology.  He works with multiple youth groups, teaching them robotics through Lego Mindstorms, as well as teaching them how to write software programs for Mac and PC.",
                "WebSite": "http://www.safenetconsulting.com/",
                "Company": "SafeNet Consulting",
                "Title": "Director of Client Relations",
                "Twitter": "mkedobbs",
                "Facebook": "https://www.facebook.com/jdobbs",
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/mkedobbs",
                "GitHub": null,
                "LastUpdated": "2014-05-14T18:55:50.85"
              }
            ],
            "Tags": [
              {
                "Name": "Lego"
              },
              {
                "Name": "family"
              },
              {
                "Name": "robotics"
              },
              {
                "Name": "EV3"
              },
              {
                "Name": "WeDo"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:51.207",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2417,
            "Title": "Securing your Android Apps",
            "Description": "With the amount of sensitive information flowing through our apps continuing to increase, app developers can no longer turn a blind eye towards security. This talk aims to provide a basic understanding of Android application security and best practices so developers can write apps that users can trust.\r\n\r\nWe'll start the session with an overview of the Android security architecture. Once the base of the Android security model is explained, we'll dive into securing Android applications from a developers perspective.\r\n\r\nTopics will include:\r\n- Permissions\r\n- Component and inter-component interactions\r\n- Data Encryption\r\n- Secure communication with web services\r\n- Obfuscation\r\n- Assessing the security of your app",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Kevin",
                "LastName": "McMahon",
                "HeadShot": "/cloud/profilephotos/Kevin-McMahon-1eb54878-f875-44c2-ab90-08fb39ae8a0c.jpg",
                "UserName": "kevinmcmahon",
                "Biography": "Kevin McMahon is a mobile developer for Redpoint Technologies based in Chicago. When he is not making apps, you can usually find Kevin trying to make putts or a mean puttanesca sauce. He blogs at http://www.kevfoo.com, maintains a wiki of useful mobile links at http://www.AppDevWiki.com and can be found on Twitter at @klmcmahon.",
                "WebSite": "http://about.me/kevinmcmahon",
                "Company": "Redpoint Technologies",
                "Title": "Senior Software Architect",
                "Twitter": "klmcmahon",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/+KevinMcMahon",
                "LinkedIn": null,
                "GitHub": "http://www.github.com/kevinmcmahon",
                "LastUpdated": "2014-04-15T03:46:27.197"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "security"
              },
              {
                "Name": "Android"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:58.707",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 158,
            "Title": "SignalR All The Things!",
            "Description": "Ever wondered how hard is to add real time eventing to your ASP.NET application? SignalR is a new library that makes bi-directional communication easy and fun. In this session we'll cover the features and approaches SignalR offers on both client and server sides. If you're interesting in adding real time eventing to your applications today, you don't want to miss this talk.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Javier",
                "LastName": "Lozano",
                "HeadShot": "/cloud/profilephotos/Javier-Lozano-6e49bbdc-76f7-471d-ab2b-4ebb3184a07e-635403537305601402.png",
                "UserName": "jglozano",
                "Biography": "Javier is an ASP.NET Insider, Windows Azure Insider, and ASP.NET MVP. His specializations are in ASP.NET, Windows Azure, system design, and developer mentoring. He has helped co-found the Iowa .NET Users Group (IADNUG), Iowa Code Camp (ICC), dotnetConf, and aspConf virtual conferences. He’s is an avid supporter of the community and likes to give back by speaking at user groups, local/regional/national .NET events. In his spare time, Javier loves spending time with his family and enjoys writing about himself in the third person.",
                "WebSite": "http://lozanotek.com",
                "Company": "lozanotek",
                "Title": "Principal",
                "Twitter": "jglozano",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/lozanotek",
                "LastUpdated": "2014-07-07T18:15:50.8"
              }
            ],
            "Tags": [
              {
                "Name": "ASP.NET"
              },
              {
                "Name": "signalr"
              },
              {
                "Name": "Azure"
              },
              {
                "Name": "WebSockets"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:52.763",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2221,
            "Title": "Supercharge your productivity with Ember.js",
            "Description": "Ember is an opinionated javascript application framework.  Like many opinionated frameworks things get much easier when you learn what those opinions are, and why they are in place.  This session will bring you up to speed on the concepts represented by all of the major parts of the framework, and you'll be well on your way to quickly delivering highly interactive applications.",
            "Category": "Web",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T13:00:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jeremy",
                "LastName": "Green",
                "HeadShot": "/cloud/profilephotos/Jeremy-Green-d4c6ce02-3f78-48fa-bd3a-caeed63d07aa.jpg",
                "UserName": "jagthedrummer",
                "Biography": "Jeremy is a full stack engineer who has been creating web apps for over 15 years. He's an organizer of the OkcRuby developer group and an active open source contributor. You might also find him drumming, shooting photos, or brewing.",
                "WebSite": "http://www.octolabs.com/",
                "Company": "OctoLabs",
                "Title": "Owner/Operator",
                "Twitter": "jagthedrummer",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/115184447854693193125/posts",
                "LinkedIn": "http://www.linkedin.com/in/jagthedrummer/",
                "GitHub": "https://github.com/jagthedrummer",
                "LastUpdated": "2014-05-06T03:35:49.737"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "ember"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:55.653",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "1:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 2329,
            "Title": "Capacity Planning on the Fly",
            "Description": "Find out how a three-person performance analysis team kept up with a 200-person development organization with little more than some spreadsheets and a little light queuing theory!\r\nSuppose you had a complex application stack of 70+ services that you knew you'd have to scale out by four orders of magnitude over the next two years. You don't have auto scaling on your private cloud—although few things auto-scale that far anyway. The developers are somehow too busy implementing features to add instrumentation to their code, and it's nearly impossible to obtain a representative full-stack load environment because the agile teams are changing things constantly! What would you do?\r\nWith the transition to the use of virtualized infrastructure as an invaluable part of companies' strategies going forward, it is very import for organizations to be able to effective apply a useful capacity and scalability approach to this new type of infrastructure. The main players in the private cloud space are still lacking in the amount of performance metrics that they expose to performance engineers. This, in turn, makes it very challenging for performance engineering as a discipline to adapt approaches to providing viable capacity and scale solutions for scaling a private cloud.\r\nThe approach I am proposing is simple in terms of how it can be implemented but has proven to offer a rapid and reliable Performance and Scalability Model. I'll show how an entire system can be modeled rapidly by simply applying the Universal Scalability model to each component, and then tying each modeled component together using basic Queuing Theory.",
            "Category": "Cloud",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Maulan",
                "LastName": "Byron",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "mbyron01",
                "Biography": "I am a technologist that have spent most of my career building and delivering mid size to large scale projects in the telecommunication and financial fields. My interests are in making things scale and perform better and finding solutions that make it easier to operationalize software products.\r\nTelecommunication companies have struggled to be more agile while delivering new products. Figuring out how these products scale within a short time frame has also been a challenge.  Developing model/approach show a pragmatic way of accomplishing such a task as been another area of success.\r\n\r\nSome of my recent successes have been in being a key contributor in a new delivery platform for Comcast where we have built and launched an entire platform to deliver content all over IP while leveraging the legacy QAM infrastructure. \r\n\r\n\r\n",
                "WebSite": "https://www.linkedin.com/in/maulanbyron",
                "Company": "Comcast",
                "Title": "Engineering Manager",
                "Twitter": "@maulanbyron",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/maulanbyron",
                "GitHub": "mbyron01",
                "LastUpdated": "2014-04-14T19:29:16.943"
              }
            ],
            "Tags": [
              {
                "Name": "modeling"
              },
              {
                "Name": "Capacity Planning"
              },
              {
                "Name": "Performant Software"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:45.887",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2216,
            "Title": "Enterprise 2.0.0 - Building Apps on the Postgres Framework",
            "Description": "With the amount of thoughts being leader'ed and paradigms shifted, sometimes we need to take a step back and reimagine how we build. This session will start with modern application development, and then start taking huge steps backwards.\r\nClouds, Socials, Queues, NoSQLs, WebScales and Javascripts - the Postgres Framework covers it all. So come join Rob as he shows you how he built his app 'Troll Talk' on the Postgres Framework.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "rob",
                "LastName": "sullivan",
                "HeadShot": "/cloud/profilephotos/rob-sullivan-c9f8fb1b-27bc-44ee-be66-debd34b5f529-635357889716867049.png",
                "UserName": "datachomp",
                "Biography": "In the early 1900’s, the data world was overrun by architects and project managers. Needing to bring some relief to the industry, then President Taft appointed Rob as the first Data Magistrate. From humble beginnings, he rose to inspire hope and change amongst data stores of all types. He saved countless tuples during the Great Data Civil War of the 90’s and helped found the ORM-pathy group designed to help less fortunate data models get a second chance at production. He currently resides in Oklahoma City with his partner Postgresql and their pet Redis.",
                "WebSite": "http://datachomp.com",
                "Company": "datachomp enterprise software",
                "Title": "Senior Data Magistrate",
                "Twitter": "datachomp",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/datachomp",
                "LastUpdated": "2014-05-15T22:16:46.997"
              }
            ],
            "Tags": [
              {
                "Name": "postgresql postgres webscale silly"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:47.57",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1260,
            "Title": "How Constraints Cultivate Growth",
            "Description": "Imagine a playground with no rules. The never-ending dodgeball game would dominate the entire blacktop space, pushing out the jump ropers and Red Rover players. It would never be your turn to go on the swings. And try as you might to remain honest, you'd still catch yourself cheating at Hot Lava Tag.\r\n\r\nIn order for peace and progress to occur, rules are necessary. The same thought can be applied to designing and developing websites. Nowadays, our options are endless and as designers and developers we can build any website or application we wish. What these options don't guarantee, however, is that what we build will be of any quality or fulfill our users' needs. Fortunately, we can rely on constraints, or \"tech rules\", to ensure our products are sound.\r\n\r\nBy setting constraints, we force ourselves to be more productive. They help us make decisions, creating focus around the problem we are trying to solve. They improve our consistency, which provides a better experience for our users. And they help us grow, a valuable asset in times of innovation.\r\n\r\nWithin this session, Shay will dive into different constraints and their benefits to building websites. Constraints are good and, when leveraged properly, allow us to truly flourish. It's your turn to go on the swings. Enjoy it.",
            "Category": "Web",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Shay",
                "LastName": "Howe",
                "HeadShot": "/cloud/profilephotos/Shay-Howe-72a38ea3-9dc6-4312-bdea-0201ef408119.png",
                "UserName": "shayhowe",
                "Biography": "As a designer and front end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties in which he regularly writes and speaks about. Currently he is the Director of Product at Belly, helping build the world's best loyalty program. Additionally, Shay helps co-organize Chicago Camps, Refresh Chicago, and UX Happy Hour.",
                "WebSite": "http://learn.shayhowe.com/",
                "Company": "Belly",
                "Title": "Director of Product",
                "Twitter": "shayhowe",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "shayhowe",
                "GitHub": "shayhowe",
                "LastUpdated": "2014-04-10T13:29:02.943"
              }
            ],
            "Tags": [
              {
                "Name": "design"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "product"
              },
              {
                "Name": "front-end development"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:51.94",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2235,
            "Title": "Internationalize your JavaScript Application: Prepare for \"the next billion\" internet users.",
            "Description": "Are you prepared for \"the next billion\" internet users, most of whom don't use English as their primary language? This session will explore the globalization (internationalization and localization) of JavaScript based applications. It will look at the ECMAScript Internationalization API and popular open source projects like AngularJS, messageformat.js, jQuery Globalize and twitter-cldr-js. Topics will include cultures/locales, character encoding, number formatting, date formatting, choice/plural formatting and translations.",
            "Category": "Web",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Kevin",
                "LastName": "Hakanson",
                "HeadShot": "/cloud/profilephotos/Kevin-Hakanson-4b199c6b-a758-402f-ab35-4451752a20b6-635349969746525162.jpg",
                "UserName": "hakanson",
                "Biography": "Kevin Hakanson (@hakanson) is an application architect for Thomson Reuters where he is focused on highly scalable web applications, especially the JavaScript and security aspects. His background includes both .NET and Java, but he is most nostalgic about Lotus Notes. He has been developing professionally since 1994 and holds a Master’s degree in Software Engineering. When not staring at a computer screen, he is probably staring at another screen, either watching TV or playing video games with his family.",
                "WebSite": "http://about.me/kevin.hakanson",
                "Company": "Thomson Reuters",
                "Title": "Sr. Software Architect",
                "Twitter": "hakanson",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/+KevinHakanson",
                "LinkedIn": "https://www.linkedin.com/in/kevinhakanson",
                "GitHub": "https://github.com/hakanson",
                "LastUpdated": "2014-05-06T18:16:14.653"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Globalization"
              },
              {
                "Name": "AngularJS"
              },
              {
                "Name": "Web Platform"
              },
              {
                "Name": "i18n"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:44.433",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 110,
            "Title": "Keep Your Campfire Secrets...  Secret",
            "Description": "Learn the \"black art\" of cryptography, including public/private and symmetric encryption, hashing, digital signatures, and a dash of salt.  Review the basics of cryptography and what techniques are appropriate for various situations.  Discover practical techniques for securing content received on public web sites.",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Robert",
                "LastName": "Boedigheimer",
                "HeadShot": "/cloud/profilephotos/Robert-Boedigheimer-535010cf-9527-49d4-8a05-7419c7e24af7.jpg",
                "UserName": "boedie",
                "Biography": "Robert Boedigheimer works for Schwans Shared Services, LLC providing business solutions with web technologies and leads Robert Boedigheimer Consulting, LLC. Robert has been designing and developing web sites for the past 19 years including the early days of ASP and ASP.NET. He is a Pluralsight Author, an ASP.NET MVP, an author, and a 3rd degree black belt in Tae Kwon Do. Robert has spoken at industry conferences including VSLive, HDC, DevLink, DevTeach, Tulsa Tech Fest, DevWeek, DevReach, SDC, TechEd, DevConnections, AJAXWorld, and numerous national and international events.\r\n",
                "WebSite": "http://aspadvice.com/blogs/robertb",
                "Company": "The Schwan Food Company",
                "Title": null,
                "Twitter": "boedie",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T01:27:07.16"
              }
            ],
            "Tags": [
              {
                "Name": "security"
              },
              {
                "Name": "Encryption"
              },
              {
                "Name": "Digital Signatures"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-23T01:46:23.17",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2212,
            "Title": "Making A Game With Unity",
            "Description": "Have you ever wanted to be an indie game developer?  With so many platforms and app stores these days, the opportunities to share your work and creativity as independent game developer has never been greater.\r\nIn this talk, we’ll use one of the hottest game development tools, Unity, to create a complete game from soup to nuts.  Unity has over 2.5 million registered users and over 600,000 monthly active developers. Unity also supports or has plans to support just about every platform you can think of. It’s a perfect tool for independent game developers.\r\nThis talk will be light on slides and heavy on doing.  You’ll see first hand the “Unity” way of doing things with its component-based structure.  The pace will be fast and the content will be dense. If that is your thing, come join me and learn how a game is put together with Unity.\r\nFor the record, I have no official ties to Unity.  I’m just a major Unity fan.\r\n",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jeff",
                "LastName": "Weber",
                "HeadShot": "/cloud/profilephotos/Jeff-Weber-c92c9f79-b4ea-4045-bef6-aaf270e4d366-635349698638620155.jpg",
                "UserName": "JeffWeber",
                "Biography": "As my day job, I've been a software engineer for 13 or so years working mostly with Microsoft technologies.  In my spare time, I’ve spent the last 2 years working with Unity3D and last 8-ish years as an independent game developer.  My mobile game, Krashlander, has seen success on both the Windows Phone and iOS and my games Diver and Diver 2 were both popular web games.\r\n\r\n\r\n",
                "WebSite": "http://www.skylinetechnologies.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "@jeffweber",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T10:44:58.03"
              }
            ],
            "Tags": [
              {
                "Name": "C#"
              },
              {
                "Name": "development"
              },
              {
                "Name": "Indie"
              },
              {
                "Name": "game"
              },
              {
                "Name": "unity"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:41.667",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2451,
            "Title": "Massively Parallel Azure Systems",
            "Description": "Introduction to a completely new cloud programming model and actor framework known as Orleans. Learn how Orleans powers the Halo game and how you can use it to build massively scalable systems.",
            "Category": "Cloud",
            "Level": "400",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jason",
                "LastName": "Young",
                "HeadShot": "/cloud/profilephotos/Jason-Young-ec78a4de-11d0-4246-833f-70e4661e958e.jpg",
                "UserName": "ytechie",
                "Biography": "Jason Young is a Senior Program Manager & Evangelist with Microsoft. His focus is working with commercial ISVs on technical projects built on Azure, Windows 8, and Windows Phone 8.  His development focus areas are C#/.NET, JavaScript, and everything in between. Recently, he started the MS Dev Show podcast. http://msdevshow.com",
                "WebSite": "http://www.ytechie.com",
                "Company": "Microsoft",
                "Title": "Sr. Program Manager",
                "Twitter": "ytechie",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/ytechie",
                "LastUpdated": "2014-05-18T00:11:47.49"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "Azure"
              },
              {
                "Name": "orleans"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:39.953",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 143,
            "Title": "Rethink Async With RXJS",
            "Description": "With the rise in popularity of functional programming lately new ways of writing concise and expressive code have emerged. Reactive JavaScript (RXJS) is one of these and takes functional programming a step further by turning events and asynchronous calls into compostable data streams.\r\n\r\nFocusing on how we use RXJS at Netflix, this session campers will learn how to use the 5 pillars of Functional programming: map, mergeAll, filter, reduce, and zip and how they are superior to their imperative counterparts. Campers will then learn how manage Observable object life cycles to write code that will allow them to abstract away the differences between asynchronous callbacks and events using the RXJS library.",
            "Category": "Web",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ryan",
                "LastName": "Anklam",
                "HeadShot": "/cloud/profilephotos/Ryan-Anklam-08e6f960-00ad-4f79-8bd5-956b1b6fc856.jpg",
                "UserName": "bittersweetryan",
                "Biography": "Ryan Anklam is a Senior UI Engineer at Netflix where is working on reinventing TV and continually improving the Netflix user experience. He has been developing for the web since JavaScript was mainly used for mouseover images and crude form validation. Ryan is also a passionate open source advocate and contributor.",
                "WebSite": "http://blog.ankl.am",
                "Company": "Netflix",
                "Title": "Senior UI Engineer",
                "Twitter": "@bittersweetryan",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/ryananklam/",
                "GitHub": "http://www.github.com/bittersweetryan/",
                "LastUpdated": "2014-04-04T04:49:53.48"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "RXJS"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:50.45",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 122,
            "Title": "Should You Hitch Your Mobile Development Saddle to the Xamarin Horse? (Exploring the Xamarin Option for Cross Platform Mobile Development) ",
            "Description": "Come see how we explored Xamarin as the basis for our mobile development. And learn if it may be right for you. Together we'll look at available cross platform alternatives and spend some time coding up an application framework to support IOS and Android. We'll look at various tools/techniques such as MvvmCross, Dependency Injection (DI) and Inversion of Control (IoC) and how they can be applied to benefit from shared code across platforms but easily allow access to platform specific features (E.g. Bluetooth) when necessary. ",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tom",
                "LastName": "Steele",
                "HeadShot": "/cloud/profilephotos/Tom-Steele-37b1851b-c244-4ce8-94da-a7f578c172a8-635352817324484614.jpg",
                "UserName": "tsteele3rt",
                "Biography": "Tom Steele develops software for Three Rivers Technologies and their clients. He enjoys learning new things and sharing what he learns through collaboration, speaking, and writing. He is especially interested in .NET related technologies and programming techniques that contribute to successful software solutions.",
                "WebSite": "www.3riverstech.com",
                "Company": "Three Rivers Technologies",
                "Title": "Software Architect",
                "Twitter": "@tsteele3rt",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-10T01:22:12.447"
              }
            ],
            "Tags": [
              {
                "Name": "ios"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "MVVM"
              },
              {
                "Name": "Xamarin"
              },
              {
                "Name": "Android"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:53.3",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 4458,
            "Title": "Teaching the Junior Campers to Program with the Grown Up Tools",
            "Description": "Want to spend more time with your kids?  Want your kids to understand what it is you do?  Want to do all of this while increasing your child’s analytical and reasoning skills, and maybe…just maybe…light the spark in them that exists in you?  Well, this is the session for you and your kids!\r\n\r\nIn this session I will show you how you can use Visual Studio to easily teach your kids to program in C#.  No, you read that correctly, we won’t be using a dumbed down IDE or language.  We will be using the same IDE and language that you use every day.  We’ll be using a great a little NuGet package put together by the folks over at TeachingKidsProgramming.org that allows you to use C# in Visual Studio to write code that generates the same fun graphical responses as SmallBasic.  I will show you how you can use concepts your child knows like nouns and verbs to make the programming concepts easier for you to teach and for your child to learn.    And hopefully by the end of the session you’ll be prying your child away from Visual Studio instead of the latest social gaming site.\r\n\r\n**This is a hands on course so please bring a machine with Visual Studio installed.\r\n",
            "Category": "Family",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Keith",
                "LastName": "Burnell",
                "HeadShot": "/cloud/profilephotos/Keith-Burnell-0e330dff-cee1-41e5-83e7-3a0e54a21e65.png",
                "UserName": "kburnell",
                "Biography": "Keith Burnell is a Microsoft Web MVP and Senior Software Engineer with Skyline Technologies.  He has been developing software for over 12 years specializing in large scale web site development and architecture as well as teaching and mentoring clients on the benefits of test-driven development.\r\n \r\nKeith is an active member of the .NET community who speaks regularly at local and regional user groups and developer events as well as at national and international conferences. He is an avid blogger and author who been featured multiple times in MSDN magazine and has authored courses for Pluralsight. \r\n\r\nKeith has two wonderful daughters and is married to his high school sweetheart who is still way out of his league! \r\n\r\nWhen not slinging code, Keith enjoys spending time with his family Keith enjoys martial arts, soccer, biking, and running.\r\n",
                "WebSite": "http://www.DotNetDevDude.com",
                "Company": "Skyline Technologies, Inc.",
                "Title": "Senior Software Engineer",
                "Twitter": "KeBurnell",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/pub/keith-burnell/5/387/580/",
                "GitHub": "https://github.com/kburnell",
                "LastUpdated": "2014-05-16T12:54:06.03"
              }
            ],
            "Tags": [
              {
                "Name": "family"
              },
              {
                "Name": "kids"
              },
              {
                "Name": "teaching"
              },
              {
                "Name": "Coding"
              },
              {
                "Name": "Fun"
              },
              {
                "Name": "Hands On"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:54.07",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 1182,
            "Title": "Using HDInisght and Internet of Things To See The Forest For The Trees",
            "Description": "With the proliferation of internet-connected devices, unless you're camping \"off the grid\", you are probably using or nearby something transmitting data to the cloud. But how do you handle the enormous volume of message coming in from these devices, and how do you make sense of this information? In this session, we'll review HDInsight, Microsoft's Hadoop implementation, as well as patterns for handling the extreme volume of messages produced by the Internet of Things.",
            "Category": "Cloud",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tony",
                "LastName": "Guidici",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "tonyguid",
                "Biography": "TED team - Microsoft. More later...",
                "WebSite": "http://www.tonyguid.net",
                "Company": "Microsoft",
                "Title": "Sr. Program Manager",
                "Twitter": "tonyguid",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/tonyguid",
                "GitHub": "http://github.com/tonyguid",
                "LastUpdated": "2014-04-07T14:44:43.6"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "Azure"
              },
              {
                "Name": "Big Data"
              },
              {
                "Name": "HDInisght"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:54.823",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1223,
            "Title": "UX Stories to Tell in the Dark ",
            "Description": "Everyone loves a fairy tale; case studies of how changes to user experience increased sales by 300 million, testing which suggests a drastic increase in success rates and as expected- an increase in conversions.  \r\n\r\nBut what about the flip side? What about the user experiences (or lack of experiences) that have gone terribly wrong? In this session we will review and discuss the horror stories of UX as brought forward by a variety of UX Designers. We will talk about experiences that have failed, what caused them to fail, and what lessons we can take away from the experience of failure. \r\n\r\nDon’t worry. I promise not to scare you too much. \r\n",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Kelley",
                "LastName": "Muir",
                "HeadShot": "/cloud/profilephotos/Kelley-Muir-d860d075-5194-4915-9705-cdc3a609eacc.jpg",
                "UserName": "KelleyMuir",
                "Biography": "Hi. I’m Kelley. Nice to meet you….\r\nWith 10 years experience, my career path might look like a page from a maze book… but don’t let that fool you.  I’ve got a compass.\r\nMy first job resulted from pointing out the lack of validation of a paper database to a college professor. Since then, I have worked as a 3-D Animator, Project Manager, and Business Analyst.  What I liked about all of these roles were that they let me focus on details of an experience… Details that others often forget. Currently I am the User Experience Designer at Ektron.\r\nI am also very active in the local community; I’m a Co-Organizer of New England GiveCamp and BarCamp Manchester as well as the founder of Float Left Labs. My family consists of my developer husband and two geeklings, which puts us in the running for the geekiest family ever. ",
                "WebSite": "http://kelley.sundermedia.com",
                "Company": "Ektron",
                "Title": "UX Designer",
                "Twitter": "Manage_Kelley",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/kelleymuir",
                "GitHub": null,
                "LastUpdated": "2014-07-07T15:38:07.377"
              }
            ],
            "Tags": [
              {
                "Name": "UX"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:43.033",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2429,
            "Title": "Write Xbox One, Windows and Windows Phone Apps the Universal Way",
            "Description": "With Universal Apps, Microsoft has introduced a convergence for developing apps for their platforms. Having a common development model with WinRT, the developer’s campfire dreams of one-hundred percent reusability take a step closer to reality, but that is most likely an unreachable goal.\r\n\r\nCome learn how universal apps work; the good, the bad and the ugly of using them. Greg will also discuss how to customize the user experiences for each platform to provide the best apps to your users. He will go through several examples so that you can walk away with a solid foundation and avoid common pitfalls.\r\n",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T14:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Greg",
                "LastName": "Levenhagen",
                "HeadShot": "/cloud/profilephotos/Greg-Levenhagen-21b89f60-0141-4033-acd4-5f909656bd7f.jpg",
                "UserName": "GregLevenhagen",
                "Biography": "Greg Levenhagen is a Microsoft MVP in Client Development and senior software engineer consultant with Skyline Technologies. He has a great passion for giving back to the community and teaching. A true enthusiast of computer science, with passions and interests including mobile, UX, architecture, parallel, testing, agile, 3D/games, cloud, languages and much more. Greg speaks at conferences like ThatConference, CodeMash, VSLive and DevLink. He is also a Microsoft Certified Trainer, board member of ThatConference, president of the Northeast WI Developers User Group, cofounder of the Northeast WI Agile User’s Group, INETA speaker, IEEE and ACM member and a PhD student.\r\n\r\nAlong with being a life-long geek, Greg enjoys golfing, football, woodworking, philosophy and stimulating conversation.",
                "WebSite": "http://gregLevenhagen.com",
                "Company": "Skyline Technologies, Inc.",
                "Title": "Senior Software Engineer",
                "Twitter": "@GregLevenhagen",
                "Facebook": null,
                "GooglePlus": "http://google.com/+greglevenhagen",
                "LinkedIn": "http://linkedin.com/in/greglevenhagen",
                "GitHub": "http://github.com/greglevenhagen",
                "LastUpdated": "2014-04-15T05:01:23.347"
              }
            ],
            "Tags": [
              {
                "Name": "WinJS"
              },
              {
                "Name": "XAML"
              },
              {
                "Name": "xbox"
              },
              {
                "Name": "windows-store"
              },
              {
                "Name": "windows-phone"
              },
              {
                "Name": "winrt"
              },
              {
                "Name": "universal-apps"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:38.61",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "2:30 PM"
      },
      {
        "Sessions": [
          {
            "Id": 13,
            "Title": "Advanced Core Data - Much Wow",
            "Description": "You've been using Core Data in your iOS apps and think it's great and simple and super powerful. But now you're starting to run into problems with your apps that you can't explain and possibly even have performance issues.  Core Data isn't the most straightforward of frameworks to instrument and improve upon so you don't know where to start.\r\n\r\nThis session will cover some of the more advanced topics about Core Data including doing things in the background (concurrency), caching data, and migrating schemas.  You'll see how you can improve your app's responsiveness by doing things on background threads in Core Data and how to set up your Core Data stack properly - not just by using Apple's wizards in Xcode.  This session is meant to be interactive so that you can ask the questions you have when the topics are being discussed.",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Aaron",
                "LastName": "Douglas",
                "HeadShot": "/cloud/profilephotos/Aaron-Douglas-f1c3cf39-7d0a-4606-a65b-98ebb010344e.jpg",
                "UserName": "astralbodies",
                "Biography": "Aaron was that kid taking apart the mechanical and electrical appliances at five years of age to see how they worked. He never grew out of that core interest - to know how things work. He took an early interest in computer programming, figuring out how to get past security to be able to play games on his dad's computer. He's still that feisty nerd, but at least now he gets paid to do it.\r\n\r\nAfter being a full time Java consultant for five years, he moved to a full-time mobile architect position for a year and now is with Automattic (WordPress.com, Akismet, SimpleNote) as a Mobile Maker. Aaron's interest in mobile development has been ever increasing since he got his first iOS app in Apple's App Store in 2009, Migraine Diary. Other than software development, Aaron enjoys camping during the summer, taking his dogs for a walk around the neighborhood, and pretending to be a storm chaser while sitting at home. ",
                "WebSite": "http://astralbodi.es",
                "Company": "Automattic Inc.",
                "Title": "Mobile Maker",
                "Twitter": "astralbodies",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/+AaronDouglasGeek",
                "LinkedIn": "http://www.linkedin.com/in/aarondouglas/",
                "GitHub": "https://github.com/astralbodies",
                "LastUpdated": "2014-05-08T12:02:55.423"
              }
            ],
            "Tags": [
              {
                "Name": "core data"
              },
              {
                "Name": "ios"
              },
              {
                "Name": "persistence"
              },
              {
                "Name": "concurrency"
              },
              {
                "Name": "apple"
              },
              {
                "Name": "sqlite"
              },
              {
                "Name": "data"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:32.193",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2372,
            "Title": "Design for Sensors, not Screens ",
            "Description": "We’ve all heard the statement “Design Mobile First”. Maybe its time to say “Design for Sensors First”. Sensors are going to become more and more incorporated into what we design. From wearable devices to button sized low powered beacons that transmit signals. We need to think about how we can start capturing these signals to help create that perfect, just right, contextual experience for our users.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Joe",
                "LastName": "Johnston",
                "HeadShot": "/cloud/profilephotos/Joe-Johnston-c13add44-c9ba-4db7-84a8-0ded7fa27b3c-635373144651349420.jpg",
                "UserName": "joejohnston",
                "Biography": "As Director of UX and Director of R&D for Universal Mind, Joe Johnston describes his role as “not a designer, not a developer, but in-between”. Over 14 years of digital experience with extensive knowledge of mobile and cross-platform technologies and frameworks. My skill set focuses on user experience and the creation of rapid prototypes to help clients quickly test proofs of concept and ideate new ideas. I’ve worked on a wide variety of projects, performing duties that include experience design, senior level development, and high level digital strategy. As an accomplished author and speaker, I look at myself as a subject matter expert on UX design and development principles. \r\n\r\nPrior to joining Universal Mind, Joe served as a UX Technologist at Knoware where he created the Flex Filter Explorer. He also worked as a Front End Technologist at Crowe Chizek where he created hundreds of small banking sites and one of the first Flex Catalogue applications. Joe’s contributions to Universal Mind have been fundamental as he was the UX Lead in creating the Digital Experience Framework that was used in creating the Jimi Hendrix Experience. He was also the idea creator and UX lead for iBrainstorm\r\n\r\nJoe lives in Grand Rapids and enjoys playing hockey with his son, watching his daughter dance and cheering on his wife at running events.",
                "WebSite": "https://medium.com/@merhl",
                "Company": "Universal Mind",
                "Title": "Director of UX // Director of Research and Design",
                "Twitter": "@merhl",
                "Facebook": "https://www.facebook.com/merhl",
                "GooglePlus": "https://plus.google.com/u/0/102341175112139978468/",
                "LinkedIn": "http://www.linkedin.com/in/merhl/",
                "GitHub": null,
                "LastUpdated": "2014-06-02T14:02:28.783"
              }
            ],
            "Tags": [
              {
                "Name": "design"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "Wearables"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:39.56",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2312,
            "Title": "Dude, where's my Camp Site?  Location aware Geo-Fencing maps in your Apps!",
            "Description": "Dude... I thought the campsite was over here?  Uh, no...\r\n\r\nDon't get lost anymore! Add location aware mapping, geo-fencing and routing to your Windows Store and Phone apps! Add app awareness based on where the user is located, even when your app is not running! The new geofence-based triggers allow you to be notified of timely location-based actions without the worry of excessive battery drain. \r\n\r\nThink of all the cool apps you can now create! And never miss out on another campsite cookout again!",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Lance",
                "LastName": "Larsen",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "lancelarsen",
                "Biography": "President of MADdotNET - Madison Wisconsin .NET User Community - www.MADdotNET.com\r\n.NET Technology Architect, who channels his passion for development into presentations and blogging, as you never learn something as well as when you plan on teaching it to others.\r\nOne of the proud organizers for That Conference - bringing you the best conference in the Mid-West and beyond!",
                "WebSite": "http://www.lancelarsen.com",
                "Company": "A.I. Labs",
                "Title": "MADdotNET President",
                "Twitter": "lancelarsen",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-14T17:55:46.663"
              }
            ],
            "Tags": [
              {
                "Name": "Windows Store"
              },
              {
                "Name": "Mapping"
              },
              {
                "Name": "maps"
              },
              {
                "Name": "Windows Mobile"
              },
              {
                "Name": "Geo-Fencing"
              },
              {
                "Name": "Awesome"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:42.337",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1202,
            "Title": "Full Stack Web Performance",
            "Description": "Modern users expect more than ever from web applications. Unfortunately, they are also consuming applications more frequently from low bandwidth and low power devices – which strains developers not only to nail the user experience, but also the application’s performance.\r\n\r\nJoin Nik Molnar, co-founder of the open source debugging and diagnostics tool Glimpse, for an example-driven look at strategies and techniques for improving the performance of your web application all the way from the browser to the server.\r\n\r\nWe’ll cover how to use client and server side profiling tools to pinpoint opportunities for improvement, solutions to the most common performance problems, and some suggestions for getting ahead of the curve and actually surpassing user’s expectations.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Nik",
                "LastName": "Molnar",
                "HeadShot": "/cloud/profilephotos/Nik-Molnar-581d0555-f443-4782-a0df-1ca706a535ab-635351555158674861.jpg",
                "UserName": "nikmd23",
                "Biography": "Nik Molnar is a New Yorker, Microsoft MVP, ASP & Azure Insider and co-founder of Glimpse, an open source diagnostics and debugging tool. Originally from Homestead Florida, Nik specializes in web development, web performance, web API's and community management. In his spare time, Nik can be found cooking up a storm in the kitchen, hanging with his wife, speaking at conferences, and working on other open source projects.",
                "WebSite": "http://nikcodes.com",
                "Company": "Red Gate",
                "Title": "Co-Founder of Glimpse",
                "Twitter": "nikmd23",
                "Facebook": null,
                "GooglePlus": "https://plus.google.com/nikmd23",
                "LinkedIn": null,
                "GitHub": "https://github.com/nikmd23",
                "LastUpdated": "2014-05-08T14:19:21.333"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "http"
              },
              {
                "Name": "Performance"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:45.677",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2336,
            "Title": "Internet Safety for Parents and Kids",
            "Description": "Join Richard Campbell, parent and geek, to talk about what parents and children need to know about the Internet. Get up to date on the hardware and software you should be using to access the Internet safely. Learn about the different ways that boys and girls use the Internet. Discuss reasonable ways to talk to your kids about the Internet and how to monitor their activities. Understand that when it comes to Internet and other technologies, kids are natives and parents are immigrants. Get your questions about Internet Safety answered!\r\n",
            "Category": "Family",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Richard",
                "LastName": "Campbell",
                "HeadShot": "/cloud/profilephotos/Richard-Campbell-24cf3721-88a6-4175-97b8-eb42e2e03dc8.jpg",
                "UserName": "RCampbell",
                "Biography": "Richard Campbell has spent more than 30 years playing around with microcomputers. Along the way he's done virtually every job you can  imagine in the industry, from manufacturing to programming to consulting, training and writing. An impressive list of organizations, including Barnes&Noble.com, Dow Chemical, Johnson & Johnson Health Care Services, Reuters, Subaru/Isuzu and the U.S. Air Force, have benefited from Richard's consulting expertise. He’s one of the co-founders of Strangeloop Networks, building the AS1000 scaling appliance for accelerating web sites. Strangeloop was sold to Radware Networks in 2013. Today Richard is a Microsoft Regional Director, an ASP.NET MVP and a serial entrepreneur. Richard is a partner in PWOP Productions (www.pwop.com) that creates a number of popular podcasts. He's the co-host of .NET Rocks!, the Internet Audio Talkshow for .NET Developers (www.dotnetrocks.com) which publishes three times a week to over 150,000 listeners in more than 120 countries worldwide, as well as host of RunAs Radio (www.runasradio.com), the podcast for Microsoft IT Professionals. You can reach Richard on twitter @richcampbell.",
                "WebSite": "http://www.dotnetrocks.com",
                "Company": ".NET Rocks!",
                "Title": "Co-Host",
                "Twitter": "richcampbell",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-14T19:53:35.793"
              }
            ],
            "Tags": [
              {
                "Name": "Internet Safety"
              },
              {
                "Name": "Kids Camp"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:48.557",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2309,
            "Title": "Let's Hack a Website",
            "Description": "We've all heard about XSS, read articles about the dangers of CSRF, and generally been aware of the potential security issues websites could face. Unfortunately, many of us haven't actually seen them in action. Rather than reading a bunch of power point slides, or talking about hypothetical attacks, this session will be full of actual attacks being executed against sites and a discussion about how to prevent them and recover from them.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ian",
                "LastName": "Muir",
                "HeadShot": "/cloud/profilephotos/Ian-Muir-76b50881-99e5-4fe6-bafc-85847e65586e-635393248937299920.jpg",
                "UserName": "woogychuck",
                "Biography": "Ian is a web developer and community organizer from Manchester, NH. He has over 10 years of experience developing online applications with a wide variety of platforms. Currently, he's building full-stack JS apps using AngularJS and NodeJS.",
                "WebSite": "http://meltwater.com",
                "Company": "Meltwater Group",
                "Title": "Senior Application Engineer",
                "Twitter": "Woogychuck",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-06-25T20:28:30.523"
              }
            ],
            "Tags": [
              {
                "Name": "security"
              },
              {
                "Name": "Platform-Neutral"
              },
              {
                "Name": "Full-Stack"
              },
              {
                "Name": "Shenanigans"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:35.05",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1219,
            "Title": "Live-Coded Music: electronic campfire sing-alongs of the future",
            "Description": "What is Live-Coded Music? Live-Coded Music is an emerging performance art in which performers write on-the-spot code to create live, improvised music. Rebuffing trends in turn-key computer DJ software, Live Coding embraces transparency, improvisation, and a raw, genuine, hands-on approach to electronic musical performance. In this session we will explore live-coded music, its past, present, and future, and its impact on programming and musical culture. We'll talk about Algoraves: live-coded and algorithmic music for clubs and dancing. We will show some popular Live Coding environments that YOU can use today to create with. Last, but certainly not least, we will make beautiful, improvised sound with code, a screen, and a pair of speakers.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "Hodnick",
                "HeadShot": "/cloud/profilephotos/Mike-Hodnick-3e9e0e1e-308a-4758-b729-509acba668d7-635388153847452480.jpg",
                "UserName": "kindohm",
                "Biography": "Mike is an independent web developer from Chaska, MN and enjoys producing humanly organized sound with code. He's currently working to build a strong live-coded music community in the Twin Cities and to help bring the first Algorave to the United States. When not making sound with code, Mike does full-stack web development.",
                "WebSite": "http://kindohm.com",
                "Company": "Byte Flurry",
                "Title": "Independent Developer",
                "Twitter": "kindohm",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/michaelhodnick",
                "GitHub": "https://github.com/kindohm",
                "LastUpdated": "2014-07-08T17:22:21.82"
              }
            ],
            "Tags": [
              {
                "Name": "Music"
              },
              {
                "Name": "programming"
              },
              {
                "Name": "livecoding"
              },
              {
                "Name": "art"
              },
              {
                "Name": "culture"
              },
              {
                "Name": "live"
              },
              {
                "Name": "improvisation"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T21:51:46.72",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 14,
            "Title": "Marvelous Mobile Ruby Development",
            "Description": "Once Android began its coup of the mobile market, the desire for multi-platform development tools has been nearly constant. As developers, DRY is beaten into us as a best practice, and maintaining multiple code bases feels wrong and wastes time. That said, many options out there require trade-offs, such as asking us to pay a large chunk of money, learning non-standard DSL, or using non-native interfaces that confuse users. It doesn't have to be this way though ... what if we could not only use a developer friendly language, but also share the code where appropriate and have native apps that behave the way the user expects? \r\n\r\nIn this session, we will build a basic \"IMDB\" for the Marvel universe that will run natively on both iOS and Android. Our tools will be Ruby Motion and JRuby. We will discuss setting up the environment, the basics of using each framework, and some tips and tricks. Along the way, we will also touch on how to easily share source, and discuss when it’s appropriate to write OS specific code. If the idea tickles your brain, come join the discussion.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Josh",
                "LastName": "Gretz",
                "HeadShot": "/cloud/profilephotos/Josh-Gretz-93920d90-522f-4475-8b7b-3a01c787ea64.jpg",
                "UserName": "jgretz",
                "Biography": "As the Director of Engineering at TrueFit, Josh helps lead our talented team of engineers. Since 2003, Josh has brought his passion for solving problems with technology to TrueFit and its clients. He is a passionate enthusiast of cutting edge technologies and has some of the best business chops around. He understands the challenges in getting new tech products to market and works with our clients and our team to develop innovative ways of overcoming them.\r\n\r\nJosh graduated from Grove City College in 2004 with a B.S. in Computer Information Systems and a minor in business. You can still find him around campus, advising students and teaching a class on iOS development as an adjunct professor.\r\n\r\nGiving back to the community is a huge part of Josh’s life. In addition to contributing to open source, Josh has presented talks at conferences like CodeMash, ThatConference, StirTrek and PGH Tech Fest. Josh also makes time to volunteer as an adult leader of his church’s youth group. Whether its wrestling code into submission or helping to shape the bright minds of the future, Josh is committed to leaving the world a little bit better than he found it.\r\n\r\nJosh resides in Cranberry Township with his wife, three sons, and their labradoodle. When he’s not being beguiled by code, you can find him playing basketball, watching any sport known to man (seriously, he stays up late to watch Olympic Handball), or creating some tasty morsel in the kitchen. He is also known to wear shorts in December. You can follow the journey on his blog: CodeStuffWell.com",
                "WebSite": "http://www.codestuffwell.com",
                "Company": "TrueFit",
                "Title": "Director of Engineering",
                "Twitter": "joshgretz",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/jgretz",
                "LastUpdated": "2014-05-06T02:15:09.667"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Cross Platform"
              },
              {
                "Name": "Ruby"
              },
              {
                "Name": "RubyMotion"
              },
              {
                "Name": "JRuby"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:40.957",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2453,
            "Title": "Programmers Can UX Too",
            "Description": "Programmers have a bad reputation when it comes to UX, but it's time to set the record straight: It isn't because we don't care! It's because we fall in the trap of thinking we can design a user interface and write it at the same time when, the truth is, these processes require different kinds of thinking. But learning how to unlock that part of your brain is worth it-- and you'll be surprised at what you already know. From one developer to another, this talk will discuss why you should think critically about the interfaces you write and give you some strategies you can start applying right away.\r\n\r\nThis talk is aimed at developers, both front-end and server-side, who implement user interfaces but may not have training in UX. And really, ALL programmers implement user interfaces: sometimes the user is another developer (in the case of an API) or a more advanced user (for a command-line tool), but all software has its users.",
            "Category": "Web",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Eryn",
                "LastName": "O'Neil",
                "HeadShot": "/cloud/profilephotos/Eryn-O'Neil-c3e27bf9-c47e-4bd2-9753-dedf2e6c8dd1-635349904108625384.jpg",
                "UserName": "eryn",
                "Biography": "Eryn O’Neil is a web developer and technical lead at Clockwork Active Media in Minneapolis, MN. There she has worked on everything from e-commerce to online promotions to building a professional-grade CMS. Her philosophy is to build software by placing humans first: both the people who will use it and the developers who will build it alongside you (and maintain it afterwards). Based in Minneapolis, MN, Eryn spends most of her free time swing and blues dancing, rock climbing, and wishing it wasn't snowing.",
                "WebSite": "twitter.com/eryno",
                "Company": "Clockwork",
                "Title": "Software Engineer, Tech Lead",
                "Twitter": "@eryno",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T16:26:50.863"
              }
            ],
            "Tags": [
              {
                "Name": "user experience"
              },
              {
                "Name": "UX"
              },
              {
                "Name": "ui"
              },
              {
                "Name": "ux for programmers"
              },
              {
                "Name": "ux first"
              },
              {
                "Name": "user-centered design"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:33.537",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1238,
            "Title": "Sweet Elixir! A Gentle Introduction to Erlang’s cute younger brother Elixir",
            "Description": "Around 60% of telecom passes through Erlang. Facebook uses it and RabbitMQ is built on it. It’s fast, concurrent, distributed, but its Prolog-inspired syntax leaves a lot to be desired. Ruby is beautiful and powerful, but struggles at scale and treats concurrency as a second class citizen. Elixir - a young, functional, meta programming language - aims to resolve this mighty conflict by providing a rosy syntax inspired by Ruby that compiles to Erlang VM compatible bytecode.\r\n\r\nTogether we’ll take a guided tour of Elixir basics and functional programming concepts like pattern matching, pipelines and tail-call recursion. From there we’ll explore the distributed and concurrent nature of Elixir, the fault tolerant features of OTP, and ways you can leverage Elixir in your existing architectures today.  As a bonus, we'll look at the emerging Rails inspired Phoenix Web Framework.\r\n\r\nWhether you roll with Mac, Windows or Linux everyone will leave an Elixir programmer.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ryan",
                "LastName": "Cromwell",
                "HeadShot": "/cloud/profilephotos/Ryan-Cromwell-3ab03512-6632-44a1-a2d4-e2bd04bfd51b.png",
                "UserName": "cromwellryan",
                "Biography": "Ryan Cromwell is a coder by trade with over 10 years of experience delivering solutions ranging from real-time customer loyalty systems and elegant user experiences to streamlined statistical process control software.  Having worked with passionate, high-performing Agile teams, Ryan ventured into the world of Scrum.org training and Agile coaching to replicate those amazing experiences.  Ryan’s passion remains delivering software as a member the Sparkbox Team in Dayton, OH.  He is co-founder of Dayton Clean Coders, the Dayton Elixir virtual Meetup, co-organizer of Southwest Ohio GiveCamp, and all around software community ally.  You can find Ryan at http://cromwellhaus.com and on Twitter as @cromwellryan.",
                "WebSite": "http://cromwellhaus.com",
                "Company": "Sparkbox",
                "Title": null,
                "Twitter": "cromwellryan",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "cromwellryan",
                "LastUpdated": "2014-04-09T14:21:19.937"
              }
            ],
            "Tags": [
              {
                "Name": "erlang"
              },
              {
                "Name": "Languages"
              },
              {
                "Name": "elixir"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:48.407",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 38,
            "Title": "Tales From the Client Side. MVC and Other Patterns for iOS Development",
            "Description": "The Model View Controller Pattern is a core concept for iOS development, but it’s often misused, misunderstood or completely ignored. It doesn’t help that MVC means something completely different in other technologies like .NET or Rails. This talk will help you understand how to use MVC to build well architected iOS apps. We’ll answer questions like:\r\n\r\nWhat is Cocoa MVC and how is it different from web based MVC Frameworks?\r\nWhen should I use a different pattern like Model View Presenter (MVP) or Model View View-Model (MVVM)?\r\nDo I have to use the Delegate Pattern to implement MVC?",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jaim",
                "LastName": "Zuber",
                "HeadShot": "/cloud/profilephotos/Jaim-Zuber-240d7150-84a4-4de2-bacd-78ce79dff39d-635349737895241987.JPG",
                "UserName": "jzuber",
                "Biography": "\r\nJaim is an independent consultant specializing in mobile and iOS development. Jaim spent over a decade writing client and embedded software in C & C++ before doing time in the Enterprise world. When mobile hit the scene he found his way back to his roots. He likes BBQ, biking and making noise with his modest array of instruments… sometimes in public.\r\n\r\nYou can find him online at http://sharpfivesoftware.com/blog/ and @jaimzuber. He’s also part of the iPhreaks podcast where he talks iOS every week with some of the best in the industry http://iphreaksshow.com/",
                "WebSite": "http://www.sharpfivesoftware.com/blog",
                "Company": "Sharp Five Software",
                "Title": "President",
                "Twitter": "jaimzuber",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T11:49:49.523"
              }
            ],
            "Tags": [
              {
                "Name": "ios"
              },
              {
                "Name": "MVC"
              },
              {
                "Name": "Design Patterns"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:38.023",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 39,
            "Title": "What can JavaScript ES6 features do for me today?",
            "Description": "Come learn about how you can start using the new ES6 \"Harmony\" features today in your projects with the magic of Transpilation.  We'll briefly cover some of the new stuff like native module syntax, easier classes, function arrow shorthand notation and others.  Then, we'll walk through some real world examples of how to start refactoring existing code to be shorter and more effective by leveraging those shiny new ES6 features.  Lastly, we'll talk about how you can convert your fancy new ES6 code to regular old ES5 code using your existing build processes; including Grunt, Gulp and even a recent new-comer Broccoli.",
            "Category": "Web",
            "Level": "300",
            "ScheduledDateTime": "2014-08-12T16:00:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jacob",
                "LastName": "Gable",
                "HeadShot": "/cloud/profilephotos/Jacob-Gable-970a1901-2ee9-4fdc-973b-5ce98c6aaa32-635349870234221208.jpg",
                "UserName": "jgable",
                "Biography": "Professional Software Developer at @SproutSocial.  Core team member for @TryGhost.  Amateur Philosopher.  Maker of things.",
                "WebSite": "http://jacobgable.com",
                "Company": "Sprout Social",
                "Title": "Senior Software Engineer",
                "Twitter": "jacob4u2",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/jgable",
                "LastUpdated": "2014-05-06T15:30:23.423"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "node.js"
              },
              {
                "Name": "ES6"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:36.45",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "4:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4449,
            "Title": "That Pig Roast",
            "Description": "Day 2, you’re loaded with tech and getting a little tired. Its ok, we have just the answer; a Pig Roast. We’re camping, who said we need to eat hotdogs all day. It’s another opportunity to meet new people and chill with friends and family but get fueled up because the waterpark party is later tonight.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T17:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": true,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:08:08.927",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "5:30 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4450,
            "Title": "That Waterpark Party",
            "Description": "Are you about to overheat from a long day taking in the tech? Well we have just the answer, the waterpark. Get some food, and fuel up because we've rented the place out. That is right, no crazy lines just geeks and their families. From 10:30 PM to 1:30 AM we have the place to ourselves.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-12T22:30:00",
            "ScheduledRoom": "Indoor Waterpark",
            "IsFamilyApproved": true,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-21T12:10:30.483",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "10:30 PM"
      }
    ],
    "Day": "Tue 8/12"
  },
  {
    "TimeSlots": [
      {
        "Sessions": [
          {
            "Id": 4446,
            "Title": "Breakfast ( Wednesday )",
            "Description": "Get out of bed sleepy head and get some chow. Come down to the mess hall, grab a plate, some java, and wake up before our keynoter jumps on stage and drops some campfire stories.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T07:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T23:34:05.12",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "7:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 5463,
            "Title": "How One Year of Crazy Created the New Normal",
            "Description": "What do two friends who were back-to-back student body presidents from one of the top universities in the country do after graduating? You move-in to an apartment together after kicking your father out to teach yourself how to code & build startups of course! This talk will walk through the journey of all the crazy things people will do to solve problems they care about. From running out of money to turning down the President of the United States, it's a story that will make you laugh and hopefully inspire you to do what you love.",
            "Category": "Keynote",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T08:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "McGee",
                "HeadShot": "/cloud/profilephotos/Clark-Sell-87f6b715-7368-4181-9b15-f7fcba53c7d9-635410455261246484.jpeg",
                "UserName": "michaelmcgee",
                "Biography": "Mike McGee is the co-founder of The Starter League, an in-person school in Chicago that teaches beginners how to build web applications. Before The Starter League, Mike's greatest claim to fame was that his High School mascot was a pretzel. He went to Northwestern for four years where he spent two years being a student and two years in student government - miraculously becoming Student Body President his senior year. In Spring 2011, Mike decided to turn down Obama for America (his first real job offer) to co-found The Starter League. Recently Mike was named to Crain's 40 Under 40 for 2013 (along with his co-founder, Neal Sales-Griffin). His latest \"dent in the universe\" project is Starter School, an immersive, full-time program that will take people from zero to entrepreneur in 9 months. ",
                "WebSite": "http://starterleague.com",
                "Company": "The Starter League",
                "Title": "Co-founder",
                "Twitter": "@michaelmcgee",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-14T23:11:08.787"
              }
            ],
            "Tags": [
              {
                "Name": "motivation"
              },
              {
                "Name": "design"
              },
              {
                "Name": "user experience"
              },
              {
                "Name": "programming"
              },
              {
                "Name": "learning"
              },
              {
                "Name": "Coding"
              },
              {
                "Name": "chicago"
              },
              {
                "Name": "president obama"
              },
              {
                "Name": "harper reed"
              },
              {
                "Name": "inspiration"
              },
              {
                "Name": "mistakes"
              },
              {
                "Name": "storytelling"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-16T22:55:09.7",
            "Updated": true,
            "ShowMoreDetails": false
          }
        ],
        "Time": "8:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 1228,
            "Title": "Building stable agile cloud applications",
            "Description": "We design for it, plan for it and hope it never arrives... but just like that ugly sweater on Christmas, problems in our applications show up at the worst possible times! It's usually when your organization's systems are at their highest load, meaning every minute your application isn't functioning your organization is losing money and customers! At this point there's a strong urge to do more planning up front, or eliminate most of those pesky connected systems or third party vendors that aren't as stable as you would like... but you can keep those vendors and systems and create a resilient application! You don't need that \"big bang\" deployment that takes months to plan or be afraid to migrate systems to the cloud.\r\n\r\nIn this talk we'll cover some of the principles of constructing resilient cloud applications, starting with transient error handling, diagnostics and building fallback patterns into the application. Then we'll move on to how to incrementally update your application to support newer foundations, external services and vendors without impacting the current infrastructure. Then we'll discuss strategies for limiting your roll-out to ensure it's successful before releasing it to everyone. As we cover areas we'll be adding these items to a small e-commerce project and demonstrating how you can simulate failures to validate the effectiveness of these updates.",
            "Category": "Cloud",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dan",
                "LastName": "Piessens",
                "HeadShot": "/cloud/profilephotos/Dan-Piessens-2a5f12b3-5452-4134-b46d-b5869da44231-635349852020839172.jpg",
                "UserName": "dpiessens",
                "Biography": "Dan is a senior consultant for Centare where he passionately advocates agile principles and infects his clients with DevOps and other wonderful new ideas. Having 13 years of experience in the software industry, Dan has architected world class enterprise applications in the transportation, insurance, and healthcare industries. He has been a Microsoft Patterns and Practices Champion since 2008 and an advisor on projects including Unity, Enterprise Library, Prism, Acceptance Testing, and CQRS. His latest endeavors involve guidance for development teams on continuous delivery and promoting best practices for the latest Microsoft Web and Azure technologies.",
                "WebSite": "http://www.centare.com",
                "Company": "Centare",
                "Title": "Senior Consultant",
                "Twitter": "dpiessens",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/danielpiessens/",
                "GitHub": "https://github.com/dpiessens",
                "LastUpdated": "2014-05-06T15:01:13.627"
              }
            ],
            "Tags": [
              {
                "Name": "cloud resiliency load balancing"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:21.957",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2188,
            "Title": "Design for Fingers, Thumbs, and People: Real World Data and Tactics for Touchscreen Design",
            "Description": "Touch guidelines like Apple's 44 pixel target are based too much on technology, and pixel sizes. They are not based on the real world, on people's hands, fingers and thumbs. \r\n\r\nNow we have real research, including thousands of new, original observations on how people hold and touch their phones, phablets and tablets. We can increasingly understand why people act this way, and can use this information to design for the different ways people actually use their mobile devices. Steven will present not just the background and principles of designing good mobile touchscreen experiences, but give specific checklists, guidelines and sizes you have to meet to make sure anything you design or make for phones or tablets is readable, understandable, usable, and tappable. ",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Steven",
                "LastName": "Hoober",
                "HeadShot": "/cloud/profilephotos/Steven-Hoober-99f8e100-8a54-45a4-8daa-414c973a4fad.jpg",
                "UserName": "shoobe01",
                "Biography": "Steven Hoober wrote the book on mobile design patterns, and is best known for his ongoing research into how people really use touchscreen phones and tablets. He has been doing mobile and multi-channel design since 1999, designing the earliest mobile app store and the first Google mobile search for Sprint, several mobile browsers, many mobile sites such as Weather.com, and apps for companies like Hallmark, US Bank and Cummins. Steven maintains a repository of mobile design and development information including all the content from Designing Mobile Interfaces at the 4ourth Mobile Patterns Wiki, regularly writes for UX Matters magazine, and UX Magazine, among other writing and speaking.",
                "WebSite": "http://www.4ourth.com",
                "Company": "4ourth Mobile",
                "Title": "President - Design",
                "Twitter": "shoobe01",
                "Facebook": "https://www.facebook.com/shoobe01",
                "GooglePlus": "https://plus.google.com/u/0/+StevenHoober/",
                "LinkedIn": "https://www.linkedin.com/in/shoobe01",
                "GitHub": null,
                "LastUpdated": "2014-05-05T22:47:44.707"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Templates"
              },
              {
                "Name": "design"
              },
              {
                "Name": "Phone"
              },
              {
                "Name": "Psychology"
              },
              {
                "Name": "touch"
              },
              {
                "Name": "physiology"
              },
              {
                "Name": "cogsci"
              },
              {
                "Name": "vision"
              },
              {
                "Name": "resolution"
              },
              {
                "Name": "sizes"
              },
              {
                "Name": "guidelines"
              },
              {
                "Name": "tablet"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:33.747",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1184,
            "Title": "Digitally Sign on the Dotted Line",
            "Description": "Even in the internet age, businesses still rely on signed documents for legal transactions.  The low cost of mobile devices and their support for HTML opens up compelling new options for rendering documents and capturing signatures.\r\n\r\nIn this session, Guy will discuss business cases and legal/security concerns related to electronic signature capture.  He will then create an HTML5 signature pad that runs in-browser on a tablet, displays dynamically-rendered documents, and captures signatures digitally that can then be stored and printed on the documents.  Technologies used include an OWIN-hosted WebAPI and HTML5.\r\n",
            "Category": "Mobile",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Guy",
                "LastName": "Starbuck",
                "HeadShot": "/cloud/profilephotos/Guy-Starbuck-304e3838-2f3b-40e0-b8cc-1fb5487dd7c2.jpg",
                "UserName": "GuyStarbuck",
                "Biography": "Guy, a Software Development Manager and Architect with Yahara Software in Madison, WI, has been designing and developing business software for more than fifteen years. In recent years he has embraced Agile methodologies, and he is always striving to improve his projects with technology, communications, and operational efficiency. Guy lives in Waunakee, Wisconsin with his wife and two kids. He enjoys the outdoors, learning, and spending time with his family.",
                "WebSite": "http://www.yaharasoftware.com",
                "Company": "Yahara Software",
                "Title": "Software Development Manager and Architect",
                "Twitter": "@guysethstarbuck",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-20T15:23:12.163"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "javascript"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "owin"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-14T15:25:07.283",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 80,
            "Title": "High Performance JavaScript",
            "Description": "Those days of dumping JQuery blindly have gone. In 95% of the cases, you have easier, faster and build in alternative. Moreover, the so called \"best practices\" that you have been trusting for years could actually harm your application.\r\n\r\nYou don’t need to be an expert to write high performance JavaScript.\r\n\r\nThe goal of this session is to explain critical/confusing parts of JavaScript like scope, closure, hoisting, event bubbles, DOM manipulation, etc. so that your grandma can understand and make her own standards or best practices for you. Besides, modern tools that could make you a rock star to debug performance related issues will also be demonstrated.\r\n\r\n“Don’t trust a rule, trust your tool”. \"Explore and ask before you jump. Don't belly flop.\"",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Md",
                "LastName": "Khan",
                "HeadShot": "/cloud/profilephotos/Md-Khan-a6c0029c-8c82-4ebf-aca3-8c57725a27ab-635350693998290330.jpg",
                "UserName": "khan4019",
                "Biography": "Md khan is a curious JavaScript developer and a frequent speaker. He helps to organize monthly Chicago JavaScript meetups. His weekends are filled with the excitement of preparing talks, writing blogs for www.thatjsdude.com, making videos for https://www.youtube.com/user/khanLearning, or pulling out his hair to figure out how this new JavaScript library works. So, the only way, Md Khan gets enough sleep at night is to spend at least 6 hr per day in JavaScript. That could be by reading JavaScript Weekly or pushing code to github when his manager is not around. He is simply addicted to JavaScript.\r\n\r\nIf you are still interested to read his job title (you might be an auto insurance agent), Md is a senior web developer at Nielsen, Chicago, IL.",
                "WebSite": "http://www.thatjsdude.com/",
                "Company": "Nielsen",
                "Title": "Senior Web Developer",
                "Twitter": "mdkhan005",
                "Facebook": "https://www.facebook.com/JhankarMahbub",
                "GooglePlus": "https://plus.google.com/+KhanMd",
                "LinkedIn": "http://www.linkedin.com/in/mdkhan005",
                "GitHub": "https://github.com/khan4019",
                "LastUpdated": "2014-05-25T14:48:09.817"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Performance"
              },
              {
                "Name": "Web Performance"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:27.767",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2434,
            "Title": "Manage your app in the background - Keeping your app alive with background tasks",
            "Description": "Have you ever written a Windows Store App that needs to synchronize it's local data, update live tiles, or download files  based upon a time interval or system event? If so, background tasks are an excellent technology to help accomplish this.\r\n\r\nDuring this session we will cover how to register, debug, and monitor the progress of a background task. As with any technology there are always strengths, weaknesses, and gotchas. By the time you leave this session you will have an understanding of how to best use this technology in your mobile device applications.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Dan",
                "LastName": "Normington",
                "HeadShot": "/cloud/profilephotos/Dan-Normington-cd36e304-5b57-4d2c-8926-c5d22771819d-635357575091169721.png",
                "UserName": "dannormington",
                "Biography": "Dan is a Senior Software Engineer at Vertigo Software with over 15 years of development experience. The past couple years he has had the opportunity to focus on mobile device development ranging from iOS, Android, Windows Phone, and Windows RT.\r\n",
                "WebSite": "http://www.vertigo.com",
                "Company": "Vertigo",
                "Title": "Senior Software Engineer",
                "Twitter": "dannormington",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "dannvertigo",
                "LastUpdated": "2014-05-15T13:31:49.117"
              }
            ],
            "Tags": [
              {
                "Name": "C#"
              },
              {
                "Name": "windows 8"
              },
              {
                "Name": "winrt"
              },
              {
                "Name": "Background Task"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:23.287",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2340,
            "Title": "Modern GPU Computing",
            "Description": "The free lunch is over, CPUs are no longer getting faster single-core performance every generation so we can't just write software and hope tomorrow's CPUs will make it fast. So how are we supposed to deal with the massive amounts of data we're collecting? Unknown to many of us there's a lightning fast supercomputing co-processor sitting in many of our machines: the GPU. Not just for creating realistic images any more, the modern GPU has arrived as a more general purpose computing platform and it is FAST. We will explore applications of NVidia's Cuda platform using managed and unmanaged code.",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Damon",
                "LastName": "Payne",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "DamonPayne",
                "Biography": "Damon Payne is a software developer, husband, father, atheist, BBQ enthusiast, wino, martial artist, and AV nut currently living the in unexplored swamps near Milwaukee.",
                "WebSite": "http://www.damonpayne.com",
                "Company": "Red Arrow Labs",
                "Title": "Software Architect",
                "Twitter": "@damonpayne",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-14T14:51:12.167"
              }
            ],
            "Tags": [
              {
                "Name": "GPU compute"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:20.623",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 81,
            "Title": "NancyFx - ASP.NET's Super-Duper-Happy Framework",
            "Description": "Nancy is a lightweight, low-ceremony, framework for building HTTP based services (and websites) on .Net and Mono. The goal of the framework is to stay out of the way as much as possible and provide a super-duper-happy-path to all interactions.\r\n\r\nThis means that everything in Nancy is setup to have sensible defaults and conventions, instead of making you jump through hoops and go through configuration hell just to get up and running. With Nancy you can go from zero to website in a matter of minutes. Literally.\r\n\r\nEasy doesn't mean it isn't powerful. Nancy is a modern framework. Almost all of Nancy is extensible and employs powerful techniques like IOC Containers, Async and Dynamics. It may be light-weight, but it's certainly no light-weight.\r\n\r\nSpend an hour and learn about Nancy. You'll be super-duper-happy you did!",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "Ward",
                "HeadShot": "/cloud/profilephotos/Mike-Ward-5231cd98-cc19-472c-9a51-1b039739fba5-635349820224012225.jpg",
                "UserName": "MikeWard",
                "Biography": "I'm a programmer by accident. In college I studied Meteorology and thought I might be a weather forecaster. But after writing my first weather simulation (in Fortran on punch cards no less) my path changed. I started way back in the days of K&R C and mini-computers. From there it was personal computers and Windows and Medical Enterprise Software and now Web. It's been a great ride, and it just keeps getting better. ",
                "WebSite": "http://mike-ward.net",
                "Company": null,
                "Title": null,
                "Twitter": "@mikeward_aa",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/mike-ward",
                "LastUpdated": "2014-05-06T14:08:11.6"
              }
            ],
            "Tags": [
              {
                "Name": "C#"
              },
              {
                "Name": "MVC"
              },
              {
                "Name": "nancyfx"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:14:56.367",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 4455,
            "Title": "Robotics Camp - The Finale - Day 3",
            "Description": "(… we rejoin our campers in the midst of the final competition …)\r\n\r\n“Awesome! How did you pull that off?” you cry, as Gregg expertly navigates the obstacle and drops the 3rd red brick onto the stack.  “Sheer luck, I think,” he responds, with a smile from ear to ear.  The mechanical side of things had come together expertly over the last couple days, and you guys are skating through the manual achievements as Josh and Margaret watch nervously.\r\n\r\n“Automatons Assemble!” announces the Captain, and Josh and Margaret walk over to upload the automaton ‘brain’ into the robot.  “Good luck guys, you’ve got this easy” you assure them, although listening to the buffer overrun discussions last night does give you a bit of pause.  Clearly ‘the C is with you’ this day, and the hours in the simulator have paid off.  You watch your robot effortlessly scan the field and begin collecting blocks, popping them up and stacking them just as the team had planned.  Your robotics mastery is now complete, and you grin from ear to ear as you accept your awards.\r\n\r\n“I knew ya’ had it in ya” smiles the Captain as he hands you the coveted ‘Mastery Level 3’ ribbon.  You can’t believe the experience is over, and as you watch the other teams presentations and solutions, you can help but be amazed at the number of different ways there are to solve the same problem.  The teams have been pushed hard, but it was all worth it.  You can’t wait to share the experience with your friends at home, maybe you’ll be back next year, maybe not, but you’ll never forget your time at Robotics Camp.\r\n\r\n------------------------------------------------------------------------------------------\r\n\r\nNOTE:  Campers planning to participate in Day 3 are required to have participated in Day 2, and preferably Day 1 as late campers are not guaranteed to have access to physical robotics kits.  All are welcome to come in and observe, but please reserve workspaces for those participating in the challenges.\r\n\r\nSchedule:\r\n\r\n- Day 3 Overview\r\n- Group Q & A\r\n- Guided Builder Space [AM]\r\n- Goal Achievement [AM]\r\n- Team Presentations [PM]\r\n- Closing\r\n",
            "Category": "Family",
            "Level": "400",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Banyan",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Benjamin",
                "LastName": "Gavin",
                "HeadShot": "/cloud/profilephotos/Benjamin-Gavin-8ed9516a-2287-494b-809f-5362a9b589fd.jpg",
                "UserName": "bengavin",
                "Biography": "Ben is a Senior Software Engineer at Skyline Technologies and has been writing software for the web and beyond for over 20 years [but doesn't feel old enough for that to be true].  He loves learning and experimenting with technology, mentoring other developers and sharing what he can with the communities and people who have taught him so much over the years.  His current focus is primarily around the Microsoft technology stack, including C#, Azure, Windows 8 and Windows Phone and helping his customers get the best solution for their needs.",
                "WebSite": "https://www.virtual-olympus.com",
                "Company": "Skyline Technologies",
                "Title": "Senior Software Engineer",
                "Twitter": "virtualolympus",
                "Facebook": null,
                "GooglePlus": "ben@virtual-olympus.com",
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-04-07T15:13:29.54"
              },
              {
                "FirstName": "Paul",
                "LastName": "Shepard",
                "HeadShot": "/cloud/profilephotos/Paul-Shepard-f953ea38-5cde-4407-b642-e476ce2d74ca-635370560270512400.jpg",
                "UserName": "PaulShepard",
                "Biography": "Software engineer and father of 6 children, I am passionate about getting technology in the hands of kids. This year I enjoyed the awesome privilege of coaching a group of elementary aged kids with little to no experience coding or building robots to a Regional championship and an invitation to World Championships. I'm excited to share how agile dev practices empowered my team to go from lost to boss in a way that is turning heads in a robotics community which has long embraced a stricter waterfall approach. ",
                "WebSite": null,
                "Company": "Skyline Technologies",
                "Title": "Software Engineer",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-24T21:43:22.647"
              }
            ],
            "Tags": [
              {
                "Name": "robots"
              },
              {
                "Name": "Vex Robotics"
              },
              {
                "Name": "Vex IQ"
              },
              {
                "Name": "ROBOT-C"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:17.803",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 165,
            "Title": "Scratch for kids!",
            "Description": "Scratch is a programming language designed to teach children the basics of how to think like a programmer. Super easy and fun, kids and adults of all ages interested in learning a very easy programming language are welcome. \r\nPlease bring a laptop if you'd like to follow along. ",
            "Category": "Family",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Katelyn",
                "LastName": "Drew",
                "HeadShot": "/cloud/profilephotos/Katelyn-Drew-b4d13808-ab79-4fd6-90aa-ced02802e69b-635356102178539138.jpg",
                "UserName": "kkbanana",
                "Biography": "Hi, my name is Katelyn, and I'm 11 years old. When I held an Open Spaces session at That Conference in 2013, it was so much fun I wanted to come back & speak again. BTW both of my parents are nerds. Nerds rock.",
                "WebSite": "http://scratch.mit.edu/users/kkbananabread/",
                "Company": null,
                "Title": "Nerdy, Awesome Kid!!!",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-13T20:38:03.383"
              }
            ],
            "Tags": [
              {
                "Name": "family"
              },
              {
                "Name": "kids"
              },
              {
                "Name": "Scratch"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:45.587",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2268,
            "Title": "SMACSS Your Sass Up",
            "Description": "Modular CSS is all about learning to think about your CSS in terms of objects, and organizing them as such. I'll discuss SMACSS conventions and how to utilize Sass to create reusable patterns to streamline the development process. In addition, I'll share some tips to best optimize Sass for responsive design, with site examples. \r\n\r\nWhile Scalable and Modular Architecture for CSS (SMACSS) is just one methodology, the principals of modular CSS are applicable to sites large and small. Using a modular approach in tandem with Sass can greatly improve development efficiency and project maintenance. I'll discuss specific techniques, such as selector inheritance and interpolation, that can greatly reduce the amount of code written, resulting in DRYer, more modular CSS.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mina",
                "LastName": "Markham",
                "HeadShot": "/cloud/profilephotos/Mina-Markham-f5ff8096-e4b4-4e09-8b7a-af64451fc3c8.jpg",
                "UserName": "minamarkham",
                "Biography": "Mina Markham is a Sass-lovin' UI developer/designer in Dallas, Texas and the founder of the Dallas chapter of Girl Develop It. As a developer at Parago, Mina specializes in building responsive websites and modular CSS architecture. When she's not crafting sites or teaching others, Mina is probably in her kitchen baking something chocolatey.  Mina has spoken at various events, including Front-End Design Conference, Front Porch and Github's Passion Projects.",
                "WebSite": "http://mina.is/here",
                "Company": "Parago",
                "Title": "Front-End Developer",
                "Twitter": "minamarkham",
                "Facebook": "minamarkham",
                "GooglePlus": "+MinaMarkham",
                "LinkedIn": "minamarkham",
                "GitHub": "minamarkham",
                "LastUpdated": "2014-04-14T07:53:18.693"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "sass"
              },
              {
                "Name": "development"
              },
              {
                "Name": "preprocessing"
              },
              {
                "Name": "modular css"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:30.643",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2173,
            "Title": "The Sketchnote Mini-Workshop",
            "Description": "Mike Rohde will teach the basic elements of sketchnoting, then lead the group in a sketchnote session together, followed by review of volunteer sketchnotes and Q&A. This session is for anyone who wants to learn a new way of capturing their ideas - meetings you attend, ideas you have in your head or your experiences.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "Rohde",
                "HeadShot": "/cloud/profilephotos/Mike-Rohde-f76d4535-b1b1-41bc-9683-e34d198da03c-635416846340418643.jpg",
                "UserName": "rohdesign",
                "Biography": "Designer. Author of The Sketchnote Handbook, The Sketchnote Workbook. Illustrator of REWORK, REMOTE, $100 Startup, Little Book of Talent & Idea to iPhone. Husband, father of 3. Coffee!",
                "WebSite": "http://rohdesign.com",
                "Company": "Rohdesign Studios",
                "Title": "Designer, Illustrator, Author",
                "Twitter": "rohdesign",
                "Facebook": "https://www.facebook.com/MikeRohde",
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/mikerohde/",
                "GitHub": null,
                "LastUpdated": "2014-07-23T03:57:32.55"
              }
            ],
            "Tags": [
              {
                "Name": "sketchnote workshop drawing ideas skills"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:29.13",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2380,
            "Title": "Windows DevOps: Introducing Agile Environments",
            "Description": "An approach to environment management that increases speed, repeatability, implements change management and business continuity planning all at the same time using Boxstarter, Chocolatey, and PowerShell. ",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T10:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Paul",
                "LastName": "Drew",
                "HeadShot": "/cloud/profilephotos/Paul-Drew-8af79ae6-f6f3-413b-ac9f-c3084137fea0.jpg",
                "UserName": "SolarCurve",
                "Biography": "I am a life long technologist who started in the printing industry in the mid 90's on SGI Irix bridging the gap between agencies and printing operations to make things run smoother, quicker, and more reliable. Today, the medium has changed and over the last 19 years we've shifted from the printed word to the screen. Today's fancy word for this is DevOps and as the President and co-founder of DevOps Unlimited, my challenge is to help enterprises improve their operations through DevOps and the best practices of ITIL.",
                "WebSite": "http://www.devopsunlimited.com",
                "Company": "DevOps Unlimited",
                "Title": "President",
                "Twitter": "SolarCurve",
                "Facebook": "SolarCurve",
                "GooglePlus": "SolarCurve",
                "LinkedIn": "SolarCurve",
                "GitHub": "SolarCurve",
                "LastUpdated": "2014-03-31T15:34:49.817"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "devops"
              },
              {
                "Name": "PowerShell"
              },
              {
                "Name": "Visual Studio Online"
              },
              {
                "Name": "Microsoft Azure"
              },
              {
                "Name": "Compliance"
              },
              {
                "Name": "BoxStarter"
              },
              {
                "Name": "Chocolatey"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:40:32.08",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "10:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 4448,
            "Title": "Lunch ( Wednesday )",
            "Description": "We know you want to eat right??? We might not have a campfire but we do have food. Enjoy the bacon and relax with a few new friends.",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T11:30:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:15:19.39",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "11:30 AM"
      },
      {
        "Sessions": [
          {
            "Id": 2317,
            "Title": "“OMG! This Codebase Sucks!” Paying Down Technical Debt While Continuing to Deliver Value",
            "Description": "Sure, you know you need to clean up the lousy codebase that’s falling apart at the seams, but how are you going to figure out what to fix, how to fix it, who will fix it—and how you’ll get that done while meeting the other commitments of continuing to deliver new value to your customers?\r\nThis talk focuses on two aspects of dealing with technical debt: tools to help you figure out what’s in bad shape, and figuring out how to get the work done while continuing to ship.\r\nTo find out what to fix, will look at tools like NDepend, Visual Studio, Codeclimate, and metric-fu for hard-core metrics. We’ll walk through things like source code churn and defect rates to help you understand troublesome areas.\r\nArmed with that information, we’ll talk about different ways to negotiate getting technical debt paid off while meeting your larger goals of continuing to ship value to your customers.\r\nThis talk won’t cover best practices (BECAUSE THERE AREN’T ANY) nor will it attempt to convince you there are simple fixes to an unhealthy codebase. What you WILL leave with are ideas on how you can approach creating a strategy for your current situation.\r\n",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jim",
                "LastName": "Holmes",
                "HeadShot": "/cloud/profilephotos/Jim-Holmes-aaf198ca-e082-4a41-9d74-3b051f8b398e.jpg",
                "UserName": "aJimHolmes",
                "Biography": "VP of ALM and Testing at Falafel Software. Father.  Husband.  Geek. Veteran. Around 25 years IT experience. Co-author of “Windows Developer Power Tools.” Coffee Roaster.  MVP for C#.  Past President of  CodeMash Conference. Diabetic. Runner. Liked 5th grade so much he did it twice. One-time setter, middle blocker, and weakside hitter. Blogger (http://FrazzledDad.com). Big fan of naps.",
                "WebSite": "http://FrazzledDad.com",
                "Company": "Falafel Software",
                "Title": "VP of ALM and Testing",
                "Twitter": "aJimHolmes",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/jimholmes",
                "LastUpdated": "2014-04-14T18:39:46.91"
              }
            ],
            "Tags": [
              {
                "Name": "process"
              },
              {
                "Name": "testing"
              },
              {
                "Name": "Delivery"
              },
              {
                "Name": "quality"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:15.57",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 93,
            "Title": "All the Audio You Need: Intro to AV Foundation Audio",
            "Description": "Core Audio on iOS has a well-deserved reputation for being difficult. Until recently, if you wanted to include an audio recorder in your app you needed to write 250 lines of code, in C!! There is a better way, and that is AV Foundation. AV Foundation takes common audio tasks and wraps them in nice, friendly Objective-C so that you can include your audio code with a minimum amount of hassle.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Janie",
                "LastName": "Clayton-Hasz",
                "HeadShot": "/cloud/profilephotos/Janie-Clayton-Hasz-558a9589-b7bc-4351-8c87-32e632e46780-635386549493034825.png",
                "UserName": "RedQueenCoder",
                "Biography": "I am an independent iOS developer and author from Madison, WI. I specialize in graphics and audio programming. I am a recovering Journalism major whose interests are anime, video/audio editing and production, and pugs. Lots and lots of pugs.",
                "WebSite": "http://redqueencoder.com",
                "Company": "Third Impact Software",
                "Title": "Queen",
                "Twitter": "@redqueencoder",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/RedQueenCoder",
                "LastUpdated": "2014-07-17T02:20:16.717"
              }
            ],
            "Tags": [
              {
                "Name": "Audio"
              },
              {
                "Name": "ios"
              },
              {
                "Name": "AV Foundation"
              },
              {
                "Name": "recording"
              },
              {
                "Name": "playback"
              },
              {
                "Name": "sound"
              },
              {
                "Name": "C"
              },
              {
                "Name": "Objective-C"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T05:14:58.87",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 141,
            "Title": "Connecting C# to Arduino and the world outside your computer",
            "Description": "C# is a great language, but our C# code is confined inside of our computers. What do we do if we want to control a motor or display information on an analog gauge? We can use the C#, ScriptCs and the ScriptCS-Arduino library to interface with the world outside of the computer. In this session, I'll show you how to get started.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Eric",
                "LastName": "Potter",
                "HeadShot": "/cloud/profilephotos/Eric-Potter-00a2d1be-682c-4b15-ba9e-7a559acab0d5.jpg",
                "UserName": "pottereric",
                "Biography": "I am a Software Architect for Aptera Software in Fort Wayne Indiana, working primarily in the .Net platform. I have been developing high quality custom software solutions since 2001. I am also an adjunct professor of computer science at Indiana Tech. I love to dabble in new and exciting technologies. In my spare time, I love to tinker with Arduino projects. I have an amazing wife and 5 wonderful children. I see myself as a humble toolsmith.",
                "WebSite": "http://humbletoolsmith.com/",
                "Company": "Aptera Software",
                "Title": "Software Architect",
                "Twitter": "pottereric",
                "Facebook": null,
                "GooglePlus": "eric.b.potter",
                "LinkedIn": null,
                "GitHub": "pottereric",
                "LastUpdated": "2014-04-04T02:14:54.923"
              }
            ],
            "Tags": [
              {
                "Name": "Arduino"
              },
              {
                "Name": "ScriptCS"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:10.647",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1269,
            "Title": "Cut Your Hair and Get an Azure WebJob!",
            "Description": "\tDoing unholy things in your Azure WebSites for background processing and batch jobs? I did, but have now been reformed.  Feel like Worker Roles are a gigantic pain? You're not wrong. Enter Azure WebJobs.  \r\n\tWe will start with some boxes and lines explaining how WebJobs work, and where they fit in, and almost as importantly where they don't.  Then we will go to some demos of how to write them, and the simple way of deploying.  We will work with the different scheduling types : continuously running, triggered, and scheduled.  Then we will talk about health and debugging, for each of these.  \r\n\tThen we will work with how to get them to fit into your development workflow.  I will even show you how to get your WebJobs to push updates through signalR.\r\n\tYou will walk away with ways that WebJobs can help you be more productive and more decoupled in your code.  Stop using hacks in websites to run batch jobs. Stop using Worker Roles to kill mosquitoes.  Start using Azure WebJobs.",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mark",
                "LastName": "Greenway",
                "HeadShot": "/cloud/profilephotos/Mark-Greenway-83822aec-265a-4174-9425-6a6eb14e1603.jpg",
                "UserName": "MarkKGreenway",
                "Biography": "A web developer since the mid ’90s and a lone dev since the turn of the millennia, Mark has a unique perspective on the problems of programming. From developing terrible hacky  code in his early days, to independently synthesizing many common design patterns in his progression in a vacuum. Then came a new enlightenment and a realization of the community and its resources. This understanding of the pain of doing things the wrong way, leads to a fresh perspective. A smart sense of humour and some training from professional speakers make sure that any talk will be both interesting and informative.",
                "WebSite": "htttp://www.markgreenway.net",
                "Company": "LIG Marine Managers",
                "Title": "CIO",
                "Twitter": "MarkKGreenway",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "MarkKGreenway",
                "LastUpdated": "2014-04-10T18:25:05.12"
              }
            ],
            "Tags": [
              {
                "Name": "Azure"
              },
              {
                "Name": "WebDevelopment"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:18.283",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2172,
            "Title": "Front-End Development for Back-End Developers",
            "Description": "From writing semantic HTML to organizing CSS files, this session aims to unveil some of the reasons why back-end devs should trust their front-end dev counterparts to build and style their websites. After working together on teams with up to 6 back-end developers for large, complicated websites, we’ve come up with some advice regarding various methods of positioning elements, clearing floats, structuring forms, and formatting text. We’ll discuss our experience with Object-Oriented CSS (OOCSS), CSS selectors and browser compatibility. We’ll also highlight some design and function considerations for a fluid or responsive website, as well as how to test your websites.\r\n\r\nAttendees should become familiar with the basics of front-end development and how they can work with a front-end dev. Current technologies such as Object-Oriented CSS (OOCSS), CSS selectors and browser compatibility will be discussed.\r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Bertine",
                "LastName": "Buchan",
                "HeadShot": "/cloud/profilephotos/Bertine-Buchan-b91ac4be-77da-40cd-9ed8-bdd8a2f4840b-635349830858734195.jpg",
                "UserName": "bertine",
                "Biography": "Bertine Buchan (@bertine) is a Sr. Front-End Developer for Gage. She has been making websites for 15 years with only a short break to get a masters in Medieval History. This means she knows almost as much about castles as front-end development.",
                "WebSite": "http://www.gage.com",
                "Company": "Gage",
                "Title": "Sr. Front-End Developer",
                "Twitter": "@bertine",
                "Facebook": "bertine",
                "GooglePlus": null,
                "LinkedIn": "bertine",
                "GitHub": null,
                "LastUpdated": "2014-05-06T14:24:45.873"
              },
              {
                "FirstName": "Amy",
                "LastName": "Berg",
                "HeadShot": "/cloud/profilephotos/Amy-Berg-de694517-632d-4a3c-b630-78e47a724554.jpg",
                "UserName": "porkchop",
                "Biography": "Amy Berg is a Digital Designer/Developer for Minnesota Public Radio (http://mpr.org). She has been building websites professionally for the last 6 years, but has been dabbling with HTML since this mid-90’s. She loves CSS, knitting, and kitties.\r\n",
                "WebSite": "http://www.amy-berg.com",
                "Company": "Minnesota Public Radio",
                "Title": "Digital Designer/Developer",
                "Twitter": "@pork_chop",
                "Facebook": "https://www.facebook.com/porkCHOPblog",
                "GooglePlus": "http://plus.google.com/113747574051244879141",
                "LinkedIn": null,
                "GitHub": "https://github.com/pork-chop",
                "LastUpdated": "2014-05-30T14:14:18.547"
              }
            ],
            "Tags": [
              {
                "Name": "css"
              },
              {
                "Name": "HTML"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "JS"
              },
              {
                "Name": "CSS3"
              },
              {
                "Name": "front-end"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:06.207",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2206,
            "Title": "iPads everywhere: Working with tablets at scale",
            "Description": "How do you manage a hundred thousand Internet-enabled devices scattered around the country? As smartphones proliferate and everything from thermostats to light bulbs connect to the Internet, this isn’t just a question for academics and huge corporations anymore. \r\n\r\nAt eSpark, we work with teachers and students across the country to provide education using a personalized iPad-based curriculum. Over the last two years, we’ve seen explosive growth in the number of tablets at schools: tablets that require a unique, personalized curriculum of apps; tablets that are not always reliably on wifi; tablets that are often use by kids who haven’t yet learned to read.\r\n\r\nIn this talk, I’ll share what it’s like to go from deploying iPads to a few schools in places like Milwaukee or Washington Island up to a hundred districts and now beyond, and how we solved the challenges we encountered: building tools atop reverse-engineered iTunes APIs, creating our own mobile device management (MDM) system from scratch, tracking state across multiple systems (including our native iPad app and sometimes-unreliable third-party systems). Along the way, I’ll also show how having a scalable, responsive infrastructure for managing iPads will allow us to innovate and improve K-8 education in future years.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Alex",
                "LastName": "Koppel",
                "HeadShot": "/cloud/profilephotos/Alex-Koppel-a053d541-6005-4812-b923-bd4251868a58.jpeg",
                "UserName": "arsduo",
                "Biography": "Alex is a senior engineer at eSpark Learning, using technology to make an impact on the way students learn. Previously, Alex led the API and infrastructure team for Wunderlist in Berlin, built a social marketing platform at what is now Adobe, and led part of a massive electronic medical record project. He’s active in the open source community as the author of the Koala Facebook gem, and has spoken at conferences and meetups in Europe and the US. Alex studied computer science and scavenger hunts at the University of Chicago.",
                "WebSite": "http://alexkoppel.com",
                "Company": "eSpark Learning",
                "Title": "?",
                "Twitter": "@arsduo",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/alexkoppel/",
                "GitHub": "https://github.com/arsduo/",
                "LastUpdated": "2014-05-07T17:02:56.417"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "ipad"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:04.79",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2196,
            "Title": "Keeping Your Edge by Deploying Faster",
            "Description": "Our deployment infrastructure must keep pace with our business. Users expect rapid innovation and quick response to bugs or they seek out alternatives, especially on the web. The product team at our company deploys ten or more times a day, but that’s not fast enough. For us, faster deploys mean faster innovation. We tweak and deploy new features repeatedly, searching for the solution that users will love. In response, our foundation team designed and rolled out a new system that reduces deployment time by 80% and eliminates wait time while also making it safer.\r\n\r\nIn this session, I'll talk specifically about how we broke our monolithic application into multiple, smaller services allowing simultaneous deployments and nearly instantaneous rollbacks when necessary. I’ll also detail the technologies we rely on, the components we built ourselves, and the challenges we encountered along the way so you can learn from our missteps. If you're interested in increasing the delivery speed of your organization, find your inspiration here!",
            "Category": "Cloud",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tyson",
                "LastName": "Stewart",
                "HeadShot": "/cloud/profilephotos/Tyson-Stewart-c96232dd-5137-47b4-9b66-71296ee1c0c2.jpg",
                "UserName": "tysonj",
                "Biography": "Tyson is a software engineer at Hudl, currently leading the DevTools squad. He has eight years of professional development experience, mostly in web application development based on C#. He spent 18 months dedicated to operations for Hudl where he built up a squad, then returned to development. In the last two years, he has worked on applications built on Node, Python, and most recently Go, of which he is particularly fond.",
                "WebSite": "http://public.hudl.com/bits/",
                "Company": "Hudl",
                "Title": "Dev Lead, Doer of Many Things",
                "Twitter": "tysonj",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/tyson-stewart/3/753/993",
                "GitHub": null,
                "LastUpdated": "2014-04-11T16:58:14.32"
              }
            ],
            "Tags": [
              {
                "Name": "deployment"
              },
              {
                "Name": "Architecture"
              },
              {
                "Name": "Delivery"
              },
              {
                "Name": "infrastructure"
              },
              {
                "Name": "operations"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:20.063",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1247,
            "Title": "Managing the .NET Compiler",
            "Description": "With Project Roslyn, Microsoft has finally let .NET developers get access to their long-awaited compiler APIs. The potential impact of having a compiler API available for all developers is immense. In this session, you'll get a tour of the elements behind this new API, such as syntax trees and parsers, and how you can use them in code analysis and metaprogramming techniques.",
            "Category": "Other",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jason",
                "LastName": "Bock",
                "HeadShot": "/cloud/profilephotos/Jason-Bock-3da66fd1-af67-4617-9218-3b48fcbea840-635349786056753975.png",
                "UserName": "JasonBock",
                "Biography": "\r\n\r\n\r\nJason Bock is a Practice Lead for Magenic (http://www.magenic.com) and a Microsoft MVP (C#). He has worked on a number of business applications using a diverse set of substrates and languages such as .NET and JavaScript. He is the author or co-author of a number of technical books, including \"Metaprogramming in .NET\", \"Applied .NET Attributes\", and \"CIL Programming: Under the Hood of .NET\", and he has written articles on software development issues and has presented at conferences and user groups. He is a leader of the Twin Cities Code Camp (http://www.twincitiescodecamp.com). Jason holds a Master's degree in Electrical Engineering from Marquette University. Visit his web site at http://www.jasonbock.net.\r\n",
                "WebSite": "jasonbock.net",
                "Company": "Magenic",
                "Title": "Practice Lead",
                "Twitter": "@jasonbock",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T13:10:05.677"
              }
            ],
            "Tags": [
              {
                "Name": ".net"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "Roslyn"
              },
              {
                "Name": "compilers"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:14.05",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2409,
            "Title": "Objective-C for C# Developers",
            "Description": "Are you a C# developer looking to get started in Objective-C for the first time? Exploring the language doesn’t have to be scary, and this session, we’ll gather around the fire and hear from another C# developer who was recently made the journey into the world of Objective-C. We’ll look at basic data types like strings, numbers and dates while looking at the differences between how classes, methods and properties are constructed in both languages.Throw in some tips and tricks for navigating around Xcode along with some online resources, and you’ll be ready to start digging into it on your own.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Doug",
                "LastName": "Rhoten",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "dougR",
                "Biography": "Doug Rhoten is the Development Manager of the Plug-in team at JAMF Software, a company headquartered in Minneapolis that makes software for managing Mac OS X and iOS devices. Working out of the development and support office in Eau Claire, Wisconsin he also runs the Chippewa Valley Developers Group http://cvdevgroup.org and the Chippewa Valley Code Camp http://www.chippewvalley.com. When not shuttling his kids to dance lessons or competitions, you can find him dreaming of the day he can do more skiing and sailing. You can find him on twitter at @dougrhoten.",
                "WebSite": "www.jamfsoftware.com",
                "Company": "JAMF Software",
                "Title": "Development Manager, Plug-ins",
                "Twitter": "dougrhoten",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/dougrhoten/",
                "GitHub": null,
                "LastUpdated": "2014-05-30T02:34:07.95"
              }
            ],
            "Tags": [
              {
                "Name": "Objective-C"
              },
              {
                "Name": "XCode"
              },
              {
                "Name": "OS X"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T04:34:19.65",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 1178,
            "Title": "Responsive Web Development Patterns",
            "Description": " Want to learn how to create a single responsive site that can be viewed across all devices by applying the latest Web techniques and strategies? In this talk, we’ll explore the patterns and strategies we can apply to create sites that adapt across all our devices including mobile phones, tablets and desktop browsers. Topics discussed will include:\r\n\r\n    Building responsive sites with fluid grids, media, and media queries\r\n    Learn to implement the appropriate layout patterns for your content\r\n    Learn to apply a responsive image strategy\r\n    Learn to build responsive navigation\r\n    Learn responsive workflow patterns\r\n    Learn about tools and frameworks that help simplify responsive web development\r\n    Learn performance strategies that keep sites lean, fast, and responsive\r\n",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Brad",
                "LastName": "Broulik",
                "HeadShot": "/cloud/profilephotos/Brad-Broulik-684b882e-0b36-463e-b1b8-bbcdabac69c6-635355335408362214.png",
                "UserName": "bradbroulik",
                "Biography": "Brad Broulik is an author, trainer, and principal web engineer specializing in enterprise mobile development at HealthPartners. His recent book is Pro jQuery Mobile. He blogs at http://bradbroulik.blogspot.com and tweets via @BradBroulik. ",
                "WebSite": "http://bradbroulik.blogspot.com/",
                "Company": "HealthPartners",
                "Title": "Principal Web Engineer",
                "Twitter": "@BradBroulik",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/pub/brad-broulik/5/a7b/42b",
                "GitHub": "https://github.com/BradBroulik",
                "LastUpdated": "2014-05-12T23:19:45.633"
              }
            ],
            "Tags": [
              {
                "Name": "Web"
              },
              {
                "Name": "Mobile"
              },
              {
                "Name": "responsive"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:09.257",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 5460,
            "Title": "Scratch 2d Game Programming",
            "Description": "Have you have ever wanted to create games that are fun and easy to make? Using Scratch in this presentation, I will be showing how to create simple but fun games. Using simple point-and-click to arrow-key mechanics, you can show the world some awesome games that you created yourself!",
            "Category": "Family",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Alexander",
                "LastName": "Headley",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "man03",
                "Biography": "Alex enjoys programming in Scratch. He mainly focuses on programming games. He also enjoys sharing what he knows with anyone who is interested.",
                "WebSite": "http://scratch.mit.edu/users/man03/",
                "Company": null,
                "Title": null,
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-07-01T23:43:47.157"
              }
            ],
            "Tags": [
              {
                "Name": "programming"
              },
              {
                "Name": "Scratch"
              },
              {
                "Name": "game development"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-18T01:54:58.187",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2170,
            "Title": "Using The Power of Speech In Your Windows Phone Apps",
            "Description": "The Windows Phone SDK provides APIs which make it easy for developers to incorporate speech recognition and voice commands within a Windows Phone app. In this session, you will learn how to incorporate speech synthesis, voice commands, and simple speech recognition within your own Windows Phone app to provide a truly engaging user experience.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Lori",
                "LastName": "Lalonde",
                "HeadShot": "/cloud/profilephotos/Lori-Lalonde-c0213f42-b7f7-46b9-8e94-a6c184f34900.jpg",
                "UserName": "loriblalonde",
                "Biography": "Lori Lalonde is an Apress author, consultant, blogger, technical presenter, Windows Phone developer and a Microsoft MVP. She began her career in software in 1997 and hasn't looked back since. Her experience spans numerous industries and a variety of technologies, with the past 10 years focused on the Microsoft .NET platform. Lori is actively involved in the local community, serves as the President of Canada's Technology Triangle .NET User Group, and participates in local Women in Technology groups. Whether mentoring junior colleagues or writing about her experiences in the IT industry on her blog, she is always happy to share her knowledge with the greater community.",
                "WebSite": "http://www.geekswithblogs.net/lorilalonde",
                "Company": "ObjectSharp Consulting",
                "Title": "Associate Consultant",
                "Twitter": "@loriblalonde",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://ca.linkedin.com/in/lorilalonde",
                "GitHub": null,
                "LastUpdated": "2014-05-05T22:34:30.043"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "Windows Phone"
              },
              {
                "Name": "speech"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:16.937",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 3436,
            "Title": "You're the Tech Lead! Now What?",
            "Description": "You've been programming for a while now. You know your way around the code, and you're starting to feel kind of senior. And it looks like someone else noticed, because you're the technical lead on your next project. Congratulations! But now what? It's a big job: The technical lead can be responsible for designing software architecture, writing requirements, interfacing with clients or management, or dividing work amongst the team-- and those are just the parts of the job they tell you about ahead of time. We'll talk about how to oversee the technological vision for the project without losing sight of what's happening on the ground, how to motivate your team members without overstepping your bounds, and some tactics to deal with challenges you might not anticipate, but will almost certainly encounter.",
            "Category": "Other",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T13:00:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Eryn",
                "LastName": "O'Neil",
                "HeadShot": "/cloud/profilephotos/Eryn-O'Neil-c3e27bf9-c47e-4bd2-9753-dedf2e6c8dd1-635349904108625384.jpg",
                "UserName": "eryn",
                "Biography": "Eryn O’Neil is a web developer and technical lead at Clockwork Active Media in Minneapolis, MN. There she has worked on everything from e-commerce to online promotions to building a professional-grade CMS. Her philosophy is to build software by placing humans first: both the people who will use it and the developers who will build it alongside you (and maintain it afterwards). Based in Minneapolis, MN, Eryn spends most of her free time swing and blues dancing, rock climbing, and wishing it wasn't snowing.",
                "WebSite": "twitter.com/eryno",
                "Company": "Clockwork",
                "Title": "Software Engineer, Tech Lead",
                "Twitter": "@eryno",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-06T16:26:50.863"
              }
            ],
            "Tags": [
              {
                "Name": "tech leadership"
              },
              {
                "Name": "tech lead"
              },
              {
                "Name": "development lead"
              },
              {
                "Name": "team lead"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:12.513",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "1:00 PM"
      },
      {
        "Sessions": [
          {
            "Id": 34,
            "Title": "Biometrics: Using Your Body for Fun and Profit",
            "Description": "As the need for security increases, the use of biometrics will become more and more prevalent. This session will discuss topics in the space of Biometrics and introduce you to a few devices that are emerging in the field, such as palm vein scanners, touch-less fingerprint readers, and Kinect.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Aralia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Chris",
                "LastName": "Gardner",
                "HeadShot": "/cloud/profilephotos/Chris-Gardner-5d7294bf-f100-468c-ad9a-bbe380786a36.png",
                "UserName": "freestylecoder",
                "Biography": "Chris Gardner is the Senior Software Engineer and Architect for T & W Operations, Inc, and a Microsoft Certified Trainer Regional Lead. Tortured by years of contracts that valued buzzwords over results, Chris has developed a true passion for finding solutions that fit the problem, not the technology of the week. Chris received his M.S in Computer Science, B.S. in Mathematics, and B.A. in Philosophy from the University of Alabama in Huntsville and is currently a Microsoft Certified Professional Developer, Information Technology Professional and Trainer.",
                "WebSite": "http://blog.freestylecoding.com",
                "Company": "T&W Operations, Inc.",
                "Title": "Sr. Software Engineer",
                "Twitter": "freestylecoder",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "freestylecoder",
                "LastUpdated": "2014-03-31T14:13:52.44"
              }
            ],
            "Tags": [
              {
                "Name": "Biometrics"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:02.067",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 120,
            "Title": "Cross-Platform Trek Through the Mobile Development Forest with Titanium",
            "Description": "The mobile development forest can be scary. Taking a cross-platform trek through it can help mitigate some of the issues. Let Titanium guide you through it and help keep you safe.\r\n\r\nIn this talk, we'll take a deep-dive into Titanium and the Appcelerator platform. We'll take an in-depth look at the Titanium approach to solving the cross-platform problem, as well as briefly touch upon native development and other technologies' cross-platform solutions and when each one may be appropriate to use. We'll also go over some best practices for Titanium development for the enterprise environment and take a tour through the Appcelerator tools.",
            "Category": "Mobile",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "C",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Vince",
                "LastName": "Bullinger",
                "HeadShot": "/cloud/profilephotos/Vince-Bullinger-427b14a7-3688-4775-8fef-9c6cd4efb597.jpg",
                "UserName": "vbullinger",
                "Biography": "Vince has been a passionate developer and consultant since 2005. He is currently an independent contractor. He received his MCSD for .NET with C# back in 2008. In recent years, he’s immersed himself in front end technologies. Even more recently, he’s developed a passion for mobile development, specifically of the cross-platform variety. Outside of work, he's a husband and father and enjoys sports, games and learning everything about everything\r\n",
                "WebSite": "http://www.vincebullinger.com",
                "Company": "Liberty Consulting Services",
                "Title": "Owner",
                "Twitter": "vbullinger",
                "Facebook": "https://www.facebook.com/vince.bullinger",
                "GooglePlus": "https://plus.google.com/u/0/+VinceBullinger",
                "LinkedIn": "http://www.linkedin.com/in/vincebullinger/",
                "GitHub": null,
                "LastUpdated": "2014-04-14T19:15:37.937"
              }
            ],
            "Tags": [
              {
                "Name": "Mobile"
              },
              {
                "Name": "javascript"
              },
              {
                "Name": "cross-platform"
              },
              {
                "Name": "Titanium"
              },
              {
                "Name": "Appcelerator"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:13.523",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 106,
            "Title": "Django Unchained",
            "Description": "This talk will help you unleash the power of Django in your next web project by giving you an overview of what it is, why and when to use Django, and especially - How. \r\n\r\nDjango is a Python Web framework that aims to make it easier to build better Web apps more quickly and with less code. Django follows the model-view-controller architectural pattern and is used by many startups such as Pinterest and Instagram, and is very popular with newspaper sites including the New York Times and the Washington Post.\r\n\r\nThis talk, given by an in-the-trenches developer working with a startup using Django, will feature lots of working examples and will walk through how set up your local environment and deploy a Django app.\r\n\r\nOutline: \r\nWhen and Why to Django? Comparisons to Ruby on Rails. \r\nConfiguring your local environment. \r\nDjango 101, development basics.\r\nImplementation of a Django Form.\r\nDjango and Databases.\r\nWorking site examples with source code.\r\nWhirlwind tour of Django Packages.\r\nDjango deployment options, traditional hosting or cloud (Google Apps Engine, AWS).\r\n\r\nResources including downloads and working examples from this talk.",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Guava",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Eric",
                "LastName": "Frost",
                "HeadShot": "/cloud/profilephotos/Eric-Frost-380a98f4-8e9a-42fe-be2a-b53baed7d8b0-635374063674699326.gif",
                "UserName": "ericwfrost",
                "Biography": "Eric Frost is a 20 year veteran programmer, author, and educator who as worked with many different facets of technology ranging from IT and system administrator, desktop and web programming, and consulting and teaching. Eric Frost has been published in MSDN Magazine, ASP Today, and has been publishing newsletters from his own mapping technology e-zine, MP2K Magazine for over a decade. This is Eric's third visit to That Conference and he is looking forward to making connections and filling under-utilized gray matter with ever great stuff!",
                "WebSite": "http://www.MapForums.com",
                "Company": "REX Geo Consulting",
                "Title": "Principal",
                "Twitter": "ericwfrost",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-06-03T15:32:47.47"
              }
            ],
            "Tags": [
              {
                "Name": "Python"
              },
              {
                "Name": "django"
              },
              {
                "Name": "web framework"
              },
              {
                "Name": "google app engine"
              },
              {
                "Name": "amazon web services"
              },
              {
                "Name": "aws"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:04.847",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 1268,
            "Title": "From Zero to Full Deployment Automation in 60 Minutes",
            "Description": "Wouldn’t it be nice if the simple action of checking in your latest changes into source control triggered an official build? Wouldn’t it be even better if, upon a successful build, the latest executables were automatically deployed to your test bed without you lifting a finger? If you’re not lucky enough to be deploying to a cloud platform that provides such functionality out of the box, automating your process might seem daunting. In this session, Danielle will demonstrate how you can leverage tools such as TeamCity, Artifactory, and Octopus Deploy to automate your builds and deployments. You’ll be introduced to a variety of options you can use to customize the process in order to meet your particular requirements. Along the way, you’ll learn about some neat productivity features you may wish to leverage as well as some pitfalls you would do well to avoid.\r\n \r\nYou’ll leave this session with the knowledge of how to automate your own builds and deployments and how to extend that automation chain so you can reach the next level.  Test automation, anyone?\r\n",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "E",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Danielle",
                "LastName": "Boldt",
                "HeadShot": "/cloud/profilephotos/Danielle-Boldt-ec711caf-9074-4ef6-b56f-fd0167dd54ce-635350207447150998.jpg",
                "UserName": "DanielleBoldt",
                "Biography": "Danielle is a Senior Software Engineer at Renaissance Learning Inc.  She has nearly 20 years of software development expertise that ranges from design through to quality assurance and deployment.  For much of the past year, Danielle has been focused on all things automation and is eager to share the wealth of knowledge she has acquired.  When not at work, you might find Danielle out on her motorcycle, at the indoor rock climbing gym with her husband and children, or tucked at home practicing guitar.",
                "WebSite": "http://www.codatrix.ca/blog",
                "Company": "Renaissance Learning Inc.",
                "Title": "Senior Software Engineer",
                "Twitter": "@Codatrix",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/in/danielleboldt",
                "GitHub": null,
                "LastUpdated": "2014-05-07T00:54:38.29"
              }
            ],
            "Tags": [
              {
                "Name": "automation"
              },
              {
                "Name": "builds"
              },
              {
                "Name": "deployments"
              },
              {
                "Name": "TeamCity"
              },
              {
                "Name": "Octopus Deploy"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:03.427",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 40,
            "Title": "Getting Started with Open Source Contributions on Github",
            "Description": "Want to be a contributor to an Open Source project on Github but intimidated by all the hoops you have to jump through with branching, squashing and testing?  Maybe you want to just know more about how to get involved but you're not sure where to start?  As a core team contributor for the Ghost blogging platform, I've seen lots of new comers become valuable members of our community after their initial apprehension.\r\n\r\nWell, have no fear, because in this talk we'll go step by step how to clone down a project, have a productive git workflow, branching, squashing and validating everything locally before submitting your awesome Pull Request.  But, that's not all, we'll also talk about some really valuable non coding ways you can contribute to projects including documentation and testing that get you familiar with the project and can make it easier to start tackling coding tasks.",
            "Category": "Web",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "B",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Jacob",
                "LastName": "Gable",
                "HeadShot": "/cloud/profilephotos/Jacob-Gable-970a1901-2ee9-4fdc-973b-5ce98c6aaa32-635349870234221208.jpg",
                "UserName": "jgable",
                "Biography": "Professional Software Developer at @SproutSocial.  Core team member for @TryGhost.  Amateur Philosopher.  Maker of things.",
                "WebSite": "http://jacobgable.com",
                "Company": "Sprout Social",
                "Title": "Senior Software Engineer",
                "Twitter": "jacob4u2",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "https://github.com/jgable",
                "LastUpdated": "2014-05-06T15:30:23.423"
              }
            ],
            "Tags": [
              {
                "Name": "Github"
              },
              {
                "Name": "Git"
              },
              {
                "Name": "OpenSource"
              },
              {
                "Name": "Community"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:06.26",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2369,
            "Title": "HIPAA and Staying Compliant in the Cloud",
            "Description": "An overview of HIPAA regulations, the effect of the HITECH act on data security, the implications of cloud hosting on HIPAA, and recommendations on how to maintain compliance when hosting your data in the cloud with HIPAA.",
            "Category": "Cloud",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Portia",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tim",
                "LastName": "Hansen",
                "HeadShot": "/cloud/profilephotos/Tim-Hansen-539bf1ee-2a46-44eb-b63f-247ab010a645.jpg",
                "UserName": "thansen1024",
                "Biography": "Tim has spent over 22 years in software development for SA Ignite, Intel, Proxicom, and Sysmex, where he architected and built a global data aggregation platform for medical testing devices. His contributions to improving the healthcare industry include work as a senior developer for a comprehensive clinical laboratory information system interfacing to over 100 laboratory instruments and hospital information systems. Tim's leadership helps drive the SA Ignite culture, which he says \"is one of innovation and independence. We challenge the normal in search of finding new ways to advance and improve healthcare through the use of information technology\".",
                "WebSite": "www.saignite.com",
                "Company": "SA Ignite",
                "Title": "VP, Technology",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/pub/tim-hansen/1/560/153/",
                "GitHub": null,
                "LastUpdated": "2014-04-14T22:32:53.647"
              }
            ],
            "Tags": [
              {
                "Name": "Cloud"
              },
              {
                "Name": "security"
              },
              {
                "Name": "HIPAA"
              },
              {
                "Name": "Compliance"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:10.373",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 5464,
            "Title": "How to show kids that coding is even better than the zip line",
            "Description": "Kids need one thing to dive into the life-changing world of software development. It’s not coffee (they have youthful stamina built in), motivational posters (with so much new to them, curiosity is a natural driver), or time off for training (a sliver of the three billion hours a year of video gaming will do). What they do need is simply this: to taste firsthand what they can accomplish.\r\n \r\nThat’s where you and this session come in. Learn how to take a group of 6th-and-up graders in your community from zero programming knowledge to inspired-to-code in 10 weeks. Learn how to use Small Basic as a friction-free tool to make programming fun and unintimidating for the very beginner. Strike a balance between concept overload and yes-it-works-but-I-don’t-know-why by iteratively taking the students from English descriptions to working code as you help them build engaging software. Use graphics and the web to teach the core concepts behind program data, control flow, and UI.\r\n \r\nKids attending the session will pair up to write and enhance programs, starting with simple turtle graphics and moving into a sneak-peak edition of graphical game development. We’ll demonstrate how kids can quickly learn to convert conceptual program steps into real code. We’ll encourage them to experiment and make the programs their own, unleashing the magic of making a computer do their bidding.\r\n \r\nIf you can, bring your laptop with Small Basic installed (smallbasic.com).",
            "Category": "Family",
            "Level": "400",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Cypress",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Edward",
                "LastName": "Brey",
                "HeadShot": "/cloud/profilephotos/Edward-Brey-efee8174-463f-4c29-bb91-da259a873756.JPG",
                "UserName": "breyed",
                "Biography": "Ed builds web and mobile applications, specializing in device connectivity. His company, Toolsay LLC, produces a machine monitoring toolkit that OEMs use to provide access to their embedded products via the web, mobile devices, and USB.\r\n\r\nAfter 5 years of tinkering with Basic, Ed learned C from a book (complete with a chapter on “C with Classes”) that he received for his 16th birthday. For the next dozen years, he wrote embedded and desktop communication software for industrial automation and electrical power management. In the last decade, Ed has written code and managed developers in power and water industries, working heavily with .NET technologies to build connected web, mobile, and desktop applications.\r\n\r\nEd is a husband, a father of two delightful, young children, and a software developer. He enjoys family time, Ultimate Frisbee, and solving difficult problems.",
                "WebSite": "http://breyfamily.net",
                "Company": "Toolsay LLC",
                "Title": "Founder / Software Engineer",
                "Twitter": "edbrey",
                "Facebook": "https://www.facebook.com/edward.brey",
                "GooglePlus": "https://plus.google.com/+EdwardBrey",
                "LinkedIn": "http://www.linkedin.com/in/edwardbrey/",
                "GitHub": "https://github.com/breyed",
                "LastUpdated": "2014-04-14T21:40:11.633"
              }
            ],
            "Tags": [
              {
                "Name": "teach programming small-basic beginner UI"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-21T23:25:11.74",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2390,
            "Title": "Look Ma, I'm on TV! Developing Apps for the Chromecast",
            "Description": "Thanks to the introduction of the Google Chromecast, it has never been easier to build compelling\r\nexperiences for the living room TV set. With a surprisingly low device cost of $30 and a remarkably\r\nrobust SDK, Web developers can build Chromecast applications from the ground up simply using HTML 5,\r\nCSS and JavaScript, as well as adding Chromecast features to existing Web, iOS and Android apps.\r\n\r\nAfter attending this talk, you will walk away having learned:\r\n\r\n* the capabilities and development architecture provided by the Chromecast.\r\n* how to stream your hosted media to a Chromecast.\r\n* the JS API provided to control a Chromecast from within a Web app.\r\n* instructions for deploying and publishing a your own made-for-TV application.\r\n\r\nJump ahead of the pack and try developing on this exploding platform now!",
            "Category": "Web",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "G",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Chris",
                "LastName": "Powers",
                "HeadShot": "/cloud/profilephotos/Chris-Powers-1329b0f5-d37d-4424-8a68-03f390b87ffa.jpg",
                "UserName": "chrisjpowers",
                "Biography": "Chris Powers has been developing Web applications for the last seven years and now manages agile Web development teams. He strongly believes in the power technology has to bring people together and enjoys developing platforms that empower the user. Currently Chris is working as a software engineering manager at Groupon and lives in the northern Chicago suburbs with his wife, daughter, dog and cat. In his free time he enjoys board gaming, playing the drum kit and homebrewing.",
                "WebSite": "http://chrisjpowers.com",
                "Company": "Groupon",
                "Title": "Engineering Manager",
                "Twitter": "@chrisjpowers",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "http://github.com/chrisjpowers",
                "LastUpdated": "2014-05-16T14:43:21.967"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "HTML5"
              },
              {
                "Name": "Google Chromecast"
              },
              {
                "Name": "Google Chrome"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:00.593",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 61,
            "Title": "Making 2D Games that Run Everywhere using C#",
            "Description": "C# has become one of the most prolific languages used in game development. Games developed in C# can be created to target desktops, tablets, mobile devices and game consoles, while sharing nearly the entire code base. On mobile devices 2D games in particular are massively popular. In this session, we'll explore how to use C# in conjunction with Microsoft and Xamarin to develop 2D games that will work on iOS, Android and Windows platforms. We'll cover the basics of 2D game development, working with multiple scenes, animation and even physics. By the end of the session, you'll have seen how to make a cross-platform 2D game that you can use as the basis for creating your own games.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Tamarind",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Mike",
                "LastName": "Bluestein",
                "HeadShot": "/cloud/profilephotos/Mike-Bluestein-203188d1-e05b-4486-8fe8-3b18bc9df4f7.png",
                "UserName": "mikebluestein",
                "Biography": "Mike Bluestein is a developer evangelist at Xamarin and one of the first users of Xamarin.iOS. Mike has been using, writing and speaking about Xamarin for several years, and is the author of the book \"Learning MonoTouch\" published by Addison Wesley. A former Principal Software Engineer at Dassault Systèmes Solidworks Corporation, he has developed software professionally since the early 1990s. ",
                "WebSite": "http://mikebluestein.wordpress.com",
                "Company": "Xamarin",
                "Title": "Developer Evangelist",
                "Twitter": "@mikebluestein",
                "Facebook": "https://www.facebook.com/mike.bluestein",
                "GooglePlus": "https://google.com/+MikeBluestein",
                "LinkedIn": "https://www.linkedin.com/in/mikebluestein/",
                "GitHub": "https://github.com/mikebluestein",
                "LastUpdated": "2014-05-06T12:25:08.777"
              }
            ],
            "Tags": [
              {
                "Name": "Windows Store"
              },
              {
                "Name": "ios"
              },
              {
                "Name": "Games"
              },
              {
                "Name": "Xamarin"
              },
              {
                "Name": "Android"
              },
              {
                "Name": "Windows Phone"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:09.05",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 67,
            "Title": "Making your Apps Work Deep in the Woods",
            "Description": "Those of us who wander outside of camp, drive long distances, or frankly just go inside some buildings know that data connections aren't always available or running at full speed.  Yet, most apps on smartphones and tablets assume working connections and don't work well offline.\r\n\r\nAre your apps one of the few that responsibly handles connectivity issues and manages delays and stale data for the user?  Based upon experiences designing and deploying applications in areas hit by natural disasters, we will discuss best practices and strategies for coding these responsible applications that minimize data transferred, connection delays, store and forward uploads and requests, and use fallback technologies, like SMS, that are more likely to work in limited connectivity scenarios.  To help you build consistent user experiences across device platforms we will focus on implementations in Windows Phone, Windows 8 and iOS & Android apps with Mono/Xamarin.",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "F",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Tony",
                "LastName": "Surma",
                "HeadShot": "/cloud/profilephotos/Tony-Surma-9b5ecfd6-93f6-4bb4-8543-ee9c88e51fff.JPG",
                "UserName": "tonysurma",
                "Biography": "Tony Surma is the CTO of Microsoft’s Disaster Response program which is responsible for the development and deployment of Microsoft and their partners' technologies to enable response organizations’ critical relief efforts and connect communities affected by natural disasters throughout the world. He is a member of the core team for Random Hacks of Kindness on behalf of Microsoft and is one of the founders of the Humanitarian Toolbox initiative.\r\nHe now spends seemingly equal amounts of time in making presentations at work and writing code both at home and at work with a technical focus on user experience (UX) of mobile, web and desktop applications and the architecture of the large cloud applications they depend on. Beyond work, Tony is always looking forward to volunteering to help non-profits leverage angle brackets, semi-colons and command line switches.\r\n",
                "WebSite": "http://www.microsoft.com/disasterresponse",
                "Company": "Microsoft",
                "Title": "CTO - Microsoft Disaster Response",
                "Twitter": "tonysurma",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": "tonysurma",
                "LastUpdated": "2014-03-31T19:13:23.71"
              }
            ],
            "Tags": [
              {
                "Name": "ios"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "Xamarin"
              },
              {
                "Name": "Android"
              },
              {
                "Name": "Windows Phone"
              },
              {
                "Name": "sms"
              },
              {
                "Name": "mono"
              },
              {
                "Name": "windows 8"
              },
              {
                "Name": "http"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-07-22T04:27:48.927",
            "Updated": true,
            "ShowMoreDetails": false
          },
          {
            "Id": 2446,
            "Title": "Modern desktop apps: get the best of both worlds ",
            "Description": "This session will highlight how you, as a Windows desktop application developer, can benefit from new Windows 8 features and create modern WPF applications.\r\n\r\nWinRT is a set of modern, object-oriented APIs introduced in Windows 8. During the presentation, we will explore WinRT API available for the desktop application developers and learn about benefits of these APIs by creating touch-friendly and sensor-aware modern desktop application.\r\n",
            "Category": "Mobile",
            "Level": "200",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Wisteria",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Andrei",
                "LastName": "Marukovich",
                "HeadShot": "/cloud/profilephotos/Andrei-Marukovich-1c72d9e5-af76-4781-b736-9bbceef1ca2e.JPG",
                "UserName": "AndreiMarukovich",
                "Biography": "Andrei Marukovich is a Senior Software Engineer at AB SCIEX and Microsoft Client Development MVP. He has been developing software professionally for over 15 years and during this time he has designed and developed applications in such diverse areas as semiconductor device manufacturing, robotics, game development, Web and hosting solutions. In his current position, Andrei leads development of software for life science applications, coordinates company knowledge sharing processes and facilitates adoption of new software technologies. He blogs at http://lunarfrog.com/blog and can be found on Twitter at @amarukovich \r\n",
                "WebSite": "http://lunarfrog.com",
                "Company": "AB SCIEX",
                "Title": "Senior Software Engineer",
                "Twitter": "amarukovich",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "http://linkedin.com/in/marukovich/",
                "GitHub": "https://github.com/AndreiMarukovich",
                "LastUpdated": "2014-05-06T00:22:22.263"
              }
            ],
            "Tags": [
              {
                "Name": "WPF"
              },
              {
                "Name": ".net"
              },
              {
                "Name": "C#"
              },
              {
                "Name": "windows 8"
              },
              {
                "Name": "winrt"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:56.257",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 2331,
            "Title": "Setting Up Camp: 10 Things You Must Do To Create a Successful Startup.",
            "Description": "In this fast-paced and exciting session, a veteran developer with Ad Agency, Silicon Valley, and Start-Up experience teams up with his corporate lawyer wife to teach you the most important things to know when starting your own development business.\r\n\r\n1. Create business goals (You can't measure progress until you know where you're going)\r\n2. Protect yourself (LLCs, articles of incorporation, EINs, liability insurance, health/disability insurance)\r\n3. Get clients (networking/RFPs)\r\n4. Protect yourself from clients (statements of work)\r\n5. Do the work, or get others to do the work for you (work for hire/subcontracting)\r\n6. Understand your competition (competitive analysis / focusing on strengths)\r\n7. Get ready for the tax man (accountants, quarterly payments, business deductions)\r\n8. Identify opportunities for efficiencies. (time = money)\r\n9. Make money (defining payment agreements, how to pay yourself)\r\n10. Get recognition and grow your business (awards, self-promotion)\r\n\r\nSpeaker details:\r\n- Jeffery Bennett has spoken multiple times at SXSW, won numerous web accolades & currently serves as Technology Director @ Colle+McVoy in Minneapolis.\r\n- Ashley Bennett Ewald is a trademark, copyright, and business litigation attorney at Gray Plant Mooty, a Minneapolis-based law firm, and has counseled many entrepreneurs on the do's and don'ts of start-ups.",
            "Category": "Other",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "Mangrove",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Ashley",
                "LastName": "Bennett Ewald",
                "HeadShot": "/images/speakerImageDefault.png",
                "UserName": "quackgrass",
                "Biography": "Ashley is an IP attorney and business litigator at Gray Plant Mooty, where she lawyers people on a daily basis.  Together, with her husband, Jeffery, they live happily in Minnetonka, Minnesota along with their Hyundai Elantra, Clive Gary Bixby.",
                "WebSite": "http://gpmlaw.com",
                "Company": "Gray, Plant & Mooty",
                "Title": "Attorney",
                "Twitter": null,
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-20T13:28:59.173"
              },
              {
                "FirstName": "Jeffery",
                "LastName": "Bennett",
                "HeadShot": "/cloud/profilephotos/Jeffery Bennett  -Ashley Bennett Ewald-8d600504-7964-4a3e-bc94-1d46e7929495.jpg",
                "UserName": "meandmybadself",
                "Biography": "Jeffery is Technology Director @ Colle+McVoy, working with a group of amazing designers & developers bringing ideas to fruition. He's also a veteran of Silicon Valley, where he worked at Yahoo! Research Lab, EVB, and his own start-up before moving to the Midwest for a girl.\r\nTogether, with his wife Ashley, they live happily in Minnetonka, Minnesota along with their Hyundai Elantra, Clive Gary Bixby.\r\n",
                "WebSite": "http://meandmybadself.com",
                "Company": "Colle+McVoy",
                "Title": "Technology Director",
                "Twitter": "meandmybadself",
                "Facebook": "https://www.facebook.com/meandmybadself",
                "GooglePlus": null,
                "LinkedIn": "http://www.linkedin.com/meandmybadself",
                "GitHub": "http://www.github.com/meandmybadself",
                "LastUpdated": "2014-05-21T14:59:37.777"
              }
            ],
            "Tags": [
              {
                "Name": "Startup"
              },
              {
                "Name": "law"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:41:57.683",
            "Updated": false,
            "ShowMoreDetails": false
          },
          {
            "Id": 113,
            "Title": "Traces of Errors: A Scavenger Hunt for Better JavaScript Stacktraces",
            "Description": "JavaScript dies in many ways: maybe a script failed to load, maybe AJAX came back in the wrong order, or maybe the browser is doing something weird. Whatever the reason, too often our only clue is:\r\n\r\n\"TypeError: e is undefined. scripts.js. line 1\"\r\n\r\nLet's stop playing that game. Let's go on a scavenger hunt! Hidden in our code is the secret to actually *getting* the Stacktraces from JavaScript errors. Then, let's explore ways to add more context to *get better* Stacktraces that convey more meaning about the state of our application when it failed.",
            "Category": "Web",
            "Level": "300",
            "ScheduledDateTime": "2014-08-13T14:30:00",
            "ScheduledRoom": "D",
            "IsFamilyApproved": false,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "Todd",
                "LastName": "Gardner",
                "HeadShot": "/cloud/profilephotos/Todd-Gardner-925d9784-7f74-49fe-a888-ec3d960d3286-635417295541202371.jpg",
                "UserName": "toddhgardner",
                "Biography": "Todd H Gardner is an independent software developer and entrepreneur, with over a decade of experience in development, design, and leadership. Todd holds a Masters in Management of Technology from the University of Minnesota.\r\nHe is passionate about teams, communication, and quality in software and has led product teams from small businesses and major corporations.\r\nTodd is the co-founder of {Track:js}, an innovative JavaScript error logging service. He tweets at @toddhgardner.",
                "WebSite": "trackjs.com",
                "Company": "{Track:js}",
                "Title": "Co-Founder",
                "Twitter": "@toddhgardner",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": "https://www.linkedin.com/in/toddhgardner",
                "GitHub": "https://github.com/toddhgardner/",
                "LastUpdated": "2014-07-23T16:25:54.12"
              }
            ],
            "Tags": [
              {
                "Name": "javascript"
              },
              {
                "Name": "Error Handling"
              },
              {
                "Name": "Debugging"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-19T17:42:11.96",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "2:30 PM"
      },
      {
        "Sessions": [
          {
            "Id": 4451,
            "Title": "Closing Remarks",
            "Description": "It's hard to believe after all of this prep, hard work and three days of fun, it has to come to a close. But before we all head back to the real life, we have a few things we would like to say and some stuff to give away. Oh yea, we also have to close out our epic open spaces!\r\n",
            "Category": "That Conference",
            "Level": "100",
            "ScheduledDateTime": "2014-08-13T16:00:00",
            "ScheduledRoom": "Mess Hall",
            "IsFamilyApproved": true,
            "IsUserFavorite": null,
            "Accepted": true,
            "Speakers": [
              {
                "FirstName": "That",
                "LastName": "Conference",
                "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
                "UserName": "TCAdmin",
                "Biography": "The best developer conference!",
                "WebSite": "http://www.thatconference.com",
                "Company": null,
                "Title": null,
                "Twitter": "@ThatConference",
                "Facebook": null,
                "GooglePlus": null,
                "LinkedIn": null,
                "GitHub": null,
                "LastUpdated": "2014-05-14T14:24:22.567"
              }
            ],
            "Tags": [
              {
                "Name": "That Conference"
              }
            ],
            "SessionLinks": [
              
            ],
            "LastUpdated": "2014-06-18T17:15:19.267",
            "Updated": false,
            "ShowMoreDetails": false
          }
        ],
        "Time": "4:00 PM"
      }
    ],
    "Day": "Wed 8/13"
  }
];

};


this.getSessions = function() {
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
									SpeakerNames: s.Speakers.map(function(aSpeaker){
									 															return aSpeaker.FirstName + " " + aSpeaker.LastName; 
																							}).join(),
									Speakers: s.Speakers.map(function(speaker){
										return speaker.UserName;
									}).join(),
									Time:ts.Time.replace(' AM', 'a').replace(' PM', 'p')
							})
					})

			})
			sessionList.push(sessionToAdd);
	})
	return sessionList;
};

    
this.getSpeakers = function () {
 return [
    {
        "FirstName": "Aaron",
        "LastName": "Hoffman",
        "HeadShot": "/cloud/profilephotos/Aaron-Hoffman-0c8cfe4e-46a0-41e4-88ef-eae2f5c663c1.jpg",
        "UserName": "aaronhoffman",
        "Biography": "Aaron is the Co-Founder & CEO of StoneFinch, an Agile Development and Data Analytics Consultancy based in Des Moines, Iowa. StoneFinch focuses on building lasting relationships and creating cultures of continuous learning. Aaron is also the Co-Founder and CTO of Men's Style Lab, a concierge menswear clothing company, a startup currently experiencing very rapid growth. He is a leader of the .NET User Group in Des Moines and is an active member of the entrepreneur community.",
        "WebSite": "http://stonefinch.com/",
        "Company": "StoneFinch",
        "Title": "Co-Founder & CEO",
        "Twitter": "aaron_hoffman",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/aaronhoffman/",
        "GitHub": "https://github.com/aaronhoffman",
        "LastUpdated": "2014-05-05T23:18:16.597"
    },
    {
        "FirstName": "Aaron",
        "LastName": "Hayon",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "ahayon",
        "Biography": "Aaron is a Senior Software Engineer and Azure Architect at Skyline Technologies, Inc. With over 10 years of custom software development experience, Aaron has recently made the switch from a business application developer to a marketing website developer. While Aaron loves technology and cutting code, Aaron enjoys discussions and giving talks on the ways technology can help enable businesses to achieve success. In his free time, you can find Aaron giving talks on such topics as cloud technologies including Microsoft Azure as well as some of the latest website technologies such as CSS3 and HTML5\r\n. Aaron's overall passion is to help businesses achieve success through technology.  \r\n",
        "WebSite": "www.skylinetechnologies.com",
        "Company": "Skyline Technologies",
        "Title": "Senior Software Engineer",
        "Twitter": "@amhayon",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/aaronhayon/",
        "GitHub": null,
        "LastUpdated": "2014-07-08T01:10:09.75"
    },
    {
        "FirstName": "Aaron",
        "LastName": "Douglas",
        "HeadShot": "/cloud/profilephotos/Aaron-Douglas-f1c3cf39-7d0a-4606-a65b-98ebb010344e.jpg",
        "UserName": "astralbodies",
        "Biography": "Aaron was that kid taking apart the mechanical and electrical appliances at five years of age to see how they worked. He never grew out of that core interest - to know how things work. He took an early interest in computer programming, figuring out how to get past security to be able to play games on his dad's computer. He's still that feisty nerd, but at least now he gets paid to do it.\r\n\r\nAfter being a full time Java consultant for five years, he moved to a full-time mobile architect position for a year and now is with Automattic (WordPress.com, Akismet, SimpleNote) as a Mobile Maker. Aaron's interest in mobile development has been ever increasing since he got his first iOS app in Apple's App Store in 2009, Migraine Diary. Other than software development, Aaron enjoys camping during the summer, taking his dogs for a walk around the neighborhood, and pretending to be a storm chaser while sitting at home. ",
        "WebSite": "http://astralbodi.es",
        "Company": "Automattic Inc.",
        "Title": "Mobile Maker",
        "Twitter": "astralbodies",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/+AaronDouglasGeek",
        "LinkedIn": "http://www.linkedin.com/in/aarondouglas/",
        "GitHub": "https://github.com/astralbodies",
        "LastUpdated": "2014-05-08T12:02:55.423"
    },
    {
        "FirstName": "Alex",
        "LastName": "Koppel",
        "HeadShot": "/cloud/profilephotos/Alex-Koppel-a053d541-6005-4812-b923-bd4251868a58.jpeg",
        "UserName": "arsduo",
        "Biography": "Alex is a senior engineer at eSpark Learning, using technology to make an impact on the way students learn. Previously, Alex led the API and infrastructure team for Wunderlist in Berlin, built a social marketing platform at what is now Adobe, and led part of a massive electronic medical record project. He’s active in the open source community as the author of the Koala Facebook gem, and has spoken at conferences and meetups in Europe and the US. Alex studied computer science and scavenger hunts at the University of Chicago.",
        "WebSite": "http://alexkoppel.com",
        "Company": "eSpark Learning",
        "Title": "?",
        "Twitter": "@arsduo",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/alexkoppel/",
        "GitHub": "https://github.com/arsduo/",
        "LastUpdated": "2014-05-07T17:02:56.417"
    },
    {
        "FirstName": "Alexander",
        "LastName": "Headley",
        "HeadShot": "/cloud/profilephotos/Alexander-Headley-2fb0a841-0a2c-44d3-8d4f-3a31a97d6c63-635422858226033193.jpg",
        "UserName": "man03",
        "Biography": "Alex (pictured on the left) enjoys programming in Scratch. He mainly focuses on programming games. He also enjoys sharing what he knows with anyone who is interested.",
        "WebSite": "http://scratch.mit.edu/users/man03/",
        "Company": "Kid",
        "Title": "Aspiring game programmer",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-30T02:59:06.203"
    },
    {
        "FirstName": "Alper",
        "LastName": "Sunar",
        "HeadShot": "/cloud/profilephotos/Alper-Sunar-608f6cf4-768e-4a9d-98b7-5d786d92bec2.jpeg",
        "UserName": "AlperSunar",
        "Biography": "Software developer working with MS stack during the day and with HTML5, JS, PhoneGap, NodeJS, Ruby/Rails on the side.",
        "WebSite": "http://www.babybirdieapp.com",
        "Company": "Paylocity",
        "Title": "Web Developer",
        "Twitter": "asunar",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-06-20T14:59:11.15"
    },
    {
        "FirstName": "Amy",
        "LastName": "Berg",
        "HeadShot": "/cloud/profilephotos/Amy-Berg-de694517-632d-4a3c-b630-78e47a724554.jpg",
        "UserName": "porkchop",
        "Biography": "Amy Berg is a Digital Designer/Developer for Minnesota Public Radio (http://mpr.org). She has been building websites professionally for the last 6 years, but has been dabbling with HTML since this mid-90’s. She loves CSS, knitting, and kitties.\r\n",
        "WebSite": "http://www.amy-berg.com",
        "Company": "Minnesota Public Radio",
        "Title": "Digital Designer/Developer",
        "Twitter": "@pork_chop",
        "Facebook": "https://www.facebook.com/porkCHOPblog",
        "GooglePlus": "http://plus.google.com/113747574051244879141",
        "LinkedIn": null,
        "GitHub": "https://github.com/pork-chop",
        "LastUpdated": "2014-05-30T14:14:18.547"
    },
    {
        "FirstName": "Andrei",
        "LastName": "Marukovich",
        "HeadShot": "/cloud/profilephotos/Andrei-Marukovich-1c72d9e5-af76-4781-b736-9bbceef1ca2e.JPG",
        "UserName": "AndreiMarukovich",
        "Biography": "Andrei Marukovich is a Senior Software Engineer at AB SCIEX and Microsoft Client Development MVP. He has been developing software professionally for over 15 years and during this time he has designed and developed applications in such diverse areas as semiconductor device manufacturing, robotics, game development, Web and hosting solutions. In his current position, Andrei leads development of software for life science applications, coordinates company knowledge sharing processes and facilitates adoption of new software technologies. He blogs at http://lunarfrog.com/blog and can be found on Twitter at @amarukovich \r\n",
        "WebSite": "http://lunarfrog.com",
        "Company": "AB SCIEX",
        "Title": "Senior Software Engineer",
        "Twitter": "amarukovich",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://linkedin.com/in/marukovich/",
        "GitHub": "https://github.com/AndreiMarukovich",
        "LastUpdated": "2014-05-06T00:22:22.263"
    },
    {
        "FirstName": "Angela",
        "LastName": "Dugan",
        "HeadShot": "/cloud/profilephotos/Angela-Dugan-c9958264-93ab-444c-87a8-3aaf9d9c7c86.jpg",
        "UserName": "OakParkGirl",
        "Biography": "Angela Dugan is the Application Lifecycle Management (ALM) Practice Manager for Polaris Solutions, a small .NET development and ALM consulting firm based out of Chicago and St. Louis. Angela has been in software development since 1999, filling roles including business analyst, developer, tester, project manager, and architect. Angela spent 5+ years as an ALM Tools evangelist with Microsoft, helping customers across the Midwest to solve their toughest IT problems using improved processes and the Team Foundation Server tool suite. In 2011, she left Microsoft to follow her passion back into the consulting world where she could be far more hands-on with her customers, and is now running the ALM Practice at Polaris Solutions. Angela also runs the Chicago Visual Studio ALM user group, is an active organizer and speaker at several local conferences, is a Microsoft ALM MVP, and is a Certified Scrum master. \r\n\r\nOutside of wrangling TFS, Angela is an avid board gamer, an aspiring runner, and a Twitter addict. She lives in a 104 year old house in Oak Park that she is constantly working on/cursing at with her husband David.",
        "WebSite": "http://www.tfswhisperer.com/",
        "Company": "Polaris Solutions",
        "Title": "ALM Practice Manager",
        "Twitter": "OakParkGirl",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/pub/angela-dugan/1/979/1a6 ",
        "GitHub": null,
        "LastUpdated": "2014-04-03T17:23:48.37"
    },
    {
        "FirstName": "Annalee and Brian",
        "LastName": "Kalbfleisch",
        "HeadShot": "/cloud/profilephotos/Brian-Kalbfleisch-527a0189-8ede-4f76-8648-ea4b4b4ea4d8-635404633132370997.jpg",
        "UserName": "kalbster",
        "Biography": "Annalee is an 8 year old student, and a veteran That Conference speaker. For the past 3 years, her team of friends has participated in  jr.FLL (Junior FIRST Lego League) learning about robotics, programming and social issues while having fun.  This year, the team is starting the next level of competition in the FLL. Annalee loves art and uses her creativity to come up with innovative solutions to the FIRST challenges.  Annalee will be sharing her experiences and assisting young participants in WeDo robotics programming.\r\n\r\nBrian is the Assistant Director of IT Development at the Radiological Society of North America. For the past 3 years, he has been a coach and sponsor for US FIRST. Hosting Annalee's team after school has given him the opportunity to teach children computer programming and robotics in a fun and engaging way. Watching the teams work, learn and present together has been an inspiration which he hopes to share with others at That Conference.",
        "WebSite": "http://www.rsna.org",
        "Company": "RSNA",
        "Title": "Assistant Director of IT Development",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/brian-kalbfleisch/3/7b5/7",
        "GitHub": null,
        "LastUpdated": "2014-07-09T02:05:16.203"
    },
    {
        "FirstName": "Ashley",
        "LastName": "Bennett Ewald",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "quackgrass",
        "Biography": "Ashley is an IP attorney and business litigator at Gray Plant Mooty, where she lawyers people on a daily basis.  Together, with her husband, Jeffery, they live happily in Minnetonka, Minnesota along with their Hyundai Elantra, Clive Gary Bixby.",
        "WebSite": "http://gpmlaw.com",
        "Company": "Gray, Plant & Mooty",
        "Title": "Attorney",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-20T13:28:59.173"
    },
    {
        "FirstName": "Benjamin",
        "LastName": "Gavin",
        "HeadShot": "/cloud/profilephotos/Benjamin-Gavin-8ed9516a-2287-494b-809f-5362a9b589fd.jpg",
        "UserName": "bengavin",
        "Biography": "Ben is a Senior Software Engineer at Skyline Technologies and has been writing software for the web and beyond for over 20 years [but doesn't feel old enough for that to be true].  He loves learning and experimenting with technology, mentoring other developers and sharing what he can with the communities and people who have taught him so much over the years.  His current focus is primarily around the Microsoft technology stack, including C#, Azure, Windows 8 and Windows Phone and helping his customers get the best solution for their needs.",
        "WebSite": "https://www.virtual-olympus.com",
        "Company": "Skyline Technologies",
        "Title": "Senior Software Engineer",
        "Twitter": "virtualolympus",
        "Facebook": null,
        "GooglePlus": "ben@virtual-olympus.com",
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-07T15:13:29.54"
    },
    {
        "FirstName": "Bertine",
        "LastName": "Buchan",
        "HeadShot": "/cloud/profilephotos/Bertine-Buchan-b91ac4be-77da-40cd-9ed8-bdd8a2f4840b-635349830858734195.jpg",
        "UserName": "bertine",
        "Biography": "Bertine Buchan (@bertine) is a Sr. Front-End Developer for Gage. She has been making websites for 15 years with only a short break to get a masters in Medieval History. This means she knows almost as much about castles as front-end development.",
        "WebSite": "http://www.gage.com",
        "Company": "Gage",
        "Title": "Sr. Front-End Developer",
        "Twitter": "@bertine",
        "Facebook": "bertine",
        "GooglePlus": null,
        "LinkedIn": "bertine",
        "GitHub": null,
        "LastUpdated": "2014-05-06T14:24:45.873"
    },
    {
        "FirstName": "Beth",
        "LastName": "Tucker Long",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "e3betht",
        "Biography": "Beth Tucker Long is the Editor-In-Chief of php[architect] magazine (http://www.phparch.com), co-organizer of Madison PHP (http://www.madisonphp.com), and she also teaches PHP courses and freelances. You can find her on Twitter (@e3betht) or on her blog (http://www.alittleofboth.com). She runs Treeline Design - http://www.treelinedesign.com, a web development company, and Playlist Event Music - http://www.playlisteventmusic.com, a DJ company, along with her husband, Chris. ",
        "WebSite": "http://www.TreelineDesign.com and http://www.phparch.com",
        "Company": "Treeline Design and php[architect]",
        "Title": null,
        "Twitter": "e3betht",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-14T12:33:29.127"
    },
    {
        "FirstName": "Bill",
        "LastName": "Wagner",
        "HeadShot": "/cloud/profilephotos/Bill-Wagner-6336fa9a-a680-4bd1-b9a5-17f6c6f5fb74.jpg",
        "UserName": "BillWagner1",
        "Biography": "Bill’s technical time is spent between curly braces, primarily with C#. His technical areas of focus are C#, .NET, TypeScript. His other, non-coding passion is to help organizations build effective, high-functioning developer teams. Bill is the author of the best selling \"Effective C#\", now in its second edition, and \"More Effective C#\". He has created LiveLessons on Async programming in C# and C# Puzzlers. His articles have appeared in MSDN Magazine, the C# Developer Center, Visual C++ Developer's Journal, Visual Studio Magazine, ASP.NET Pro, .NET Developer's Journal and more. He's written hundreds of technical articles for software developers. He actively blogs about technical and business topics at http://thebillwagner.com. Bill is also a regional director for Microsoft.\r\n",
        "WebSite": "http://thebillwagner.com",
        "Company": "Bill Wagner Software ",
        "Title": "Founder",
        "Twitter": "@billwagner",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/BillWagner",
        "LastUpdated": "2014-04-10T13:55:59.97"
    },
    {
        "FirstName": "Brad",
        "LastName": "Broulik",
        "HeadShot": "/cloud/profilephotos/Brad-Broulik-684b882e-0b36-463e-b1b8-bbcdabac69c6-635355335408362214.png",
        "UserName": "bradbroulik",
        "Biography": "Brad Broulik is an author, trainer, and principal web engineer specializing in enterprise mobile development at HealthPartners. His recent book is Pro jQuery Mobile. He blogs at http://bradbroulik.blogspot.com and tweets via @BradBroulik. ",
        "WebSite": "http://bradbroulik.blogspot.com/",
        "Company": "HealthPartners",
        "Title": "Principal Web Engineer",
        "Twitter": "@BradBroulik",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/pub/brad-broulik/5/a7b/42b",
        "GitHub": "https://github.com/BradBroulik",
        "LastUpdated": "2014-05-12T23:19:45.633"
    },
    {
        "FirstName": "Brad",
        "LastName": "Marsh",
        "HeadShot": "/cloud/profilephotos/Brad-Marsh-863e621a-7d5f-48a0-971b-e0a14ae64a3a-635394865376205911.png",
        "UserName": "bradleytmarsh",
        "Biography": "Brad is a Senior Developer at ReachLocal, who has spent the last 7 years focusing on user experience driven development on both the web and mobile.  An avid writer and artist, as well as programmer, he founded LitLift.com, a novel planning website, and helped create Skill Sketch, an iPhone app meant to inspire the artist in everyone.  Currently he is a member of the Liger core team, trying to help expand the world of app development to web developers and designers.",
        "WebSite": "https://medium.com/@Bbqhacker",
        "Company": "ReachLocal ",
        "Title": "Senior Developer",
        "Twitter": "bbqhacker",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/brad-marsh/a/648/47b",
        "GitHub": "https://github.com/dottertrotter",
        "LastUpdated": "2014-06-27T17:22:25.363"
    },
    {
        "FirstName": "Brandon",
        "LastName": "Martinez",
        "HeadShot": "/cloud/profilephotos/Brandon-Martinez-2954a4df-7df5-4ae2-a758-37850470e654.jpg",
        "UserName": "brandonmartinez",
        "Biography": "Brandon is a software engineer working remotely in Ludington, Michigan for Skyline Technologies out of Appleton, Wisconsin. Specializing in .NET and Web Development, he has been honing his skills since junior high in both Microsoft and open source development.\r\nWhen he’s not coding, he enjoys spending his time with his wife and son, practicing his photography skills, playing guitar, or drinking a fresh cup of coffee.",
        "WebSite": "http://www.brandonmartinez.com/",
        "Company": "Skyline Technologies",
        "Title": "Software Engineer",
        "Twitter": "brandonmartinez",
        "Facebook": "http://facebook.brandonmartinez.com/",
        "GooglePlus": "http://google.brandonmartinez.com/",
        "LinkedIn": "http://linkedin.brandonmartinez.com/",
        "GitHub": "http://github.brandonmartinez.com/",
        "LastUpdated": "2014-03-31T12:56:02.15"
    },
    {
        "FirstName": "Brent",
        "LastName": "Stineman",
        "HeadShot": "/cloud/profilephotos/Brent-Stineman-8f213be9-c893-4a96-a991-ddf244328ae9.jpg",
        "UserName": "bstineman",
        "Biography": "Brent Stineman has been in IT for over 20 years with a career that has spanned everything from mobile to mainframe. Most of this career has been focused on internet and distributed application development with the last 4 years being highly focused on Cloud Computing and the Windows Azure Platform. \r\n\r\nBrent began working with Windows Azure in early 2009 while a consultant with Sogeti USA. His efforts and passion led to his quick rise at Sogeti and eventual recognition as one of the inaugural Microsoft MVP for the Windows Azure platform in October of 2010. \r\n\r\nIn October of 2012, Brent left Sogeti to become a Technical Evangelist for Microsoft. In his new role he’s focused on helping ISVs in the US Central region adopt the Windows Azure platform. This allows him to more deeply pursue his passion for cloud and work with an even wider array of clients to solve the challenges and knock down the barriers of cloud adoption. Most recently, Brent has been doing this as part of the new Technical Evangelism and Development (TED) team within Microsoft’s corporate DPE group. ",
        "WebSite": "http://brentdacodemonkey.wordpress.com/",
        "Company": "Microsoft",
        "Title": "Cloud Evangelist",
        "Twitter": "@brentcodemonkey",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-07T12:47:23.467"
    },
    {
        "FirstName": "Brent",
        "LastName": "Schooley",
        "HeadShot": "/cloud/profilephotos/Brent-Schooley-91da314f-f4ee-456a-a6c3-f08a033f07dc-635388063099015263.jpg",
        "UserName": "brentschooley",
        "Biography": "Brent is a Developer Evangelist for Twilio representing the Philadelphia metro.  He is a software developer who has been working with Microsoft technologies since 2004. His interests include client and mobile application development and user experience design with a recent emphasis on iOS and client-side JavaScript frameworks. Other platforms he has worked with include WPF, Silverlight, Windows Forms, Windows Phone, and Windows 8. He has a passion for making people’s experiences with software the best that they can possibly be.  Brent is the author of Designing for Windows 8, a Windows 8 design primer from Apress. ",
        "WebSite": "http://about.me/brentschooley",
        "Company": "Twilio",
        "Title": "Developer Evangelist",
        "Twitter": "brentschooley",
        "Facebook": "http://facebook.com/brentschooley",
        "GooglePlus": "https://plus.google.com/+BrentSchooley/",
        "LinkedIn": "http://linkedin.com/in/brentschooley",
        "GitHub": "http://github.com/brentschooley",
        "LastUpdated": "2014-06-19T20:27:06.867"
    },
    {
        "FirstName": "Brian",
        "LastName": "Hogan",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "bphogan",
        "Biography": "Brian P. Hogan is an author, editor, teacher, and web developer. He's the author of \"Automate With Grunt\", \"tmux: Productive Mouse Free Development\", and \"HTML5 and CSS3: Level Up With Today's Web Technologies.\" When not hacking on Ruby or JavaScript code, he’s mentoring students, writing songs, watching “The Simpsons” and spending quality time with his wife and daughters.",
        "WebSite": "http://napcs.com",
        "Company": "NAPCS",
        "Title": "Chief Problem Solver",
        "Twitter": "bphogan",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "napcs",
        "LastUpdated": "2014-04-11T14:16:56.663"
    },
    {
        "FirstName": "Chris",
        "LastName": "Powers",
        "HeadShot": "/cloud/profilephotos/Chris-Powers-1329b0f5-d37d-4424-8a68-03f390b87ffa.jpg",
        "UserName": "chrisjpowers",
        "Biography": "Chris Powers has been developing Web applications for the last seven years and now manages agile Web development teams. He strongly believes in the power technology has to bring people together and enjoys developing platforms that empower the user. Currently Chris is working as a software engineering manager at Groupon and lives in the northern Chicago suburbs with his wife, daughter, dog and cat. In his free time he enjoys board gaming, playing the drum kit and homebrewing.",
        "WebSite": "http://chrisjpowers.com",
        "Company": "Groupon",
        "Title": "Engineering Manager",
        "Twitter": "@chrisjpowers",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/chrisjpowers",
        "LastUpdated": "2014-05-16T14:43:21.967"
    },
    {
        "FirstName": "Chris",
        "LastName": "Risner",
        "HeadShot": "/cloud/profilephotos/Chris-Risner-1a6bfe45-c614-45e7-b9ae-1932320f5cac-635375124573302563.jpeg",
        "UserName": "ChrisRisner",
        "Biography": "Chris Risner is a Senior Technical Evangelist at Microsoft. There he is focused on connecting Microsoft Azure with mobile apps. He has been working with iOS and Android development for the past several years. Before working in mobile development, Chris worked on many large scale enterprise applications in Java and .NET. Chis is a constant learner who loves technology of all flavors and has a vast amount of experience in iOS, Android, Smart Clients, Asp.Net MVC, C#, Java, and Objective C. You can find out more about Chris at http://chrisrisner.com and http://twitter.com/chrisrisner.\r\n",
        "WebSite": "http://chrisrisner.com",
        "Company": "Microsoft",
        "Title": "Senior Technical Evangelist",
        "Twitter": "ChrisRisner",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/+chrisrisner",
        "LinkedIn": null,
        "GitHub": "https://github.com/chrisrisner",
        "LastUpdated": "2014-06-04T21:01:03.29"
    },
    {
        "FirstName": "Chris",
        "LastName": "Gardner",
        "HeadShot": "/cloud/profilephotos/Chris-Gardner-5d7294bf-f100-468c-ad9a-bbe380786a36.png",
        "UserName": "freestylecoder",
        "Biography": "Chris Gardner is the Senior Software Engineer and Architect for T & W Operations, Inc, and a Microsoft Certified Trainer Regional Lead. Tortured by years of contracts that valued buzzwords over results, Chris has developed a true passion for finding solutions that fit the problem, not the technology of the week. Chris received his M.S in Computer Science, B.S. in Mathematics, and B.A. in Philosophy from the University of Alabama in Huntsville and is currently a Microsoft Certified Professional Developer, Information Technology Professional and Trainer.",
        "WebSite": "http://blog.freestylecoding.com",
        "Company": "T&W Operations, Inc.",
        "Title": "Sr. Software Engineer",
        "Twitter": "freestylecoder",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "freestylecoder",
        "LastUpdated": "2014-03-31T14:13:52.44"
    },
    {
        "FirstName": "Christopher",
        "LastName": "Woodruff",
        "HeadShot": "/cloud/profilephotos/Christopher-Woodruff-2d76098d-008b-47fd-8377-a960756f9c05.png",
        "UserName": "cwoodruff",
        "Biography": "Chris Woodruff (or Woody as he is commonly known as) has a degree in Computer Science from Michigan State University’s College of Engineering. Woody has been developing and architecting software solutions for almost 15 years and has worked in many different platforms and tools. He is a community leader, helping such events as Day of .NET Ann Arbor, West Michigan Day of .NET and CodeMash. He was also instrumental in bringing the popular Give Camp event to Western Michigan where technology professionals lend their time and development expertise to assist local non-profits. As a speaker and podcaster, Woody has spoken and discussed a variety of topics, including database design and open source. He is a Microsoft MVP in Visual C# and was recognized in 2010 as one of the top 20 MVPs world-wide.",
        "WebSite": "http://chriswoodruff.com",
        "Company": "Woodruff Solutions LLC",
        "Title": "Partner",
        "Twitter": "cwoodruff",
        "Facebook": "https://www.facebook.com/chris.woodruff",
        "GooglePlus": "https://plus.google.com/+ChrisWoodruff",
        "LinkedIn": "http://www.linkedin.com/in/chriswoodruff/",
        "GitHub": "https://github.com/cwoodruff",
        "LastUpdated": "2014-04-11T14:15:51.84"
    },
    {
        "FirstName": "CoderDojoChi",
        "LastName": " :)",
        "HeadShot": "/cloud/profilephotos/CoderDojo-Chi-01eae8c1-5b7f-4a73-b905-20d51f45b7e3-635397807243373843.png",
        "UserName": "CoderDojoChi",
        "Biography": "We are here to open doors that are otherwise closed. We are here to freely offer our knowledge. We speak the language of the future. A language that does not discriminate by race, religion, nationality, or gender.\r\n\r\nCoderDojoChi is a free computer organization for kids interested in learning how to code. The Chicago Chapter was started by Ali Karbassi in January 2013; the chapter has grown with the help of many volunteers from around the Chicago area.",
        "WebSite": "http://CoderDojoChi.org",
        "Company": "SapientNitro",
        "Title": null,
        "Twitter": "@CoderDojoChi",
        "Facebook": "https://www.facebook.com/coderdojochi",
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/company/coderdojochi/",
        "GitHub": "https://github.com/CoderDojoChi",
        "LastUpdated": "2014-07-29T19:28:08.11"
    },
    {
        "FirstName": "Coraline",
        "LastName": "Ehmke",
        "HeadShot": "/cloud/profilephotos/Coraline-Ehmke-e58f6a89-792d-4796-a2fe-75ac0b073714.png",
        "UserName": "Bantik",
        "Biography": "Coraline Ada Ehmke is a speaker, author, teacher, open source advocate and technologist with 20 years of experience in developing apps for the web. As a founding member of LGBTech.org, CultureOffset.org, and OpenSourceForWomen.org, she works diligently to promote diversity and inclusivity in the tech industry. Her current interests include small-application ecosystems, APIs, business intelligence, machine learning, and predictive analytics.",
        "WebSite": "http://bantik.github.io",
        "Company": "Instructure",
        "Title": "Senior Software Engineer",
        "Twitter": "Bantik",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "Bantik",
        "LastUpdated": "2014-04-15T03:18:20.46"
    },
    {
        "FirstName": "Cori",
        "LastName": "Drew",
        "HeadShot": "/cloud/profilephotos/Cori-Drew-794d1ed4-1228-4b9e-8a3f-605bf1520dd4.jpg",
        "UserName": "coridrew",
        "Biography": "Cori Drew is a consultant with Improving Enterprises in Addison, TX. She started her programming career as a web developer before cutting her OOP teeth (& falling in love with C#) in 2003 in .NET Framework 1.1. Cori was a programmer for 8.5 years before discovering there was a developer community in 2009. Appreciation for growth & learning, enabled by our tech community, has inspired her to try to pay it forward.",
        "WebSite": "http://truncatedcodr.wordpress.com/",
        "Company": "Improving Enterprises",
        "Title": "Consultant",
        "Twitter": "@coridrew",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "coridrew",
        "LastUpdated": "2014-04-05T18:20:04.633"
    },
    {
        "FirstName": "Cory",
        "LastName": "House",
        "HeadShot": "/cloud/profilephotos/Cory-House-b8e1794c-ae6a-47fb-8cb9-5c162ddf0a99.jpg",
        "UserName": "housecor",
        "Biography": "Cory is founder of Bitnative LLC, an agile software development and training consultancy. He is a Microsoft MVP (C#), Pluralsight author, INETA speaker, independent consultant, and blogger with 15 years experience in full-stack software development. As a software architect at VinSolutions, Cory specializes in creating C# .NET and JavaScript based single page applications for the automotive industry. He regularly speaks on clean code, architecture, and software career development at conferences and user groups across the country. Cory is author of \"Clean Code: Writing Code for Humans\", \"Architecting Applications in .NET\", and \"Becoming an Outlier\" on Pluralsight. Cory blogs at bitnative.com and is active on Twitter as @housecor.",
        "WebSite": "http://www.bitnative.com",
        "Company": "Bitnative LLC",
        "Title": "President",
        "Twitter": "housecor",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/u/0/104997628038333365690/posts",
        "LinkedIn": "https://www.linkedin.com/profile/view?id=4609328&trk=nav_responsive_tab_profile",
        "GitHub": "https://github.com/coryhouse",
        "LastUpdated": "2014-07-06T02:53:16.337"
    },
    {
        "FirstName": "Damon",
        "LastName": "Payne",
        "HeadShot": "/cloud/profilephotos/Damon-Payne-a6eeb64d-669a-4f0b-909a-57932c486957-635422589151037293.png",
        "UserName": "DamonPayne",
        "Biography": "Damon Payne is a software developer, husband, father, atheist, BBQ enthusiast, wino, martial artist, and AV nut currently living the in unexplored swamps near Milwaukee.",
        "WebSite": "http://www.damonpayne.com",
        "Company": "Red Arrow Labs",
        "Title": "Software Architect",
        "Twitter": "@damonpayne",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-29T19:28:50.473"
    },
    {
        "FirstName": "Dan",
        "LastName": "Piessens",
        "HeadShot": "/cloud/profilephotos/Dan-Piessens-2a5f12b3-5452-4134-b46d-b5869da44231-635349852020839172.jpg",
        "UserName": "dpiessens",
        "Biography": "Dan is a senior consultant for Centare where he passionately advocates agile principles and infects his clients with DevOps and other wonderful new ideas. Having 13 years of experience in the software industry, Dan has architected world class enterprise applications in the transportation, insurance, and healthcare industries. He has been a Microsoft Patterns and Practices Champion since 2008 and an advisor on projects including Unity, Enterprise Library, Prism, Acceptance Testing, and CQRS. His latest endeavors involve guidance for development teams on continuous delivery and promoting best practices for the latest Microsoft Web and Azure technologies.",
        "WebSite": "http://www.centare.com",
        "Company": "Centare",
        "Title": "Senior Consultant",
        "Twitter": "dpiessens",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/danielpiessens/",
        "GitHub": "https://github.com/dpiessens",
        "LastUpdated": "2014-05-06T15:01:13.627"
    },
    {
        "FirstName": "Dan",
        "LastName": "Normington",
        "HeadShot": "/cloud/profilephotos/Dan-Normington-cd36e304-5b57-4d2c-8926-c5d22771819d-635357575091169721.png",
        "UserName": "dannormington",
        "Biography": "Dan is a Senior Software Engineer at Vertigo Software with over 15 years of development experience. The past couple years he has had the opportunity to focus on mobile device development ranging from iOS, Android, Windows Phone, and Windows RT.\r\n",
        "WebSite": "http://www.vertigo.com",
        "Company": "Vertigo",
        "Title": "Senior Software Engineer",
        "Twitter": "dannormington",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "dannvertigo",
        "LastUpdated": "2014-05-15T13:31:49.117"
    },
    {
        "FirstName": "Danielle",
        "LastName": "Boldt",
        "HeadShot": "/cloud/profilephotos/Danielle-Boldt-ec711caf-9074-4ef6-b56f-fd0167dd54ce-635350207447150998.jpg",
        "UserName": "DanielleBoldt",
        "Biography": "Danielle is a Senior Software Engineer at Renaissance Learning Inc.  She has nearly 20 years of software development expertise that ranges from design through to quality assurance and deployment.  For much of the past year, Danielle has been focused on all things automation and is eager to share the wealth of knowledge she has acquired.  When not at work, you might find Danielle out on her motorcycle, at the indoor rock climbing gym with her husband and children, or tucked at home practicing guitar.",
        "WebSite": "http://www.codatrix.ca/blog",
        "Company": "Renaissance Learning Inc.",
        "Title": "Senior Software Engineer",
        "Twitter": "@Codatrix",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/danielleboldt",
        "GitHub": null,
        "LastUpdated": "2014-05-07T00:54:38.29"
    },
    {
        "FirstName": "Darrel",
        "LastName": "Miller",
        "HeadShot": "/cloud/profilephotos/Darrel-Miller-7ea77797-cdd6-4f75-b55d-507b3e722f00-635353500831602057.jpg",
        "UserName": "darrelmiller",
        "Biography": "Darrel has been building distributed business applications for more than 20 years. He is an active member of the .NET community and OSS contributor.  When he’s not reading IETF specifications in order to answer Stack Overflow questions, or writing tooling to help people build hypermedia driven client applications, you will find him enjoying time with his wife and daughter in Montreal, Quebec. Darrel joined Runscope to ensure that they provide the best support possible to .NET developers who are building and consuming Web APIs. Darrel has been a long time member of the Microsoft Web API advisory board, a Microsoft Integration MVP and recently co-authored the O'Reilly book, Designing Evolvable Web APIs with ASP.NET. ",
        "WebSite": "http://www.bizcoder.com",
        "Company": "Runscope Inc.",
        "Title": "Developer Advocate",
        "Twitter": "darrel_miller",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/darrelmiller",
        "LastUpdated": "2014-05-10T20:21:29.413"
    },
    {
        "FirstName": "Dave",
        "LastName": "Arel",
        "HeadShot": "/cloud/profilephotos/David-Arel-e6b386ca-e85d-4cf0-9ce5-c54c07d08734.jpg",
        "UserName": "davearel",
        "Biography": "Dave Arel is a product engineer with a focus mainly in JavaScript. As the Director of JavaScript Engineering and Head of Front-End at Belly, he is directly responsible for the development of their [HTML5 iPad application](http://html5hub.com/html5-mobile-never-looked-so-good/) which is used by thousands of businesses and millions of users. So when it's not working properly, blame him. Dave is easily recognizable by his lack of hair and eau de hockey-bag cologne.\r\n\r\n@davearel | davearel.com | bellycard.com",
        "WebSite": "http://tech.bellycard.com",
        "Company": "Belly",
        "Title": "Director of JavaScript Engineering",
        "Twitter": "davearel",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/davearel",
        "GitHub": "https://github.com/davearel",
        "LastUpdated": "2014-05-13T20:39:48.207"
    },
    {
        "FirstName": "Dennis",
        "LastName": "Welu",
        "HeadShot": "/cloud/profilephotos/Dennis-Welu-6280a094-76d4-43e2-965f-2a4a1c36bf80.jpg",
        "UserName": "DennisWelu",
        "Biography": "Dennis Welu is the president of Motis Consulting in Dubuque, Iowa. Dennis has computed for decades...if you go way back to that goofy phone modem thing you placed in a receiver to play Oregon Trail. His experience ranges from hands on engineering to product management to executive leadership. He has been a consultant to clients large and small – from startup to Fortune 100 companies. Motis is focused primarily on mobile software development.\r\n",
        "WebSite": "http://www.motisconsulting.com/",
        "Company": "Motis Consulting",
        "Title": "President",
        "Twitter": "@DennisWelu",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/dennis-welu/35/7ab/907",
        "GitHub": null,
        "LastUpdated": "2014-05-06T12:46:40.913"
    },
    {
        "FirstName": "Dennis",
        "LastName": "Burton",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "dburton",
        "Biography": "Dennis Burton is a web developer who constantly challenges the norm. He is a Windows Azure Insider and MVP that is known for taking tools and frameworks from non-Microsoft ecosystems and running them on Windows Azure. You will often find him developing nodejs projects on his Mac using Visual Studio with the vim extension. Dennis's multi-platform passions also extend to his community involvement, where he serves as an organizer for both the Southeast Michigan JavaScript meetup and the Ann Arbor .NET Developer Group.\t",
        "WebSite": "http://developusing.net",
        "Company": "Arana Software",
        "Title": "Problem Solver",
        "Twitter": "dburton",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "dennisburton",
        "LastUpdated": "2014-04-11T21:00:43.7"
    },
    {
        "FirstName": "Derek",
        "LastName": "Curtis",
        "HeadShot": "/cloud/profilephotos/Derek-Curtis-9219537b-f50b-4f77-be9c-b00f6201013a-635358034959954350.jpg",
        "UserName": "bobvbob",
        "Biography": "I am a husband and father, first. I love spending time with my family. They are the best part of my life. My wife and our six children really define who I am and who I want to become. After dropping out of college to start a short-lived business (9 months), I earned a Bachelor of General Studies from Brigham Young University and later an MBA from DePaul University. I started programming on a dare from one of my managers and I have been programming ever since.  I went independent and started my own company in 2005 so I could have more control over the my career and haven't looked back.  My clients have included: Jockey, NEC Displays, Fellowes, BMC, Federal Home Loan Bank of Chicago, and Kraft Foods, \r\n\r\nI love my profession! Programming has been a wonderful outlet to combine right-brained creativity with left-brained numbers and logic. I am passionate about teaching a younger generation to program. ",
        "WebSite": "http://www.plaidpony.com",
        "Company": "Plaid Pony Technology Solutions LLC",
        "Title": "President",
        "Twitter": "@plaidponytech",
        "Facebook": "https://www.facebook.com/bobvbob",
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/derekcurtis",
        "GitHub": null,
        "LastUpdated": "2014-05-16T02:19:05.99"
    },
    {
        "FirstName": "Doug",
        "LastName": "Rhoten",
        "HeadShot": "/cloud/profilephotos/Doug-Rhoten-31d73180-5582-4b12-a5d0-f3308370b77f-635422306127816275.jpg",
        "UserName": "dougR",
        "Biography": "Doug Rhoten is the Development Manager of the Plug-in team at JAMF Software, a company headquartered in Minneapolis that makes software for managing Mac OS X and iOS devices. Working out of the development and support office in Eau Claire, Wisconsin he also runs the Chippewa Valley Developers Group http://cvdevgroup.org and the Chippewa Valley Code Camp http://www.chippewvalley.com. When not shuttling his kids to dance lessons or competitions, you can find him dreaming of the day he can do more skiing and sailing. You can find him on twitter at @dougrhoten.",
        "WebSite": "http://www.jamfsoftware.com",
        "Company": "JAMF Software",
        "Title": "Development Manager, Plug-ins",
        "Twitter": "dougrhoten",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/dougrhoten/",
        "GitHub": null,
        "LastUpdated": "2014-07-29T11:37:50.36"
    },
    {
        "FirstName": "Dustin",
        "LastName": "Ewers",
        "HeadShot": "/cloud/profilephotos/Dustin-Ewers-9d9f8995-bb7e-48f3-a6a0-435402b90ceb.jpg",
        "UserName": "DustinEwers",
        "Biography": "Dustin Ewers is a web developer in Madison, WI who primarily works with ASP.Net. He blogs about technology at http://dustinewers.com/. Follow him on Twitter at @DustinJEwers. ",
        "WebSite": "http://dustinewers.com/",
        "Company": "Wisconsin Interactive Network",
        "Title": "Developer",
        "Twitter": "@DustinJEwers",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/dustinewers/",
        "GitHub": "https://github.com/DustinEwers",
        "LastUpdated": "2014-07-17T18:03:43.113"
    },
    {
        "FirstName": "Edward",
        "LastName": "Thomson",
        "HeadShot": "/cloud/profilephotos/Edward-Thomson-c58df67d-e6bc-48e5-89fc-a36c2c6a74b9-635350067204240748.JPG",
        "UserName": "ethomson",
        "Biography": "Edward Thomson is a Senior Software Development Engineer at Microsoft, where he develops the core Git functionality for Visual Studio and Team Foundation Server.  Edward is the author of the Git section of Professional Team Foundation Server 2013, available from Wrox Press, and a core contributor to the open-source libgit2 project that provides the underlying Git repository management functionality for a number of applications.  Before joining Microsoft, Edward developed version control tools at Teamprise and SourceGear.  You can find Edward on Twitter as @ethomson and online at http://www.edwardthomson.com/.",
        "WebSite": "http://www.edwardthomson.com/",
        "Company": "Microsoft",
        "Title": "Software Development Engineer",
        "Twitter": "@ethomson",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/ethomson/",
        "LastUpdated": "2014-05-06T20:58:40.423"
    },
    {
        "FirstName": "Edward",
        "LastName": "Brey",
        "HeadShot": "/cloud/profilephotos/Edward-Brey-efee8174-463f-4c29-bb91-da259a873756.JPG",
        "UserName": "breyed",
        "Biography": "Ed builds web and mobile applications, specializing in device connectivity. His company, Toolsay LLC, produces a machine monitoring toolkit that OEMs use to provide access to their embedded products via the web, mobile devices, and USB.\r\n\r\nAfter 5 years of tinkering with Basic, Ed learned C from a book (complete with a chapter on “C with Classes”) that he received for his 16th birthday. For the next dozen years, he wrote embedded and desktop communication software for industrial automation and electrical power management. In the last decade, Ed has written code and managed developers in power and water industries, working heavily with .NET technologies to build connected web, mobile, and desktop applications.\r\n\r\nEd is a husband, a father of two delightful, young children, and a software developer. He enjoys family time, Ultimate Frisbee, and solving difficult problems.",
        "WebSite": "http://breyfamily.net",
        "Company": "Toolsay LLC",
        "Title": "Founder / Software Engineer",
        "Twitter": "edbrey",
        "Facebook": "https://www.facebook.com/edward.brey",
        "GooglePlus": "https://plus.google.com/+EdwardBrey",
        "LinkedIn": "http://www.linkedin.com/in/edwardbrey/",
        "GitHub": "https://github.com/breyed",
        "LastUpdated": "2014-04-14T21:40:11.633"
    },
    {
        "FirstName": "Elizabeth",
        "LastName": "Naramore",
        "HeadShot": "/cloud/profilephotos/Elizabeth-Naramore-a0fa0945-7ecc-4dc8-95f8-4e5e77cad055-635391378588631590.jpg",
        "UserName": "ElizabethN",
        "Biography": "Elizabeth is an author, speaker, mentor, and recovering web developer. She currently works on the Community Team at GitHub, and she’s all about looking at new ways to solve old problems. She lives in Cincinnati, Ohio with her partner, their 3 children, and a dog named Raisin.",
        "WebSite": "http://naramore.net/blog",
        "Company": "GitHub",
        "Title": "EventHandler",
        "Twitter": "@ElizabethN",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/ElizabethN",
        "LastUpdated": "2014-06-23T16:31:08.08"
    },
    {
        "FirstName": "Emily",
        "LastName": "Davis",
        "HeadShot": "/cloud/profilephotos/Emily-Davis-4f95dc53-aa36-4ecd-b9c6-10eddfed150b-635355063431226713.jpg",
        "UserName": "EmilyPrograms",
        "Biography": "Emily Davis is 12 years old.  She is a big nerd and very proud of her collection of geeky t-shirts.  She likes Star Wars, Legos, Minecraft and coding.  Her mom and dad are both software developers and even her little brother as written a couple apps. Emily's father owns a gaming company called QONQR and he will be helping with her presentation.",
        "WebSite": "http://www.QONQR.com",
        "Company": null,
        "Title": "Kid",
        "Twitter": "@QONQR",
        "Facebook": "https://www.facebook.com/QONQR",
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-12T15:46:24.523"
    },
    {
        "FirstName": "Eric",
        "LastName": "Potter",
        "HeadShot": "/cloud/profilephotos/Eric-Potter-00a2d1be-682c-4b15-ba9e-7a559acab0d5.jpg",
        "UserName": "pottereric",
        "Biography": "I am a Software Architect for Aptera Software in Fort Wayne Indiana, working primarily in the .Net platform. I have been developing high quality custom software solutions since 2001. I am also an adjunct professor of computer science at Indiana Tech. I love to dabble in new and exciting technologies. In my spare time, I love to tinker with Arduino projects. I have an amazing wife and 5 wonderful children. I see myself as a humble toolsmith.",
        "WebSite": "http://humbletoolsmith.com/",
        "Company": "Aptera Software",
        "Title": "Software Architect",
        "Twitter": "pottereric",
        "Facebook": null,
        "GooglePlus": "eric.b.potter",
        "LinkedIn": null,
        "GitHub": "pottereric",
        "LastUpdated": "2014-04-04T02:14:54.923"
    },
    {
        "FirstName": "Eric",
        "LastName": "Boyd",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "ericdboyd",
        "Biography": "Eric D. Boyd is the Founder and CEO of responsiveX, a Windows Azure MVP, and a regular speaker at national conferences, regional code camps and local user groups. He is so passionate about apps and cloud services that he founded responsiveX (www.responsiveX.com), a management and technology consultancy that helps customers create great web, mobile and client experiences, and these apps are often powered by cloud services. Eric launched his technology career almost two decades ago with a web development startup and has served in multiple roles since including developer, consultant, technology executive and business owner. You can find Eric blogging at http://www.EricDBoyd.com and on Twitter at http://twitter.com/EricDBoyd.  ",
        "WebSite": "http://www.EricDBoyd.com",
        "Company": "responsiveX",
        "Title": "Founder & CEO",
        "Twitter": "EricDBoyd",
        "Facebook": "EricDBoyd",
        "GooglePlus": "EricDBoyd",
        "LinkedIn": "EricDBoyd",
        "GitHub": "EricDBoyd",
        "LastUpdated": "2014-04-15T04:50:24.767"
    },
    {
        "FirstName": "Eric",
        "LastName": "Frost",
        "HeadShot": "/cloud/profilephotos/Eric-Frost-380a98f4-8e9a-42fe-be2a-b53baed7d8b0-635374063674699326.gif",
        "UserName": "ericwfrost",
        "Biography": "Eric Frost is a 20 year veteran programmer, author, and educator who as worked with many different facets of technology ranging from IT and system administrator, desktop and web programming, and consulting and teaching. Eric Frost has been published in MSDN Magazine, ASP Today, and has been publishing newsletters from his own mapping technology e-zine, MP2K Magazine for over a decade. This is Eric's third visit to That Conference and he is looking forward to making connections and filling under-utilized gray matter with ever great stuff!",
        "WebSite": "http://www.MapForums.com",
        "Company": "REX Geo Consulting",
        "Title": "Principal",
        "Twitter": "ericwfrost",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-06-03T15:32:47.47"
    },
    {
        "FirstName": "Eryn",
        "LastName": "O'Neil",
        "HeadShot": "/cloud/profilephotos/Eryn-O'Neil-c3e27bf9-c47e-4bd2-9753-dedf2e6c8dd1-635349904108625384.jpg",
        "UserName": "eryn",
        "Biography": "Eryn O’Neil is a web developer and technical lead at Clockwork Active Media in Minneapolis, MN. There she has worked on everything from e-commerce to online promotions to building a professional-grade CMS. Her philosophy is to build software by placing humans first: both the people who will use it and the developers who will build it alongside you (and maintain it afterwards). Based in Minneapolis, MN, Eryn spends most of her free time swing and blues dancing, rock climbing, and wishing it wasn't snowing.",
        "WebSite": "twitter.com/eryno",
        "Company": "Clockwork",
        "Title": "Software Engineer, Tech Lead",
        "Twitter": "@eryno",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-06T16:26:50.863"
    },
    {
        "FirstName": "Evan",
        "LastName": "Carothers",
        "HeadShot": "/cloud/profilephotos/Evan-Carothers-b049a59c-ba0a-4997-bc8e-03a75953c6b0.png",
        "UserName": "ecarot",
        "Biography": "Experienced startup-focused web/software developer, designer, and architect who works comfortably across the entire tech stack, from backend servers all the way to the front-facing presentation layer,. Evan has built and managed multiple high-volume production applications and platforms to run reliably and at scale.",
        "WebSite": "www.docalytics.com",
        "Company": "Docalytics",
        "Title": "CEO",
        "Twitter": "docalytics",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-15T05:36:27.283"
    },
    {
        "FirstName": "Gary",
        "LastName": "Kramlich",
        "HeadShot": "/cloud/profilephotos/Gary-Kramlich-9b1ab1d4-cf69-4868-8e0e-aa8420b7eea3-635422599732502166.JPG",
        "UserName": "CorvisaCloud",
        "Biography": "CorvisaCloud brings customer success to the heart of every business interaction through our cloud-based communications software platform and consulting services. We help businesses work smarter, save money, and make customers happier… and with our passion for service, we make getting there an enjoyable experience.",
        "WebSite": "http://www.corvisacloud.com/",
        "Company": "CorvisaCloud",
        "Title": "Software Engineer",
        "Twitter": "@corvisa",
        "Facebook": "https://www.facebook.com/CorvisaServices",
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/company/corvisa-llc",
        "GitHub": "https://github.com/Corvisa",
        "LastUpdated": "2014-07-29T19:47:05.403"
    },
    {
        "FirstName": "George",
        "LastName": "Heeres",
        "HeadShot": "/cloud/profilephotos/George-Heeres-43b7efc5-0967-4413-9887-74900b69a343.jpg",
        "UserName": "gheeres",
        "Biography": "I am a Senior Technology Consultant at the University of Wisconsin-Stevens Point with over 16 years of technology experience with an emphasis on web development. Throughout my career, I've worked as a server / network engineer and programmer simultaneously through concurrent employment, including starting my own ISP. Although starting a family has slowed me down a little, the passion remains and I make every effort to keep current with new technologies and best practices. \r\n\r\nMy philosophy on what it takes to be a developer is simple: If the code you wrote six months ago isn't garbage, then you're standing still. In our industry, if you're standing still... you're already moving backwards.",
        "WebSite": "http://blog.heeresonline.com/",
        "Company": "University of Wisconsin - Stevens Point",
        "Title": "Sr. Software Developer",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/+GeorgeHeeres",
        "LinkedIn": "https://www.linkedin.com/in/georgeheeres",
        "GitHub": "http://github.com/gheeres",
        "LastUpdated": "2014-04-15T04:12:49.897"
    },
    {
        "FirstName": "Greg",
        "LastName": "Levenhagen",
        "HeadShot": "/cloud/profilephotos/Greg-Levenhagen-21b89f60-0141-4033-acd4-5f909656bd7f.jpg",
        "UserName": "GregLevenhagen",
        "Biography": "Greg Levenhagen is a Microsoft MVP in Client Development and senior software engineer consultant with Skyline Technologies. He has a great passion for giving back to the community and teaching. A true enthusiast of computer science, with passions and interests including mobile, UX, architecture, parallel, testing, agile, 3D/games, cloud, languages and much more. Greg speaks at conferences like ThatConference, CodeMash, VSLive and DevLink. He is also a Microsoft Certified Trainer, board member of ThatConference, president of the Northeast WI Developers User Group, cofounder of the Northeast WI Agile User’s Group, INETA speaker, IEEE and ACM member and a PhD student.\r\n\r\nAlong with being a life-long geek, Greg enjoys golfing, football, woodworking, philosophy and stimulating conversation.",
        "WebSite": "http://gregLevenhagen.com",
        "Company": "Skyline Technologies, Inc.",
        "Title": "Senior Software Engineer",
        "Twitter": "@GregLevenhagen",
        "Facebook": null,
        "GooglePlus": "http://google.com/+greglevenhagen",
        "LinkedIn": "http://linkedin.com/in/greglevenhagen",
        "GitHub": "http://github.com/greglevenhagen",
        "LastUpdated": "2014-07-29T17:25:58.717"
    },
    {
        "FirstName": "Greg",
        "LastName": "Tarnoff",
        "HeadShot": "/cloud/profilephotos/Greg-Tarnoff-64a302ae-6173-40fa-86d1-f26e2256ed64-635357708329549498.jpg",
        "UserName": "gtarnoff",
        "Biography": "The desire to understand how things work is one of my most driving factors. It has pushed me to take things apart in order to figure out how to put them together. Of course this led to me trying to make them do things they weren’t supposed to do, otherwise known as hacking.\r\n\"I do that which I don’t know how to do, so that I may know how to do it.\" -Picasso\r\nWhen colleagues get stuck, I am often called to because they think I can solve the unsolvable. Reality is, I just don’t limit how see the problem and throw solutions at it until one sticks.\r\nI like to do things. And when the things I want to do aren’t happening, I tend to make them happen. This is why I founded MadHackerHaus. That’s how I got started in technology. It’s what pushes me today.",
        "WebSite": "http://tarnoff.info",
        "Company": "Recurly",
        "Title": "Front End Engineer",
        "Twitter": "@gregtarnoff",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/gregorytarnoff/",
        "GitHub": "https://github.com/gtarnoff",
        "LastUpdated": "2014-05-15T17:15:51.783"
    },
    {
        "FirstName": "gus",
        "LastName": "emery",
        "HeadShot": "/cloud/profilephotos/gus-emery-0d32a063-59b1-453d-a822-66b5bc496038.jpg",
        "UserName": "GusEmery",
        "Biography": "Gus Emery is a Principal with Kosmik Innovations, a Microsoft Partner in Minnesota. Gus also is a Co-Host of  #CodeCast a biweekly development PodCast striving to distribute development knowledge to the masses. Gus has spent the last 20 years architecting and implementing highly-scalable ASP.Net applications and distributed n-tiered applications across a broad array of industries in the Twin Cities. Gus has been working with Visual Basic since v3.0 and C# .Net since inception, and loves to seek out new and exciting technologies that facilitate productivity improvements and serve his customers’ technological needs!",
        "WebSite": "http://www.kosmikinnovations.com",
        "Company": "Kosmik Innovations",
        "Title": "Principal",
        "Twitter": "@n_f_e",
        "Facebook": null,
        "GooglePlus": "+Gus",
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-08T16:30:26.227"
    },
    {
        "FirstName": "Guy",
        "LastName": "Starbuck",
        "HeadShot": "/cloud/profilephotos/Guy-Starbuck-304e3838-2f3b-40e0-b8cc-1fb5487dd7c2.jpg",
        "UserName": "GuyStarbuck",
        "Biography": "Guy, a Software Development Manager and Architect with Yahara Software in Madison, WI, has been designing and developing business software for more than fifteen years. In recent years he has embraced Agile methodologies, and he is always striving to improve his projects with technology, communications, and operational efficiency. Guy lives in Waunakee, Wisconsin with his wife and two kids. He enjoys the outdoors, learning, and spending time with his family.",
        "WebSite": "http://www.yaharasoftware.com",
        "Company": "Yahara Software",
        "Title": "Software Development Manager and Architect",
        "Twitter": "@guysethstarbuck",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-20T15:23:12.163"
    },
    {
        "FirstName": "Ian",
        "LastName": "Muir",
        "HeadShot": "/cloud/profilephotos/Ian-Muir-76b50881-99e5-4fe6-bafc-85847e65586e-635393248937299920.jpg",
        "UserName": "woogychuck",
        "Biography": "Ian is a web developer and community organizer from Manchester, NH. He has over 10 years of experience developing online applications with a wide variety of platforms. Currently, he's building full-stack JS apps using AngularJS and NodeJS.",
        "WebSite": "http://meltwater.com",
        "Company": "Meltwater Group",
        "Title": "Senior Application Engineer",
        "Twitter": "Woogychuck",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-06-25T20:28:30.523"
    },
    {
        "FirstName": "Jacob",
        "LastName": "Gable",
        "HeadShot": "/cloud/profilephotos/Jacob-Gable-970a1901-2ee9-4fdc-973b-5ce98c6aaa32-635349870234221208.jpg",
        "UserName": "jgable",
        "Biography": "Professional Software Developer at @SproutSocial.  Core team member for @TryGhost.  Amateur Philosopher.  Maker of things.",
        "WebSite": "http://jacobgable.com",
        "Company": "Sprout Social",
        "Title": "Senior Software Engineer",
        "Twitter": "jacob4u2",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/jgable",
        "LastUpdated": "2014-05-06T15:30:23.423"
    },
    {
        "FirstName": "Jaim",
        "LastName": "Zuber",
        "HeadShot": "/cloud/profilephotos/Jaim-Zuber-240d7150-84a4-4de2-bacd-78ce79dff39d-635349737895241987.JPG",
        "UserName": "jzuber",
        "Biography": "\r\nJaim is an independent consultant specializing in mobile and iOS development. Jaim spent over a decade writing client and embedded software in C & C++ before doing time in the Enterprise world. When mobile hit the scene he found his way back to his roots. He likes BBQ, biking and making noise with his modest array of instruments… sometimes in public.\r\n\r\nYou can find him online at http://sharpfivesoftware.com/blog/ and @jaimzuber. He’s also part of the iPhreaks podcast where he talks iOS every week with some of the best in the industry http://iphreaksshow.com/",
        "WebSite": "http://www.sharpfivesoftware.com/blog",
        "Company": "Sharp Five Software",
        "Title": "President",
        "Twitter": "jaimzuber",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-06T11:49:49.523"
    },
    {
        "FirstName": "Janie",
        "LastName": "Clayton-Hasz",
        "HeadShot": "/cloud/profilephotos/Janie-Clayton-Hasz-558a9589-b7bc-4351-8c87-32e632e46780-635386549493034825.png",
        "UserName": "RedQueenCoder",
        "Biography": "I am an independent iOS developer and author from Madison, WI. I specialize in graphics and audio programming. I am a recovering Journalism major whose interests are anime, video/audio editing and production, and pugs. Lots and lots of pugs.",
        "WebSite": "http://redqueencoder.com",
        "Company": "Third Impact Software",
        "Title": "Queen",
        "Twitter": "@redqueencoder",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/RedQueenCoder",
        "LastUpdated": "2014-07-17T02:20:16.717"
    },
    {
        "FirstName": "Jason",
        "LastName": "Follas",
        "HeadShot": "/cloud/profilephotos/Jason-Follas-07c33dd5-c73e-43a8-8264-c577d48d723f.jpg",
        "UserName": "jfollas",
        "Biography": "Jason Follas has spent the better part of the past twenty years successfully delivering software for clients in the manufacturing, engineering, and financial services sectors. He is a frequent speaker at conferences and user groups, and loves the opportunity to teach as well as to learn from others. His career has been centered around the use of Microsoft technologies, from ASP.NET and SQL Server to writing Windows Store and Windows Phone applications. Most recently, he has focused on writing web client apps using HTML5 and JavaScript.\r\n\r\nJason was previously a Microsoft MVP for SQL, and is currently a Microsoft MVP for Visual C#. When not working or speaking, you can find him writing a number of casual games currently in the Windows Store, fishing for catfish in the local river, or riding his motorcycle across the flattest part of Ohio.",
        "WebSite": "http://jasonfollas.com",
        "Company": "Falafel Software",
        "Title": "Sr. Software Architect",
        "Twitter": "jfollas",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/jfollas",
        "GitHub": "https://github.com/jfollas",
        "LastUpdated": "2014-06-14T15:37:05.897"
    },
    {
        "FirstName": "Jason",
        "LastName": "Bock",
        "HeadShot": "/cloud/profilephotos/Jason-Bock-3da66fd1-af67-4617-9218-3b48fcbea840-635349786056753975.png",
        "UserName": "JasonBock",
        "Biography": "\r\n\r\n\r\nJason Bock is a Practice Lead for Magenic (http://www.magenic.com) and a Microsoft MVP (C#). He has worked on a number of business applications using a diverse set of substrates and languages such as .NET and JavaScript. He is the author or co-author of a number of technical books, including \"Metaprogramming in .NET\", \"Applied .NET Attributes\", and \"CIL Programming: Under the Hood of .NET\", and he has written articles on software development issues and has presented at conferences and user groups. He is a leader of the Twin Cities Code Camp (http://www.twincitiescodecamp.com). Jason holds a Master's degree in Electrical Engineering from Marquette University. Visit his web site at http://www.jasonbock.net.\r\n",
        "WebSite": "jasonbock.net",
        "Company": "Magenic",
        "Title": "Practice Lead",
        "Twitter": "@jasonbock",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-06T13:10:05.677"
    },
    {
        "FirstName": "Jason",
        "LastName": "Dobbs",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "mkedobbs",
        "Biography": "Jason is a Principal Business Consultant at SafeNet Consulting in Milwaukee, WI.  With over 15 years of IT experience across a number of industries and technologies under his belt, Jason has moved into a role where he can help solve problems across a wide variety of SafeNet's clients.  \r\n\r\nOne of Jason's passions has been working with children to get them excited about technology.  He works with multiple youth groups, teaching them robotics through Lego Mindstorms, as well as teaching them how to write software programs for Mac and PC.",
        "WebSite": "http://www.safenetconsulting.com/",
        "Company": "SafeNet Consulting",
        "Title": "Director of Client Relations",
        "Twitter": "mkedobbs",
        "Facebook": "https://www.facebook.com/jdobbs",
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/mkedobbs",
        "GitHub": null,
        "LastUpdated": "2014-05-14T18:55:50.85"
    },
    {
        "FirstName": "Jason",
        "LastName": "Young",
        "HeadShot": "/cloud/profilephotos/Jason-Young-ec78a4de-11d0-4246-833f-70e4661e958e.jpg",
        "UserName": "ytechie",
        "Biography": "Jason Young is a Senior Program Manager & Evangelist with Microsoft. His focus is working with commercial ISVs on technical projects built on Azure, Windows 8, and Windows Phone 8.  His development focus areas are C#/.NET, JavaScript, and everything in between. Recently, he started the MS Dev Show podcast. http://msdevshow.com",
        "WebSite": "http://www.ytechie.com",
        "Company": "Microsoft",
        "Title": "Sr. Program Manager",
        "Twitter": "ytechie",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/ytechie",
        "LastUpdated": "2014-05-18T00:11:47.49"
    },
    {
        "FirstName": "Javier",
        "LastName": "Lozano",
        "HeadShot": "/cloud/profilephotos/Javier-Lozano-6e49bbdc-76f7-471d-ab2b-4ebb3184a07e-635403537305601402.png",
        "UserName": "jglozano",
        "Biography": "Javier is an ASP.NET Insider, Windows Azure Insider, and ASP.NET MVP. His specializations are in ASP.NET, Windows Azure, system design, and developer mentoring. He has helped co-found the Iowa .NET Users Group (IADNUG), Iowa Code Camp (ICC), dotnetConf, and aspConf virtual conferences. He’s is an avid supporter of the community and likes to give back by speaking at user groups, local/regional/national .NET events. In his spare time, Javier loves spending time with his family and enjoys writing about himself in the third person.",
        "WebSite": "http://lozanotek.com",
        "Company": "lozanotek",
        "Title": "Principal",
        "Twitter": "jglozano",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/lozanotek",
        "LastUpdated": "2014-07-07T18:15:50.8"
    },
    {
        "FirstName": "JC",
        "LastName": "Grubbs",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "thegrubbsian",
        "Biography": "JC has been designing and writing software for over 15 years.  He's worked in tiny consulting shops up to large multi-national conglomerates.  Today he leads the team at DevMynd, an Ember and Ruby-on-Rails consulting firm in Chicago.  He is passionate about delivering high quality solutions to customers and doing it with a team that loves what they do and the people they work with.",
        "WebSite": "http://www.devmynd.com",
        "Company": "DevMynd",
        "Title": "CEO, Practice Lead",
        "Twitter": "thegrubbsian",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/jcgrubbs",
        "GitHub": "https://github.com/thegrubbsian",
        "LastUpdated": "2014-04-14T14:02:13.057"
    },
    {
        "FirstName": "Jeff",
        "LastName": "Key",
        "HeadShot": "/cloud/profilephotos/Jeff-Key-64e00d5b-76e1-47be-a774-b7d93cb94517-635416586631514145.jpg",
        "UserName": "jeffreykey",
        "Biography": "Jeff has a diverse background in software development with a proven track record of execution and delivery with 20 years in the industry. A Charter Five employee, Jeff has been with InRule since its founding in 2002. Jeff has held many roles at InRule, including developer, architect, and technical product manager. This diverse experience is the foundation for Jeff’s leadership of a team that produces world-class software.\r\n\r\nAs Senior Vice President of Engineering, Jeff’s mantra is continual improvement, from product to people to process. He introduced the Scrum development methodology to InRule, which has improved product quality and increased the frequency of product releases to the marketplace. Under Jeff’s leadership, technical debt is continually reduced to allow increasing investments in new capabilities.\r\n\r\nPrior to InRule, Jeff was one of the first architects with a cutting-edge payroll startup, designing the stateless multi-tier architecture needed to scale a quickly-growing business. Jeff has also worked as a consultant, helping clients create scalable and maintainable enterprise systems – some of which are still in use, over a decade after implementation.\r\n\r\nIn his free time, Jeff enjoys traveling, urbanism and trying to find time to play hockey.",
        "WebSite": "http://www.inrule.com",
        "Company": "InRule Technology, Inc.",
        "Title": "SVP Engineering",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-22T20:44:31.16"
    },
    {
        "FirstName": "Jeff",
        "LastName": "Weber",
        "HeadShot": "/cloud/profilephotos/Jeff-Weber-c92c9f79-b4ea-4045-bef6-aaf270e4d366-635349698638620155.jpg",
        "UserName": "JeffWeber",
        "Biography": "As my day job, I've been a software engineer for 13 or so years working mostly with Microsoft technologies.  In my spare time, I’ve spent the last 2 years working with Unity3D and last 8-ish years as an independent game developer.  My mobile game, Krashlander, has seen success on both the Windows Phone and iOS and my games Diver and Diver 2 were both popular web games.\r\n\r\n\r\n",
        "WebSite": "http://www.skylinetechnologies.com",
        "Company": "Skyline Technologies",
        "Title": "Senior Software Engineer",
        "Twitter": "@jeffweber",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-06T10:44:58.03"
    },
    {
        "FirstName": "Jeff",
        "LastName": "Blankenburg",
        "HeadShot": "/cloud/profilephotos/Jeff-Blankenburg-dcb1ab7e-80a6-43de-b607-74caebc554bb.jpg",
        "UserName": "jeffblankenburg",
        "Biography": "When I'm not preparing to speak at That Conference, I build stuff for mobile devices.",
        "WebSite": "http://jeffblankenburg.com",
        "Company": "Microsoft",
        "Title": "Senior Program Manager",
        "Twitter": "jeffblankenburg",
        "Facebook": "jeffblankenburg",
        "GooglePlus": null,
        "LinkedIn": "jeffblankenburg",
        "GitHub": "jeffblankenburg",
        "LastUpdated": "2014-03-31T15:04:30.76"
    },
    {
        "FirstName": "Jeffery",
        "LastName": "Bennett",
        "HeadShot": "/cloud/profilephotos/Jeffery Bennett  -Ashley Bennett Ewald-8d600504-7964-4a3e-bc94-1d46e7929495.jpg",
        "UserName": "meandmybadself",
        "Biography": "Jeffery is Technology Director @ Colle+McVoy, working with a group of amazing designers & developers bringing ideas to fruition. He's also a veteran of Silicon Valley, where he worked at Yahoo! Research Lab, EVB, and his own start-up before moving to the Midwest for a girl.\r\nTogether, with his wife Ashley, they live happily in Minnetonka, Minnesota along with their Hyundai Elantra, Clive Gary Bixby.\r\n",
        "WebSite": "http://meandmybadself.com",
        "Company": "Colle+McVoy",
        "Title": "Technology Director",
        "Twitter": "meandmybadself",
        "Facebook": "https://www.facebook.com/meandmybadself",
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/meandmybadself",
        "GitHub": "http://www.github.com/meandmybadself",
        "LastUpdated": "2014-05-21T14:59:37.777"
    },
    {
        "FirstName": "Jenna",
        "LastName": "Pederson",
        "HeadShot": "/cloud/profilephotos/Jenna-Pederson-f87a63f7-e5da-465c-927b-c2fd98d58f72-635383642223372797.jpg",
        "UserName": "jennapederson",
        "Biography": "Jenna Pederson is an independent software developer based out of Minneapolis. She has worn a variety of hats in the development of building desktop software, web, and mobile applications. With experience from the front-end all the way down to the physical servers, from development to business analysis and testing, Jenna is a passionate developer who enjoys getting other developers excited about the technology and how to solve business problems.",
        "WebSite": "http://www.612softwarefoundry.com",
        "Company": "612 Software Foundry",
        "Title": "Owner/Developer",
        "Twitter": "jennapederson",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://linkedin.com/in/jennapederson",
        "GitHub": "https://github.com/jennapederson",
        "LastUpdated": "2014-06-14T17:38:27.027"
    },
    {
        "FirstName": "Jeremiah",
        "LastName": "Billmann",
        "HeadShot": "/cloud/profilephotos/Jeremiah-Billmann-7e35bb01-ca8e-4a9b-bda8-7258023b0d75.jpg",
        "UserName": "jbillmann",
        "Biography": "Jeremiah Billmann is a Senior Software Engineer with Skyline Technologies.  Jeremiah has been in software consulting for much of the past decade taking on roles ranging from developer to software development manager.\r\n\r\nHe has a tremendous amount of passion for software design patterns, best practices and web applications. He feels most at home in the world of  HTML and JavaScript leveraging either ASP.NET MVC or Node.js.\r\n\r\nWhen he isn't coding, he has a conflict of interests as he holds a personal trainer certification and appreciates well-crafted beer.",
        "WebSite": "http://jbillmann.com",
        "Company": "Skyline Technologies",
        "Title": "Senior Software Engineer",
        "Twitter": "jbillmann",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-03-31T17:38:38.107"
    },
    {
        "FirstName": "Jeremy",
        "LastName": "Green",
        "HeadShot": "/cloud/profilephotos/Jeremy-Green-d4c6ce02-3f78-48fa-bd3a-caeed63d07aa.jpg",
        "UserName": "jagthedrummer",
        "Biography": "Jeremy is a full stack engineer who has been creating web apps for over 15 years. He's an organizer of the OkcRuby developer group and an active open source contributor. You might also find him drumming, shooting photos, or brewing.",
        "WebSite": "http://www.octolabs.com/",
        "Company": "OctoLabs",
        "Title": "Owner/Operator",
        "Twitter": "jagthedrummer",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/115184447854693193125/posts",
        "LinkedIn": "http://www.linkedin.com/in/jagthedrummer/",
        "GitHub": "https://github.com/jagthedrummer",
        "LastUpdated": "2014-05-06T03:35:49.737"
    },
    {
        "FirstName": "Jim",
        "LastName": "Wray",
        "HeadShot": "/cloud/profilephotos/Jim-Wray-a7ab8d72-47d7-419a-affd-cdd476a17ffb-635421580891688966.jpg",
        "UserName": "jwray",
        "Biography": "Jim views his dual role as VP of Product Management and Sales Operations as the perfect way to stay connected to the real concerns of the marketplace: What customers need, how they prefer to buy, and how they use InRule.\r\n\r\nAs VP of Sales Operations he manages the pre-sales team and is responsible for InRule Technology’s internal deployment of Microsoft Dynamics CRM to manage the sales process. A lover of data analysis, Jim also drives continual improvement at InRule Technology through analysis of key operational data. As VP of Product Management, Jim combines customer feedback and market data to drive product strategy and the product roadmap. On a day-to-day basis he works with the Engineering team as the Product Owner, where he connects services, support, engineering, sales, and marketing to deliver software and develop market strategies. Jim led the initiative that delivered InRule for Microsoft Dynamics CRM to the marketplace.\r\n\r\nA graduate of the Indiana University Kelley School of Business, Jim has more than 15 years in IT with experience in systems integration, account management, pre-sales, and product management. He is currently earning his MBA from DePaul University\r\n",
        "WebSite": "http://www.inrule.com",
        "Company": "InRule Technology",
        "Title": "Vice President, Product Management & Sales Operations",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/jim-wray/0/997/545",
        "GitHub": null,
        "LastUpdated": "2014-07-28T15:31:25.687"
    },
    {
        "FirstName": "Jim",
        "LastName": "Holmes",
        "HeadShot": "/cloud/profilephotos/Jim-Holmes-aaf198ca-e082-4a41-9d74-3b051f8b398e.jpg",
        "UserName": "aJimHolmes",
        "Biography": "VP of ALM and Testing at Falafel Software. Father.  Husband.  Geek. Veteran. Around 25 years IT experience. Co-author of “Windows Developer Power Tools.” Coffee Roaster.  MVP for C#.  Past President of  CodeMash Conference. Diabetic. Runner. Liked 5th grade so much he did it twice. One-time setter, middle blocker, and weakside hitter. Blogger (http://FrazzledDad.com). Big fan of naps.",
        "WebSite": "http://FrazzledDad.com",
        "Company": "Falafel Software",
        "Title": "VP of ALM and Testing",
        "Twitter": "aJimHolmes",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/jimholmes",
        "LastUpdated": "2014-04-14T18:39:46.91"
    },
    {
        "FirstName": "Jimmy",
        "LastName": "Bogard",
        "HeadShot": "/cloud/profilephotos/Jimmy-Bogard-ff2a0cb8-8a9a-4954-bead-34123e0bc238.jpg",
        "UserName": "JimmyBogard",
        "Biography": "Jimmy has delivered solutions ranging from shrink?wrapped products to enterprise e?commerce applications for Fortune 100 customers. Jimmy is a member of the ASPInsiders group, the C# Insiders group, and received the \"Microsoft Most Valuable Professional\" (MVP) award for ASP.NET in 2009-2013. Jimmy is also the creator and lead developer of the popular OSS library AutoMapper.",
        "WebSite": "http://jimmybogard.lostechies.com",
        "Company": "Headspring",
        "Title": "Technical Architect",
        "Twitter": "jbogard",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "jbogard",
        "LastUpdated": "2014-04-15T03:01:32.317"
    },
    {
        "FirstName": "Joe",
        "LastName": "Eames",
        "HeadShot": "/cloud/profilephotos/Joe-Eames-79d0db70-5e02-499a-ae2d-2bf60ebfe834.jpg",
        "UserName": "JoeEames",
        "Biography": "Joe began his love of programming on an Apple III in BASIC. Although his preferred language is JavaScript, he has worked professionally with just about every major Microsoft language. He is currently a consultant and full time author for Pluralsight. Joe has always had a strong interest in education, and has worked both full and part time as a technical teacher for over ten years. He is a frequent blogger and speaker, organizer of ng-conf, the AngularJS conference (www.ng-conf.org), and a panelist on the JavaScript Jabber podcast (http://javascriptjabber.com/)",
        "WebSite": "www.pluralsight.com",
        "Company": "Watach Web Solutions",
        "Title": "Freelance Author",
        "Twitter": "josepheames",
        "Facebook": null,
        "GooglePlus": "https://google.com/+JoeEames",
        "LinkedIn": "https://www.linkedin.com/in/joeeames/",
        "GitHub": "https://github.com/joeeames",
        "LastUpdated": "2014-04-11T17:31:27.357"
    },
    {
        "FirstName": "Joe",
        "LastName": "Brinkman",
        "HeadShot": "/cloud/profilephotos/Joe-Brinkman-98352b07-1f80-4ff2-b27d-f29f08cc48af.jpg",
        "UserName": "jbrinkman",
        "Biography": "Joe Brinkman started his programming career over 30 years ago while still in high.  Prior to co-founding DNN Corp, he served as CTO for DataSource Inc. where he led the effort for building an automation framework for working with Java J2EE.  As one of the original DotNetNuke core team members, Joe has spent the last 9 years helping to build and promote the #1 CMS for the Windows platform. Joe has co-authored multiple best-selling books for DNN and jQuery and is a frequent speaker at conferences and user groups.  When not working at the computer you can often find Joe in his woodshop buried in a pile of woodchips, working on his latest woodturning project.",
        "WebSite": "http://www.theaccidentalgeek.com",
        "Company": "DNN Corp.",
        "Title": "Technical Fellow, Co-Founder",
        "Twitter": "jbrinkman",
        "Facebook": "joe.brinkman",
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "jbrinkman",
        "LastUpdated": "2014-04-15T13:35:48.15"
    },
    {
        "FirstName": "Joe",
        "LastName": "Johnston",
        "HeadShot": "/cloud/profilephotos/Joe-Johnston-c13add44-c9ba-4db7-84a8-0ded7fa27b3c-635373144651349420.jpg",
        "UserName": "joejohnston",
        "Biography": "As Director of UX and Director of R&D for Universal Mind, Joe Johnston describes his role as “not a designer, not a developer, but in-between”. Over 14 years of digital experience with extensive knowledge of mobile and cross-platform technologies and frameworks. My skill set focuses on user experience and the creation of rapid prototypes to help clients quickly test proofs of concept and ideate new ideas. I’ve worked on a wide variety of projects, performing duties that include experience design, senior level development, and high level digital strategy. As an accomplished author and speaker, I look at myself as a subject matter expert on UX design and development principles. \r\n\r\nPrior to joining Universal Mind, Joe served as a UX Technologist at Knoware where he created the Flex Filter Explorer. He also worked as a Front End Technologist at Crowe Chizek where he created hundreds of small banking sites and one of the first Flex Catalogue applications. Joe’s contributions to Universal Mind have been fundamental as he was the UX Lead in creating the Digital Experience Framework that was used in creating the Jimi Hendrix Experience. He was also the idea creator and UX lead for iBrainstorm\r\n\r\nJoe lives in Grand Rapids and enjoys playing hockey with his son, watching his daughter dance and cheering on his wife at running events.",
        "WebSite": "https://medium.com/@merhl",
        "Company": "Universal Mind",
        "Title": "Director of UX // Director of Research and Design",
        "Twitter": "@merhl",
        "Facebook": "https://www.facebook.com/merhl",
        "GooglePlus": "https://plus.google.com/u/0/102341175112139978468/",
        "LinkedIn": "http://www.linkedin.com/in/merhl/",
        "GitHub": null,
        "LastUpdated": "2014-06-02T14:02:28.783"
    },
    {
        "FirstName": "John",
        "LastName": "Lindquist",
        "HeadShot": "/cloud/profilephotos/John-Lindquist-b7ee67fc-888a-45ad-96d0-dccf752379b1.jpg",
        "UserName": "johnlindquist",
        "Biography": "John is a Technology Evangelist at JetBrains (http://jetbrains.com) focusing on WebStorm.\r\n\r\nJohn has spent the majority of his career developing Rich Web Applications. Before joining JetBrains, he was a Technical Architect at Roundarch (http://roundarch.com) for 3 years leading large teams in building the latest and greatest in web apps for the Air Force, HBO, and Bloomberg. \r\n\r\nJohn focuses much of his free time on delivering high-quality video tutorials and offering them up for free on his youtube channel (http://youtube.com/johnlindquist).",
        "WebSite": "http://egghead.io",
        "Company": "JetBrains",
        "Title": "Developer",
        "Twitter": "@johnlindquist",
        "Facebook": null,
        "GooglePlus": "+johnlindquist",
        "LinkedIn": null,
        "GitHub": "https://github.com/johnlindquist",
        "LastUpdated": "2014-04-14T19:43:20.773"
    },
    {
        "FirstName": "John",
        "LastName": "Ptacek",
        "HeadShot": "/cloud/profilephotos/John-Ptacek-e075198b-c8b7-47b2-b8a9-15298bda3368.png",
        "UserName": "jptacek",
        "Biography": "John is a Skyline Technologies Senior Engineer where his primary focus is the design, development and solutions for customers on the web; sometimes with MVC, occasionally SharePoint, sometimes with duct tape and often on Azure. His experiences at Skyline have included a diverse set of technologies such as C#, Silverlight, XAML, SharePoint, web, JavaScript and has led him around the world. He live in Appleton, WI with his wife and a gaggle of children who are usually playing music. Follow him on twitter @jptacek or on his blog at http://www.jptacek.com. . ",
        "WebSite": "http://www.jptacek.com",
        "Company": "Skyline Technologies.com",
        "Title": "Chief Bacon Maker",
        "Twitter": "jptacek",
        "Facebook": null,
        "GooglePlus": "http://www.google.com/+johnptacek",
        "LinkedIn": "http://www.linkedin.com/in/johnptacek",
        "GitHub": "http://www.github.com/jptacek",
        "LastUpdated": "2014-07-29T21:33:34.407"
    },
    {
        "FirstName": "Jonathan",
        "LastName": "Mills",
        "HeadShot": "/cloud/profilephotos/Jonathan-Mills-88da9c7b-c2e6-4e94-bb67-244f677e2e05-635350703632945767.jpeg",
        "UserName": "jonathanfmills",
        "Biography": "With over 18 years of experience in Software Development and Management, Jon has led and built agile teams in a wide range of environments from small start-ups to large scale financial institutions. As a skilled mentor and international speaker, Jon has the opportunity to promote positive management practices and personal development skills to developers and managers in many different situations. \r\nAs a director at PaigeTechnologies, Jon has the opportunity to help hiring managers identify and attract the best possible candidates for their IT needs. Jon is also able to work with potential candidates to teach them the skills necessary in the ever changing technology field. \r\nJon is able to ask the technical and tough questions of our clients to help drive beyond the initial job description and find a candidate that will be the right fit for the environment. Jon is able to observe trends in the work force in Kansas City and adapt a training program to meet those needs. All this helps PaigeTechnologies build a better workforce for the companies of the region.",
        "WebSite": "http://jonathanfmills.com",
        "Company": "Paige Technologies",
        "Title": "Research and Development",
        "Twitter": "@jonathanfmills",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/jonathanfmills",
        "GitHub": "https://github.com/jonathanfmills",
        "LastUpdated": "2014-05-07T14:40:15.213"
    },
    {
        "FirstName": "Josh",
        "LastName": "Schultz",
        "HeadShot": "/cloud/profilephotos/Josh-Schultz-0ad6e545-2d46-416b-b56f-6f29e07cbeaa.jpg",
        "UserName": "joshjs",
        "Biography": "Josh is a senior consultant with Safenet, where he helps clients build and maintain high-quality software, through superior communication, analysis, design and delivery. His interests revolve around human factors in software development -- how effective communication is at the core of every step in the lifecycle of a software project, from requirements gathering to software architecture and design to support.\r\n\r\nJosh loves long walks on the beach, Myers-Briggs type indicators, and functional programming languages.",
        "WebSite": "http://veryfancy.net",
        "Company": "Safenet Consulting",
        "Title": "Senior Consultant",
        "Twitter": "veryfancy",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-06-30T15:02:00.727"
    },
    {
        "FirstName": "Josh",
        "LastName": "Gretz",
        "HeadShot": "/cloud/profilephotos/Josh-Gretz-93920d90-522f-4475-8b7b-3a01c787ea64.jpg",
        "UserName": "jgretz",
        "Biography": "As the Director of Engineering at TrueFit, Josh helps lead our talented team of engineers. Since 2003, Josh has brought his passion for solving problems with technology to TrueFit and its clients. He is a passionate enthusiast of cutting edge technologies and has some of the best business chops around. He understands the challenges in getting new tech products to market and works with our clients and our team to develop innovative ways of overcoming them.\r\n\r\nJosh graduated from Grove City College in 2004 with a B.S. in Computer Information Systems and a minor in business. You can still find him around campus, advising students and teaching a class on iOS development as an adjunct professor.\r\n\r\nGiving back to the community is a huge part of Josh’s life. In addition to contributing to open source, Josh has presented talks at conferences like CodeMash, ThatConference, StirTrek and PGH Tech Fest. Josh also makes time to volunteer as an adult leader of his church’s youth group. Whether its wrestling code into submission or helping to shape the bright minds of the future, Josh is committed to leaving the world a little bit better than he found it.\r\n\r\nJosh resides in Cranberry Township with his wife, three sons, and their labradoodle. When he’s not being beguiled by code, you can find him playing basketball, watching any sport known to man (seriously, he stays up late to watch Olympic Handball), or creating some tasty morsel in the kitchen. He is also known to wear shorts in December. You can follow the journey on his blog: CodeStuffWell.com",
        "WebSite": "http://www.codestuffwell.com",
        "Company": "TrueFit",
        "Title": "Director of Engineering",
        "Twitter": "joshgretz",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/jgretz",
        "LastUpdated": "2014-05-06T02:15:09.667"
    },
    {
        "FirstName": "Judah",
        "LastName": "Himango",
        "HeadShot": "/cloud/profilephotos/Judah-Himango-a44b68dc-f89b-49c7-8ed9-6d6f645c4f71-635349902626710095.jpg",
        "UserName": "JudahGabriel",
        "Biography": "I'm an independent software developer who likes building things. \r\nI've built stuff for big companies like 3M (3m.com/vas), tiny companies like youth homeless shelters (http://ysnmn.org). I've built stuff for my religious community (messianicradio.com, messianicchords.com, etzmitzvot.com). \r\nI'm a father of 2, husband, guitar player, and music lover.",
        "WebSite": "http://debuggerdotbreak.wordpress.com",
        "Company": "BitShuva",
        "Title": "Builder of Things",
        "Twitter": "@judahgabriel",
        "Facebook": "https://www.facebook.com/",
        "GooglePlus": "https://plus.google.com/+JudahHimango",
        "LinkedIn": "https://www.linkedin.com/pub/judah-himango/44/244/b74",
        "GitHub": "https://github.com/JudahGabriel",
        "LastUpdated": "2014-07-21T02:50:34.513"
    },
    {
        "FirstName": "Kassandra",
        "LastName": "Perch",
        "HeadShot": "/cloud/profilephotos/Kassandra-Perch-2b4caac8-f814-436f-a482-85a8fcec66c4.jpg",
        "UserName": "kperch",
        "Biography": "Dev, crafter, gamer from Austin, TX. Unrepentant JS Addict. Slings JS for RetailMeNot during the day, slings JS for fun and at Girl Develop It ATX students on nights/weekends. Huge fan of JS on hardware. Mozillian.\r\n\r\n",
        "WebSite": "http://eunknown.net",
        "Company": "RetailMeNot",
        "Title": "Engineering Evangelist",
        "Twitter": "@kassandra_perch",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/kperch",
        "LastUpdated": "2014-05-06T21:17:31.003"
    },
    {
        "FirstName": "Katelyn",
        "LastName": "Drew",
        "HeadShot": "/cloud/profilephotos/Katelyn-Drew-b4d13808-ab79-4fd6-90aa-ced02802e69b-635356102178539138.jpg",
        "UserName": "kkbanana",
        "Biography": "Hi, my name is Katelyn, and I'm 11 years old. When I held an Open Spaces session at That Conference in 2013, it was so much fun I wanted to come back & speak again. BTW both of my parents are nerds. Nerds rock.",
        "WebSite": "http://scratch.mit.edu/users/kkbananabread/",
        "Company": null,
        "Title": "Nerdy, Awesome Kid!!!",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-13T20:38:03.383"
    },
    {
        "FirstName": "Keith",
        "LastName": "Burnell",
        "HeadShot": "/cloud/profilephotos/Keith-Burnell-0e330dff-cee1-41e5-83e7-3a0e54a21e65.png",
        "UserName": "kburnell",
        "Biography": "Keith Burnell is a Microsoft Web MVP and Senior Software Engineer with Skyline Technologies.  He has been developing software for over 12 years specializing in large scale web site development and architecture as well as teaching and mentoring clients on the benefits of test-driven development.\r\n \r\nKeith is an active member of the .NET community who speaks regularly at local and regional user groups and developer events as well as at national and international conferences. He is an avid blogger and author who been featured multiple times in MSDN magazine and has authored courses for Pluralsight. \r\n\r\nKeith has two wonderful daughters and is married to his high school sweetheart who is still way out of his league! \r\n\r\nWhen not slinging code, Keith enjoys spending time with his family Keith enjoys martial arts, soccer, biking, and running.\r\n",
        "WebSite": "http://www.DotNetDevDude.com",
        "Company": "Skyline Technologies, Inc.",
        "Title": "Senior Software Engineer",
        "Twitter": "KeBurnell",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/pub/keith-burnell/5/387/580/",
        "GitHub": "https://github.com/kburnell",
        "LastUpdated": "2014-05-16T12:54:06.03"
    },
    {
        "FirstName": "Keith",
        "LastName": "Casey",
        "HeadShot": "/cloud/profilephotos/Keith-Casey-b9941f96-4632-4a9b-ae72-287b5eb631f0-635422590455356312.jpg",
        "UserName": "caseysoftware",
        "Biography": "Keith Casey currently serves as the Director of Product working to make APIs easier, more consistent, and help solve real world problems. Previously, as a developer evangelist at Twilio, he worked to get good technology into the hands of good people to do great things. In his spare time, he works to build and support the Austin technology community, blogs occasionally at CaseySoftware.com and is completely fascinated by monkeys. Keith is also the author of \"A Practical Approach to API Design\" from Leanpub.",
        "WebSite": "http://clarify.io",
        "Company": "Clarify",
        "Title": "Director of Product",
        "Twitter": "CaseySoftware",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/CaseySoftware",
        "LastUpdated": "2014-07-29T19:31:14.963"
    },
    {
        "FirstName": "Keith",
        "LastName": "Dahlby",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "dahlbyk",
        "Biography": "Keith Dahlby is a new father, web developer, Git enthusiast, language geek and four-time C# MVP from Cedar Rapids, IA. By day he sells motorcycle parts at J&P Cycles; by night he sometimes blogs with Los Techies. His open source efforts include posh-git, a Git environment for PowerShell; and up-for-grabs.net, a site featuring open source projects looking to mentor new contributors. He's also a core contributor to LibGit2Sharp, used by GitHub for Windows and Git for Visual Studio. Keith has spoken at community events around the Midwest and studied Human-Computer Interaction at Iowa State University. His talks have been described as “terrific!”, “very interactive!”, and “the best I’ve seen all hour!”.",
        "WebSite": "http://keith.lostechies.com",
        "Company": "MAG Retail Group",
        "Title": "Software Developer",
        "Twitter": "dahlbyk",
        "Facebook": "dahlbyk",
        "GooglePlus": "KeithDahlby",
        "LinkedIn": "dahlbyk",
        "GitHub": "dahlbyk",
        "LastUpdated": "2014-04-14T04:55:16.933"
    },
    {
        "FirstName": "Kelley",
        "LastName": "Muir",
        "HeadShot": "/cloud/profilephotos/Kelley-Muir-d860d075-5194-4915-9705-cdc3a609eacc.jpg",
        "UserName": "KelleyMuir",
        "Biography": "Hi. I’m Kelley. Nice to meet you….\r\nWith 10 years experience, my career path might look like a page from a maze book… but don’t let that fool you.  I’ve got a compass.\r\nMy first job resulted from pointing out the lack of validation of a paper database to a college professor. Since then, I have worked as a 3-D Animator, Project Manager, and Business Analyst.  What I liked about all of these roles were that they let me focus on details of an experience… Details that others often forget. Currently I am the User Experience Designer at Ektron.\r\nI am also very active in the local community; I’m a Co-Organizer of New England GiveCamp and BarCamp Manchester as well as the founder of Float Left Labs. My family consists of my developer husband and two geeklings, which puts us in the running for the geekiest family ever. ",
        "WebSite": "http://kelley.sundermedia.com",
        "Company": "Ektron",
        "Title": "UX Designer",
        "Twitter": "Manage_Kelley",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/kelleymuir",
        "GitHub": null,
        "LastUpdated": "2014-07-07T15:38:07.377"
    },
    {
        "FirstName": "Kenny",
        "LastName": "Young",
        "HeadShot": "/cloud/profilephotos/Kenny-Young-65520763-91e9-4ba4-a0c4-0e3d9ed72960-635416332685087840.jpg",
        "UserName": "kennyitthoughts",
        "Biography": "During his career, Kenny has successfully managed internationally based teams on multi-million dollar projects spanning years with fortune 100, 500 and 1000 companies. He has extensive experience building out high performance teams that deliver software and cloud services via methodologies such as Agile SCRUM and Domain Driven Design.\r\n \r\nKenny has worked with numerous areas of the Azure platform including PaaS, IaaS, Azure marketplace, HA, DR, etc. Under his leadership Skyline has acquired customers such as Trek Bikes, SC Johnson, Green Bay Packers, SoftwareOne, US Venture, Dorner Conveyor Systems, Appleton Group, etc. Most recently he led Skyline to winning Microsoft Central Region Azure Partner of the Year. He is also one of 20 persons globally on the Azure Partner Advisory Committee, consulting with Microsoft on their strategic direction for Azure.\r\n",
        "WebSite": "http://azurebytrial.com",
        "Company": "Skyline Technologies",
        "Title": "Director, Cloud Computing & Development",
        "Twitter": "@kennyitthoughts",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/kennydyoung/",
        "GitHub": null,
        "LastUpdated": "2014-07-23T13:41:47.723"
    },
    {
        "FirstName": "Kevin",
        "LastName": "McMahon",
        "HeadShot": "/cloud/profilephotos/Kevin-McMahon-1eb54878-f875-44c2-ab90-08fb39ae8a0c.jpg",
        "UserName": "kevinmcmahon",
        "Biography": "Kevin McMahon is a mobile developer for Redpoint Technologies based in Chicago. When he is not making apps, you can usually find Kevin trying to make putts or a mean puttanesca sauce. He blogs at http://www.kevfoo.com, maintains a wiki of useful mobile links at http://www.AppDevWiki.com and can be found on Twitter at @klmcmahon.",
        "WebSite": "http://about.me/kevinmcmahon",
        "Company": "Redpoint Technologies",
        "Title": "Senior Software Architect",
        "Twitter": "klmcmahon",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/+KevinMcMahon",
        "LinkedIn": null,
        "GitHub": "http://www.github.com/kevinmcmahon",
        "LastUpdated": "2014-04-15T03:46:27.197"
    },
    {
        "FirstName": "Kevin",
        "LastName": "Hakanson",
        "HeadShot": "/cloud/profilephotos/Kevin-Hakanson-4b199c6b-a758-402f-ab35-4451752a20b6-635349969746525162.jpg",
        "UserName": "hakanson",
        "Biography": "Kevin Hakanson (@hakanson) is an application architect for Thomson Reuters where he is focused on highly scalable web applications, especially the JavaScript and security aspects. His background includes both .NET and Java, but he is most nostalgic about Lotus Notes. He has been developing professionally since 1994 and holds a Master’s degree in Software Engineering. When not staring at a computer screen, he is probably staring at another screen, either watching TV or playing video games with his family.",
        "WebSite": "http://about.me/kevin.hakanson",
        "Company": "Thomson Reuters",
        "Title": "Sr. Software Architect",
        "Twitter": "hakanson",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/+KevinHakanson",
        "LinkedIn": "https://www.linkedin.com/in/kevinhakanson",
        "GitHub": "https://github.com/hakanson",
        "LastUpdated": "2014-05-06T18:16:14.653"
    },
    {
        "FirstName": "Lance",
        "LastName": "Larsen",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "lancelarsen",
        "Biography": "President of MADdotNET - Madison Wisconsin .NET User Community - www.MADdotNET.com\r\n.NET Technology Architect, who channels his passion for development into presentations and blogging, as you never learn something as well as when you plan on teaching it to others.\r\nOne of the proud organizers for That Conference - bringing you the best conference in the Mid-West and beyond!",
        "WebSite": "http://www.lancelarsen.com",
        "Company": "A.I. Labs",
        "Title": "MADdotNET President",
        "Twitter": "lancelarsen",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-14T17:55:46.663"
    },
    {
        "FirstName": "Lauren",
        "LastName": "Amundson",
        "HeadShot": "/cloud/profilephotos/Lauren-Amundson-b8307b39-2a78-4d44-b052-38e2c8333c08-635421632340635043.jpg",
        "UserName": "laurenamundson",
        "Biography": "Lauren is Director, Development at SAVO Group, a mid-sized B2B web company in Chicago that specializes in enabling sales people to sell smarter.  She is passionate about writing beautiful code and inspiring her team to do the same.  She spends most of her coding time using C# and JavaScript.",
        "WebSite": "http://laurenamundson.com",
        "Company": "SAVO Group",
        "Title": "Director, Development",
        "Twitter": "laurenamundson",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-28T16:54:38.58"
    },
    {
        "FirstName": "Leon",
        "LastName": "Gersing",
        "HeadShot": "/cloud/profilephotos/Leon-Gersing-42582fb1-df39-4626-ba90-5f1575bd0dfa.png",
        "UserName": "rubybuddha",
        "Biography": "i tend binary zen gardens",
        "WebSite": "leongersing.com",
        "Company": "GitHub",
        "Title": "Developer",
        "Twitter": "rubybuddha",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "leongersing",
        "LastUpdated": "2014-04-10T21:26:55.057"
    },
    {
        "FirstName": "Lori",
        "LastName": "Lalonde",
        "HeadShot": "/cloud/profilephotos/Lori-Lalonde-c0213f42-b7f7-46b9-8e94-a6c184f34900.jpg",
        "UserName": "loriblalonde",
        "Biography": "Lori Lalonde is an Apress author, consultant, blogger, technical presenter, Windows Phone developer and a Microsoft MVP. She began her career in software in 1997 and hasn't looked back since. Her experience spans numerous industries and a variety of technologies, with the past 10 years focused on the Microsoft .NET platform. Lori is actively involved in the local community, serves as the President of Canada's Technology Triangle .NET User Group, and participates in local Women in Technology groups. Whether mentoring junior colleagues or writing about her experiences in the IT industry on her blog, she is always happy to share her knowledge with the greater community.",
        "WebSite": "http://www.geekswithblogs.net/lorilalonde",
        "Company": "ObjectSharp Consulting",
        "Title": "Associate Consultant",
        "Twitter": "@loriblalonde",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://ca.linkedin.com/in/lorilalonde",
        "GitHub": null,
        "LastUpdated": "2014-05-05T22:34:30.043"
    },
    {
        "FirstName": "Mark",
        "LastName": "Greenway",
        "HeadShot": "/cloud/profilephotos/Mark-Greenway-83822aec-265a-4174-9425-6a6eb14e1603.jpg",
        "UserName": "MarkKGreenway",
        "Biography": "A web developer since the mid ’90s and a lone dev since the turn of the millennia, Mark has a unique perspective on the problems of programming. From developing terrible hacky  code in his early days, to independently synthesizing many common design patterns in his progression in a vacuum. Then came a new enlightenment and a realization of the community and its resources. This understanding of the pain of doing things the wrong way, leads to a fresh perspective. A smart sense of humour and some training from professional speakers make sure that any talk will be both interesting and informative.",
        "WebSite": "htttp://www.markgreenway.net",
        "Company": "LIG Marine Managers",
        "Title": "CIO",
        "Twitter": "MarkKGreenway",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "MarkKGreenway",
        "LastUpdated": "2014-04-10T18:25:05.12"
    },
    {
        "FirstName": "Matt",
        "LastName": "Netkow",
        "HeadShot": "/cloud/profilephotos/Matt-Netkow-5fc9bedd-7cb8-491b-b5a2-ccb5e21dea13.jpg",
        "UserName": "dotNetkow",
        "Biography": "Matt is a passionate polyglot software developer from Chicago.  By day, he works for The SAVO Group (Sales Enablement & Productivity SaaS) on the Consulting Services team, delivering custom integrations using primarily the .NET stack.  By night, he works on PhoneGap mobile apps, including his most recent success Fitwatchr, a Top 5 iOS Health & Fitness app for Fitbit and Weight Watchers members.",
        "WebSite": "http://www.netkow.com",
        "Company": "SAVO Group",
        "Title": "Senior Developer",
        "Twitter": "dotNetkow",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://www.github.com/dotNetkow",
        "LastUpdated": "2014-05-08T12:10:12.45"
    },
    {
        "FirstName": "Matt",
        "LastName": "Milner",
        "HeadShot": "/cloud/profilephotos/Matt-Milner-69fb1467-c0ad-451b-85c7-511a4f72c466-635350672237080568.jpg",
        "UserName": "mattmilner",
        "Biography": "Matt Milner is an independent consultant and trainer who, from the early days of the internet, was building websites and databases to help organizations manage their business. Over the years he has built numerous systems using web technologies such as ASP.NET and integration technologies including BizTalk Server, WCF, WF, and yes, even MSMQ. Currently Matt splits his time between building applications and teaching other developers about the latest Microsoft technologies including Windows Azure, Windows 8 and Web API. In addition to creating training videos for Pluralsight Matt contributes to the community by speaking at code camps, user groups, and international conferences including Tech Ed, Dev Days, and DevWeek.",
        "WebSite": "http://mattmilner.com/",
        "Company": "M3 Technology Partners Inc.",
        "Title": "President",
        "Twitter": "milnertweet",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/matt.milner",
        "GitHub": null,
        "LastUpdated": "2014-05-07T13:48:03.573"
    },
    {
        "FirstName": "Matthew",
        "LastName": "Renze",
        "HeadShot": "/cloud/profilephotos/Matthew-Renze-2fd13c3f-414a-4aab-8d05-d3ec2de28bfe-635353534777099629.jpg",
        "UserName": "renze1577",
        "Biography": "Matthew is a software consultant with over 14 years of professional experience building large-scale data-driven desktop, server, and web applications.  He is a graduate of Iowa State University with double degrees in Computer Science and Philosophy with a minor in Economics.  Matthew's current interests include data analytics, data visualization, and machine learning.  ",
        "WebSite": "http://www.matthewrenze.com/",
        "Company": "Renze Consulting",
        "Title": "Software Consultant",
        "Twitter": "@MatthewRenze",
        "Facebook": "https://www.facebook.com/matthew.renze",
        "GooglePlus": "https://plus.google.com/u/0/109447705328457330617/posts",
        "LinkedIn": "https://www.linkedin.com/pub/matthew-renze/4/98a/192",
        "GitHub": "https://github.com/matthewrenze",
        "LastUpdated": "2014-05-10T21:17:57.71"
    },
    {
        "FirstName": "Maulan",
        "LastName": "Byron",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "mbyron01",
        "Biography": "I am a technologist that have spent most of my career building and delivering mid size to large scale projects in the telecommunication and financial fields. My interests are in making things scale and perform better and finding solutions that make it easier to operationalize software products.\r\nTelecommunication companies have struggled to be more agile while delivering new products. Figuring out how these products scale within a short time frame has also been a challenge.  Developing model/approach show a pragmatic way of accomplishing such a task as been another area of success.\r\n\r\nSome of my recent successes have been in being a key contributor in a new delivery platform for Comcast where we have built and launched an entire platform to deliver content all over IP while leveraging the legacy QAM infrastructure. \r\n\r\n\r\n",
        "WebSite": "https://www.linkedin.com/in/maulanbyron",
        "Company": "Comcast",
        "Title": "Engineering Manager",
        "Twitter": "@maulanbyron",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/maulanbyron",
        "GitHub": "mbyron01",
        "LastUpdated": "2014-04-14T19:29:16.943"
    },
    {
        "FirstName": "Md",
        "LastName": "Khan",
        "HeadShot": "/cloud/profilephotos/Md-Khan-a6c0029c-8c82-4ebf-aca3-8c57725a27ab-635350693998290330.jpg",
        "UserName": "khan4019",
        "Biography": "Md khan is a curious JavaScript developer and a frequent speaker. He helps to organize monthly Chicago JavaScript meetups. His weekends are filled with the excitement of preparing talks, writing blogs for www.thatjsdude.com, making videos for https://www.youtube.com/user/khanLearning, or pulling out his hair to figure out how this new JavaScript library works. So, the only way, Md Khan gets enough sleep at night is to spend at least 6 hr per day in JavaScript. That could be by reading JavaScript Weekly or pushing code to github when his manager is not around. He is simply addicted to JavaScript.\r\n\r\nIf you are still interested to read his job title (you might be an auto insurance agent), Md is a senior web developer at Nielsen, Chicago, IL.",
        "WebSite": "http://www.thatjsdude.com/",
        "Company": "Nielsen",
        "Title": "Senior Web Developer",
        "Twitter": "mdkhan005",
        "Facebook": "https://www.facebook.com/JhankarMahbub",
        "GooglePlus": "https://plus.google.com/+KhanMd",
        "LinkedIn": "http://www.linkedin.com/in/mdkhan005",
        "GitHub": "https://github.com/khan4019",
        "LastUpdated": "2014-05-25T14:48:09.817"
    },
    {
        "FirstName": "Michael",
        "LastName": "Wheeler",
        "HeadShot": "/cloud/profilephotos/Michael-Wheeler-7d178591-7a54-4262-a11a-afdbfdfdff68.jpg",
        "UserName": "mcwheeler",
        "Biography": "Just your average software developer that loves to learn and thinks the best way to do that is to help others learn.",
        "WebSite": "http://www.solidconsultants.com",
        "Company": "SOLID Consultants, LLC.",
        "Title": "Grand Poobah",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-06-10T12:58:28.277"
    },
    {
        "FirstName": "Michael",
        "LastName": "Boeke",
        "HeadShot": "/cloud/profilephotos/Michael-Boeke-f9332c18-bd6a-4b23-9db6-594dcfb840c6-635357584814304892.jpg",
        "UserName": "mvboeke",
        "Biography": "Michael Boeke is a designer, product guy, and startup veteran, who currently designs and produces software at online payments company Braintree. He focuses on applying design thinking and modern technology to shake-up traditional (read: boring) industries.\r\n\r\nPrior to Braintree, Michael launched the first web-based CRM and accounting platforms for hedge funds at Backstop. He also designed the CarePages social support platform, which millions have used to follow and support hospitalized loved ones.\r\n\r\nMichael lives, works, and runs countless miles in the wonderful city of Chicago. He writes about product design and startup life on his blog, and presents on UX and online payments at conferences across the country.",
        "WebSite": "http://michaelboeke.com/",
        "Company": "Braintree",
        "Title": "Product Manager",
        "Twitter": "mvboeke",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/michaelboeke",
        "GitHub": "https://github.com/mvboeke",
        "LastUpdated": "2014-07-29T21:09:22.443"
    },
    {
        "FirstName": "Michael",
        "LastName": "Perry",
        "HeadShot": "/cloud/profilephotos/Michael-Perry-f97bad0a-8e4e-406b-8b8c-89c452eaed81.jpg",
        "UserName": "michaellperry",
        "Biography": "Software is math. Every class is a theorem. The compiler is the proof. And unit tests check our work.\r\nMichael has recorded Pluralsight courses on CQRS, XAML Patterns, and Cryptography, in addition to Provable Code. He maintains the spoon-bending Update Controls and Correspondence open-source libraries. And he helps his clients at Improving Enterprises benefit from the power of software mathematics. You can find out more at qedcode.com.\r\n",
        "WebSite": "http://qedcode.com",
        "Company": "Improving Enterprises",
        "Title": "Principal Consultant",
        "Twitter": "michaellperry",
        "Facebook": "michael.leo.perry",
        "GooglePlus": "mperry@mallardsoft.com",
        "LinkedIn": "michaellperry",
        "GitHub": "michaellperry",
        "LastUpdated": "2014-04-07T03:09:55.953"
    },
    {
        "FirstName": "Mike",
        "LastName": "Bluestein",
        "HeadShot": "/cloud/profilephotos/Mike-Bluestein-203188d1-e05b-4486-8fe8-3b18bc9df4f7.png",
        "UserName": "mikebluestein",
        "Biography": "Mike Bluestein is a developer evangelist at Xamarin and one of the first users of Xamarin.iOS. Mike has been using, writing and speaking about Xamarin for several years, and is the author of the book \"Learning MonoTouch\" published by Addison Wesley. A former Principal Software Engineer at Dassault Systèmes Solidworks Corporation, he has developed software professionally since the early 1990s. ",
        "WebSite": "http://mikebluestein.wordpress.com",
        "Company": "Xamarin",
        "Title": "Developer Evangelist",
        "Twitter": "@mikebluestein",
        "Facebook": "https://www.facebook.com/mike.bluestein",
        "GooglePlus": "https://google.com/+MikeBluestein",
        "LinkedIn": "https://www.linkedin.com/in/mikebluestein/",
        "GitHub": "https://github.com/mikebluestein",
        "LastUpdated": "2014-05-06T12:25:08.777"
    },
    {
        "FirstName": "Mike",
        "LastName": "Hodnick",
        "HeadShot": "/cloud/profilephotos/Mike-Hodnick-3e9e0e1e-308a-4758-b729-509acba668d7-635388153847452480.jpg",
        "UserName": "kindohm",
        "Biography": "Mike is an independent web developer from Chaska, MN and enjoys producing humanly organized sound with code. He's currently working to build a strong live-coded music community in the Twin Cities and to help bring the first Algorave to the United States. When not making sound with code, Mike does full-stack web development.",
        "WebSite": "http://kindohm.com",
        "Company": "Byte Flurry",
        "Title": "Independent Developer",
        "Twitter": "kindohm",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/michaelhodnick",
        "GitHub": "https://github.com/kindohm",
        "LastUpdated": "2014-07-08T17:22:21.82"
    },
    {
        "FirstName": "Mike",
        "LastName": "Ward",
        "HeadShot": "/cloud/profilephotos/Mike-Ward-5231cd98-cc19-472c-9a51-1b039739fba5-635349820224012225.jpg",
        "UserName": "MikeWard",
        "Biography": "I'm a programmer by accident. In college I studied Meteorology and thought I might be a weather forecaster. But after writing my first weather simulation (in Fortran on punch cards no less) my path changed. I started way back in the days of K&R C and mini-computers. From there it was personal computers and Windows and Medical Enterprise Software and now Web. It's been a great ride, and it just keeps getting better. ",
        "WebSite": "http://mike-ward.net",
        "Company": null,
        "Title": null,
        "Twitter": "@mikeward_aa",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/mike-ward",
        "LastUpdated": "2014-05-06T14:08:11.6"
    },
    {
        "FirstName": "Mike",
        "LastName": "Wood",
        "HeadShot": "/cloud/profilephotos/Mike-Wood-d743ba1f-71fa-46ee-88b4-7e79dedf2138-635349752488097894.jpg",
        "UserName": "mikewo",
        "Biography": "Mike Wood is a Technical Evangelist for Red Gate Software on the Cerebrata Team. He describes himself as a problem solving, outdoorsy, user group founding, dog-loving, blog writing, solution creating, event planning, married, technology speaking, father of one kind of guy. When he's not living up to that title he's an avid reader, (horrible) violinist and gamer. Michael is one of the Founding Directors of the Cincinnati .NET User Group as well as the founder of the Cincinnati Software Architecture Special Interest Group.  He is also a Microsoft MVP in Windows Azure. You can catch up with Mike on his blog at http://mvwood.com/blog and on twitter under the handle @mikewo.",
        "WebSite": "http://www.mvwood.com",
        "Company": "Red Gate",
        "Title": "Technical Evangelist",
        "Twitter": "mikewo",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/mikewo/",
        "GitHub": null,
        "LastUpdated": "2014-05-06T12:15:07.333"
    },
    {
        "FirstName": "Mike",
        "LastName": "McGee",
        "HeadShot": "/cloud/profilephotos/Clark-Sell-87f6b715-7368-4181-9b15-f7fcba53c7d9-635410455261246484.jpeg",
        "UserName": "michaelmcgee",
        "Biography": "Mike McGee is the co-founder of The Starter League, an in-person school in Chicago that teaches beginners how to build web applications. Before The Starter League, Mike's greatest claim to fame was that his High School mascot was a pretzel. He went to Northwestern for four years where he spent two years being a student and two years in student government - miraculously becoming Student Body President his senior year. In Spring 2011, Mike decided to turn down Obama for America (his first real job offer) to co-found The Starter League. Recently Mike was named to Crain's 40 Under 40 for 2013 (along with his co-founder, Neal Sales-Griffin). His latest \"dent in the universe\" project is Starter School, an immersive, full-time program that will take people from zero to entrepreneur in 9 months. ",
        "WebSite": "http://starterleague.com",
        "Company": "The Starter League",
        "Title": "Co-founder",
        "Twitter": "@michaelmcgee",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-14T23:11:08.787"
    },
    {
        "FirstName": "Mike",
        "LastName": "Rohde",
        "HeadShot": "/cloud/profilephotos/Mike-Rohde-f76d4535-b1b1-41bc-9683-e34d198da03c-635416846340418643.jpg",
        "UserName": "rohdesign",
        "Biography": "Designer. Author of The Sketchnote Handbook, The Sketchnote Workbook. Illustrator of REWORK, REMOTE, $100 Startup, Little Book of Talent & Idea to iPhone. Husband, father of 3. Coffee!",
        "WebSite": "http://rohdesign.com",
        "Company": "Rohdesign Studios",
        "Title": "Designer, Illustrator, Author",
        "Twitter": "rohdesign",
        "Facebook": "https://www.facebook.com/MikeRohde",
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/mikerohde/",
        "GitHub": null,
        "LastUpdated": "2014-07-23T03:57:32.55"
    },
    {
        "FirstName": "Mina",
        "LastName": "Markham",
        "HeadShot": "/cloud/profilephotos/Mina-Markham-f5ff8096-e4b4-4e09-8b7a-af64451fc3c8.jpg",
        "UserName": "minamarkham",
        "Biography": "Mina Markham is a Sass-lovin' UI developer/designer in Dallas, Texas and the founder of the Dallas chapter of Girl Develop It. As a developer at Parago, Mina specializes in building responsive websites and modular CSS architecture. When she's not crafting sites or teaching others, Mina is probably in her kitchen baking something chocolatey.  Mina has spoken at various events, including Front-End Design Conference, Front Porch and Github's Passion Projects.",
        "WebSite": "http://mina.is/here",
        "Company": "Parago",
        "Title": "Front-End Developer",
        "Twitter": "minamarkham",
        "Facebook": "minamarkham",
        "GooglePlus": "+MinaMarkham",
        "LinkedIn": "minamarkham",
        "GitHub": "minamarkham",
        "LastUpdated": "2014-04-14T07:53:18.693"
    },
    {
        "FirstName": "Nathan",
        "LastName": "Dotz",
        "HeadShot": "/cloud/profilephotos/Nathan-Dotz-ee77ae4e-6cc3-4b49-a48f-2a75fa6611a5.jpg",
        "UserName": "sleepynate",
        "Biography": "Nathan is a software engineer at Detroit Labs, where miracles are performed on mobile devices. He is a founding member of the All Hands Active Hackerspace, which has been working steadfastly to awesomify the brains of creators for over 4 years. He’s an open-source contributor, an open-education advocate, and a functional programming fanboy.\r\n",
        "WebSite": "http://www.sleepynate.com",
        "Company": "Detroit Labs",
        "Title": "Software Engineer",
        "Twitter": "nathandotz",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "http://github.com/sleepynate",
        "LastUpdated": "2014-04-14T13:51:57.473"
    },
    {
        "FirstName": "Nik",
        "LastName": "Molnar",
        "HeadShot": "/cloud/profilephotos/Nik-Molnar-581d0555-f443-4782-a0df-1ca706a535ab-635351555158674861.jpg",
        "UserName": "nikmd23",
        "Biography": "Nik Molnar is a New Yorker, Microsoft MVP, ASP & Azure Insider and co-founder of Glimpse, an open source diagnostics and debugging tool. Originally from Homestead Florida, Nik specializes in web development, web performance, web API's and community management. In his spare time, Nik can be found cooking up a storm in the kitchen, hanging with his wife, speaking at conferences, and working on other open source projects.",
        "WebSite": "http://nikcodes.com",
        "Company": "Red Gate",
        "Title": "Co-Founder of Glimpse",
        "Twitter": "nikmd23",
        "Facebook": null,
        "GooglePlus": "https://plus.google.com/nikmd23",
        "LinkedIn": null,
        "GitHub": "https://github.com/nikmd23",
        "LastUpdated": "2014-05-08T14:19:21.333"
    },
    {
        "FirstName": "Patrick",
        "LastName": "Seda",
        "HeadShot": "/cloud/profilephotos/Patrick-Seda-e684f8f7-ba83-4a06-b2ed-876cc2a716d6.jpg",
        "UserName": "pxtrick",
        "Biography": "Patrick is a Mobile Application Architect consultant and has created apps for all sizes of clients, including several Fortune 500 clients. Formerly a Professional Services Architect for Appcelerator, he is a Titanium fanboy who loves the capabilites enabling rapid and robust app development. Patrick is currently the Technical Lead at Propelics and is orchestrating enterprise app development.",
        "WebSite": "http://www.propelics.com",
        "Company": null,
        "Title": "Awesome",
        "Twitter": "pxtrick",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/patrickseda/",
        "GitHub": "patrickseda",
        "LastUpdated": "2014-04-15T04:08:32.267"
    },
    {
        "FirstName": "Paul",
        "LastName": "Drew",
        "HeadShot": "/cloud/profilephotos/Paul-Drew-8af79ae6-f6f3-413b-ac9f-c3084137fea0.jpg",
        "UserName": "SolarCurve",
        "Biography": "I am a life long technologist who started in the printing industry in the mid 90's on SGI Irix bridging the gap between agencies and printing operations to make things run smoother, quicker, and more reliable. Today, the medium has changed and over the last 19 years we've shifted from the printed word to the screen. Today's fancy word for this is DevOps and as the President and co-founder of DevOps Unlimited, my challenge is to help enterprises improve their operations through DevOps and the best practices of ITIL.",
        "WebSite": "http://www.devopsunlimited.com",
        "Company": "DevOps Unlimited",
        "Title": "President",
        "Twitter": "SolarCurve",
        "Facebook": "SolarCurve",
        "GooglePlus": "SolarCurve",
        "LinkedIn": "SolarCurve",
        "GitHub": "SolarCurve",
        "LastUpdated": "2014-03-31T15:34:49.817"
    },
    {
        "FirstName": "Paul",
        "LastName": "Shepard",
        "HeadShot": "/cloud/profilephotos/Paul-Shepard-f953ea38-5cde-4407-b642-e476ce2d74ca-635370560270512400.jpg",
        "UserName": "PaulShepard",
        "Biography": "Software engineer and father of 6 children, I am passionate about getting technology in the hands of kids. This year I enjoyed the awesome privilege of coaching a group of elementary aged kids with little to no experience coding or building robots to a Regional championship and an invitation to World Championships. I'm excited to share how agile dev practices empowered my team to go from lost to boss in a way that is turning heads in a robotics community which has long embraced a stricter waterfall approach. ",
        "WebSite": null,
        "Company": "Skyline Technologies",
        "Title": "Software Engineer",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-07-24T21:43:22.647"
    },
    {
        "FirstName": "Pete",
        "LastName": "Brown",
        "HeadShot": "/cloud/profilephotos/Pete-Brown-717bbc72-3a5a-405a-85db-714ef2d02fd3.jpg",
        "UserName": "Psychlist1972",
        "Biography": "XAML, gadget, and creative music apps guy at Microsoft. Creator of cool things in WPF and WinRT XAML, smeller of ozone, exploder of electrolytics, collector of synthesizers, and lover of all things 8 bit and retro, especially Commodore. Guy behind the WPF and creative music app demos at Build. Hangs around with people who find ways to get full operating systems on to postage stamp-sized computers. Sometimes known to hit his thumb with a hammer. Does not act his age.",
        "WebSite": "http://10rem.net",
        "Company": "Microsoft",
        "Title": "Geek",
        "Twitter": "@pete_brown",
        "Facebook": "http://facebook.com/pmbrown",
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-03-31T08:12:13.913"
    },
    {
        "FirstName": "Phil",
        "LastName": "Van Houten",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "pvanhouten",
        "Biography": "I'm a geek; always have been, always will.  As a kid, I used to write programs in basic on my family's Apple IIc:\r\n10 PRINT \"Butt\"\r\n20 GOTO 10\r\nHilarious.\r\n\r\nWhen I started my career, I had aspirations to be a network engineer, but was reluctantly forced into software development due to lack of work one summer during college--best thing that could have happened to me.  Since then, I've worked primarily in a consulting role on the Microsoft stack: classic ASP, .NET 1.1 - 4.5, MS SQL, and IIS.  I have dabbled in other areas like Ruby, Python, Node.js, and Java and like to think of myself as a flexible learner.\r\n\r\nI currently work at SA Ignite, a healthcare startup based in Chicago, as principal engineer of the web stack.  I'm the father of two wonderful kids and married to my beautiful high school sweetheart.  My son's recent addiction to Minecraft has gotten me interested in modding and has given us something where we can excitedly share our individual discoveries in the game.",
        "WebSite": "http://geekswithblogs.net/pvanhouten/",
        "Company": "SA Ignite",
        "Title": "Principal Engineer",
        "Twitter": "pvanhouten",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "philvanhouten",
        "GitHub": "pvanhouten",
        "LastUpdated": "2014-03-31T14:25:49.277"
    },
    {
        "FirstName": "Richard",
        "LastName": "Campbell",
        "HeadShot": "/cloud/profilephotos/Richard-Campbell-24cf3721-88a6-4175-97b8-eb42e2e03dc8.jpg",
        "UserName": "RCampbell",
        "Biography": "Richard Campbell has spent more than 30 years playing around with microcomputers. Along the way he's done virtually every job you can  imagine in the industry, from manufacturing to programming to consulting, training and writing. An impressive list of organizations, including Barnes&Noble.com, Dow Chemical, Johnson & Johnson Health Care Services, Reuters, Subaru/Isuzu and the U.S. Air Force, have benefited from Richard's consulting expertise. He’s one of the co-founders of Strangeloop Networks, building the AS1000 scaling appliance for accelerating web sites. Strangeloop was sold to Radware Networks in 2013. Today Richard is a Microsoft Regional Director, an ASP.NET MVP and a serial entrepreneur. Richard is a partner in PWOP Productions (www.pwop.com) that creates a number of popular podcasts. He's the co-host of .NET Rocks!, the Internet Audio Talkshow for .NET Developers (www.dotnetrocks.com) which publishes three times a week to over 150,000 listeners in more than 120 countries worldwide, as well as host of RunAs Radio (www.runasradio.com), the podcast for Microsoft IT Professionals. You can reach Richard on twitter @richcampbell.",
        "WebSite": "http://www.dotnetrocks.com",
        "Company": ".NET Rocks!",
        "Title": "Co-Host",
        "Twitter": "richcampbell",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-14T19:53:35.793"
    },
    {
        "FirstName": "rob",
        "LastName": "sullivan",
        "HeadShot": "/cloud/profilephotos/rob-sullivan-c9f8fb1b-27bc-44ee-be66-debd34b5f529-635357889716867049.png",
        "UserName": "datachomp",
        "Biography": "In the early 1900’s, the data world was overrun by architects and project managers. Needing to bring some relief to the industry, then President Taft appointed Rob as the first Data Magistrate. From humble beginnings, he rose to inspire hope and change amongst data stores of all types. He saved countless tuples during the Great Data Civil War of the 90’s and helped found the ORM-pathy group designed to help less fortunate data models get a second chance at production. He currently resides in Oklahoma City with his partner Postgresql and their pet Redis.",
        "WebSite": "http://datachomp.com",
        "Company": "datachomp enterprise software",
        "Title": "Senior Data Magistrate",
        "Twitter": "datachomp",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/datachomp",
        "LastUpdated": "2014-05-15T22:16:46.997"
    },
    {
        "FirstName": "Robert",
        "LastName": "Boedigheimer",
        "HeadShot": "/cloud/profilephotos/Robert-Boedigheimer-535010cf-9527-49d4-8a05-7419c7e24af7.jpg",
        "UserName": "boedie",
        "Biography": "Robert Boedigheimer works for Schwans Shared Services, LLC providing business solutions with web technologies and leads Robert Boedigheimer Consulting, LLC. Robert has been designing and developing web sites for the past 19 years including the early days of ASP and ASP.NET. He is a Pluralsight Author, an ASP.NET MVP, an author, and a 3rd degree black belt in Tae Kwon Do. Robert has spoken at industry conferences including VSLive, HDC, DevLink, DevTeach, Tulsa Tech Fest, DevWeek, DevReach, SDC, TechEd, DevConnections, AJAXWorld, and numerous national and international events.\r\n",
        "WebSite": "http://aspadvice.com/blogs/robertb",
        "Company": "The Schwan Food Company",
        "Title": null,
        "Twitter": "boedie",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-06T01:27:07.16"
    },
    {
        "FirstName": "Roger",
        "LastName": "Brogan",
        "HeadShot": "/cloud/profilephotos/Roger-Brogan-af235b3d-a8bd-4c0f-9da7-7bbec5b329b0-635350724250376304.jpg",
        "UserName": "RogerBrogan",
        "Biography": "Roger Brogan has been in the IT industry for over 14 years. In 1997, he founded CyberNet Solutions Inc.\r\nin order to pursue his career in IT consulting and training. He has many IT certifications including, A+, \r\nCertified Novell Administrator, Microsoft Certified Trainer, Microsoft Certified Solutions Developer .NET, \r\nCertified Java Programmer, Certified Java Instructor and a few others. For most of the past 12 years, \r\nhe has specialized in trainer computer programmers and computer administrators. He has taught \r\nclasses for many large companies including Dell, IBM, SUN, Discover, Blue Cross Blue Shield, Avaya, Ace \r\nHardware and many others. Teaching these courses have taken him over most of the United States and \r\na few international locations as well. He has taught classes in India, Israel and Ireland. He is currently \r\nspecializing in cloud, mobile, security and virtualization technologies. He currently resides in downtown \r\nChicago and still often travels for business. He specializes in ASP.NET and Azure cloud development and \r\nMicrosoft’s ASP.NET based servers and products such as SharePoint Services and SQL Server.",
        "WebSite": "http://www.cybernetsolutions.com",
        "Company": "CyberNet Solutions",
        "Title": "President",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/roger-brogan/1/31a/246",
        "GitHub": null,
        "LastUpdated": "2014-05-07T15:13:49.92"
    },
    {
        "FirstName": "Russ",
        "LastName": "Unger",
        "HeadShot": "/cloud/profilephotos/Russ-Unger-e6c54b0e-6dca-43c4-9291-2940e562f655.jpg",
        "UserName": "runger",
        "Biography": "Russ Unger is an Experience Design Director for GE Capital Americas where he leads teams and projects in design and research . He is co-author of the book “A Project Guide to UX Design”, “Designing the Conversation”, and “Speaker Camp” for Peachpit Press (Voices That Matter). Russ is also working on a book on guerrilla design and research methods that is due out well, sometime. \r\n\r\nRuss is co-founder of ChicagoCamps, which hosts low-cost, high-value technology events in the Chicago area, and he is also on the Advisory Board for the Department of Web Design and Development at Harrington College of Design. Russ has 2 daughters who both draw better than he does and are currently beginning to surpass his limited abilities in coding.\r\n\r\nHe really wants you to go to Prototypes, Process & Play (http://pppconf.com) in Chicago this summer, too.",
        "WebSite": "http://userglue.com",
        "Company": "GE Capital Americas",
        "Title": "Experience Design Director",
        "Twitter": "russu",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-05T23:46:42.19"
    },
    {
        "FirstName": "Ryan",
        "LastName": "Hatch",
        "HeadShot": "/cloud/profilephotos/Ryan-Hatch-034f867c-9a44-4475-8621-ca8e75699051.png",
        "UserName": "rdhatch",
        "Biography": "Ryan is a lean software entrepreneur & product delivery leader who helps teams launch new products people want to buy. He combines customer-centered product strategy with rapid, agile execution & continuous delivery.  Ryan co-founded Dynamis, funded by Golden Angels in 2012, to create sales growth for insurance brokers and enable employers to maximize their group health insurance. He excels at energizing teams towards shared purpose around the customer and business.  Ryan now works with other startups & product development teams using lean principles to accelerate growth & time-to-market.",
        "WebSite": "http://www.resultech.com",
        "Company": "Resultech",
        "Title": "Product Innovation Leader",
        "Twitter": "rdkhatch",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/rdhatch/",
        "GitHub": null,
        "LastUpdated": "2014-05-15T03:46:40.55"
    },
    {
        "FirstName": "Ryan",
        "LastName": "Anklam",
        "HeadShot": "/cloud/profilephotos/Ryan-Anklam-08e6f960-00ad-4f79-8bd5-956b1b6fc856.jpg",
        "UserName": "bittersweetryan",
        "Biography": "Ryan Anklam is a Senior UI Engineer at Netflix where is working on reinventing TV and continually improving the Netflix user experience. He has been developing for the web since JavaScript was mainly used for mouseover images and crude form validation. Ryan is also a passionate open source advocate and contributor.",
        "WebSite": "http://blog.ankl.am",
        "Company": "Netflix",
        "Title": "Senior UI Engineer",
        "Twitter": "@bittersweetryan",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/ryananklam/",
        "GitHub": "http://www.github.com/bittersweetryan/",
        "LastUpdated": "2014-04-04T04:49:53.48"
    },
    {
        "FirstName": "Ryan",
        "LastName": "Cromwell",
        "HeadShot": "/cloud/profilephotos/Ryan-Cromwell-3ab03512-6632-44a1-a2d4-e2bd04bfd51b.png",
        "UserName": "cromwellryan",
        "Biography": "Ryan Cromwell is a coder by trade with over 10 years of experience delivering solutions ranging from real-time customer loyalty systems and elegant user experiences to streamlined statistical process control software.  Having worked with passionate, high-performing Agile teams, Ryan ventured into the world of Scrum.org training and Agile coaching to replicate those amazing experiences.  Ryan’s passion remains delivering software as a member the Sparkbox Team in Dayton, OH.  He is co-founder of Dayton Clean Coders, the Dayton Elixir virtual Meetup, co-organizer of Southwest Ohio GiveCamp, and all around software community ally.  You can find Ryan at http://cromwellhaus.com and on Twitter as @cromwellryan.",
        "WebSite": "http://cromwellhaus.com",
        "Company": "Sparkbox",
        "Title": null,
        "Twitter": "cromwellryan",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "cromwellryan",
        "LastUpdated": "2014-04-09T14:21:19.937"
    },
    {
        "FirstName": "Ryan",
        "LastName": "Niemeyer",
        "HeadShot": "/cloud/profilephotos/Ryan-Niemeyer-6744ffa4-3516-4679-8b00-bef5f0dd90f1.jpg",
        "UserName": "rniemeyer",
        "Biography": "Ryan Niemeyer is an Architect for appendTo and has over 15 years of experience in the software industry working with primarily web-based technologies. He loves JavaScript, participating in the open source community, helping others, and trying to learn new things everyday.  He has been involved with the Knockout.js project for the last few of years and writes about his experiences with it at knockmeout.net. \r\n\r\nRyan lives in Verona, Wisconsin with his wonderful wife and two daughters. Besides web development, he enjoys spending time with his family, playing basketball and cheering on the Wisconsin Badgers.",
        "WebSite": "http://knockmeout.net",
        "Company": "appendTo",
        "Title": "Architect",
        "Twitter": "RPNiemeyer",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "rniemeyer",
        "LastUpdated": "2014-05-06T00:54:55.45"
    },
    {
        "FirstName": "Seth",
        "LastName": "Juarez",
        "HeadShot": "/cloud/profilephotos/Seth-Juarez-3c90db7a-fa93-4851-a6c6-f19b6df868c4-635422724533054682.png",
        "UserName": "sethjuarez",
        "Biography": "Seth Juarez holds a Master’s Degree in Computer Science where his field of research was Artificial Intelligence, specifically in the realm of Machine Learning. Seth is the Analytics Program Manager for DevExpress where he specializes in products dealing with data analysis, shaping, and presentation. When he is not working in that area, Seth devotes his time to an open source Machine Learning Library, specifically for .NET, intended to simplify the use of popular machine learning models, as well as complex statistics and linear algebra.",
        "WebSite": "http://www.devexpress.com",
        "Company": "DevExpress",
        "Title": "Analytics Program Manager",
        "Twitter": "sethjuarez",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/sethjuarez",
        "GitHub": "https://github.com/sethjuarez",
        "LastUpdated": "2014-07-29T23:19:04.857"
    },
    {
        "FirstName": "Sharon",
        "LastName": "Cichelli",
        "HeadShot": "/cloud/profilephotos/Sharon-Cichelli-5923f279-4257-4dc8-ba5a-2716e3b5a765-635357817011482387.jpg",
        "UserName": "scichelli",
        "Biography": "Sharon Cichelli is a Headspring Senior Consultant, developing custom enterprise software for her clients and coaching teams to deliver value without death marches. She is a .NET developer, open-source contributor, user group organizer, technical blogger, pinball fan, and Arduino enthusiast.",
        "WebSite": "http://lostechies.com/sharoncichelli/",
        "Company": "Headspring",
        "Title": "Senior Consultant",
        "Twitter": "scichelli",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "https://github.com/scichelli",
        "LastUpdated": "2014-05-15T20:15:08.427"
    },
    {
        "FirstName": "Shay",
        "LastName": "Howe",
        "HeadShot": "/cloud/profilephotos/Shay-Howe-72a38ea3-9dc6-4312-bdea-0201ef408119.png",
        "UserName": "shayhowe",
        "Biography": "As a designer and front end developer, Shay Howe has a passion for solving problems while building creative and intuitive products. Shay specializes in product design and interface development, specialties in which he regularly writes and speaks about. Currently he is the Director of Product at Belly, helping build the world's best loyalty program. Additionally, Shay helps co-organize Chicago Camps, Refresh Chicago, and UX Happy Hour.",
        "WebSite": "http://learn.shayhowe.com/",
        "Company": "Belly",
        "Title": "Director of Product",
        "Twitter": "shayhowe",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "shayhowe",
        "GitHub": "shayhowe",
        "LastUpdated": "2014-07-30T02:58:42.983"
    },
    {
        "FirstName": "Steve",
        "LastName": "Marx",
        "HeadShot": "/cloud/profilephotos/Steve-Marx-707382ad-b302-4374-a791-c40d16b1bc06.jpg",
        "UserName": "smarx",
        "Biography": "Steve Marx is a Developer Advocate for Dropbox, helping developers make better applications with the power of Dropbox’s platform. Prior to joining Dropbox, Steve founded Webscript.io and Site44, which uses Dropbox’s API to turn Dropbox folders into websites. Previously, Steve spent 10 years at Microsoft working on developer platforms, most recently Microsoft’s cloud platform, Windows Azure.",
        "WebSite": "http://smarx.com",
        "Company": "Dropbox",
        "Title": "Developer Advocate",
        "Twitter": "smarx",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "smarx",
        "LastUpdated": "2014-04-07T20:12:43.933"
    },
    {
        "FirstName": "Steven",
        "LastName": "Hoober",
        "HeadShot": "/cloud/profilephotos/Steven-Hoober-99f8e100-8a54-45a4-8daa-414c973a4fad.jpg",
        "UserName": "shoobe01",
        "Biography": "Steven Hoober wrote the book on mobile design patterns, and is best known for his ongoing research into how people really use touchscreen phones and tablets. He has been doing mobile and multi-channel design since 1999, designing the earliest mobile app store and the first Google mobile search for Sprint, several mobile browsers, many mobile sites such as Weather.com, and apps for companies like Hallmark, US Bank and Cummins. Steven maintains a repository of mobile design and development information including all the content from Designing Mobile Interfaces at the 4ourth Mobile Patterns Wiki, regularly writes for UX Matters magazine, and UX Magazine, among other writing and speaking.",
        "WebSite": "http://www.4ourth.com",
        "Company": "4ourth Mobile",
        "Title": "President - Design",
        "Twitter": "shoobe01",
        "Facebook": "https://www.facebook.com/shoobe01",
        "GooglePlus": "https://plus.google.com/u/0/+StevenHoober/",
        "LinkedIn": "https://www.linkedin.com/in/shoobe01",
        "GitHub": null,
        "LastUpdated": "2014-05-05T22:47:44.707"
    },
    {
        "FirstName": "Susan",
        "LastName": "Yount",
        "HeadShot": "/cloud/profilephotos/Susan-Yount-f662c476-c410-4260-a478-ff46967f32c1.jpg",
        "UserName": "SuzieZUMO",
        "Biography": "Susan Yount is a Professional Services Consultant for the Microsoft Consulting Group at Logicalis. She has a passion for growing business and people, and has served the National Mobile Solution Leadership Committee. She most recently led an outstanding Agile team in the creation and deployment of a very visible multinational project for a multi-billion dollar organization. Susan guides teams via strong technical expertise, encourages and rewards great ideas, and focus on the needs of the non-technical end user. She has a clear vision for what’s coming around the bend, and is a regular participant in technical communities, such as MIGang, CodeMash, CocoaConf, and  SPC14 in Vegas.",
        "WebSite": "http://iturbandictionary.com/default.aspx",
        "Company": "Logicalis",
        "Title": "Professional Services Consultant for the Microsoft Consulting Group",
        "Twitter": "@SuzieZUMO",
        "Facebook": "https://www.facebook.com/susan.anspaughyount",
        "GooglePlus": "https://Google+ account is too inactive to share",
        "LinkedIn": "https://www.linkedin.com/in/susanyount/",
        "GitHub": "https://deleted github account for time being",
        "LastUpdated": "2014-04-15T01:40:23.417"
    },
    {
        "FirstName": "That",
        "LastName": "Conference",
        "HeadShot": "/cloud/profilephotos/That-Conference-b09e7430-5905-418e-b775-fb08f8e814c8-635349489932052255.png",
        "UserName": "TCAdmin",
        "Biography": "The best developer conference!",
        "WebSite": "http://www.thatconference.com",
        "Company": null,
        "Title": null,
        "Twitter": "@ThatConference",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-14T14:24:22.567"
    },
    {
        "FirstName": "Tim",
        "LastName": "Miller",
        "HeadShot": "/cloud/profilephotos/Tim-Miller-349ec5db-e46a-4af9-a9b6-e8bdcd53f3a5.jpg",
        "UserName": "timrmiller",
        "Biography": "I am a Senior Software Engineer for Skyline Technologies. Currently dedicated to creating great applications and user experiences for the web and mobile devices. Including Windows, iOS and Android.",
        "WebSite": "http://www.timrmiller.com",
        "Company": "Skyline Technologies",
        "Title": "Senior Software Engineer",
        "Twitter": "timrmiller",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-04-15T00:55:57.547"
    },
    {
        "FirstName": "Tim",
        "LastName": "Hansen",
        "HeadShot": "/cloud/profilephotos/Tim-Hansen-539bf1ee-2a46-44eb-b63f-247ab010a645.jpg",
        "UserName": "thansen1024",
        "Biography": "Tim has spent over 22 years in software development for SA Ignite, Intel, Proxicom, and Sysmex, where he architected and built a global data aggregation platform for medical testing devices. His contributions to improving the healthcare industry include work as a senior developer for a comprehensive clinical laboratory information system interfacing to over 100 laboratory instruments and hospital information systems. Tim's leadership helps drive the SA Ignite culture, which he says \"is one of innovation and independence. We challenge the normal in search of finding new ways to advance and improve healthcare through the use of information technology\".",
        "WebSite": "www.saignite.com",
        "Company": "SA Ignite",
        "Title": "VP, Technology",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/tim-hansen/1/560/153/",
        "GitHub": null,
        "LastUpdated": "2014-04-14T22:32:53.647"
    },
    {
        "FirstName": "Tim",
        "LastName": "Huckaby",
        "HeadShot": "/cloud/profilephotos/Tim-Huckaby-7d205536-d7a1-4f3b-87ef-04d55a6405c3-635410392660992630.jpg",
        "UserName": "TimHuckaby",
        "Biography": "Tim Huckaby  \r\nTim Huckaby is an industry luminary focused on Engaging User Experiences, User Interaction Design and the Natural User Interface (NUI) as applied with software in systems of all industries.  Mr. Huckaby’s expertise encompasses NUI as Touch, Gesture, Voice and Neural interfaces as applied by a number of compelling software technologies on many software and hardware platforms on a broad spectrum of devices. \r\n\r\nMr. Huckaby has been called a “Pioneer of the Smart Client Revolution” by the press.  Mr. Huckaby’s uncanny prediction of locally installed, native application popularity became true.  This prediction of The Smart Client Revolution was the predecessor to the app store phenomena we see today where applications are downloaded from an application store and installed natively on the device as contrasted to using web applications in a browser. \r\n\r\nMr. Huckaby has been awarded many times for the highest rated technical & industry presentations and keynotes for Microsoft and many other industry & technology conferences like CES and events all around the world. Mr. Huckaby is consistently rated in the top 10% of all speakers at these events. Having worked for or with Microsoft for over 25 years, Mr. Huckaby has been on stage with, and done numerous keynote demos for many Microsoft executives including Bill Gates and Steve Ballmer. \r\n\r\nIn 1999 Mr. Huckaby founded InterKnowlogy, a custom application development firm that creates high-impact software experiences and continues to flourish over 15 years later.  In 2011 Mr. Huckaby founded Actus Interactive Software, which licenses a suite of Interactive Digital Signage products, as a product company compliment to InterKnowlogy.  Mr. Huckaby founded both companies and serves each of them as Chairman.  \r\n\r\nMr. Huckaby has 35 years of technology experience including serving on a Microsoft server product team as a development lead on an architecture team.  Mr. Huckaby worked on some famous and not so famous Microsoft Server codebases in the late nineties.  Mr. Huckaby is a Microsoft Regional Director, a Microsoft MVP and serves on many councils and boards like the Microsoft Application Development Partner Advisory Council and the Microsoft Healthcare Executive Board and the Association for Competitive Technology.   \r\n",
        "WebSite": "http://www.InterKnowlogy.com",
        "Company": "Interknowlogy",
        "Title": "Founder / Chairman",
        "Twitter": "@TimHuckaby",
        "Facebook": "http://www.facebook.com/Tim.Huckaby.Carlsbad",
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/timhuckaby",
        "GitHub": null,
        "LastUpdated": "2014-07-15T16:41:13.16"
    },
    {
        "FirstName": "Todd",
        "LastName": "Gardner",
        "HeadShot": "/cloud/profilephotos/Todd-Gardner-925d9784-7f74-49fe-a888-ec3d960d3286-635417295541202371.jpg",
        "UserName": "toddhgardner",
        "Biography": "Todd H Gardner is an independent software developer and entrepreneur, with over a decade of experience in development, design, and leadership. Todd holds a Masters in Management of Technology from the University of Minnesota.\r\nHe is passionate about teams, communication, and quality in software and has led product teams from small businesses and major corporations.\r\nTodd is the co-founder of {Track:js}, an innovative JavaScript error logging service. He tweets at @toddhgardner.",
        "WebSite": "trackjs.com",
        "Company": "{Track:js}",
        "Title": "Co-Founder",
        "Twitter": "@toddhgardner",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/toddhgardner",
        "GitHub": "https://github.com/toddhgardner/",
        "LastUpdated": "2014-07-23T16:25:54.12"
    },
    {
        "FirstName": "Tom",
        "LastName": "Steele",
        "HeadShot": "/cloud/profilephotos/Tom-Steele-37b1851b-c244-4ce8-94da-a7f578c172a8-635352817324484614.jpg",
        "UserName": "tsteele3rt",
        "Biography": "Tom Steele develops software for Three Rivers Technologies and their clients. He enjoys learning new things and sharing what he learns through collaboration, speaking, and writing. He is especially interested in .NET related technologies and programming techniques that contribute to successful software solutions.",
        "WebSite": "www.3riverstech.com",
        "Company": "Three Rivers Technologies",
        "Title": "Software Architect",
        "Twitter": "@tsteele3rt",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": null,
        "LastUpdated": "2014-05-10T01:22:12.447"
    },
    {
        "FirstName": "Tony",
        "LastName": "Guidici",
        "HeadShot": "/images/speakerImageDefault.png",
        "UserName": "tonyguid",
        "Biography": "TED team - Microsoft. More later...",
        "WebSite": "http://www.tonyguid.net",
        "Company": "Microsoft",
        "Title": "Sr. Program Manager",
        "Twitter": "tonyguid",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/tonyguid",
        "GitHub": "http://github.com/tonyguid",
        "LastUpdated": "2014-04-07T14:44:43.6"
    },
    {
        "FirstName": "Tony",
        "LastName": "Surma",
        "HeadShot": "/cloud/profilephotos/Tony-Surma-9b5ecfd6-93f6-4bb4-8543-ee9c88e51fff.JPG",
        "UserName": "tonysurma",
        "Biography": "Tony Surma is the CTO of Microsoft’s Disaster Response program which is responsible for the development and deployment of Microsoft and their partners' technologies to enable response organizations’ critical relief efforts and connect communities affected by natural disasters throughout the world. He is a member of the core team for Random Hacks of Kindness on behalf of Microsoft and is one of the founders of the Humanitarian Toolbox initiative.\r\nHe now spends seemingly equal amounts of time in making presentations at work and writing code both at home and at work with a technical focus on user experience (UX) of mobile, web and desktop applications and the architecture of the large cloud applications they depend on. Beyond work, Tony is always looking forward to volunteering to help non-profits leverage angle brackets, semi-colons and command line switches.\r\n",
        "WebSite": "http://www.microsoft.com/disasterresponse",
        "Company": "Microsoft",
        "Title": "CTO - Microsoft Disaster Response",
        "Twitter": "tonysurma",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": null,
        "GitHub": "tonysurma",
        "LastUpdated": "2014-03-31T19:13:23.71"
    },
    {
        "FirstName": "Travis",
        "LastName": "Stevenson",
        "HeadShot": "/cloud/profilephotos/Travis-Stevenson-3eb65cc4-1ecd-42e1-ae10-be1a86a18df4-635349822570311842.png",
        "UserName": "TravisStevenson",
        "Biography": "Travis Stevenson has been active in Opensource communities for 20 years.  He first got into technology and security at the age of 10 when he got frustrated with the lack of security in protecting his basic code from prying eyes.  More recently, he created platforms and organizational models for Cloud computing based on opensource software technologies.  Are these some how related? We think so.",
        "WebSite": "http://www.directsupply.com",
        "Company": "Direct Supply",
        "Title": "Sr. Platform Architect",
        "Twitter": null,
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "http://www.linkedin.com/in/travisstevenson/",
        "GitHub": null,
        "LastUpdated": "2014-05-06T14:11:03.657"
    },
    {
        "FirstName": "Tyson",
        "LastName": "Stewart",
        "HeadShot": "/cloud/profilephotos/Tyson-Stewart-c96232dd-5137-47b4-9b66-71296ee1c0c2.jpg",
        "UserName": "tysonj",
        "Biography": "Tyson is a software engineer at Hudl, currently leading the DevTools squad. He has eight years of professional development experience, mostly in web application development based on C#. He spent 18 months dedicated to operations for Hudl where he built up a squad, then returned to development. In the last two years, he has worked on applications built on Node, Python, and most recently Go, of which he is particularly fond.",
        "WebSite": "http://public.hudl.com/bits/",
        "Company": "Hudl",
        "Title": "Dev Lead, Doer of Many Things",
        "Twitter": "tysonj",
        "Facebook": null,
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/pub/tyson-stewart/3/753/993",
        "GitHub": null,
        "LastUpdated": "2014-04-11T16:58:14.32"
    },
    {
        "FirstName": "Vince",
        "LastName": "Bullinger",
        "HeadShot": "/cloud/profilephotos/Vince-Bullinger-427b14a7-3688-4775-8fef-9c6cd4efb597.jpg",
        "UserName": "vbullinger",
        "Biography": "Vince has been a passionate developer and consultant since 2005. He is currently an independent contractor. He received his MCSD for .NET with C# back in 2008. In recent years, he’s immersed himself in front end technologies. Even more recently, he’s developed a passion for mobile development, specifically of the cross-platform variety. Outside of work, he's a husband and father and enjoys sports, games and learning everything about everything\r\n",
        "WebSite": "http://www.vincebullinger.com",
        "Company": "Liberty Consulting Services",
        "Title": "Owner",
        "Twitter": "vbullinger",
        "Facebook": "https://www.facebook.com/vince.bullinger",
        "GooglePlus": "https://plus.google.com/u/0/+VinceBullinger",
        "LinkedIn": "http://www.linkedin.com/in/vincebullinger/",
        "GitHub": null,
        "LastUpdated": "2014-04-14T19:15:37.937"
    },
    {
        "FirstName": "Wade",
        "LastName": "Wegner",
        "HeadShot": "/cloud/profilephotos/Wade-Wegner-e20d1ff8-87fe-4a86-a501-904ed1fb40e3.jpg",
        "UserName": "WadeWegner",
        "Biography": "Technical Evangelist at Salesforce. Microsoft Azure MVP & Insider. Aspiring Brewmaster. Former Microsoft Azure Engineer and CTO at Aditi Technologies.",
        "WebSite": "http://www.wadewegner.com/",
        "Company": "salesforce.com",
        "Title": "Senior Director",
        "Twitter": "WadeWegner",
        "Facebook": "https://www.facebook.com/wade.wegner",
        "GooglePlus": null,
        "LinkedIn": "https://www.linkedin.com/in/wadewegner/",
        "GitHub": "https://github.com/wadewegner",
        "LastUpdated": "2014-05-05T22:59:13.54"
    }
];

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

this.getSessionsByCategory = function(category){
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

this.getSessionById = function(id){
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




this.getSessionsFilteredBy = function(sessionProperty, sessionValue){
	return this.getSessions().filter(function(s){ return s[sessionProperty] === sessionValue });
};

this.getSessionsByTitle = function(sessionName){
	return this.getSessionsFilteredBy('title', sessionName);
};


this.getSessionDetails = function(id){
	
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




/*
this.getAcceptedSessionsByTimeSlot().map(function(sessionDay) {
    return { "day" : sessionDay.Day,  sessions: sessionDay.TimeSlots.map(function(ts) {
        return ts.Sessions.map(function(s) {
            return {               
                "scheduled": ts.Time,
                "title": s.Title,
                "name": s.Speakers.map(function(speaker) {
                    return speaker.FirstName + " " + speaker.LastName
                }).join()
            };
        });
    }) }
})
 *
var paulTalks = _.flatten(this.getAcceptedSessionsByTimeSlot().map(function(day){
     return day.TimeSlots.map(function(ts){
        return ts.Sessions.map(function(s){
            return {sessionId: s.Id, Title: s.Title, Speakers: s.Speakers.map(function(speaker){
                                                          return speaker.UserName;
                                               }).join()}  
        });               
     });
})).filter(function(sessionSpeaker){
     return sessionSpeaker.Speakers.indexOf('PaulShepard') !== -1
})
 
var speakerTalks = { speaker: paulTalks[0].Speakers, talks: paulTalks.map(function(pt){ return { Id: pt.sessionId, Title: pt.Title } }) }
 


this.getAcceptedSessionsByTimeSlot().forEach(function(d){
  d.TimeSlots.forEach(function(ts){
     ts.Sessions.forEach(function(s){
       var sessionSpeakers = s.Speakers.map(function(speaker){ return speaker.UserName });
       if(_.contains(sessionSpeakers, 'bengavin')){
         matchingSessions.push({ day: d.Day, timeslot: { time: ts.Time, session: s } }); 
       }
     })
  })
})


 *
 */ 





