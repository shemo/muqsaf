<template>
  <nav
    id="header"
    class="fixed bg-white bottom-0 z-100 w-full flex flex-wrap items-center justify-center py-5 md:py-0 md:pb-8 navbar-expand-lg"
  >
    <div class="container flex flex-wrap items-center justify-center">
      <div class="w-full lg:w-auto relative flex justify-between">
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar"
        >
          <i class="fas fa-bars text-primary"></i>
        </button>
      </div>
      <div
        class="hidden lg:flex flex-grow items-center justify-center"
        id="main-nav"
      >
        <ul class="flex flex-col lg:flex-row list-none">
          <li class="relative flex items-end w-40 justify-center">
            <span
              :class="[this.$route.path === '/' ? 'block' : 'hidden']"
              class="absolute -top-0 w-6 border-4 border-primary"
            ></span>
            <router-link
              :class="[
                this.$route.path === '/' ? 'text-primary' : 'text-gray-200',
              ]"
              class="flex flex-col hover:text-primary px-3 py-2 items-center text-base"
              to="/"
            >
              <HomeIcon class="text-current my-2" />
              <span>الرئيسية </span>
            </router-link>
          </li>

          <li class="relative flex items-end w-40 justify-center">
            <span
              :class="[this.$route.path === '/wallet' ? 'block' : 'hidden']"
              class="absolute -top-0 w-6 border-4 border-primary"
            ></span>
            <router-link
              :class="[
                this.$route.path === '/wallet'
                  ? 'text-primary'
                  : 'text-gray-200',
              ]"
              class="hover:text-primary px-3 py-2 flex flex-col items-center text-base"
              to="/wallet"
            >
              <WalletIcon class="text-current my-2" />
              <span>المحفظة </span>
            </router-link>
          </li>
          <li class="relative flex items-end w-40 justify-center">
            <span
              :class="[this.$route.path === '/sales' ? 'block' : 'hidden']"
              class="absolute -top-0 w-6 border-4 border-primary"
            ></span>
            <router-link
              :class="[
                this.$route.path === '/sales'
                  ? 'text-primary'
                  : 'text-gray-200',
              ]"
              class="hover:text-primary px-3 py-2 flex flex-col items-center text-base"
              to="/sales"
            >
              <SalesIcon class="text-current my-2" />
              <span>المبيعات </span>
            </router-link>
          </li>
          <li class="relative flex items-end w-40 justify-center">
            <span
              :class="[
                this.$route.path === '/previous-orders' ? 'block' : 'hidden',
              ]"
              class="absolute -top-0 w-6 border-4 border-primary"
            ></span>
            <router-link
              :class="[
                this.$route.path === '/previous-orders'
                  ? 'text-primary'
                  : 'text-gray-200',
              ]"
              class="hover:text-primary px-3 py-2 flex flex-col items-center text-base"
              to="/previous-orders"
            >
              <PrevOrdersIcon class="text-current my-2" />
              <span>طلبات مسبقة </span>
            </router-link>
          </li>
          <li class="relative flex items-end w-40 justify-center">
            <span
              :class="[this.$route.path === '/more' ? 'block' : 'hidden']"
              class="absolute -top-0 w-6 border-4 border-primary"
            ></span>
            <router-link
              :class="[
                this.$route.path === '/more' ? 'text-primary' : 'text-gray-200',
              ]"
              class="hover:text-primary px-3 py-2 flex flex-col items-center text-base"
              to="/more"
            >
              <MoreIcon class="text-current my-2" />
              <span>المزيد </span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Mobile Menu -->
      <div
        class="fixed top-0 right-0 w-full h-full overflow-x-hidden overflow-y-auto bg-white z-50"
        :class="{ hidden: !navbarOpen, flex: navbarOpen }"
      >
        <div class="mx-auto px-2 flex py-12 flex-col relative w-full">
          <div class="absolute top-10 left-5">
            <a href="javascript:void(0)" @click="toggleNavbar()">
              <CloseIcon class="text-primary w-5" />
            </a>
          </div>
          <div class="flex items-center justify-center my-20 z-50">
            <ul class="flex flex-col items-center list-none w-2/3">
              <li class="relative flex items-end w-40 md:justify-center">
                <span
                  :class="[this.$route.path === '/' ? 'block' : 'hidden']"
                  class="absolute -top-0 w-6 border-4 border-primary"
                ></span>
                <router-link
                  :class="[
                    this.$route.path === '/' ? 'text-primary' : 'text-gray-200',
                  ]"
                  class="flex hover:text-primary px-3 py-2 items-center text-base"
                  to="/"
                >
                  <HomeIcon class="text-current ml-2" />
                  <span>الرئيسية </span>
                </router-link>
              </li>

              <li class="relative flex items-end w-40 md:justify-center">
                <span
                  :class="[this.$route.path === '/wallet' ? 'block' : 'hidden']"
                  class="absolute -top-0 w-6 border-4 border-primary"
                ></span>
                <router-link
                  :class="[
                    this.$route.path === '/wallet'
                      ? 'text-primary'
                      : 'text-gray-200',
                  ]"
                  class="hover:text-primary px-3 py-2 flex items-center text-base"
                  to="/wallet"
                >
                  <WalletIcon class="text-current ml-2" />
                  <span>المحفظة </span>
                </router-link>
              </li>
              <li class="relative flex items-end w-40 md:justify-center">
                <span
                  :class="[this.$route.path === '/sales' ? 'block' : 'hidden']"
                  class="absolute -top-0 w-6 border-4 border-primary"
                ></span>
                <router-link
                  :class="[
                    this.$route.path === '/sales'
                      ? 'text-primary'
                      : 'text-gray-200',
                  ]"
                  class="hover:text-primary px-3 py-2 flex items-center text-base"
                  to="/sales"
                >
                  <SalesIcon class="text-current ml-2" />
                  <span>المبيعات </span>
                </router-link>
              </li>
              <li class="relative flex items-end w-40 md:justify-center">
                <span
                  :class="[
                    this.$route.path === '/previous-orders'
                      ? 'block'
                      : 'hidden',
                  ]"
                  class="absolute -top-0 w-6 border-4 border-primary"
                ></span>
                <router-link
                  :class="[
                    this.$route.path === '/previous-orders'
                      ? 'text-primary'
                      : 'text-gray-200',
                  ]"
                  class="hover:text-primary px-3 py-2 flex items-center text-base"
                  to="/previous-orders"
                >
                  <PrevOrdersIcon class="text-current ml-2" />
                  <span>طلبات مسبقة </span>
                </router-link>
              </li>
              <li class="relative flex items-end w-40 md:justify-center">
                <span
                  :class="[this.$route.path === '/more' ? 'block' : 'hidden']"
                  class="absolute -top-0 w-6 border-4 border-primary"
                ></span>
                <router-link
                  :class="[
                    this.$route.path === '/more'
                      ? 'text-primary'
                      : 'text-gray-200',
                  ]"
                  class="hover:text-primary px-3 py-2 flex items-center text-base"
                  to="/more"
                >
                  <MoreIcon class="text-current ml-2" />
                  <span>المزيد </span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
    </div>
  </nav>
</template>

<script>
import CloseIcon from "@/components/Icons/CloseIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import WalletIcon from "@/components/Icons/WalletIcon";
import SalesIcon from "@/components/Icons/SalesIcon";
import PrevOrdersIcon from "@/components/Icons/PrevOrdersIcon.vue";
import MoreIcon from "@/components/Icons/MoreIcon.vue";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.navbarOpen = !this.navbarOpen;
    },
  },

  components: {
    CloseIcon,
    HomeIcon,
    WalletIcon,
    SalesIcon,
    PrevOrdersIcon,
    MoreIcon,
  },
  watch: {
    $route() {
      this.navbarOpen = false;
    },
  },
};
</script>
