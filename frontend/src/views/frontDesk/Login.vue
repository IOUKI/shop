<template>
    <ContentLayout>
        <div class="w-2/3 md:w-1/3 h-auto p-3 my-40 rounded-xl bg-gray-50 dark:bg-gray-700">
            <div class="w-full flex justify-center">
                <h3 class="text-3xl dark:text-white">會員登入</h3>
            </div>
            <form class="w-full my-3">
    
                <!-- 電郵 -->
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        電子信箱
                    </label>
                </div>
    
                <!-- 密碼 -->
                <div class="relative z-0 w-full mb-6 group">
                    <input type="password"
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " required />
                    <label
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        密碼
                    </label>
                </div>
    
                <button type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    登入
                </button>
            </form>

            <div class="dark:text-white">
                <router-link :to="{ name: 'frontDeskRegister'}">
                    會員註冊
                </router-link>
            </div>
        </div>
    </ContentLayout>
</template>

<script setup>
import { defineComponent } from 'vue'
import ContentLayout from '@/components/frontDesk/ContentLayout.vue'

defineComponent({
    components: {
        ContentLayout,
    }
})
</script>