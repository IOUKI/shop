<template>
    <div ref="sidebar" class="w-1/6 p-2 absolute lg:static right-full bg-slate-500 duration-500">
        <div class="w-full my-2 text-center">
            <span class="text-3xl text-white font-black">店商後台</span>
        </div>
        <span>
            <svg @click="openOrCloseSidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg"
                viewBox="0 0 16 16">
                <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
        </span>
        <ul class="w-full">
            <li v-for="link in links" :key="link"
                class="w-full text-2xl mb-2 p-2 rounded-lg font-bold text-white hover:text-sky-500 hover:bg-gray-900 bg-gray-700 cursor-pointer select-none duration-300">
                {{ link.title }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        openSidebar: Boolean,
    },

    data() {
        return {
            links: [
                { title: '首頁', pathName: '' }, // 資訊統計
                { title: '商品管理', pathName: '' }, // 商品管理
                { title: '訂單管理', pathName: '' }, // 訂單管理
                { title: '客戶管理', pathName: '' }, // 客戶管理
                { title: '庫存管理', pathName: '' }, // 庫存管理
                { title: '物流管理', pathName: '' }, // 物流管理
                { title: '促銷管理', pathName: '' }, // 促銷管理
                { title: '評價管理', pathName: '' }, // 評價管理
                { title: '報表管理', pathName: '' }, // 報表管理
                { title: '系統管理', pathName: '' }, // 系統管理
                { title: '登出', pathName: '' }, // 登出
            ]
        }
    },

    methods: {
        openOrCloseSidebar() {
            this.openSidebar = !this.openSidebar
        }
    },

    watch: {
        openSidebar(value) {
            console.log(value)
            const sidebar = this.$refs.sidebar
            if (value === true) {
                sidebar.classList.add('left-0')
                sidebar.classList.remove('right-full')
            } else {
                sidebar.classList.add('right-full')
                sidebar.classList.remove('left-0')
            }
        }
    }
}
</script>