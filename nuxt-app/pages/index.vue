<template>
  <div class="w-screen h-screen flex flex-col justify-center items-center bg-gray-800">
    <TagCloud class="h-full flex items-center" />
    <div class="flex flex-col mb-2 items-center">
      <h1 class="text-white text-md md:text-xl">Jean-Michel REMEUR</h1>
      <SocialButtons class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import TagCloud from '../components/TagCloud.vue';
import SocialButtons from '../components/SocialButtons.vue';

export default {
  name: 'App',
  components: {
    TagCloud,
    SocialButtons
  }
};
</script>
