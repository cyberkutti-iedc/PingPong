<template>
    <div class="about min-h-screen flex flex-col items-center justify-center text-white">
      <h1 class="text-4xl font-bold mb-4">About PingPong</h1>
      <p class="text-center max-w-lg mb-8">
        PingPong is a simple personal GitHub notifier developed for Hackton at Startuday Hacknight, hosted by Tinkerhub.
        It helps you stay updated with GitHub notifications and trends with ease.
      </p>
      <div class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Developed By</h2>
        <ul class="list-disc pl-6 text-center">
          <li>Sreeraj V Rajesh</li>
          <li>Rahan Michael Judes</li>
          <li>Edwin Raffy</li>
          <li>Sarath Murukan</li>
        </ul>
      </div>
      <div class="profiles flex flex-col sm:flex-row justify-center gap-6">
        <div v-for="profile in profiles" :key="profile.login" class="profile bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <img :src="profile.avatar_url" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4 mx-auto" />
          <h2 class="text-2xl font-bold">{{ profile.name || profile.login }}</h2>
          <p class="text-gray-300">{{ profile.bio || 'No bio available' }}</p>
          <a :href="profile.html_url" target="_blank" class="text-blue-400 hover:underline mt-4">View Profile on GitHub</a>
        </div>
      </div>
      <button @click="goBack" class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-8">
        Back to Home
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const profiles = ref([]);
  
  const fetchProfiles = async () => {
    const usernames = ['cyberkutti-iedc', 'gitmwone', 'EduEdwin24', 'SarathSNMIMT'];
    try {
      const requests = usernames.map(username =>
        axios.get(`https://api.github.com/users/${username}`)
      );
      const responses = await Promise.all(requests);
      profiles.value = responses.map(response => response.data);
    } catch (error) {
      console.error('Error fetching GitHub profiles:', error.message);
    }
  };
  
  onMounted(fetchProfiles);
  
  function goBack() {
    router.push('/');
  }
  </script>
  
  <style scoped>
  .about {
    background-color: #1f2937; /* Dark background color */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem;
  }
  
  button {
    transition: background-color 0.3s ease;
  }
  
  .profile {
    width: 100%;
    max-width: 300px;
  }
  
  .profile img {
    border-radius: 50%;
  }
  </style>
  