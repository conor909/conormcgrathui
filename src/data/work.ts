import kilaBusinessCards from './images/feat_kila_bus_card2.jpg';
import markland from './images/feat_markland.jpg';
import ddd from './images/feat_ddd.jpg';
import peterBlake from './images/feat_peterblake.jpg';
import liveLounge from './images/feat_rayne.jpg';
import meGirl from './images/large_megirl1.jpg';
import theWellnessNomad from './images/feat_twn.jpg';

import cube19 from './images/c19/feat_cube19.jpg';
import cube19_1 from './images/c19/c19_1.png';
import cube19_2 from './images/c19/c19_2.png';
import cube19_3 from './images/c19/c19_3.png';
import cube19_4 from './images/c19/c19_4.png';
import cube19_configure_chart from './images/c19/c19_configure_chart.png';
import cube19_dashboard from './images/c19/c19_dashboard.png';
import cube19_leaderboard from './images/c19/c19_leaderboard.png';

import advisian from './images/feat_worleys.jpg';
import advisian2 from './images/feat_worleys2.jpg';

import tobes from './images/feat_tobes.jpg';

import orbs from './images/orbs.jpg';

import rwb from './images/webcomponents.jpg';

export default () => ([
	{
		id: 12,
		ref: 'ddd',
		niceName: 'divesitedata',
		title: 'divesitedata',
		client: '',
		skills: ['React', 'React-Native', 'web', 'mobile'],
		desc: ["divesitedata was built purely for fun. I hope one day it will help promote diving in lesser known regions, and help raise awareness to the importance of preserving our environment.", "It's a web and mobile app built in react & react native and hosted on Heroku."],
		color: '#005f83',
		fontColor: '#fff',
		feature: ddd,
		images: [],
		url: 'https://young-beach-63466.herokuapp.com/',
		appStores: {
			android: '',
			ios: 'https://apps.apple.com/gb/app/divesitedata/id1464499307'
		},
		displayLink: 'www.divesitedata.com',
		category: 'development',
		tools: ['react', 'react-native', 'ai', 'ps']
	},
	{
		id: 8,
		ref: 'advisian',
		niceName: 'advisian',
		title: 'Advisian Digital',
		client: 'Advisian',
		skills: ['Animation', 'React'],
		desc: ["Advisian Digital Interactive infographic, a single page app with interactive design, animations, icons and graphics."],
		color: '#005f83',
		fontColor: '#fff',
		feature: advisian,
		images: [advisian2, advisian],
		url: 'https://www.advisian.com/en-gb/what-we-do/services/advisian-digital/digital-future',
		appStores: {
			android: '',
			ios: ''
		},
		displayLink: 'www.advisian.com/digital-future',
		category: 'development',
		tools: ['react', 'ai']
	},
	{
		id: 7,
		ref: 'cube19',
		niceName: 'cube19',
		title: 'cube19',
		client: null,
		skills: ['MVC', 'Data Visualisation', 'UI', 'UX', 'backbone', 'underscore', 'jQuery', 'React'],
		desc: ["At cube19 I was part of a 3 person front end team.  I was responsible for designing UI, and building complex charting tools and data visualization dashboards.", "As the complexity of the app grew and new front end technology became available (React), we improved the performance and usability of the app by maintaining the older components in backbone / jQuery, while writing new features in React, and eventually refactoring the front end.", "The app is used worldwide by large and small companies, processing large data sets from their CRMs for business analytics and management.", "I also worked on a similar product available on the Salesforce App Exchange and built apps for internal customer management use."],
		color: '#1e1e1e',
		fontColor: '#fff',
		feature: cube19,
		images: [cube19_dashboard, cube19_leaderboard, cube19_configure_chart, cube19_4, cube19_1, cube19_3, cube19_2],
		url: 'http://www.cube19.com',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'development',
		tools: ['js', 'react', 'scss', 'backbone']
	},
	{
		id: 10,
		ref: 'orbs',
		niceName: 'orbs',
		title: 'Canvas Sketch',
		client: null,
		skills: ['ES6', 'canvas'],
		desc: ["Animated orbs using ES6 classes"],
		gist: "conor909/d18ea902c31367a672e0a87a6acf663c",
		category: 'code',
		feature: orbs,
		tools: ['javascript']
	},
	{
		id: 11,
		ref: 'webcomps',
		niceName: 'webcomponents',
		title: 'React App inside a Web Component',
		client: null,
		skills: [],
		desc: ["Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.", "This is a script I wrote to insert React apps inside custom elements.  There are some webpack build steps to go with it, if your interested in learning more get in touch, or check out the web components community."],
		gist: "conor909/8466594f678d82d7469b2ff70af2e0cb",
		url: "https://www.webcomponents.org/",
		appStores: {
			android: '',
			ios: ''
		},
		displayLink: 'www.webcomponents.org',
		category: "code",
		feature: rwb,
		tools: ["javascript"]
	},
	{
		id: 6,
		ref: 'theWellnessNomad',
		niceName: 'the-wellness-nomad',
		title: 'The Wellness Nomad',
		client: 'The Wellness Nomad',
		skills: ['Web Development'],
		desc: ["Web development and database for The Wellness Nomad, Hong Kong."],
		color: '#61cdcd',
		fontColor: '#fff',
		feature: theWellnessNomad,
		images: [theWellnessNomad],
		url: 'http://thewellnessnomad.com/',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'development',
		tools: ['php', 'sql', 'html', 'css']
	},
	{
		id: 9,
		ref: 'planning',
		niceName: 'planning',
		title: 'Planning & Documentation',
		client: null,
		skills: ['UI', 'UX'],
		desc: ['Illustration explaining functionality for a complex data storing interface.', 'Depending on each scenario, data needed to be saved to a Redux store or in component state, deleted or overwritten.', "The precedence of the data could vary depending on user interactions. Converstations about this flow weren't easy to communicate, so I came up with this illustration to help conversations during planning, development and testing."],
		color: '#1e1e1e',
		fontColor: '#fff',
		feature: tobes,
		images: [],
		url: '',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'development',
		tools: ['react', 'redux', 'ai']
	},
	{
		id: 2,
		ref: 'marklandInfrastructure',
		niceName: 'markland',
		title: 'Markland Infrastructure',
		client: 'Markland Asia Infrastructure, Hong Kong',
		skills: ['Web Design', 'Web Development'],
		desc: ["Corporate branding and full page web design with animated page transitions."],
		color: '#d5d5d5',
		fontColor: '#000',
		feature: markland,
		images: [markland],
		url: 'http://marklandasia.com/',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'development',
		tools: ['js', 'css', 'html']
	},
	{
		id: 3,
		ref: 'peterBlake',
		niceName: 'peter-blake',
		title: 'Peter Blake',
		client: 'The Cat Street Gallery, Hong Kong',
		skills: ['Graphic Design', 'Print'],
		desc: ["Print design for asias largest art fair. An advertisment for the 'Godfather of British Pop' - Peter Blake"],
		color: '#000d4b',
		fontColor: '#fff',
		feature: peterBlake,
		images: [peterBlake],
		url: '',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'design',
		tools: ['ps', 'ai']
	},
	{
		id: 1,
		ref: 'kilaBusinessCards',
		niceName: 'kila',
		title: 'Kila',
		client: 'Kila Bar',
		skills: ['Graphic Design', 'Print'],
		desc: ["Business cards for Kila bar, Hong Kong."],
		color: '#1e211a',
		fontColor: '#fff',
		feature: kilaBusinessCards,
		images: [kilaBusinessCards],
		url: '',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'design',
		tools: ['ps', 'ai']
	},
	{
		id: 4,
		ref: 'rayne',
		niceName: 'rayne',
		title: 'Live Lounge',
		client: 'Rayne',
		skills: ['Graphic Design', 'Print'],
		desc: ["Print design for Rayne's Live Lounge, Hong Kong"],
		color: '#2b0027',
		fontColor: '#fff',
		feature: liveLounge,
		images: [liveLounge],
		url: '',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'design',
		tools: ['ps', 'ai']
	},
	{
		id: 5,
		ref: 'meGirl',
		niceName: 'me-girl',
		title: 'Style Me Girl',
		client: 'Frenzoo, Hong Kong',
		skills: ['UI', 'UX', 'Illustration', 'Web Design', 'Web Development'],
		desc: ["I designed the branding and game mechanics, as well as the UI & UX and graphics for Frenzoo’s first mobile game.", "It gained them noticeable presence in the gaming industry and received over 1 million downloads and became the No.1 RPG on the Apple App Store in the U.S., No.1 app on the worldwide Amazon market and now has over 2 million downloads worldwide."],
		color: '#750047',
		fontColor: '#fff',
		feature: meGirl,
		images: [meGirl],
		url: '',
		appStores: {
			android: '',
			ios: ''
		},
		category: 'design',
		tools: ['ps', 'ai', 'js', 'css', 'html']
	}
]);