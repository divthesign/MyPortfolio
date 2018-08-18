class App{
    constructor(){
        this.btnAbrirMenu = document.querySelector('.abrirMenu')
        this.menuDesp = document.querySelector('.menu-hide')
        this.btnWeb = document.querySelector('.contacto')

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
    }
    mostrarMenu(){
        this.menuDesp.classList.toggle('menu-hide')
    }
    mostrarEnlace(){
        
            this.btnWeb.location.assign("https://www.w3schools.com");
        
    }
}




document.addEventListener('DOMContentLoaded', () => { new App()})