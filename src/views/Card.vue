<template>
    <div class="max-w-sm mx-auto py-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-4">
          <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
          <h3 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {{ this.userData.name }}
          </h3>
      </div>
      <SocialLinks class="mx-2" :user="this.userData" />
    </div>
</template>

<script>
import axios from 'axios'
import SocialLinks from "../components/socialLinks/socialLinks.vue";
const config = {
    headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTY0ODA5MjQ5OCwiZXhwIjoxNjQ4MDk2MDk4LCJuYmYiOjE2NDgwOTI0OTgsImp0aSI6IjV1RmlkTHJjd0tyZ1ZZdW4iLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.NXFzv1E-F6Lav3AtY58lMMbQOSfBThdRZIjcSavrwYY` }
};
export default {
    components: {
        SocialLinks
    },
    data() {
      return {
        userData: {},
      }
    },
    created() {
    const userId = this.$route.params.userId   
      axios.get(`http://127.0.0.1:8000/api/user/${userId}`,config)
        .then((response) => {
          this.userData = response.data.data;
      }) 
    },
}
</script>