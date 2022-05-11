export default class Modal {
  constructor(abrir, fechar, conteudo){
    this.botaoAbrir = document.querySelector(abrir);
    this.botaoFechar = document.querySelector(fechar);
    this.containerModal = document.querySelector(conteudo);

    this.toggleModal = this.toggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }
  
  toggleModal(event) {
    event.preventDefault();
    this.containerModal.classList.toggle("ativo");
  }
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  init(){
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.botaoAbrir.addEventListener("click", this.toggleModal);
      this.botaoFechar.addEventListener("click", this.toggleModal);
      this.containerModal.addEventListener("click", this.cliqueForaModal);
    }
  }
}
