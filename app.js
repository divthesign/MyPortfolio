class App{
    constructor(){
        this.menuHam = document.querySelector('.change') 
        this.btnAbrirMenu = document.querySelector('.abrirMenu')
        this.menuDesp = document.querySelector('.menu-hide')
        

        /* this.btnContacto = document.querySelector('#btn-contacto')
        this.btnMusigrama = document.querySelector('#btn-musigrama')
        this.btnBaby = document.querySelector('#btn-baby') */
        

        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
       

        /*this.btnContacto.addEventListener('click', this.openInNewTab.bind(this))
        this.btnMusigrama.addEventListener('click', this.openMusigrama.bind(this))
        this.btnBaby.addEventListener('click', this.openMusigrama.bind(this))  */
        
    }
    mostrarMenu(){
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHam.classList.toggle('change')
    }
    



   /*  openInNewTab() {
        let url = '#port'
        let win = window.open(url,  '_blank')
        win.location();
    } */

    /* openMusigrama(){
        let url = ''
        let win = window.open(url, '_blank')
        win.focus()
        if(this.btnMusigrama == this.btnMusigrama){
            url = 'http://www.musigrama.com'
        }
        if(btn == this.btnBaby){
            url = 'http://www.babyballet.es'
        }
        
    } */
   
}

document.addEventListener('DOMContentLoaded', () => { new App()})
