<template>
  <div
    class="relative md:left-0 md:w-80 md:block md:fixed md:top-0 pt-20 z-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-primary flex flex-wrap items-center justify-center h-full"
  >
    <div class="rounded-l-3xl rounded-b-0 bg-primary-lightest mt-3">
      <div class="flex items-center justify-between mx-5">
        <div
          class="w-2/3 rounded bg-white border-gray-50 flex items-center justify-between px-2"
        >
          <input
            type="text"
            class="w-full py-2 rounded bg-none focus:outline-none focus:ring-0 placeholder:text-gray-50 text-gray-50 border border-none"
            placeholder="
اسم الطالب
"
          />
          <SearchIcon />
        </div>
        <button
          class="h-full p-2 bg-gradient-to-b from-orange-100 to-orange-500 rounded"
          @click.prevent="toggleUser"
        >
          <SearchUserIcon class="w-6 h-6" />
        </button>
        <button
          class="h-full p-2 bg-gradient-to-b from-cyan-100 to-cyan-500 rounded"
        >
          <UserIcon class="w-6 h-6" />
        </button>
      </div>
      <div
        v-if="!userSelected"
        class="flex flex-col items-center h-auto lg:h-[calc(100%_-_10rem)] justify-center mt-3 md:mt-0"
      >
        <EmptyIcon class="mb-3" />
        <p class="text-xl text-primary-lightest text-opacity-50">
          يجب عليك اختيار طالب اولا
        </p>
      </div>
      <div v-else class="flex flex-col justify-between mx-5">
        <div class="bg-primary-lightest rounded-lg mt-5">
          <div
            class="relative flex rounded-t-lg bg-gradient-to-b from-cyan-1000 to-cyan-900 p-3"
          >
            <img :src="getUserURL('1.png')" />
            <div class="flex flex-col mr-3">
              <h4 class="text-cyan-100 text-sm">
                الرقم المقصفي
                <span class="text-white">135 </span>
              </h4>
              <h3 class="text-white text-sm">محمد بن بندر الوشيقيرى</h3>
            </div>
            <button class="absolute left-2 top-2" @click.prevent="toggleUser">
              <CloseCircleIcon />
            </button>
          </div>

          <div class="p-2">
            <h4 class="text-gray-400 text-sm mb-5">
              {{ order.length }} منتجات
            </h4>
            <div
              class="relative w-full flex bg-white rounded-lg p-3 mb-2"
              v-for="(item, index) in order"
              :key="item.id"
            >
              <img :src="getItemURL(item.image)" class="w-8" />
              <div class="w-full flex flex-col mr-3">
                <h4 class="text-gray-300 text-sm">
                  {{ item.title }}
                </h4>
                <div class="w-full flex items-center justify-between">
                  <h3 class="text-primary text-sm">
                    {{ item.price }} ريال X {{ item.quantity }}
                  </h3>
                  <h3 class="text-gray-300">
                    {{ item.price * item.quantity }} ريال
                  </h3>
                </div>
              </div>
              <button
                class="absolute left-2 top-2"
                @click.prevent="removeItem(index)"
              >
                <RemoveIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="userSelected"
        class="text-sm text-gray-400 relative mt-3 md:mt-0 md:absolute md:bottom-[6.8rem] w-full bg-primary-lightest p-5 grid grid-cols-2 gap-y-3"
      >
        <p class="text-primary">الملاحظات</p>
        <p class="text-left">يفضل تاريخ صلاحية حديث</p>
        <hr class="col-span-2 border-b border-cyan-50" />

        <p class="text-primary">عمولة التطبيق</p>
        <p class="text-left">2.50 <span class="text-xs">ريال</span></p>
        <hr class="col-span-2 border-b border-cyan-50" />

        <p>المجموع</p>
        <p class="text-left text-lg">
          22.50 <span class="text-primary text-sm">ريال</span>
        </p>
        <button class="col-span-2 rounded-lg bg-primary p-2 text-lg text-white">
          شراء
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import EmptyIcon from "@/components/Icons/EmptyIcon.vue";
import SearchUserIcon from "@/components/Icons/SearchUserIcon.vue";
import UserIcon from "@/components/Icons/UserIcon.vue";
import SearchIcon from "@/components/Icons/SearchIcon.vue";
import CloseCircleIcon from "@/components/Icons/CloseCircleIcon.vue";
import RemoveIcon from "@/components/Icons/RemoveIcon.vue";

export default {
  data() {
    return {
      open: false,
      show: false,
      userSelected: false,
      order: [
        {
          id: 1,
          image: "1.png",
          title: "عصير تفاح 250مل ",
          price: "7.50",
          quantity: 2,
        },
        {
          id: 2,
          image: "2.png",
          title: "عصير تفاح 250مل ",
          price: "7.50",
          quantity: 2,
        },
      ],
    };
  },

  methods: {
    toggleUser() {
      this.userSelected = !this.userSelected;
    },
    getUserURL(src) {
      return require(`@/assets/img/users/${src}`);
    },
    getItemURL(src) {
      return require(`@/assets/img/products/${src}`);
    },
    removeItem: function (index) {
      this.order.splice(index, 1);
      console.log(this.order);
      this.$notify("تم حذف المنتج من الطلب", "success");
    },
  },

  components: {
    EmptyIcon,
    SearchUserIcon,
    UserIcon,
    SearchIcon,
    CloseCircleIcon,
    RemoveIcon,
  },
};
</script>
