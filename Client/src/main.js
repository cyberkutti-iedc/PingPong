import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import './assets/main.css';
import './assets/tailwind.css';
import './assets/global.css';
import 'animate.css';


import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Repositories from './components/Repositories.vue';
import Followers from './components/Followers.vue';
import Following from './components/Following.vue';
import FavoriteTopics from './components/FavoriteTopics.vue';


// Define the routes for the application
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  {path: '/repositories', component: Repositories},
  {path: '/following', component: Following},
  {path: '/followers', component: Followers},
  {path: '/favoritetopics', component: FavoriteTopics},
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create the Vue app instance and use the router
const app = createApp(App);
app.use(router);
app.mount('#app');
