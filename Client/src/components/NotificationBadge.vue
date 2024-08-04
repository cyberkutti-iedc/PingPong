<template>
    <div class="relative">
      <svg @click="toggleNotifications" class="w-8 h-8 text-white hover:text-gray-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 10l-7 7-7-7"></path>
      </svg>
      <span v-if="unreadCount > 0" class="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 rounded-full"></span>
      <div v-if="showNotifications" class="absolute right-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg overflow-hidden z-20">
        <ul>
          <li v-for="notification in notifications" :key="notification.id" class="p-4 border-b border-gray-200">
            <h3 class="font-bold">{{ notification.subject.title }}</h3>
            <p>{{ notification.subject.type }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    notifications: {
      type: Array,
      default: () => []
    }
  });
  
  const unreadCount = computed(() => props.notifications.length);
  const showNotifications = ref(false);
  
  const toggleNotifications = () => {
    showNotifications.value = !showNotifications.value;
  };
  </script>
  
  <style scoped>

  </style>
  