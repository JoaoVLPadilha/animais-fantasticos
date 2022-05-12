export default class AnimaNumeros {
  constructor(numeros,observerTarget, observerClass){
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }


  static incrementarNumero(numero){
    const quantidade = +numero.innerText;
      const incremento = Math.floor(quantidade / 100);
      let start = 0;
      const timer = setInterval(() =>{
        start += incremento;
        numero.innerHTML = start
        if (start > quantidade) {
          numero.innerHTML = quantidade;
          clearInterval(timer)
        }
      }, 50 * Math.random())
  }

  animaNumeros(){
    this.numeros.forEach(item => this.constructor.incrementarNumero(item));
  }
  
  handleMutation(mutation){
     if (mutation[0].target.classList.contains(this.observerClass)) {

      this.observer.disconnect();
       this.animaNumeros();
     }
  }

  addMutationObserver(){
    this.observer = new MutationObserver(this.handleMutation);  
    this.observer.observe(this.observerTarget, {attributes: true});
  }

  init(){
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this;
  }
  
}

