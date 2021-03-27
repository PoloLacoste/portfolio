<template lang="en">
    <div class="flex justify-center items-center">
        <a href="https://github.com/PoloLacoste" class="social-button mr-4">
            <img class="w-10 md:w-16" src="@/assets/github.png">
        </a>

        <a href="https://www.linkedin.com/in/jean-michel-remeur-471656148/" class="social-button">
            <img class="w-10 md:w-16" src="@/assets/linkedin.png">
        </a>
    </div>
</template>

<script>
export default {
    name: 'SocialButtons'
}
</script>

<style scoped>
.social-button {
    @apply transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110;
    @apply text-white text-xl rounded-lg p-2;
}
</style>