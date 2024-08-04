<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-6 rounded-lg shadow-lg text-black">
        <h2 class="text-2xl font-bold mb-4">Allow Notifications</h2>
        <p class="mb-4">We would like to show you notifications for the latest updates and alerts.</p>
        <div class="flex justify-end">
          <button @click="deny" class="bg-gray-400 text-white px-4 py-2 rounded-full mr-2">Deny</button>
          <button @click="allow" class="bg-blue-600 text-white px-4 py-2 rounded-full">Allow</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:show', 'allow', 'deny']);
  
  const deny = () => {
    emit('deny');
    emit('update:show', false);
  };
  
  const allow = async () => {
    emit('allow');
    emit('update:show', false);
  };
  </script>
  
  <style scoped>

  </style>
  