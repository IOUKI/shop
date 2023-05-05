<template>
    <ContentLayout>
        <div class="w-full h-auto">
            <!-- 首頁大圖輪播 -->
            <div id="controls-carousel" class="relative w-full" data-carousel="static">
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div v-for="imageUrl in bigImages" :key="imageUrl" class="hidden duration-700 ease-in-out"
                        data-carousel-item>
                        <img :src="imageUrl"
                            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                    </div>
                </div>
                <button type="button"
                    class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7">
                            </path>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button"
                    class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next>
                    <span
                        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <!-- 三小圖連結 -->
            <div class="w-full py-3 md:py-10 flex justify-around items-center dark:bg-gray-900">
                <div class="">
                    <img class="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
                        alt="image description">
                </div>
                <div class="px-3">
                    <img class="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                        src="https://placeimg.com/480/480/any"
                        alt="image description">
                </div>
                <div class="">
                    <img class="h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                        src="https://placeimg.com/680/480/any"
                        alt="image description">
                </div>
            </div>

            <!-- 最新商品 -->
            <div>
                <h1>最新商品</h1>
            </div>
        </div>
    </ContentLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import ContentLayout from '@/components/frontDesk/ContentLayout.vue'

let bigImages = [
    'https://placeimg.com/940/480/any',
    'https://placeimg.com/940/480/any',
    'https://placeimg.com/940/480/any',
    'https://placeimg.com/940/480/any',
]

defineComponent({
    components: {
        ContentLayout,
    }
})
</script>