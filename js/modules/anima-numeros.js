export default function initAnimaNumeros() {

  function animaNumeros(){
    const numerosAnimais = document.querySelectorAll("[data-numero]");
    numerosAnimais.forEach((item) => {
    
      const quantidade = +item.innerText;
      const incremento = Math.floor(quantidade / 100);
      let start = 0;
      const timer = setInterval(() =>{
        start += incremento;
        item.innerHTML = start
        if (start > quantidade) {
          item.innerHTML = quantidade;
          clearInterval(timer)
        }
      }, 50 * Math.random())
    });
    
  }
  
  function handleMutation(mutation){
  
     if (mutation[0].target.classList.contains('ativo')) {
       observer.disconnect();
       animaNumeros();
     }
  }
  const observer = new MutationObserver(handleMutation);
  
  const observerTarget = document.querySelector('section.numeros')
  
  observer.observe(observerTarget, {attributes: true});
}

