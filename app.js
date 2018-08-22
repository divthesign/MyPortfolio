class App{
    constructor(){
        this.menuHam = document.querySelector('.change') 
        this.btnAbrirMenu = document.querySelector('.abrirMenu')
        this.menuDesp = document.querySelector('.menu-hide')
        this.btnAbrirPort = document.querySelector('.btn_mas')
        this.cajasPort = document.querySelector('.hidden')      

        
        

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
        this.btnAbrirPort.addEventListener('click', this.mostrarPort.bind(this))

        
    }
    mostrarMenu(){
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHam.classList.toggle('change')
    }
    mostrarPort(){
        this.cajasPort.classList.toggle('hidden')
    }
    
   
}

document.addEventListener('DOMContentLoaded', () => { new App()})
