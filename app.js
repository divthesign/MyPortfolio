class Menu {
    constructor() {
        console.log('hla');
        this.menuHam = document.querySelector('.change');
        this.btnAbrirMenu = document.querySelector('.abrirMenu');
        this.menuDesp = document.querySelector('.menu-hide');
        this.btnAbrirMenu.addEventListener('click', this.mostrarMenu.bind(this))
    };
    mostrarMenu() {
        this.menuDesp.classList.toggle('menu-hide');
        this.menuHam.classList.toggle('change')
        console.log(this.menuHam)
    }
}
class CerrarMenu{
    constructor(){
        this.link = document.querySelector('.menu-hide ul li a')
        console.log(this.link)
        this.linkPort = document.querySelector('#link-port')
        this.linkSkills = document.querySelector('#link-skills')
        this.menuDesp = document.querySelector('.menu-hide');
        this.menuHamOpen = document.querySelector('.change')
        this.link.addEventListener('click', this.collapseMenu.bind(this))
        this.linkPort.addEventListener('click', this.collapseMenuDos.bind(this))
        this.linkSkills.addEventListener('click', this.collapseMenuTres.bind(this))
    }
    collapseMenu(){
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHamOpen.classList.toggle('change')
        console.log(this.menuHamOpen)
    }
    collapseMenuDos(){
        console.log('collapse do funciona')
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHamOpen.classList.toggle('change')
    }
    collapseMenuTres(){
        console.log('collapse do funciona')
        this.menuDesp.classList.toggle('menu-hide')
        this.menuHamOpen.classList.toggle('change')
    }
}
new CerrarMenu()
class Portfolio {
    constructor() {
        this.btnAbrirPort = document.querySelector('.btn_mas');
        this.cajasPort = document.querySelectorAll('.hidden');
        this.btnAbrirPort.addEventListener('click', this.mostrarPort.bind(this))
    };
    mostrarPort() {
        console.log('hola');
        this.cajasPort.forEach((item) => {
            item.classList.toggle('hidden')
        })
    }
}
new Portfolio()
class Arriba {
    constructor() {
        this.btnTop = document.querySelector('#btn-top');
        this.divTop = document.querySelector('#div-top');
        this.header = document.querySelector('header');
        this.h1Header = document.querySelector('header h1');
        this.bajoHeader = document.querySelector('#bajo-header');
        document.addEventListener('scroll', this.scrollDetect.bind(this));
        this.btnTop.addEventListener('click', this.subir.bind(this))
    };
    scrollDetect(oE) {
        if (oE.target.scrollingElement.scrollTop > 20) {
            this.h1Header.classList.add('hide');
            this.bajoHeader.classList.add('bajo-header');
            this.bajoHeader.classList.remove('hide-scroll')
        }
        if (oE.target.scrollingElement.scrollTop > 100) {
            this.divTop.classList.remove('hide-scroll')
        } else {
            this.divTop.classList.add('hide-scroll')
        }
    };
    subir(oE) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
}
new Arriba()
class FadeDownUno {
    constructor() {
        window.addEventListener('scroll', this.scrollSection1.bind(this))
    };
    scrollSection1() {
        this.header = document.querySelector('header');
        this.scrollSection = document.querySelector('section');
        console.log(this.scrollSection);
        this.ypos = window.pageYOffset;
        if (this.ypos > 187) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
}
new FadeDownUno()
class FadeDownDos {
    constructor() {
        window.addEventListener('scroll', this.scrollSection1.bind(this))
    };
    scrollSection1() {
        this.header = document.querySelector('header');
        this.scrollSection = document.querySelector('.port');
        console.log(this.scrollSection);
        this.ypos = window.pageYOffset;
        if (this.ypos > 1437) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
}
new FadeDownDos()
class FadeDownTres {
    constructor() {
        window.addEventListener('scroll', this.scrollSection1.bind(this))
    };
    scrollSection1() {
        this.header = document.querySelector('header');
        this.scrollSection = document.querySelector('#skills');
        console.log(this.scrollSection);
        this.ypos = window.pageYOffset;
        if (this.ypos > 2687) {
            this.scrollSection.classList.remove('about')
        } else {
            this.scrollSection.classList.add('about')
        }
    }
}
new FadeDownTres
class Contacto {
    constructor() {
        this.btnContacto = document.querySelector('#btn-contacto');
        this.btnContacto.addEventListener('click', this.contacto.bind(this))
    };
    contacto() {
        this.sectionContacto = document.querySelector('#contactame', location.assign('#contactame'))
    }
}
new Contacto()

  
document.addEventListener('DOMContentLoaded', () => {
    new Menu()
})