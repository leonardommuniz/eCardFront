<template>
    <div>Cardd</div>
    <SocialLinks 
    :user="this.userData" 
    />
</template>

<script>
import axios from 'axios'
import SocialLinks from "../components/socialLinks/socialLinks.vue";

export default {
    components: {
        SocialLinks
    },
    data() {
      return {
        userData: undefined,
      }
    },
    created() {
    const userId = this.$route.params.userId   
      axios.get(`http://127.0.0.1:8000/api/person/${userId}`)
        .then((response) => {
          this.userData = response.data.data;
      }) 
    },
}
</script>