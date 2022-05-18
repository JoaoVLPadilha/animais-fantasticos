export default class Funcionamento {
  constructor(funcionamento){
    this.funcionamento = document.querySelector(funcionamento)
  }

  dadosFuncionamento(){
    // Pegamos o que está escrito no atributo HTML, transformamos em um array por meio do split
// Com isso, retorna então um array de strings, porém tem um macete 
// de usar o .map(Number) onde passamos o construtor Number e transforma todos os números String em Number mesmo
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto(){
    const semanaAberta = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto = (this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1]);

    return semanaAberta && horarioAberto;
  }


  ativaAberto(){
    if (this.estaAberto()) {
      this.funcionamento.classList.add('aberto');
    }
  }
    init(){
      if (this.funcionamento) {
        this.dadosFuncionamento()
        this.dadosAgora()
        this.ativaAberto();
      }
    }
  }


