<template>
    <div class="home min-h-screen flex flex-col">
      <!-- Header -->
      <header class="flex flex-col sm:flex-row items-center justify-between bg-customDarkBlue p-4 text-white shadow-md relative">
        <div class="name text-2xl font-bold font-sans">PingPong</div>
        <div class="flex items-center space-x-4">
          <div class="pic sm:hidden">
            <img v-if="profile.avatar_url" :src="profile.avatar_url" class="w-16 h-16 rounded-full" alt="Profile Picture" />
             
        </div>
          <!-- Inbox Icon -->
          <button @click="NotificationBadge" class="relative">
            <svg class="w-8 h-8 text-white hover:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10l-7 7-7-7"></path>
            </svg>
          </button>
          
        </div>
      </header>
    
      <!-- Main Section -->
      <section class="flex flex-col sm:flex-row bg-customDarkBlue text-white p-6 flex-1">
        <!-- Profile -->
        <div class="profile hidden sm:flex sm:flex-col sm:items-center sm:w-1/3 bg-gray-800 p-6 rounded-lg shadow-lg">
          <img v-if="profile.avatar_url" :src="profile.avatar_url" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4" />
          <div class="text-center">
            <h1 class="text-2xl font-bold">Hello, {{ profile.name }}</h1>
            <h2 class="text-gray-300 mt-2">username:{{ profile.user }}</h2>
            <p class="text-gray-300 mt-2"><strong>Following:</strong> {{ profile.following || 'No bio available' }}</p>
            <p class="text-gray-300 mt-2"><strong>Followers:</strong> {{ profile.followers || 'No location available' }}</p>
            <p class="text-gray-300 mt-2"><strong>Public Repos:</strong> {{ profile.public_repos }}</p>
            <button class="mt-4 bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700">
              <a :href="profile.html_url" target="_blank">See on GitHub</a>
            </button>
          </div>
        </div>
    
        <!-- Main Content -->
        <div class="flex-1 sm:pl-8 mt-6 sm:mt-0">
          <nav class="flex justify-center sm:justify-start mb-4 border-b border-white pb-2">
            <router-link to="/repositories" class="text-white hover:text-gray-400 px-4">Repositories</router-link>
            <router-link to="/favoritetopics" class="text-white hover:text-gray-400 px-4">Favorite Topics</router-link>
            <router-link to="/Followers" class="text-white hover:text-gray-400 px-4">Followers</router-link>
            <router-link to="/Following" class="text-white hover:text-gray-400 px-4">Following</router-link>
            <router-link to="/about" class="text-white hover:text-gray-400 px-4">About</router-link>
          </nav>
    
          <div class="flex-1 sm:pl-8 mt-6 sm:mt-0">
            <h2 class="text-2xl font-bold mb-4">Latest Trending Repositories</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              <div v-for="repo in trendingRepos" :key="repo.id" class="card bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
                <h2 class="text-xl font-bold mb-2">{{ repo.name }}</h2>
                <p class="text-gray-300 mb-4">{{ repo.description || 'No description available' }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-gray-400 text-sm">Updated {{ formatDate(repo.updated_at) }}</span>
                  <a :href="repo.html_url" target="_blank" class="text-blue-400 hover:underline">View Repository</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <!-- Footer -->
      <Footer class="mt-8" />
    
      <!-- Notification Modal -->
      <NotificationModal v-if="showNotificationModal" :show.sync="showNotificationModal" @allow="requestNotificationPermission" @deny="handleDeny" />
    </div>
  </template>
    
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import Footer from './Footer.vue';
  import NotificationModal from './NotificationModal.vue';
  import NotificationBadge from './NotificationBadge.vue';

  
  const profile = ref({});
  const trendingRepos = ref([]);
  const showNotificationModal = ref(false);
  const notifications = ref([]);
  
  // Fetch profile data
  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user-info');
      profile.value = response.data;
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };
  
  // Fetch latest repositories
  const fetchTrendingRepos = async () => {
    try {
      const query = 'stars:>1000'; // Example query for popular repositories
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=3`);
      trendingRepos.value = response.data.items;
    } catch (error) {
      console.error('Error fetching repositories:', error.message);
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
 // Fetch notifications
const fetchNotifications = async () => {
  try {
    const response = await axios.get('http://localhost:8080/github-notifications');
    notifications.value = response.data.notifications;
  } catch (error) {
    console.error('Error fetching notifications:', error);
  }
};
  
 // Request notification permission
const requestNotificationPermission = async () => {
  if (Notification.permission !== 'granted') {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      fetchNotifications();
    }
  } else {
    fetchNotifications();
  }
};

onMounted(() => {
  fetchProfile();
  fetchTrendingRepos();
  requestNotificationPermission();
});
  </script>
    
  <style scoped>
  .home {
    background-color: #1f2937; 
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  section {
    flex: 1; 
  }
  </style>
  