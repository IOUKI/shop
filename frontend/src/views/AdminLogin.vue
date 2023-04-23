<template>
    <div id="background" class="w-full h-screen flex justify-center items-center">
        <div class=" w-2/3 h-2/3 sm:w-1/2 sm:h-1/2 md:w-1/3 md:h-1/3">
            <form>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">帳號</label>
                    <input v-model="account" type="email" id="email"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="請輸入帳號..." required>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">密碼</label>
                    <input v-model="password" type="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        autocomplete="cc-number" placeholder="請輸入密碼..." required>
                </div>
                <button @click="userLogin" type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">登入</button>
            </form>
        </div>
    </div>
</template>

<script setup>
; import { onMounted } from "vue"
import router from "@/router"
import * as allSweetalert from "@/assets/func/allSweetalert.js"
import "../modules/vanta/three.min.js"
import "../modules/vanta/vanta.globe.min.js"
import { apiUrl } from '@/assets/apiUrl.js'
import { setCookie } from '@/assets/func/cookieFunc.js'
import getJwtToken from "@/assets/func/getJwtToken.js"

let account = ''
let password = ''

const userLogin = async () => {
    // 確認只有英文數字的正規表達式
    const regex = /^[a-zA-Z0-9]+$/

    if (account.length === 0) {
        allSweetalert.warningAlert('請輸入帳號')
        return
    }
    if (password.length === 0) {
        allSweetalert.warningAlert('請輸入密碼')
        return
    }

    if (account.match(regex) === null) {
        allSweetalert.warningAlert('只允許輸入英文數字')
        return
    }
    if (password.match(regex) === null) {
        allSweetalert.warningAlert('只允許輸入英文數字')
        return
    }

    const response = await fetch(apiUrl.adminUser + '/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            account,
            password
        })
    })

    if (response.status === 200) {
        const data = await response.json()
        setCookie('jwtToken', data["accessToken"])
        setCookie('refreshToken', data["refreshToken"])
        router.push('/backstage')
    } else {
        allSweetalert.errorAlert('查無使用者，請重新登入')
        return
    }

}

onMounted(async () => {

    // 如果已經登入過，就跳到後台首頁
    const jwtToken = await getJwtToken()
    if (jwtToken !== null) {
        router.push('/backstage')
    }

    VANTA.GLOBE({
        el: "#background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
})
</script>