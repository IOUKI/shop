<template>
    <div class="w-full h-auto">
        <Navbar></Navbar>
        <div class="w-full h-auto pt-16">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import Navbar from '@/components/frontDesk/Navbar.vue'
import Footer from '@/components/frontDesk/Footer.vue'

onMounted(() => {
    initFlowbite()
})
</script>