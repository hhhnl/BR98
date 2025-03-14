<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

const modules = [Navigation, Pagination, Scrollbar, A11y, Grid];
const swiperRef = ref(null);
const swiperList = ref([
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
  {
    picUrl: new URL("@/assets/icon/icon_dtfl_qp_1.png", import.meta.url).href,
    title: "Cartas",
  },
]);
const navigationShow = ref([false, true]);

const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = (swiper) => {
  const length = swiperList.value.length - 5;
  const idx = swiper.activeIndex;
  // console.log(idx, length);
  if (idx >= length) return (navigationShow.value = [true, false]);
  if (idx === 0) return (navigationShow.value = [false, true]);
  navigationShow.value = [true, true];
};

const dataList = ref([
  {
    titIcon: "",
    title: "Popular",
    tudoUrl: "",
    list: [
      {
        picUrl: "",
        title: "",
        isCollect: false,
        isRecommend: false,
      },
    ],
  },
]);
</script>

<template>
  <header
    class="h-[45px] flex items-center justify-between p-1 bg-(--bg-color3)"
  >
    <div class="flex items-center h-full gap-1">
      <img src="@/assets/icon/menu.png" alt="" class="w-[25px] h-[25px]" />
      <img src="@/assets/logo.avif" alt="logo" class="logo h-full block" />
    </div>

    <div class="flex items-center h-full gap-2">
      <van-button type="success" size="small">Login</van-button>
      <van-button plain type="success" size="small">Registro</van-button>
    </div>
  </header>

  <div class="p-3 pb-1">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, idx) in 4" :key="idx">
        <img
          src="@/assets/image/banner1.png"
          alt=""
          class="w-full h-full block rounded-md"
        />
      </van-swipe-item>
    </van-swipe>
  </div>

  <div class="flex items-center gap-2 px-3">
    <img
      src="@/assets/icon/icon_dt_pmd.avif"
      alt=""
      class="w-[18px] h-[18px]"
    />
    <div class="flex-1">
      <van-notice-bar
        background="transparent"
        color="var(--color2)"
        style="padding: 0"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        speed="100"
      />
    </div>
    <img
      src="@/assets/icon/icon_dt_1xx.avif"
      alt=""
      class="w-[29px] h-[25px]"
    />
  </div>

  <div class="relative border-b border-(--color4) pb-2">
    <swiper
      :slides-per-view="5"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      :modules="modules"
      :slides-per-group="5"
      ref="swiperRef"
      grid="{
        fill: 'column',
        row: 1,
      }"
      :navigation="{
        nextEl: '.nextSlide',
        prevEl: '.prevSlide',
      }"
    >
      <swiper-slide v-for="(item, idx) in swiperList" :key="idx">
        <img
          :src="item.picUrl"
          alt=""
          class="w-[50%] h-full object-contain block m-auto"
        />
        <div class="text-xs text-(--color3) text-center">{{ item.title }}</div>
      </swiper-slide>

      ...
    </swiper>

    <div
      class="prevSlide absolute top-[50%] left-1 h-[18px] w-[18px]"
      v-show="navigationShow[0]"
    >
      <img
        src="@/assets/icon/swiper_left.png"
        alt=""
        class="w-full h-full block"
      />
    </div>
    <div
      class="nextSlide absolute top-[50%] right-1 h-[18px] w-[18px]"
      v-show="navigationShow[1]"
    >
      <img
        src="@/assets/icon/swiper_left.png"
        alt=""
        class="w-full h-full block"
      />
    </div>
  </div>

  <div class="px-3 py-5" v-for="(item, idx) in 6" :key="idx">
    <div class="mb-5 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <img
          src="@/assets/icon/icon_dt_1xx.avif"
          alt=""
          class="w-[22px] h-[22px] object-contain"
        />
        <div class="text-sm text-[#fff]">Popular</div>
      </div>
      <div class="text-xs text-(--color3)">
        Tudo
      </div>
    </div>

    <div class="grid grid-cols-3 gap-3">
      <div v-for="(item, idx) in 6" :key="idx">
        <img src="@/assets/image/default.avif" alt="" class="w-full h-full block rounded-lg">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prevSlide,
.nextSlide {
  transform: translateY(-50%);
  z-index: 9;
  border-radius: 50%;
  border: 1px solid rgba($color: #fff, $alpha: 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.nextSlide {
  transform: translateY(-50%) rotate(180deg);
}
</style>
