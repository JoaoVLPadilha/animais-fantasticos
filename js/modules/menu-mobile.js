import outsideClick from './outsideclick.js';

export default function initMenuMobile() {
    const eventos = ['click', 'touchstart']
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    
    function openMenu(){
        menuList.classList.add('activeList');
        menuButton.classList.add('activeMenu');
        outsideClick(menuList, eventos, () =>{
            
            menuList.classList.remove('activeList');
            menuButton.classList.remove('activeMenu');
        })
    }
    // eventos.forEach( events=> menuButton.addEventListener(events,openMenu))
    
    menuButton.addEventListener('click',openMenu)

}

initMenuMobile()


