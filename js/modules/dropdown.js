import outsideClick from "./outsideclick.js";

export default function initDropdown(){

    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    dropdownMenus.forEach(menu =>{
        // Aqui preicsamo de 2 eventos, um mobile e um desktop
        // Para isso podemos adicionar duas linhas de addEventListener ou o método abaixo
        ['touchstart','click'].forEach(userEvent =>{
            menu.addEventListener(userEvent, handleClick)
        })
        // menu.addEventListener('touchstart', handleClick)
    })
    
    function handleClick(event) {
        event.preventDefault();
        console.log(event)
        // o this daqui vem do evento passado como menu.addEventListener, 
        // onde menu é cada item do nodeList vindo do querySelectorAll, nesse caso o li
        console.log(this)
        this.classList.add('active')
        outsideClick(this,['touchstart','click'], () => {
            console.log('ativou')
            this.classList.remove('active');
        })
    }
    
    
}

