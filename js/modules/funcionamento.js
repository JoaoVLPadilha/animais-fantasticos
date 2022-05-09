export default function initFuncionamento() {
const funcionamento = document.querySelector('[data-semana]')

// Pegamos o que está escrito no atributo HTML, transformamos em um array por meio do split
// Com isso, retorna então um array de strings, porém tem um macete 
// de usar o .map(Number) onde passamos o construtor Number e transforma todos os números String em Number mesmo
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

// const funcionamentoHorario = document.querySelector('[data-horario]')

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();
// const teste = [1,2,3,4,5].indexOf(5)
// let aberto;
const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

if (semanaAberta && horarioAberto) {
  funcionamento.classList.add('aberto');
}
}


