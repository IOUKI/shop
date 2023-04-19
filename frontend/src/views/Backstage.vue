<template>
    <div class="w-full h-screen">
        <div class="w-full h-full flex">
            <Sidebar :openSidebar="openSidebar"></Sidebar>
            <main class="w-full h-full bg-slate-100">
                <div class="w-full lg:hidden">
                    <span>
                        <svg @click="openOrCloseSidebar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list w-10 h-10 hover:bg-gray-900 hover:text-sky-500 select-none cursor-pointer duration-300"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </span>
                </div>
                <span class="text-3xl">Main</span>
            </main>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/backstage/Navbar.vue'
import Sidebar from '@/components/backstage/Sidebar.vue'
export default {
    components: {
        Navbar,
        Sidebar,
    },

    data() {
        return {
            openSidebar: false,
        }
    },

    methods: {
        openOrCloseSidebar() {
            this.openSidebar = !this.openSidebar
        }
    }

}
</script>