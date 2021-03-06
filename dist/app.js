class app {
    constructor() {
        console.log('hola bienvenido a mi portfolio')
        this.menuHam = document.querySelector('.change')
        this.btnAbrirMenu = document.querySelector('.abrirMenu')
        this.menuDesp = document.querySelector('.menu-hide')

        this.link = document.querySelector('.menu-hide ul li a')
        this.linkPort = document.querySelector('#link-port')
        this.linkSkills = document.querySelector('#link-skills')
        this.menuDesp = document.querySelector('.menu-hide')
        this.menuHamOpen = document.querySelector('.change')
        this.btnContacto = document.querySelector('#btn-contacto')

        this.nav = document.querySelector('nav')
        this.nav.addEventListener('click', this.collapseMenu.bind(this))
        

        this.btnAbrirPort = document.querySelector('.btn_mas')
        this.cajasPort = document.querySelectorAll('.hidden')

        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        this.header = document.querySelector('header')
        this.h1Header = document.querySelector('header h1')
        this.bajoHeader = document.querySelector('#bajo-header')

        this.btnContacto = document.querySelector('#btn-contacto')

        this.myMail = document.querySelector('.my-mail')


        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
        this.btnAbrirPort.addEventListener('click', this.mostrarPort.bind(this))
        document.addEventListener('scroll', this.scrollDetect.bind(this))
        this.btnTop.addEventListener('click', this.subir.bind(this))
        window.addEventListener('scroll', this.scrollSection1.bind(this))
        window.addEventListener('scroll', this.scrollSection2.bind(this))
        window.addEventListener('scroll', this.scrollSection3.bind(this))
        this.btnContacto.addEventListener('click', this.contacto.bind(this))

    
        this.myMail.addEventListener('click', this.SendMeAMail.bind(this) )
    
    }
    SendMeAMail(){
                const url = 'mailto@:divthesign@gmail.com'
                window.open(`http://${url}`)
    }
    mostrarMenu() {
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHam.classList.toggle('change')
    }
    collapseMenu(){
        if(this.menuDesp){
            this.menuDesp.classList.toggle('menu-hide')
            this.menuHamOpen.classList.toggle('change') 
        }
        
        
    }
    mostrarPort() {
        this.cajasPort.forEach((item) => {
            item.classList.toggle('hidden')
        })
    }
    scrollDetect(oE) {
        if (oE.target.scrollingElement.scrollTop > 20) {
            this.h1Header.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide-scroll')
        }
        if (oE.target.scrollingElement.scrollTop > 100) {
            this.divTop.classList.remove('hide-scroll')
        } else {
            this.divTop.classList.add('hide-scroll')
        }
    }
    subir(oE) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    scrollSection1() {
        this.header = document.querySelector('header')
        this.scrollSection = document.querySelector('section')
        this.ypos = window.pageYOffset
        if (this.ypos > 187) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
    scrollSection2() {
        this.header = document.querySelector('header')
        this.scrollSection = document.querySelector('.port')
        console.log(this.scrollSection)
        this.ypos = window.pageYOffset
        if (this.ypos > 1437) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
    scrollSection3() {
        this.header = document.querySelector('header')
        this.scrollSection = document.querySelector('#skills')
        console.log(this.scrollSection)
        this.ypos = window.pageYOffset
        if (this.ypos > 2687) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
    contacto() {
        this.sectionContacto = document.querySelector('#contactame', 
        location.assign('#contactame'))
        }        
 }
 




document.addEventListener('DOMContentLoaded', () => {
    new app()
})