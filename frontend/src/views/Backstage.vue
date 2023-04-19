<template>
    <div class="w-full h-screen">
        <div class="w-full h-full flex">
            <Sidebar></Sidebar>
            <main class="w-full h-full bg-slate-950"></main>
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
}
</script>