<template>
  <h1 class="text-5xl font-bold">
    Hello world!
  </h1>
  <SocialLinks/>
</template>

<script>
import SocialLinks from "./Social_links/socialLinks.vue";
export default {
  name: 'Main',
  components: {
    SocialLinks
  }
//   props: {
//     msg: String
//   }
}
</script>