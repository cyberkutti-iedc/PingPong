<template>
    <div class="favorites min-h-screen flex flex-col text-white">
      <!-- Sticky Header -->
      <div class="sticky-header bg-gray-900 w-full p-4 flex flex-col items-center">
        <h1 class="text-4xl font-bold mb-4 text-center">My Favorite Topics</h1>
        <p class="text-center max-w-2xl mx-auto mb-4">
          Customize your favorite topics and explore related repositories on GitHub.
        </p>
        <!-- Add Topic Form -->
        <div class="flex justify-center mb-4">
          <input v-model="newTopic" type="text" class="h-10 w-56 rounded-full text-black pl-4" placeholder="Add a topic..." />
          <button @click="addTopic" class="ml-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Add</button>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="content flex-1 overflow-auto p-4">
        <!-- Favorite Topics List -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Favorite Topics</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="topic in favoriteTopics" :key="topic" class="bg-gray-800 p-6 rounded-lg shadow-lg text-center relative">
              <h2 class="text-xl font-bold">{{ topic }}</h2>
              <button @click="removeTopic(topic)" class="absolute top-2 right-2 text-red-600 hover:text-red-400">✕</button>
            </div>
          </div>
        </div>
  
        <!-- Repositories List -->
        <div v-if="repositories.length > 0">
          <h2 class="text-2xl font-bold mb-4">Related Repositories</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div v-for="repo in repositories" :key="repo.id" class="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
              <h2 class="text-xl font-bold mb-2">{{ repo.name }}</h2>
              <p class="text-gray-300 flex-grow">{{ repo.description || 'No description available' }}</p>
              <div class="flex justify-between items-center mt-4">
                <span class="text-gray-400 text-sm">Updated {{ formatDate(repo.updated_at) }}</span>
                <a :href="repo.html_url" target="_blank" class="text-blue-400 hover:underline">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>


<script setup>
import { ref, watchEffect } from 'vue';
import axios from 'axios';

const newTopic = ref('');
const favoriteTopics = ref([]);
const repositories = ref([]);

// Fetch repositories related to favorite topics
const fetchRepositories = async () => {
  if (favoriteTopics.value.length === 0) {
    repositories.value = [];
    return;
  }

  try {
    const response = await axios.get('http://localhost:8080/custom-trending', {
      params: { topics: favoriteTopics.value.join(',') }
    });
    repositories.value = response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    repositories.value = [];
  }
};

// Add a new topic to the favorite topics list
const addTopic = () => {
  if (newTopic.value.trim() !== '' && !favoriteTopics.value.includes(newTopic.value.trim())) {
    favoriteTopics.value.push(newTopic.value.trim());
    newTopic.value = '';
    fetchRepositories();
  }
};

// Remove a topic from the favorite topics list
const removeTopic = (topic) => {
  favoriteTopics.value = favoriteTopics.value.filter(t => t !== topic);
  fetchRepositories();
};

// Watch for changes in favorite topics and fetch repositories accordingly
watchEffect(fetchRepositories);

// Format date for display
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
</script>

<style scoped>
.favorites {
  background-color: #1f2937; /* Dark background color */
  position: relative;
  overflow: hidden;
}

.sticky-header {
  background-color: #1f2937;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  transition: background-color 0.3s ease;
}

.content {
  flex: 1;
  overflow-y: auto;
  padding-top: 1rem;
}

.grid {
  margin-top: 2rem;
}

.grid div {
  background-color: #2d3748;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

img {
  border-radius: 50%;
}

h2 {
  margin: 0;
}

p {
  margin: 0;
}

h1, p {
  color: #ffffff; 
}
</style>
