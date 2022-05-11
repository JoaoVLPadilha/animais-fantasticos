export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addTabNavMenu(){
      this.tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => this.activeTab(index));
      });
    }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // Como activeTab recebe o parâmetro pelo index e então ativa
      // A classe css por meio desse valor index passado
      // Podemos passar o index 0 direto para ativar o primeiro texto
      this.activeTab(0)
      this.addTabNavMenu();
    }
  }
}
