import Cookies from "js-cookie"
import { apiUrl } from "@/assets/apiUrl.js"

/*
    取得jwt token的function
    會先往伺服器request判斷是否需要更新jwt token
    如果要更新：伺服器會回傳新的token
    最後此function會回傳可使用的token
*/
export default async function () {
    const refreshToken = Cookies.get('refreshToken')
    const jwtToken = Cookies.get('jwtToken')

    const response = await fetch(apiUrl.adminUser + "/checkToken", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refreshToken: refreshToken,
            jwtToken: jwtToken,
        })
    })

    const status = response.status
    const data = await response.json()

    if (status === 201) {
        const newToken = data.accessToken
        Cookies.set('jwtToken', newToken)
        return newToken
    } else if (status === 200) {
        return jwtToken
    } else {
        return null
    }

}