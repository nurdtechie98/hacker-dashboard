var eventName = "KJSCE-HACK";
var endDateTime = { year:2017,month:10,day:7, hour:15,minute:0};
var introductionText = 'Welcome to the KJSCE-HACK dashboard! We hope you\'ll have fantastic coiple of days of hacking here at KJ Somaiya College Of Engineering! We have added a bunch of information on this page. We will also continue to update this page with relevant information and links throughut the event.<br/><br/>Sign up to use the Slack here: <a href="https://qhacks-slack.herokuapp.com/" target="_blank">https://qhacks-slack.herokuapp.com/</a>';
/*
 * Navbar links
 *
 * If the variable link is blank, it wont show up in the navbar.
 */
var logoLink = "https://imgur.com/TmW50im.png";
var slackLink = "";
var fbGroupLink = "";
var devPostLink = "";
var helpqLink = "http://help.qhacks.io/";


var linkToHardware = "";
var linkToChallenges = "";


var rulesContent = '<p>We expect all hackers to abide by the Code of Conduct and maintain discpline in the premises</p><p>There will be a maximum of 5 members on each team.</p><br/>';

var wifiInfo = {
	"networkName" : "Somaiya",
	"username" : "confgues",
	"password" : "VbXt2%xp44"
}

var campusSecurityInfo = [
	{
		"preText" : "Chaitya: ",
		"contactNumberOrEmail" : "613-533-6733"
	},
	{
		"preText" : "Vinitra: ",
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
		"name" : "Checkin",
		"location" : "KJSCE B building",
		"eventEndTime" : "10-06-2017 10:00:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Kick-Off",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 10:30:00",
		"timeDisplayed" : "9:30 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Begins!",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 12:00:00",
		"timeDisplayed" : "10:30 AM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Lunch Time!",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 01:00:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 2",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 17:00:00",
		"timeDisplayed" : "1:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Evening Snack Time",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 18:00:00",
		"timeDisplayed" : "5:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 3",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-06-2017 20:30:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Dinner Time",
		"location" : "Canteen",
		"eventEndTime" : "10-06-2017 21:30:00",
		"timeDisplayed" : "8:30 PM",
		"dateDisplayed" : "Friday Oct 6"
	},
	{
		"name" : "Hacking Period 4 / Checkout",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 09:00:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Friday Oct 7"
	},
	{
		"name" : "Breakfast",
		"location" : "Canteen",
		"eventEndTime" : "10-07-2017 09:30:00",
		"timeDisplayed" : "9:00 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hacking Period 5",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 11:30:00",
		"timeDisplayed" : "9:30 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hacking Period Ends",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 11:45:00",
		"timeDisplayed" : "11:30 AM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Lunch",
		"location" : "Canteen",
		"eventEndTime" : "10-07-2017 13:00:00",
		"timeDisplayed" : "12:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hack Presentation Submission",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 15:30:00",
		"timeDisplayed" : "3:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Hack Presentation Judging",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 18:00:00",
		"timeDisplayed" : "3:30 PM",
		"dateDisplayed" : "Saturday Oct 8"
	},
	{
		"name" : "Result Declaration",
		"location" : "Seminar-Hall B-507",
		"eventEndTime" : "10-07-2017 18:30:00",
		"timeDisplayed" : "6:00 PM",
		"dateDisplayed" : "Saturday Oct 8"
	}
];
var qhacksExecSlack = [
	{
		"name" : "Hackathon Website",
		"link" : "https://kjsce-hackathon.tech"
	},
	{
		"name" : "KJSCE-Codecell",
		"link" : "https://http://kjscecodecell.com"
	},
	{
		"name" : "Abhiyantriki",
		"link" : "https://http://kjsce-abhiyantriki.org"
	},
];
