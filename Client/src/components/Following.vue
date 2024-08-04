<template>
  <div class="following min-h-screen flex flex-col items-center justify-center text-white">
    <!-- Back Button -->
    <button @click="goBack" class="absolute top-4 left-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700">
      &#8592; Back
    </button>

    <!-- Main Content -->
    <div class="w-full max-w-3xl mt-12">
      <h1 class="text-4xl font-bold mb-4">Following</h1>
      <p class="text-center max-w-lg mb-8">
        Here’s a curated list of the amazing individuals and developers you’re following.
      </p>
      
      <!-- Following List -->
      <ul>
        <li v-for="user in following" :key="user.id" class="bg-gray-800 p-4 mb-4 rounded-lg shadow-lg flex items-center">
          <img :src="user.avatar_url" alt="User Avatar" class="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 class="text-xl font-bold">{{ user.login }}</h2>
            <p class="text-gray-400">ID: {{ user.id }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const following = ref([]);
const router = useRouter();

// Fetch the list of users you're following
const fetchFollowing = async () => {
  try {
    const response = await axios.get('http://localhost:8080/user-following'); // Updated route
    following.value = response.data;
  } catch (error) {
    console.error('Error fetching following list:', error);
  }
};

// Go back to the previous page
const goBack = () => {
  router.back();
};

onMounted(fetchFollowing);
</script>

<style scoped>
.following {
  background-color: #1f2937; /* Dark background color */
  padding: 2rem;
  text-align: center;
  position: relative; /* Ensure the back button is positioned relative to this container */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
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
</style>
