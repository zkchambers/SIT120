import HomePage from './HomePage.vue';
import AboutPage from './AboutPage.vue';
import EventsPage from './EventsPage.vue';
import MerchandisePage from './MerchandisePage.vue';
import ContactPage from './ContactPage.vue';
import SocialsPage from './SocialsPage.vue';

export default [
    {path: '/', component: HomePage},
    {path: '/About', component: AboutPage},
    {path: '/Events', component: EventsPage},
    {path: '/Merchandise', component: MerchandisePage},
    {path: '/Contact', component: ContactPage},
    {path: '/Socials', component: SocialsPage}
]