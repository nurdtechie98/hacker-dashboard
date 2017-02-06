var eventName = "QHacks";
var endDateTime = { year: 2017, month: 2, day: 7, hour: 10, minute: 0 };
var introductionText = 'Welcome to the hacker dashboard! We hope you\'ll have a fantastic weekend of hacking here at Queen\'s University! We have added a bunch of information on this page. We will also continue to update this page with relevant information and links through the weekend.<br/><br/>Sign up to use the Slack here: <a href="https://qhacks-slack.herokuapp.com/" target="_blank">https://qhacks-slack.herokuapp.com/</a>';
/*
 * Navbar links
 * 
 * If the variable link is blank, it wont show up in the navbar.
 */
var logoLink = "http://qhacks.io/img/logo.png";
var slackLink = "https://qhacks17.slack.com/";
var fbGroupLink = "https://www.facebook.com/groups/1317363491653433/";
var devPostLink = "https://qhacks2017.devpost.com/";
var helpqLink = "http://help.qhacks.io/";


var linkToHardware = "http://qhacks.io/hardware/";
var linkToChallenges = "http://qhacks.io/challenges/";


var rulesContent = '<p>We expect all hackers to abide by the <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank">MLH Code of Conduct</a>.</p><p>There will be a maximum of 4 members on each team.</p><br/>';

var wifiInfo = {
	"networkName" : "QueensuSecure_WPA2",
	"username" : "confgues",
	"password" : "VbXt2%xp44"
}

var campusSecurityInfo = [
	{
		"preText" : "For general inquires: ",
		"contactNumberOrEmail" : "613-533-6733"
	},
	{
		"preText" : "For emergencies only: ",
		"contactNumberOrEmail" : "613-533-6111"
	}
];

var quickLinks = [
	{
		"name" : "Slack",
		"about" : "Chat with fellow hackers, mentors, and exec.",
		"link" : "https://qhacks17.slack.com"
	},
	{
		"name" : "Slack Sign Up",
		"about" : "Sign up to use our Slack channel.",
		"link" : "https://qhacks-slack.herokuapp.com/"
	},
	{
		"name" : "QHacks 2017 DevPost",
		"about" : "A list of awards and a spot for submissions.",
		"link" : "https://qhacks2017.devpost.com/"
	},
	{
		"name" : "HELPq",
		"about" : "Connect and get help from mentors.",
		"link" : "http://help.qhacks.io/"
	}
];

