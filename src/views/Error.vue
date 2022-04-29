<template>
  <div class="container h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div
        class="w-full md:w-1/2 mx-auto py-20 flex items-center justify-center"
      >
        <div
          data-aos="fade-up"
          class="flex flex-col text-center items-center justify-center"
        >
          <img :src="errorImg" class="w-3/4 mx-auto my-5 md:my-12" />

          <h2 class="text-3xl tracking-tight font-careem-bold text-white">
            هذه الصفحة غير موجودة
          </h2>

          <router-link
            to="/"
            class="bg-primary-lightest rounded text-primary mt-5 md:mt-5 px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
          >
            العودة للرئيسية
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logoImg from "@/assets/logo@2x.png";
import errorImg from "@/assets/img/error.png";

export default {
  layout: "error",
  data() {
    return {
      logoImg,
      errorImg,
    };
  },
};
</script>

<style scoped></style>
