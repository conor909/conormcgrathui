import kilaBusinessCards from './images/feat_kila_bus_card2.jpg';
import markland from './images/feat_markland.jpg';
//import paddysWeekPoster from './images/feat_markland.jpg';
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

export default () => ([
	{
    id: 8,
    ref: 'advisian',
    route: 'advisian',
    title: 'Advisian Digital',
    client: 'Advisian',
    skills: ['Animation', 'React'],
    desc: ["Advisian Digital Interactive infographic, a single page app with bespoke interactive design and animated icons and graphics."],
    color: '#005f83',
		fontColor: '#fff',
    feature: advisian,
    images: [ advisian2, advisian ],
    url: 'http://www.advisian.com',
		categories: ['development', 'javascript']
  },
  {
    id: 1,
    ref: 'kilaBusinessCards',
    route: 'kila',
    title: 'Kila',
    client: 'Kila Bar',
    skills: [ 'Graphic Design', 'Print' ],
    desc: ["Business cards for Kila bar, Hong Kong."],
    color: '#1e211a',
		fontColor: '#fff',
    feature: kilaBusinessCards,
    images: [ kilaBusinessCards ],
    url: '',
		categories: ['design']
  },
  {
    id: 2,
    ref: 'marklandInfrastructure',
    route: 'markland',
    title: 'Markland Infrastructure',
    client: 'Markland Asia Infrastructure, Hong Kong',
    skills: ['Web Design', 'Web Development'],
    desc: ["Corporate branding and full page web design with animated page transitions."],
    color: '#d5d5d5',
    fontColor: '#000',
    feature: markland,
    images: [ markland ],
    url: 'http://marklandasia.com/',
		categories: ['design', 'development']
  },
  {
    id: 3,
    ref: 'peterBlake',
    route: 'peter-blake',
    title: 'Peter Blake',
    client: 'The Cat Street Gallery, Hong Kong',
    skills: ['Graphic Design', 'Print'],
    desc: ["Print design for asias largest art fair. An advertisment for the 'Godfather of British Pop' - Peter Blake"],
    color: '#000d4b',
		fontColor: '#fff',
    feature: peterBlake,
    images: [ peterBlake ],
    url: '',
		categories: ['design']
  },
  {
    id: 4,
    ref: 'rayne',
    route: 'rayne',
    title: 'Live Lounge',
    client: 'Rayne',
    skills: ['Graphic Design', 'Print'],
    desc: ["Print design for Rayne's Live Lounge, Hong Kong"],
    color: '#2b0027',
		fontColor: '#fff',
    feature: liveLounge,
    images: [ liveLounge ],
    url: '',
		categories: ['design']
  },
  {
    id: 5,
    ref: 'meGirl',
    route: 'me-girl',
    title: 'Style Me Girl',
    client: 'Frenzoo, Hong Kong',
    skills: ['UI', 'UX', 'Illustration', 'Web Design', 'Web Development'],
    desc: ["I designed the game mechanics as well as the UI & UX and illustrated all icons for Frenzoo’s first mobile game, which gained them noticeable presence in the gaming industry.", "It received over 1 million downloads and became the No.1 RPG on the Apple App Store in the U.S., No.1 app on the worldwide Amazon market and now has over 2 million downloads worldwide."],
    color: '#750047',
    fontColor: '#fff',
    feature: meGirl,
    images: [ meGirl ],
    url: '',
		categories: ['design', 'development', 'mobile']
  },
  {
    id: 6,
    ref: 'theWellnessNomad',
    route: 'the-wellness-nomad',
    title: 'The Wellness Nomad',
    client: 'The Wellness Nomad',
    skills: ['Web Development'],
    desc: ["Web development and database for The Wellness Nomad, Hong Kong."],
    color: '#61cdcd',
		fontColor: '#fff',
    feature: theWellnessNomad,
    images: [ theWellnessNomad ],
    url: 'http://thewellnessnomad.com/',
		categories: ['design', 'development']
  },
  {
    id: 7,
    ref: 'cube19',
    route: 'cube19',
    title: 'cube19',
    client: null,
    skills: ['MVC', 'Data Visualisation', 'UI', 'UX', 'backbone', 'underscore', 'jQuery', 'React'],
    desc: ["At cube19 I was part of a 3 person front end team.  I was responsible for designing UI, and building complex charting tools and data visualization dashboards.", "As the complexity of the app grew and new front end technology became available (React), we improved the performance and usability of the app by maintaining the older components in backbone / jQuery, while writing new features in React, and eventually refactoring the front end.", "The app is used worldwide by large and small companies, processing large data sets from their CRMs for business analytics and management.", "I also worked on a similar product available on the Salesforce App Exchange and built apps for internal customer management use."],
    color: '#1e1e1e',
		fontColor: '#fff',
    feature: cube19,
    images: [ cube19_dashboard, cube19_leaderboard, cube19_configure_chart, cube19_4, cube19_1, cube19_3, cube19_2 ],
    url: 'http://www.cube19.com',
		categories: ['design', 'development', 'javascript']
  }
]);