;import Cookies from "js-cookie"

export const setCookie = (cookieName, cookieValue) => {
    Cookies.set(cookieName, cookieValue)
}

export const getCookie = (cookieName) => {
    const cookieValue = Cookies.get(cookieName)
    return cookieValue
}

export const removeCookie = (cookieName) => {
    Cookies.remove(cookieName)
}