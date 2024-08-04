<template>
    <div class="repositories min-h-screen flex flex-col bg-gray-900 text-white">
      <!-- Header Section -->
      <header class="w-full bg-gray-800 p-4 text-center sticky top-0 z-10">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Repositories</h1>
        <p class="text-center max-w-lg mx-auto mb-4">
          My Some repositories 😁😁😁.
        </p>
      </header>
  
      <!-- Main Content -->
      <div class="flex-1 overflow-y-auto p-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="repo in repositories" :key="repo.id" class="card bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
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
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const repositories = ref([]);
  
  // Fetch repositories from GitHub
  const fetchRepositories = async () => {
    try {
      const response = await axios.get('http://localhost:8080/github-notifications');
      repositories.value = response.data.repos;
    } catch (error) {
      console.error('Error fetching repositories:', error.message);
    }
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  onMounted(fetchRepositories);
  </script>
  
  <style scoped>
  /* Ensure the page layout is flexible and scrollable */
  .repositories {
    background-color: #1f2937; /* Dark background color */
  }
  
  /* Header styles */
  header {
    position: sticky;
    top: 0;
    z-index: 10;
  }
  
  /* Card styles */
  .card {
    transition: transform 0.3s ease;
    max-width: 100%; /* Ensure cards do not overflow their container */
    box-sizing: border-box;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  /* Ensure the main content area is scrollable and has appropriate padding */
  .flex-1 {
    overflow-y: auto; /* Allow vertical scrolling if needed */
    padding-top: 4rem; /* Ensure there's enough padding for content below the sticky header */
  }
  </style>
  