<template>
    <div v-if="user" class="profile-container">
      <h1>{{ user.id }}</h1>
      <img :src="user.avatar_url" alt="Profile Picture" class="profile-image" />
      <p><strong>Username:</strong> {{ user.login }}</p>
      <p><strong>Bio:</strong> {{ user.bio || 'No bio available' }}</p>
      <p><strong>Location:</strong> {{ user.location || 'No location available' }}</p>
      <p><strong>Public Repos:</strong> {{ user.public_repos }}</p>
      <p><strong>Followers:</strong> {{ user.followers }}</p>
      <p><strong>Following:</strong> {{ user.following }}</p>
      <a :href="user.html_url" target="_blank">View Profile on GitHub</a>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useRoute } from 'vue-router';
  
  // Set up reactive variable to hold user data
  const user = ref(null);
  
  // Fetch user data from the API
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user-info');
      user.value = response.data;
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  
  // Fetch user data when the component is mounted
  onMounted(() => {
    fetchUserData();
  });
  </script>
  
  <style scoped>
  .profile-container {
    text-align: center;
    padding: 2rem;
  }
  
  .profile-image {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  
  a {
    color: #0366d6;
    text-decoration: none;
  }
  </style>
  