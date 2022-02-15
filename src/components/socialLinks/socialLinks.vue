<template>
  <h1 class="text-5xl font-bold">
    I'm a social links {{ user.facebook }}
  </h1>
</template>

<script>


export default {
  name: 'SocialLinks',
  props: {
    user:Object,
  }
}
</script>
