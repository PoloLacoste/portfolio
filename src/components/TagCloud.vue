<template>
  <div ref="tagCloud">
  </div>
</template>

<script >

import TagCloud from 'TagCloud';

const texts = [
  'Flutter',
  'Dart',
  'Rust',
  'Angular',
  'Vue.js',
  'Astro',
  'Typescript',
  'Javascript',
  'C++',
  'C',
  'C#',
  'Yaml',
  'Json',
  'CNAM',
  'EFREI',
  'Apprentice',
  'Student',
  'Thales',
  'Developer'
]

let tagCloud;

function initTagCloud(container) {
  tagCloud = TagCloud(container, texts, {
    initSpeed: 'fast',
    maxSpeed: 'fast',
    radius: window.innerHeight * (window.innerHeight > window.innerWidth ? 0.2 : 0.35),
    itemClass: 'text-gray-200 text-sm md:text-xl'
  });
}

export default {
  name: 'TagCloud',
  mounted: function() {

    window.onresize = () => {
      if(tagCloud != null) {
        tagCloud.destroy();
      }
      initTagCloud(this.$refs.tagCloud);
    }

    initTagCloud(this.$refs.tagCloud);
  }
};
</script>
