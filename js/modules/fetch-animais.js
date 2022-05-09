import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    const response = await fetch(url);
    const animaisJson = await response.json();
    const numerosGrid = document.querySelector(".numeros-grid");

    animaisJson.forEach((item) => {
      const divAnimal = createAnimal(item);
      numerosGrid.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  fetchAnimais("./animaisapi.json");
}
