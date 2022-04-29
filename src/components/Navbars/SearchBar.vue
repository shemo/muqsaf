<template>
  <!-- search -->

  <ul class="w-full items-center flex justify-start flex-wrap">
    <li class="mb-2">
      <a
        class="rounded-lg flex items-center justify-center p-2 ml-2 cursor-pointer text-base leading-normal"
        @click.prevent="selectCategory(0)"
        :class="{
          'text-primary bg-white': selectedCategory !== 0,
          'text-white bg-primary': selectedCategory == 0,
        }"
      >
        الكل</a
      >
    </li>
    <li v-for="category in categories" :key="category.id" class="mb-2">
      <a
        class="rounded-lg flex items-center justify-center p-2 ml-2 cursor-pointer text-base leading-normal"
        @click.prevent="selectCategory(category.id)"
        :class="{
          'text-primary bg-white': selectedCategory !== category.id,
          'text-white bg-primary': selectedCategory == category.id,
        }"
      >
        <img :src="getCategoryURL(category.icon)" class="ml-2 h-6" />{{
          category.name
        }}
      </a>
    </li>
  </ul>

  <!-- End search -->
</template>

<script>
export default {
  props: {
    selectedCategory: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "بيتزا",
          icon: "pizza.svg",
        },
        {
          id: 2,
          name: "سندوتشات",
          icon: "sandwitch.svg",
        },
        {
          id: 3,
          name: "مشروبات",
          icon: "drink.svg",
        },
      ],
    };
  },
  components: {},
  methods: {
    getCategoryURL(src) {
      return require(`@/assets/img/categories/${src}`);
    },
    selectCategory(categoryId) {
      this.$emit("selectedCategory", categoryId);
      console.log(categoryId);
      // this.selectedCategory = categoryId;
    },
  },
};
</script>
