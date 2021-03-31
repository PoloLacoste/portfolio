<template lang="en">
    <div class="flex justify-center items-center">
        <a href="https://github.com/PoloLacoste" class="social-button github mr-4">
            <font-awesome-icon class="fa" :icon="faGithub" />
        </a>

        <a href="https://www.linkedin.com/in/jean-michel-remeur-471656148/" class="social-button linkedin">
            <font-awesome-icon class="fa" :icon="faLinkedin" />
        </a>
    </div>
</template>

<script lang="ts">
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default {
  name: "SocialButtons",
  computed: {
    faGithub () {
       return faGithub;
    },
    faLinkedin () {
       return faLinkedin;
    }
  }
};
</script>

<style scoped>
.social-button {
  display: inline-block;
  width: 90px;
  height: 90px;
  line-height: 90px;
  margin: 0 10px;
  text-align: center;
  position: relative;
  overflow: hidden;
  opacity: 0.99;
  border-radius: 30%;
  -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
}

.social-button:before {
  content: "";
  background-color: #000;
  width: 120%;
  height: 120%;
  position: absolute;
  top: 90%;
  left: -110%;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
}

.social-button .fa {
    @apply text-5xl;
  vertical-align: middle;
  -webkit-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
  transition: all 0.35s cubic-bezier(0.31, -0.105, 0.43, 1.59);
}

.social-button.github:before {
  background-color: #000000;
}
.social-button.github .fa {
  color: #000000;
}

.social-button.linkedin:before {
  background-color: #007bb5;
}
.social-button.linkedin .fa {
  color: #007bb5;
}

.social-button:focus:before,
.social-button:hover:before {
  top: -10%;
  left: -10%;
}
.social-button:focus .fa,
.social-button:hover .fa {
  color: #fff;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
