<template>
  <div class='p-6 bg-gray-100'>
    <h2 class='text-2xl font-bold mb-2'>📝 Journal Entry</h2>
    <textarea v-model='entry' class='w-full h-40 p-3 border rounded' placeholder='Type your thoughts...'></textarea>
    <div class='my-2'>
      <label v-for='tag in tags' :key='tag' class='mr-2'>
        <input type='checkbox' :value='tag' v-model='selectedTags' /> {{ tag }}
      </label>
    </div>
    <button @click='submit' class='bg-purple-600 text-white px-4 py-2 rounded'>Save Memory</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      entry: '',
      tags: ['focus', 'anger', 'joy', 'confusion', 'inspired'],
      selectedTags: []
    };
  },
  methods: {
    submit() {
      console.log('🧠 Memory saved:', this.entry, 'Tags:', this.selectedTags);
      this.entry = '';
      this.selectedTags = [];
    }
  }
};
</script>
