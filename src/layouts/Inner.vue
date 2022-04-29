<template>
  <div>
    <router-view />
    <index-navbar />
    <notifications position="top right" />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";

export default {
  data() {
    return {
      // registerBg2
    };
  },
  components: { IndexNavbar },
};
</script>
