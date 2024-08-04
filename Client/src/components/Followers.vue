<template>
  <div class="followers min-h-screen flex flex-col text-white">
    <!-- Back Button -->
    <button @click="goBack" class="back-button">
      &#8592; Back
    </button>

    <!-- Main Content -->
    <div class="content flex-1 overflow-auto p-4">
      <h1 class="text-4xl font-bold mb-4 text-center">Followers</h1>
      <p class="text-center max-w-2xl mx-auto mb-8">
        Discover the amazing individuals who follow you. Here’s a stylish grid view of your followers.
      </p>

      <!-- Followers Grid -->
      <div class="grid">
        <div v-for="user in followers" :key="user.id" class="follower-card">
          <img :src="user.avatar_url" alt="User Avatar" class="avatar" />
          <h2 class="text-xl font-bold mb-2">{{ user.login }}</h2>
          <p class="text-gray-400">ID: {{ user.id }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const followers = ref([]);
const router = useRouter();

// Fetch the list of followers
const fetchFollowers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user-followers'); // Ensure the endpoint is correct
    followers.value = response.data;
  } catch (error) {
    console.error('Error fetching followers list:', error);
  }
};

// Go back to the previous page
const goBack = () => {
  router.back();
};

onMounted(fetchFollowers);
</script>

<style scoped>
.followers {
  background-color: #1f2937; /* Dark background color */
  position: relative; /* Ensure the back button is positioned relative to this container */
}

.back-button {
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: #2d3748; /* Slightly lighter gray for contrast */
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: #4a5568; /* Darker shade on hover */
}

.content {
  padding: 2rem;
  overflow-y: auto; /* Ensure vertical scrolling */
  flex: 1; /* Allow the content area to expand and take available space */
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 2fr));
  gap: 1.5rem;
}

.follower-card {
  background-color: #2d3748; /* Slightly lighter gray for card background */
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  margin-bottom: 1rem;
}

h1, p {
  color: #ffffff; /* Ensure text is white for visibility */
}
</style>
