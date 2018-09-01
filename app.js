class App{
    constructor(){
        /* abrir menu mobile */
        this.menuHam = document.querySelector('.change') 
        this.btnAbrirMenu = document.querySelector('.abrirMenu')
        this.menuDesp = document.querySelector('.menu-hide')

        /* abrir cajas del portfolio REVISAR!!!!!!! */
        this.btnAbrirPort = document.querySelector('.btn_mas')
        this.cajasPort = document.querySelector('.hidden')
        

        /* botón arriba */
        this.btnTop = document.querySelector('#btn-top')
        this.divTop = document.querySelector('#div-top')
        this.header = document.querySelector('header')
        this.h1Header = document.querySelector('header h1')
        this.bajoHeader = document.querySelector('#bajo-header') 

        this.btnContacto = document.querySelector('#btn-contacto')

        
        
        
        /* abrir menu mobile */
        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))

        /* abrir cajas del portfolio REVISAR!!!!!!! */
        this.btnAbrirPort.addEventListener('click', this.mostrarPort.bind(this))

        /* botón arriba */
        document.addEventListener('scroll',
            this.scrollDetect.bind(this))
            this.btnTop.addEventListener('click', this.subir.bind(this))

        /* scroll fade down1 */    
        window.addEventListener('scroll', this.scrollSection1.bind(this)) 

        this.btnContacto.addEventListener('click', this.contacto.bind(this))

        

    } 




    /* abrir menu mobile */
    mostrarMenu(){
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHam.classList.toggle('change')
    }

    /* abrir cajas del portfolio REVISAR!!!!!!! */
    mostrarPort(){
        this.cajasPort.classList.toggle('hidden')
    }

    /* botón arriba */
    scrollDetect(oE){
        if (oE.target.scrollingElement.scrollTop > 20) {
            this.h1Header.classList.add('hide')
            this.bajoHeader.classList.add('bajo-header')
            this.bajoHeader.classList.remove('hide-scroll')
        }
        if(oE.target.scrollingElement.scrollTop > 100){
            this.divTop.classList.remove('hide-scroll')
        } else{
            this.divTop.classList.add('hide-scroll')
        }
    }
    subir(oE){
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

     /* scroll fade down1 */ 
    scrollSection1(){
        this.header = document.querySelector('header')
        this.scrollSection = document.querySelector('section')
        console.log(this.scrollSection)
        this.ypos = window.pageYOffset
        if (this.ypos > 187) {
            this.scrollSection.classList.remove('about')
        }else{
            this.scrollSection.classList.add('about')
        }
    }
    
    contacto(){
        this.sectionContacto = document.querySelector('#contactame', location.assign ('#contactame'))
    }
}

document.addEventListener('DOMContentLoaded', () => { new App()})
