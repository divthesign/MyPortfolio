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
        
        /* abrir menu mobile */
        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))

        /* abrir cajas del portfolio REVISAR!!!!!!! */
        this.btnAbrirPort.addEventListener('click', this.mostrarPort.bind(this))

        /* botón arriba */
        document.addEventListener('scroll',
            this.scrollDetect.bind(this))
            this.btnTop.addEventListener('click', this.subir.bind(this))        
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
}

document.addEventListener('DOMContentLoaded', () => { new App()})

   /* <div id="div-top" class="btn-top hide-btn">
    <button id="btn-top" type="button">Top</button>
</div> */
