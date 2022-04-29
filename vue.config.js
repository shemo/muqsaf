// vue.config.js
module.exports = {
  transpileDependencies: [
    "@fortawesome/fontawesome-free",
    "@kyvg/vue3-notification",
    "@popperjs/core",
    "@tailwindcss/forms",
    "@vue/compiler-sfc",
    "vue-meta",
    "aos",
    "core-js",
    "swiper",
    "tailwindcss",
    "tailwindcss-textshadow",
    "axios",
    "vue",
    "vue-router",
    "v-calendar",
    "@vueform/multiselect",
    "click-outside-vue3",
  ],
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
};
