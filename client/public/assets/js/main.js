window.addEventListener('load', () => {


})

const CloseModal = () => {     
    document.getElementById('ModalCard').classList.remove('zoomInDown')
    document.getElementById('ModalCard').classList.add('bounceOutUp')
    
    setTimeout(() => {
        document.getElementById('myModal').classList.remove('is-active')
        document.getElementById('ModalCard').classList.remove('bounceOutUp')
        document.getElementById('ModalCard').classList.add('bounceInDown')
    },1000)
}

