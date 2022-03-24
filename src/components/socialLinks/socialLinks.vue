<template>
  <section>
    <!-- <h1 class="text-5xl font-bold">
      {{ user.facebook }}
    </h1> -->
    <div class="flex mb-4 space-x-3 justify-center">
      <a v-bind:href="'https://api.whatsapp.com/send?phone=55'+user.whatsapp" target="_blank" rel="noopener noreferrer" class="w-1/4 bg-gray-400 h-12 rounded-full">
      </a>
      <div class="w-1/4 bg-gray-500 h-12 rounded-full"></div>
    </div>
    <div class="flex mb-4 space-x-3 justify-center">
      <div class="w-1/4 bg-gray-400 h-12 rounded-full"></div>
      <div class="w-1/4 bg-gray-500 h-12 rounded-full"></div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SocialLinks',
  props: {
    user:Object,
  }
}
</script>
