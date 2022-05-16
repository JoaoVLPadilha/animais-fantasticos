import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  
  async function puxarAnimais() {
    const response = await fetch(url);
    const animaisJson = await response.json();
    animaisJson.forEach(item => preencherAnimais(item));
    animaAnimaisNumeros();
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros(){
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  puxarAnimais("./animaisapi.json");
}
