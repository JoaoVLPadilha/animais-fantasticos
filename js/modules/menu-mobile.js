import outsideClick from './outsideclick.js';

export default class MenuMobile {
    constructor(menuButton, menuList, events){

    if (events === undefined) this.event = ["touchstart"];
    else this.event = events;

    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);

    this.openMenu = this.openMenu.bind(this);
    }
    
    
    openMenu(){
        this.menuList.classList.add('activeList');
        this.menuButton.classList.add('activeMenu');
        outsideClick(this.menuList, this.event, () =>{
            console.log(this.menuList, this.event)
            this.menuList.classList.remove('activeList');
            this.menuButton.classList.remove('activeMenu');
        })
    }

    addMenuMobileEvents(){
        this.event.forEach(eventos => this.menuButton.addEventListener(eventos, this.openMenu))
    }

    init(){
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents(); 
        }
        return this
    }

}



