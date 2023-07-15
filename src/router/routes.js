import MoviesPage from '../pages/MoviesPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import HomePage from '../pages/HomePage.vue'
import MovieDetailsPage from '../pages/MovieDetailsPage.vue'
import NotFoundPage from '../pages/404.vue'
import SettingsPage from '../pages/SettingsPage.vue'
export const routes = [
    {path: '/', name: 'home', component: HomePage, meta: {auth: true} },
    {path: '/movies', name: 'movies', component: MoviesPage },
    {path: '/login', name: 'login', component: LoginPage },
    {path: '/movies/:id(\\d+)', name: 'movie-detail', component: MovieDetailsPage },
    {path: '/settings', name: 'settings', component: SettingsPage },
    {path: '/:no(.*)*', name: '404', component: NotFoundPage },
]