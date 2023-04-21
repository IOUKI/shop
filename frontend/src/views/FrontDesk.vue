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
import { useDark, useToggle } from '@vueuse/core'
import Navbar from '@/components/frontDesk/Navbar.vue'
import Footer from '@/components/frontDesk/Footer.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

onMounted(() => {
    initFlowbite()
})

</script>

<style>
body {
    background-image: url('@/assets/images/wave.jpg');
    background-repeat: no-repeat;
}
</style>