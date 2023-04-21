import Swal from 'sweetalert2'

/*
    colors:
    紅：#d33
    藍：#3085d6
    綠：#9ACD32
    灰：#9D9D9D
*/

export const successfullyAlert = (title) => {
    Swal.fire({
        icon: 'success',
        title: title,
        confirmButtonColor: '#9ACD32',
        confirmButtonText: '確定'
    })
}

export const warningAlert = (title) => {
    Swal.fire({
        icon: 'warning',
        title: title,
        confirmButtonColor: '#9D9D9D',
        confirmButtonText: '確定'
    })
}

export const errorAlert = (title) => {
    Swal.fire({
        icon: 'error',
        title: title,
        confirmButtonColor: '#9D9D9D',
        confirmButtonText: '確定'
    })
}