var schedule = [
	{
		"name" : "Registration & Dinner",
		"location" : "Dunning Hall",
		"eventEndTime" : "02-05-2017 21:05:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Friday Feb 3"
	},
	{
		"name" : "Opening Ceremony",
		"location" : "Dunning Hall",
		"eventEndTime" : "02-05-2017 22:05:00",
		"timeDisplayed" : "8:00 PM",
		"dateDisplayed" : "Friday Feb 3"
	},
	{
		"name" : "Team Formation",
		"location" : "Dunning Hall",
		"eventEndTime" : "02-05-2017 22:35:00",
		"timeDisplayed" : "10:00 PM",
		"dateDisplayed" : "Friday Feb 3"
	},
	{
		"name" : "Hacking Begins!",
		"location" : "Ellis Hall & Jeffrey Hall",
		"eventEndTime" : "02-05-2017 22:35:00",
		"timeDisplayed" : "10:30 PM",
		"dateDisplayed" : "Friday Feb 3"
	},
	{
		"name" : "RBC: Design Thinking",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 00:35:00",
		"timeDisplayed" : "11:30 PM",
		"dateDisplayed" : "Friday Feb 3"
	},
	{
		"name" : "Quiet Rooms/Sleeping Area (Optional)",
		"location" : "319 Ellis Hall & 234 Jeffrey Hall",
		"eventEndTime" : "02-06-2017 7:35:00",
		"timeDisplayed" : "",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Ratehub: Web Widgets with React and Webpack",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 1:35:00",
		"timeDisplayed" : "12:30am",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Mobile App Development at TD",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 2:35:00",
		"timeDisplayed" : "1:30am",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Breakfast",
		"location" : "Ellis Hall Auditorium",
		"eventEndTime" : "02-06-2017 09:05:00",
		"timeDisplayed" : "8:00 AM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Yoga",
		"location" : "319 Ellis Hall",
		"eventEndTime" : "02-06-2017 11:05:00",
		"timeDisplayed" : "10:00 AM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Scrambled Scripts",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 12:05:00",
		"timeDisplayed" : "11:00 AM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Lunch",
		"location" : "Ellis Hall Auditorium",
		"eventEndTime" : "02-06-2017 13:05:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},

	{
		"name" : "Afraj Gill: Most Common Mistakes by Founders, and How to Avoid Them",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 16:05:00",
		"timeDisplayed" : "3:00 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Mini-Event: Lost in the Sauce Coding Challenge",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 17:05:00",
		"timeDisplayed" : "4:00 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Dinner",
		"location" : "Leonard Hall Cafe",
		"eventEndTime" : "02-06-2017 18:05:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Microsoft: Intro to Microsoft Azure",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 21:35:00",
		"timeDisplayed" : "8:30 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Lani Labs: The Internet Of Things",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 22:05:00",
		"timeDisplayed" : "9:30 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Mosaic Manufacturing: Intro to 3D Printing",
		"location" : "327 Ellis Hall",
		"eventEndTime" : "02-06-2017 23:35:00",
		"timeDisplayed" : "10:30 PM",
		"dateDisplayed" : "Saturday Feb 4"
	},
	{
		"name" : "Mini Event: Cup Stack",
		"location" : "Jeffrey Basement",
		"eventEndTime" : "02-07-2017 01:35:00",
		"timeDisplayed" : "10:30 PM",
		"dateDisplayed" : "Saturday Feb 5"
	},
	{
		"name" : "Quiet Rooms/Sleeping Area (Optional)",
		"location" : "319 Ellis Hall & 234 Jeffrey Hall",
		"eventEndTime" : "02-07-2017 7:35:00",
		"timeDisplayed" : "",
		"dateDisplayed" : "Saturday Feb 5"
	},
	
	{
		"name" : "Breakfast",
		"location" : "Ellis Hall Auditorium",
		"eventEndTime" : "02-07-2017 09:05:00",
		"timeDisplayed" : "8:00 PM",
		"dateDisplayed" : "Sunday Feb 5"
	},
	{
		"name" : "Hacking Ends",
		"location" : "",
		"eventEndTime" : "02-07-2017 11:05:00",
		"timeDisplayed" : "10:00 AM",
		"dateDisplayed" : "Sunday Feb 5"
	},
	{
		"name" : "Judging Expo Starts",
		"location" : "",
		"eventEndTime" : "02-07-2017 11:35:00",
		"timeDisplayed" : "10:30 AM",
		"dateDisplayed" : "Sunday Feb 5"
	},
	{
		"name" : "Lunch",
		"location" : "Ellis Hall Auditorium",
		"eventEndTime" : "02-07-2017 13:05:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Sunday Feb 5"
	},
	{
		"name" : "Closing Ceremony",
		"location" : "Grant Hall",
		"eventEndTime" : "02-07-2017 14:05:00",
		"timeDisplayed" : "1:00 PM",
		"dateDisplayed" : "Sunday Feb 5"
	}
];
var qhacksExecSlack = [
	{
		"name" : "Ask QHACKS Exec ",
		"link" : "https://qhacks17.slack.com/messages/ask_qhacks/"
	},
	{
		"name" : "keith",
		"link" : "https://qhacks17.slack.com/messages/@keith/"
	},
	{
		"name" : "enoch",
		"link" : "https://qhacks17.slack.com/messages/@enoch/"
	},
	{
		"name" : "stefan",
		"link" : "https://qhacks17.slack.com/messages/@stefan"
	},
	{
		"name" : "melilif",
		"link" : "https://qhacks17.slack.com/messages/@melilif/"
	},
	{
		"name" : "alex",
		"link" : "https://qhacks17.slack.com/messages/@alexadusei/"
	},
	{
		"name" : "sal",
		"link" : "https://qhacks17.slack.com/messages/@salchoueib"
	},
	{
		"name" : "fitz",
		"link" : "https://qhacks17.slack.com/messages/@fitz/"
	},
	{
		"name" : "jacob",
		"link" : "https://qhacks17.slack.com/messages/@jacobriha/"
	},
	{
		"name" : "temi",
		"link" : "https://qhacks17.slack.com/messages/@temi/"
	},
	{
		"name" : "graham",
		"link" : "https://qhacks17.slack.com/messages/@graham/"
	},
	{
		"name" : "april",
		"link" : "https://qhacks17.slack.com/messages/@aprilye/"
	},
	{
		"name" : "nicole",
		"link" : "https://qhacks17.slack.com/messages/@nicole/"
	}
	,
	{
		"name" : "kamil",
		"link" : "https://qhacks17.slack.com/messages/@kamil/"
	}
];
