<template>
  <div class="bg-gray-100 overflow-x-hidden min-h-screen">
    <breadcrumb />
    <div>
      <inner-sidebar />

      <div class="relative z-20 md:ml-80">
        <div class="px-4 md:px-10 mx-auto w-full pt-8 pb-28">
          <search-bar
            @selectedCategory="pickCategory"
            :selectedCategory="selectedCategory"
          />
          <div
            class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-5 gap-4"
          >
            <div
              v-for="item in items"
              :key="item.id"
              :class="[
                item.category_id == selectedCategory || selectedCategory == 0
                  ? 'block'
                  : 'hidden',
              ]"
            >
              <div
                v-if="
                  item.category_id == selectedCategory || selectedCategory == 0
                "
                class="bg-white p-2 flex flex-col items-center rounded-xl relative transition duration-200"
              >
                <div class="w-full flex mb-5 justify-between">
                  <Tooltip position="top"><InfoIcon /></Tooltip>
                  <div
                    class="flex items-center py-1 px-2 rounded-md bg-primary-lightest text-primary shadow-lg mr-5"
                  >
                    Kcal
                    {{ item.cals }}

                    <CalsIcon class="mr-3" />
                  </div>
                </div>
                <img
                  :src="getItemURL(item.image)"
                  class="mb-3 w-28 h-28 object-contain"
                />
                <h1 class="text-sm text-gray-300">{{ item.title }}</h1>
                <p class="text-xs text-gray-300 leading-loose">
                  الكمية بالمخزون:
                  <span class="text-primary">{{ item.amount }}</span>
                </p>
                <p>{{ item.price }} ريال</p>
                <button
                  @click.prevent="notify"
                  class="absolute bottom-1 right-1"
                >
                  <PlusIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <index-navbar />
  </div>
</template>
<script>
import InfoIcon from "@/components/Icons/InfoIcon";
import CalsIcon from "@/components/Icons/CalsIcon";
import PlusIcon from "@/components/Icons/PlusIcon";
import SearchBar from "@/components/Navbars/SearchBar.vue";
import Breadcrumb from "@/components/Navbars/Breadcrumb.vue";
import InnerSidebar from "@/components/Sidebar/InnerSidebar.vue";

import Tooltip from "@/components/Tooltip.vue";
import { watchEffect } from "vue";
import { useMeta } from "vue-meta";
export default {
  setup() {
    // Add meta info
    // The object passed into useMeta is user configurable
    const { meta } = useMeta({
      title: "الطلبات المسبقة",
    });

    watchEffect(() => {
      meta.description = "";
    });
  },
  data() {
    return {
      selectedCategory: 0,
      items: [
        {
          id: 1,
          image: "1.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
          category_id: 1,
        },
        {
          id: 2,
          image: "2.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 3,
          image: "3.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 4,
          image: "4.png",
          title: "عصير تفاح 250مل ",
          category_id: 1,

          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 5,
          image: "1.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 6,
          image: "2.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 7,
          image: "3.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 8,
          image: "4.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 9,
          image: "1.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 10,
          image: "2.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 11,
          image: "3.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
        {
          id: 12,
          image: "4.png",
          title: "عصير تفاح 250مل ",
          amount: "5",
          price: "7.50",
          cals: "200",
        },
      ],
    };
  },
  components: {
    InfoIcon,
    CalsIcon,
    Tooltip,
    PlusIcon,
    SearchBar,
    Breadcrumb,
    InnerSidebar,
  },
  methods: {
    pickCategory(categoryId) {
      this.selectedCategory = categoryId;
      console.log(this.selectedCategory);
    },
    getItemURL(src) {
      return require(`@/assets/img/products/${src}`);
    },

    notify() {
      this.$notify("تمت إضافة المنتج إلى العربة", "success");
    },
  },
};
</script>
